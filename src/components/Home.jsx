import React, { Component } from 'react';
import './Home'

class Home extends Component {
  render() {
    return (
      <button 
      onClick={() => window.location='http://localhost:8080/login'}
      style={{'margin-left': '20px', 'margin-top': '20px', 'font-size': '25px'}}
      >
      Sign into Spotify
      </button>
    )
  }
}

export default Home;
