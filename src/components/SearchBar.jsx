import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SpotifyApi from '/Users/jasonngov/Desktop/spotify-api/src/Api/SpotifyApi.js'

class SearchBar extends Component {
    constructor (props) {
        super(props)

        this.state = {
            search: '',
            dropdown: {}
        };
    }

    updateInput = (e) => {
        const { token } = this.props
        const { search, dropdown } = this.state 
        this.setState(
            {
                search: e.target.value
            }
        )

        if (token && search.length > 0) {
            SpotifyApi.getArtist(token, search)
            .then(response => {
                const artists = response.data.artists.items
                artists.map((artist) => {
                    // TODO: store artists in state
                    /*
                        id: artist.id,
                        genres: artist.genres > 0 ? artist.genres : '',
                        followers: artist.followers
                    */
                   console.log(artist.name)
                })
            })
            console.log("-------------------")
        }
    }
    render () {
        return (
            <input 
            type="text" 
            placeholder="Search.." 
            value={this.state.search}
            onChange={this.updateInput}
            style={{'margin': '10px'}}
            />
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