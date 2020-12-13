import axios from 'axios'

export default class SpotifyApi {
    static getUser =  (token) => {
        return axios.get('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        })
    }
    
    static getArtist = (token, search) => {
        return axios.get(`https://api.spotify.com/v1/search?query=${search}&offset=0&limit=5&type=artist`, {
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        })
    }
}
