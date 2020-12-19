import { combineReducers } from 'redux'
import artistSelectReducer from './Reducer/ArtistSelectReducer'

const rootReducers = combineReducers({
    selectArtist: artistSelectReducer
})

export default rootReducers
