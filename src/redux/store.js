import { legacy_createStore as createStore,applyMiddleware} from 'redux'
import { rootReducer } from './rootreducers'
import createSagaMiddleware from 'redux-saga'
import productSaga from './productSaga'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(productSaga)

export default store