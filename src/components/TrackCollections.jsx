import React, { Component } from 'react'
import { connect } from 'react-redux'
import TrackCard from './TrackCard'
import SpotifyApi from '../Api/SpotifyApi';
import Spinner from 'react-bootstrap/Spinner'

class TrackCollections extends Component {
    constructor (props) {
        super (props)

        this.state = {
            trackData: null,
            isLoading: false
        }
    }
    
    componentDidMount() {
        const { token, artistInfo } = this.props

        SpotifyApi.getTopTracks(token, artistInfo.id)
        .then(response => {
            const tracks = response.data.tracks;
            const trackObject = tracks.map(track => {
                const trackData = {
                    trackName: track.name,
                    trackImages: track.album.images,
                    trackUrl: track.preview_url,
                    trackExternalUrl: track.external_urls.spotify
                }
                return trackData;
            })
            const unique = trackObject.splice(0, 5)
            this.setState({trackData: unique})
        })    
    }


    componentDidUpdate(prevProps) {
        const { token, artistInfo } = this.props

        // If user searches for another artist, component compares previous props
        if (this.props.artistInfo.artist !== prevProps.artistInfo.artist) {
            this.setState({isLoading: true})
            SpotifyApi.getTopTracks(token, artistInfo.id)
            .then(response => {
                const tracks = response.data.tracks
                const trackObject = tracks.map(track => {
                    const trackData = {
                        trackName: track.name,
                        trackImages: track.album.images,
                        trackUrl: track.preview_url,
                        trackExternalUrl: track.external_urls.spotify
                    }
                    return trackData;
                })

                const unique = trackObject.splice(0, 5)
                this.setState({trackData: unique, isLoading: false})
            })  
        }
    }

    render() {
        const { trackData, isLoading } = this.state;
        return (
            <div style={{marginLeft: '50px', marginRight: '25px', height: '100px'}}>
                {trackData?.length > 0 && <h3 style={{textAlign: 'left'}}>Top Tracks</h3>}
                {trackData?.length > 0 && (isLoading ?  <Spinner animation="border" role="status" /> : trackData.map(track => <TrackCard trackInfo={track}/>)) }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    artistInfo: state.selectArtist.artistData
})

export default connect(mapStateToProps, null)(TrackCollections)