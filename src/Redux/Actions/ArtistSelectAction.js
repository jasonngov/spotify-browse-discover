import { SELECT_ARTIST } from '../Actions/ActionTypes'

// action creator
// TODO: needs to be reshaped, actions return type and payload
export const selectArtist  = (data) => {
    return {
        type: SELECT_ARTIST,
        data: data // data will contain {artist, selected}
    }
}
