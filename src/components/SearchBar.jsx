import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SpotifyApi from '/Users/jasonngov/Desktop/spotify-api/src/Api/SpotifyApi.js'

class SearchBar extends Component {
    constructor (props) {
        super(props)

        this.state = {
            search: '',
            artists: []
        };
    }

    updateInput = (e) => {
        const { token } = this.props
        const { search, artists } = this.state 
        this.setState(
            {
                search: e.target.value
            }
        )

        if (token && search.length > 0) {
            SpotifyApi.getArtist(token, search)
            .then(response => {
                const data = response.data.artists.items
                const names = data.map((artist) => artist.name)
                this.setState(
                    {artists: names}
                )

             })
        }
        console.log(artists)
    }
    render () {
        const { artists } = this.state

        return (
            <div className="dropdown">
                <input 
                    type="text" 
                    placeholder="Search.." 
                    value={this.state.search}
                    onChange={this.updateInput}
                    style={{'margin': '10px'}}
                />
            </div>
        )
    }
}

SearchBar.propTypes = {
    token: PropTypes.string.isRequired
}

SearchBar.defaultProps = {
    token: ''
}

export default SearchBar