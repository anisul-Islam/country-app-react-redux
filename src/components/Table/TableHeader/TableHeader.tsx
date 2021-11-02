import React from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core';
import { columns } from '../constants/ColumnNames';

const TableHeader = (props: any) => {
  const { order, orderBy, handleRequestSort } = props;
  const createSortHandler = (
    property: any,
  ) => (
    event: React.MouseEvent<unknown>
  ) => {
    handleRequestSort(event, property);
  }
  return (
    <TableHead>
      <TableRow>
        {columns.map((item, index) =>
          <TableCell key={item.label} >
            <TableSortLabel
              active={orderBy === item.id}
              direction={orderBy === item.id ? order : 'asc'}
              onClick={createSortHandler(item.id)}
            >
              {item.label}
            </TableSortLabel>
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  )
}

export default TableHeader
