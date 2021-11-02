// Action types
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const COUNTRY_GET_REQUEST = 'COUNTRY_GET_REQUEST'
export const COUNTRY_GET_SUCCESS = 'COUNTRY_GET_SUCCESS'
export const COUNTRY_GET_FAILURE = 'COUNTRY_GET_FAILURE'

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}

export type CountryGetRequest = {
  type: typeof COUNTRY_GET_REQUEST
}

export type Data = {
  countries: Country[]
}
export type CountryGetSuccess = {
  type: typeof COUNTRY_GET_SUCCESS
  payload: Data
}

export type ErrorMessage = {
  error: unknown
}
export type CountryGetFailure = {
  type: typeof COUNTRY_GET_FAILURE
  payload: ErrorMessage
}

// Use this union in reducer
export type CountryActions =
  | AddCountryAction
  | RemoveCountryAction
  | CountryGetRequest
  | CountryGetSuccess
  | CountryGetFailure

export type Languages = {
  name: string
}

export type Country = {
  flag: string
  name: string
  languages: Languages[]
  population: number
  region: string
}

export type CountryState = {
  inCart: Country[]
}
export type ServerResponse = {
  data: Country[]
  loading: boolean
  error: string | null | unknown
}

export type AppState = {
  country: CountryState
}
export type RootState = {
  country: Country
  data: ServerResponse
}

export type Order = 'asc' | 'desc'

export type Column = {
  id: 'flag' | 'name' | 'population' | 'languages' | 'region' | 'actions'
  label: string | ''
  minWidth?: number
  align?: 'right'
}

export interface BaseAction {
  type: string
  payload?: ServerResponse
}
