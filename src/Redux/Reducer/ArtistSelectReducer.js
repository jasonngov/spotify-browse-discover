import { SELECT_ARTIST } from '../Actions/ActionTypes'


// TODO: investigate initialState and logic to modify state in the reducers
// break logic into functions and call in SELECT_ARTIST
// possibly may have to divide actions into start, success, error...

const initialState = {
    artist: '',
    selected: false
}

const artistSelectReducer = (state = initialState, action) => {
    switch (action.type){
        case SELECT_ARTIST:
            return {
                artist: action.data.artist,
                selected: action.data.selected
            }
        default:
            return state
    }
}

export default artistSelectReducer