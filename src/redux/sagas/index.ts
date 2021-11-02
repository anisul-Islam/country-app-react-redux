import { all } from 'redux-saga/effects'

import countrySaga from './saga'

// root reducer which combines other reducers
// rootSaga is the base saga
//  It is the saga that gets passed to sagaMiddleware.run(rootSaga)
export default function* rootSaga() {
  // slice sagas - countrySaga
  yield all([countrySaga()])
}
