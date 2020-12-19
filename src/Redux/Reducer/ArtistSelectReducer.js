import { SELECT_ARTIST } from '../Actions/ActionTypes'
import cloneDeep from 'lodash-es/cloneDeep'

// TODO: investigate initialState and logic to modify state in the reducers
// break logic into functions and call in SELECT_ARTIST
// possibly may have to divide actions into start, success, error...

const initialState = {
    artistData: null
}

const artistSelectStore = (state, action) => {
    const newState = cloneDeep(state)
    const { data } = action

    newState.artistData = data

    return newState;
}


const artistSelectReducer = (state = initialState, action) => {
    switch (action.type){
        case SELECT_ARTIST:
            return artistSelectStore(state, action)
        default:
            return state
    }
}

export default artistSelectReducer