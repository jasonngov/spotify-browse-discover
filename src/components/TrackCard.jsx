import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ArtistHeader.css'

class TrackCard extends Component {    
    render() {
        const { trackInfo } = this.props; 
        const imageUrl = trackInfo.trackImages[0].url;

        const onHover = () => {
            const url = trackInfo.trackUrl;

            var player = document.getElementById("player")
            player.src = url ? url : ""

            player.play()
        }

        const onStop = () => {
            var player = document.getElementById("player")
            player.pause()
            player.currentTime = 0
        }

        return (
            <div className={trackInfo.trackName} style={{'display': 'inline-block', 'float': 'left', 'width':'133px', 'height':'133px'}}>
                <a href={trackInfo.trackExternalUrl} target="_blank" rel="noreferrer" style={{'height':'0px'}}>
                    <img src={imageUrl} alt={trackInfo.trackName} width='133px' height='133px'
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

export default connect(mapStateToProps, null)(TrackCard)