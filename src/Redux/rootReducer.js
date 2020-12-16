import { combineReducers } from 'redux'
import artistSelectReducer from './Reducer/ArtistSelectReducer'

const rootReducers = combineReducers({
    artistSelect: artistSelectReducer
})

export default rootReducers
