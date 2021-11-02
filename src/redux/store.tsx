import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { AppState } from '../types'
import createRootReducer from './reducers'
import rootSaga from './sagas/index'

const initState: AppState = {
  country: {
    inCart: [],
  },
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  let composeEnhancers = compose

  const cartData = localStorage.getItem('inCart')
  const persistedState: AppState = {
    ...initialState,
    country: { inCart: cartData === null ? [] : JSON.parse(cartData) },
  }

  const store = createStore(
    createRootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)
  return store
}
