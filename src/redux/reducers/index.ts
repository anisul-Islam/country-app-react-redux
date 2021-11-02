import { combineReducers } from 'redux'

import country from './country'
import fetchReducer from './fetchReducer'

const createRootReducer = combineReducers({
  country: country,
  data: fetchReducer,
})

export default createRootReducer
