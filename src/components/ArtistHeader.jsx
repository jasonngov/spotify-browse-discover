import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ArtistHeader.css'

class ArtistHeader extends Component {
    render() {
        const { artistInfo } = this.props;
        const { artist, genres, followers } = artistInfo

        console.log(artistInfo)

        const onHover = () => {
            console.log("Play song.")
            // MAKE SPOTIFY API CALL HERE TO PLAY URI 
        }

        return (
            // TODO: autosize the image
            // add album cover on the right?
            <div className='artistHeader'>
                <div className='artistImage' style={{'display': 'inline-block', 'float': 'left'}}>
                    <img src={artistInfo.images[0].url} alt={artist} width='133px' height='133px' 
                    style={{borderRadius: '50%', marginLeft: '50px', marginTop: '50px'}}
                    onMouseOver={onHover}
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