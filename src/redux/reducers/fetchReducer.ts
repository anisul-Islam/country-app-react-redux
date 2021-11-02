import {
  ServerResponse,
  CountryActions,
  COUNTRY_GET_REQUEST,
  COUNTRY_GET_FAILURE,
  COUNTRY_GET_SUCCESS,
} from '../../types'

const initialStage: ServerResponse = {
  data: [],
  loading: false,
  error: null,
}

const fetchReducer = (state = initialStage, action: CountryActions) => {
  switch (action.type) {
    case COUNTRY_GET_REQUEST:
      return { ...state, loading: true }
    case COUNTRY_GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.countries }
    case COUNTRY_GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error }
    default:
      return state
  }
}

export default fetchReducer
