import {
  Country,
  CountryState,
  CountryActions,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
} from '../../types'

const countryCartInitialState = {
  inCart: [],
}

export default function country(
  state: CountryState = countryCartInitialState,
  action: CountryActions
): CountryState {
  switch (action.type) {
    case ADD_COUNTRY: {
      const { country } = action.payload
      localStorage.setItem('inCart', JSON.stringify([...state.inCart, country]))
      return { ...state, inCart: [...state.inCart, country] }
    }
    case REMOVE_COUNTRY: {
      const { country } = action.payload
      let index = state.inCart.findIndex(
        (item: Country) => item.name === country.name
      )
      if (index >= 0) {
        state.inCart.splice(index, 1)
        localStorage.setItem('inCart', JSON.stringify([...state.inCart]))
        return { ...state, inCart: [...state.inCart] }
      }
      return state
    }

    default:
      return state
  }
}
