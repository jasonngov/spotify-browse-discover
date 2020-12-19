import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectArtist } from '../Redux/Actions/ArtistSelectAction'
import SpotifyApi from '../Api/SpotifyApi'
import './SearchBar.css'
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
        const { token, dispatchSelectArtist } = this.props
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
                dispatchSelectArtist(null)
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
        const { dispatchSelectArtist } = this.props;

        this.setState({
            search: value,
            suggestions: [],
            selected: true
        })

        // dispatch action here to store artist name in redux
        const data = {value: value, selected: true}
        dispatchSelectArtist(data)
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

const mapStateToProps = (state) => {
    
}

const mapDispatchToProps = (dispatch) => ({
    dispatchSelectArtist: (data) => dispatch(selectArtist(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)