import React, { useState, useContext } from 'react'
import {
  Table,
  TableContainer,
  TableRow,
  TablePagination,
  TableCell,
  TableBody,
  Paper,
} from '@material-ui/core'
import { useDispatch } from 'react-redux'

import styles from './TableContent.module.css'
import TableHeader from '../TableHeader/TableHeader'
import { Order, Country, ServerResponse } from '../../../types'
import { columns } from '../constants/ColumnNames'
import { addCountry } from '../../../redux/actions/country'
import { getComparator, stableSort } from './SortingFunctions'
import selectorData from '../../FetchStoreData'
import { themeContext } from '../../../theme/ThemeContext'

const TableContent = (props: ServerResponse) => {
  const [theme, setTheme] = useContext(themeContext)
  const dispatch = useDispatch()
  const country = selectorData()
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState('flag')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  let themeStyle = {
    backgroundColor: theme && theme.backgroundColor,
    color: theme && theme.textColor,
  }
  let data = country.map((item) => item.name)

  const getSelectedData = (flag: string, name: string) => {
    const country: Country = {
      flag: flag,
      name: name,
    }
    dispatch(addCountry(country))
  }
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: any
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrderBy(property)
    setOrder(isAsc ? 'desc' : 'asc')
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const tableBody = stableSort(props.data, getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row) => {
      return (
        <TableRow hover key={row.name}>
          {columns.map((column) => {
            const value = row[column.id]
            return column.id === 'flag' ? (
              <TableCell key={column.id} align={column.align}>
                <img
                  src={row.flag}
                  alt="flag"
                  style={{
                    height: '2.5rem',
                    width: '2.5rem',
                    borderRadius: '50%',
                  }}
                />
              </TableCell>
            ) : column.id === 'languages' ? (
              <TableCell key={column.id} align={column.align}>
                <ul
                  style={{
                    paddingLeft: 0,
                    listStylePosition: 'inside',
                  }}
                >
                  {row.languages.map((item) => {
                    return <li key={item.name}>{item.name}</li>
                  })}
                </ul>
              </TableCell>
            ) : column.id === 'actions' ? (
              <TableCell key={column.id} align={column.align}>
                <button
                  className={styles.btn}
                  style={themeStyle}
                  disabled={
                    data.findIndex((item) => item === row['name']) !== -1
                  }
                  onClick={() => {
                    getSelectedData(row['flag'], row['name'])
                  }}
                >
                  Add Country
                </button>
              </TableCell>
            ) : (
              <TableCell key={column.id} align={column.align}>
                {value}
              </TableCell>
            )
          })}
        </TableRow>
      )
    })

  const tablePagination = (
    <TablePagination
      rowsPerPageOptions={[10, 25, 50, 100]}
      component="div"
      count={props.data.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )

  return (
    <Paper style={{ marginTop: '5rem', minHeight: '95vh' }}>
      <TableContainer key="mainContent">
        <Table>
          <TableHeader
            order={order}
            orderBy={orderBy}
            handleRequestSort={handleRequestSort}
            key="header"
          />
          <TableBody key="tableBody">{tableBody}</TableBody>
        </Table>
      </TableContainer>
      {tablePagination}
    </Paper>
  )
}

export default TableContent
