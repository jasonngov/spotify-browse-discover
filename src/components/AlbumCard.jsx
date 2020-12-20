import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpotifyApi from '../Api/SpotifyApi'
import './ArtistHeader.css'

class AlbumCard extends Component {    
    render() {
        const { albumInfo, token } = this.props; 
        const imageUrl = albumInfo.albumImages[0].url;
        const albumId = albumInfo.albumId

        const onHover = () => {
            // get song from artist
            SpotifyApi.getTracks(token, albumId)
            .then(response => {
                const url = response.data.items[0].preview_url;

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
        }

        return (
            <div className={albumInfo.albumName} style={{'display': 'inline-block', 'float': 'left', 'width':'133px', 'height':'133px'}}>
                <a href={albumInfo.albumExternalUrl} target="_blank" rel="noreferrer" style={{'height':'0px'}}>
                    <img src={imageUrl} alt={albumInfo.albumName} width='133px' height='133px'
                    object-fit='fill'
                    style={{margin: '0 auto'}}
                    onMouseOver={onHover}
                    onMouseOut={onStop}
                    />
                </a>
            </div>   
        )
    }

}

const mapStateToProps = (state) => ({
    artistInfo: state.selectArtist.artistData
})

export default connect(mapStateToProps, null)(AlbumCard)