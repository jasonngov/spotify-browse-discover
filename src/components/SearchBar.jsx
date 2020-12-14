import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SpotifyApi from '../Api/SpotifyApi'
import '../SearchBar.css'
class SearchBar extends Component {
    constructor (props) {
        super(props)

        this.state = {
            search: '',
            suggestions: [],
            selected: false
        };
    }

    handleChange = (e) => {
        const { token } = this.props
        const search = e.target.value

        if (token) {
            if (search.length > 0) {
                SpotifyApi.getArtist(token, search)
                .then(response => {
                    const data = response.data.artists.items
                    const names = data.map((artist) => artist.name)
                    this.setState({suggestions: names, selected: false})
                })
                this.setState({search: search})
            }
            else {
                this.setState({search: "", suggestions: [],selected: false})
            }
        } 
        else {
            alert("Invalid token. Please direct to localhost:8080/login")
        }
    }

    renderSuggestions = () => {
        const { suggestions } = this.state
        if (suggestions.length > 0) {
            return (
                <ul>
                    {suggestions.map(artist => <li onClick={() => {this.suggestionSelected(artist)}}>{artist}</li>)}
                </ul>
            )
        }
    }

    suggestionSelected = (value) => {
        this.setState({
            search: value,
            suggestions: [],
            selected: true
        })
    }

    render () {
        return (
            <div className="SearchBar">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={this.state.search}
                    onChange={this.handleChange}
                    style={{'width':'250px', 'margin-top': '10px'}}
                />
                {this.renderSuggestions()}
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