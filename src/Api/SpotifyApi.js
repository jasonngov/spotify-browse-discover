import axios from 'axios'

export default class SpotifyApi {
    static getUser =  (token) => {
        return axios.get('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        })
    }
}
