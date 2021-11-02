import {
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  CountryActions,
  Country,
  Data,
  ErrorMessage,
  COUNTRY_GET_REQUEST,
  COUNTRY_GET_FAILURE,
  COUNTRY_GET_SUCCESS,
  CountryGetRequest,
  CountryGetSuccess,
  CountryGetFailure,
} from '../../types'

export function addCountry(country: Country): CountryActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      country,
    },
  }
}

export function removeCountry(country: Country): CountryActions {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      country,
    },
  }
}

export const countryGetRequest = (): CountryGetRequest => ({
  type: COUNTRY_GET_REQUEST,
})

export const countryGetSuccess = (payload: Data): CountryGetSuccess => ({
  type: COUNTRY_GET_SUCCESS,
  payload,
})

export const countryGetFailure = (
  payload: ErrorMessage
): CountryGetFailure => ({
  type: COUNTRY_GET_FAILURE,
  payload,
})
