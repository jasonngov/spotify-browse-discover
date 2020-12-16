import { createStore } from 'redux'
import rootReducer from './rootReducer'

// TODO: add composeWithDevTools to applyMiddleware, explore sagas?
const store = createStore(rootReducer)

export default store