import React, { Component } from 'react';
import axios from 'axios'
import './Home'

class Home extends Component {
  constructor (props) {
    super(props);

    this.state = {
      quote: '',
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
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa('9f3486f087bc420d92dcf8e96bbad9d6'+ ':' + '90cc9ba5a1344bff81af8876cf896dfb') //eslint-disable-line
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      
      this.setState({token: tokenResponse.data.access_token});
      console.log(tokenResponse.data.access_token)
    })
    this.getKanyeQuote();
  }

  componentDidUpdate () {

  }
  
  handleClick = () => {
    this.getKanyeQuote()
  }

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


  render() {
    const { quote } = this.state;
    return (
      <div className="Home" style={{textAlign: 'center'}}>
        <h1>{quote}</h1>
        <button onClick={this.handleClick}>Click Me</button>
        <br />
        <br />
        <button onClick={this.playMusic}>Play Kanye</button>
      </div>
    )
  }
}

export default Home;
