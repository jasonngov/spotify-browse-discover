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

      render() {
        const { quote, token} = this.state;
        return (
          <div className="Home" style={{'textAlign': 'center'}}>
            <SearchBar token={token} />
            <h1>{quote}</h1>
            <button onClick={this.handleClick}>Click Me</button>
            <br />
            <br />
          </div>
        )
      }
}

export default Welcome