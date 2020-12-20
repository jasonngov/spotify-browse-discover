import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ArtistHeader.css'
import SpotifyApi from '../Api/SpotifyApi';

class ArtistHeader extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        const { artistInfo } = this.props;
        const { artist, genres, followers } = artistInfo

        console.log(artistInfo)

        const onHover = () => {
            const { artistInfo, token } = this.props
        
            // get top song from artist
            SpotifyApi.getTopTracks(token, artistInfo.id)
            .then(response => {
                const tracks = response.data.tracks;
                const url = tracks[0].preview_url;
    
                var player = document.getElementById("player")
                player.src = url ? url : ""
    
                player.play()
            })
            .catch(e => {
                console.log(e)
            })
        }

        const onStop = () => {

            var player = document.getElementById("player")
            player.pause()
            player.currentTime = 0
            console.log("Stop song.")
        }

        return (
            // TODO: autosize the image
            // add album cover on the right?
            <div className='artistHeader'>
                <div className='artistImage' style={{'display': 'inline-block', 'float': 'left'}}>
                    <img src={artistInfo.images[0].url} alt={artist} width='133px' height='133px' 
                    style={{borderRadius: '50%', marginLeft: '50px', marginTop: '50px'}}
                    onMouseOver={onHover}
                    onMouseOut={onStop}
                    />
                </div>
                <div className='artistContent' style={{'display': 'inline-block', 'float': 'left', textAlign: "left"}}>
                    <h2 style={{marginLeft: '50px'}}>{artist}</h2>
                    <p style={{marginLeft: '50px'}}>{genres.join(", ")}</p>
                    <p style={{marginLeft: '50px'}}>{followers.toLocaleString()} followers</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    artistInfo: state.selectArtist.artistData
})

export default connect(mapStateToProps, null)(ArtistHeader)