import React, { Component } from 'react'
import axios from 'axios'
import SpotifyApi from '/Users/jasonngov/Desktop/spotify-api/src/Api/SpotifyApi.js'
import SearchBar from './SearchBar'
import query from 'query-string'

class Welcome extends Component {
    constructor (props) {
        super(props);
    
        this.state = {
          quote: '',
          name: '',
          token: ''
        }
      }
      getKanyeQuote = () => {
        axios.get('https://api.kanye.rest')
        .then(response => {
          this.setState({quote:response.data.quote})
        })
        .catch(e => {
          console.log(e.messsage)
        })
      }
    
      componentDidMount() {
        let token = query.parse(window.location.search).access_token
        SpotifyApi.getUser(token).then(response => {this.setState({name: response.data.display_name, token: token})})

        this.getKanyeQuote();
      }
    
      componentDidUpdate () {
      }
      
      handleClick = () => {
        this.getKanyeQuote()
      }
    
      /*
      *
      * Currently uses axios to get "Graduation" album
      * The configurations in 26-30 and 55-57 can be refactored into a config file
      * 
      * TODO: generate list of Kanye albums, display in library, play on hover
      */
    
      playMusic = () => {
        axios('https://api.spotify.com/v1/albums?ids=5fPglEDz9YEwRgbLRvhCZy', {
          headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Bearer ' + `${this.state.token}` // eslint-disable-line
          },
          method: 'GET'
        })
        .then(albumResponse => {
          const name = albumResponse.data.albums[0].name
          const url = albumResponse.data.albums[0].external_urls.spotify
          console.log(`Playing ${name}...`)
          console.log(`Listen on ${url}`)
        })
        .catch(e => {
          console.log(e.message)
        })
      }
    
    
      // TODO: add player to automatically play music in the background
      render() {
        const { quote, token} = this.state;
        return (
          <div className="Home" style={{textAlign: 'center'}}>
            <SearchBar token={token} />
            <h1>{quote}</h1>
            <button onClick={this.handleClick}>Click Me</button>
            <br />
            <br />
            <button onClick={this.playMusic}>Play Kanye</button>
          </div>
        )
      }
}

export default Welcome