import { SELECT_ARTIST } from '../Actions/ActionTypes'

// action creator
// TODO: needs to be reshaped, actions return type and payload
export const selectArtist  = (artist, selected) => {
    return {
        type: SELECT_ARTIST,
        data: {
            artist: artist,
            selected: selected
        }
    }
}
