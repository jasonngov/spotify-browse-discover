import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpotifyApi from '/Users/jasonngov/Desktop/spotify-api/src/Api/SpotifyApi.js'
import SearchBar from './SearchBar'
import ArtistHeader from './ArtistHeader';
import TrackCollections from './TrackCollections';
import ArtistCollection from './ArtistCollections';
import query from 'query-string'

class Welcome extends Component {
    constructor (props) {
        super(props);
    
        this.state = {
          token: ''
        }
      }
      componentDidMount() {
        let token = query.parse(window.location.search).access_token
        SpotifyApi.getUser(token).then(response => {this.setState({name: response.data.display_name, token: token})})

        console.log(token)
      }
    
      render() {
        const { token} = this.state;
        const { artistInfo } = this.props;

        return (
          <div className="Home" style={{'textAlign': 'center'}}>
              <SearchBar token={token} />
              {artistInfo && <ArtistHeader token={token}/>}
              {artistInfo && <TrackCollections token={token}/>}
              {artistInfo && <ArtistCollection token={token}/>}
          </div>
        )
      }
}

const mapStateToProps = (state) => ({
  artistInfo: state.selectArtist.artistData
})

export default connect(mapStateToProps, null)(Welcome)