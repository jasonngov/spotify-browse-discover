import React, { Component } from 'react';
import axios from 'axios'
import './Home'

class Home extends Component {
  constructor (props) {
    super(props);

    this.state = {
      quote: ''
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
    this.getKanyeQuote();
  }

  handleClick = () => {
    this.getKanyeQuote()
  }

  render() {
    const { quote } = this.state;
    return (
      <div className="Home" style={{textAlign: 'center'}}>
        <h1>{quote}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default Home;
