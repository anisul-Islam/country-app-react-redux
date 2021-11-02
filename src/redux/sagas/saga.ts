import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { countryGetFailure, countryGetSuccess } from '../actions/country'
import { COUNTRY_GET_REQUEST, Country } from '../../types'

const baseURL = 'https://restcountries.com/v2/all'
const getCountryData = () => axios.get<Country[]>(baseURL)

function* fetchCountryHandler() {
  try {
    const response = yield call(getCountryData)
    yield put(countryGetSuccess({ countries: response.data }))
  } catch (e) {
    yield put(countryGetFailure({ error: e }))
  }
}

function* countrySaga() {
  yield takeLatest(COUNTRY_GET_REQUEST, fetchCountryHandler)
}

export default countrySaga
