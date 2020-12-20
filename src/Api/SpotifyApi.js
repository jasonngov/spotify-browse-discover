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

    static getTopTracks = (token, artistId) => {
        return axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        })
    }

    static getAlbums = (token, artistId) => {
        return axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=30`, {
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        })
    }

    static getTracks = (token, albumId) => {
        return axios.get(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        })
    }
 }
