import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { countryGetRequest } from '../redux/actions/index'
import { RootState, Country } from '../types'

//custom component
import NavBar from '../components/layout/navbar/NavBar'
import TableContent from '../components/Table/TableContent/TableContent'

const createData = (
  flag: string,
  name: string,
  population: number,
  languages: string[],
  region: string
) => {
  return { flag, name, population, languages, region }
}

const Home = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState<string>('')
  const { data, loading, error } = useSelector((state: RootState) => state.data)

  useEffect(() => {
    dispatch(countryGetRequest())
  }, [dispatch])

  const rows = data.map((res) =>
    createData(
      res.flag,
      res.name,
      res.population,
      res.languages.map((res) => res),
      res.region
    )
  )

  const serachValueHandler = (searchValue: string) => {
    setSearchValue(searchValue)
  }
  const search = (rows: Country[]) => {
    return rows.filter(
      (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    )
  }

  const homePageTableContent = loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <TableContent data={search(rows)} />
  )

  return (
    <React.Fragment>
      <NavBar onSearchValue={serachValueHandler} />
      {homePageTableContent}
    </React.Fragment>
  )
}

export default Home
