import React, { Component } from 'react'
import { connect } from 'react-redux'
import AlbumCard from './AlbumCard'
import SpotifyApi from '../Api/SpotifyApi';

class ArtistCollections extends Component {
    constructor (props) {
        super (props)

        this.state = {
            albumData: null
        }
    }
    
    componentDidMount() {
        const { token, artistInfo } = this.props

        SpotifyApi.getAlbums(token, artistInfo.id)
        .then(response => {
            const albums = response.data.items
            const albumObject = albums.map(album => {
                const albumData = {
                    albumId: album.id,
                    albumImages: album.images,
                    albumName: album.name,
                    albumTracks: album.total_tracks,
                }
                return albumData;
            })
            this.setState({albumData: albumObject})
        })    
    }

    componentDidUpdate(prevProps) {
        const { token, artistInfo } = this.props

        // If user searches for another artist, component compares previous props
        if (this.props.artistInfo.artist !== prevProps.artistInfo.artist) {
            SpotifyApi.getAlbums(token, artistInfo.id)
            .then(response => {
                const albums = response.data.items
                const albumObject = albums.map(album => {
                    const albumData = {
                        albumId: album.id,
                        albumImages: album.images,
                        albumName: album.name,
                        albumTracks: album.total_tracks,
                    }
                    return albumData;
                })
                this.setState({albumData: albumObject})
            })        
        }
    }

    render() {
        const { albumData } = this.state;
        const { token } = this.props;
        return (
            <div>
                {albumData && albumData.map(album => <AlbumCard albumInfo={album} token={token}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    artistInfo: state.selectArtist.artistData
})

export default connect(mapStateToProps, null)(ArtistCollections)