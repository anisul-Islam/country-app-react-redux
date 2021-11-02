import { useSelector } from 'react-redux'
import { AppState } from '../types'

const FetchStoreData = () => {
  const countries = useSelector((state: AppState) => state.country.inCart)
  return countries
}

export default FetchStoreData
