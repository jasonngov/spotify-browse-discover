import React, { Component } from 'react'
import { connect } from 'react-redux'
import AlbumCard from './AlbumCard'
import SpotifyApi from '../Api/SpotifyApi';
import Spinner from 'react-bootstrap/Spinner'

class ArtistCollections extends Component {
    constructor (props) {
        super (props)

        this.state = {
            albumData: null,
            isLoading: false
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
                    albumExternalUrl: album.external_urls.spotify
                }
                return albumData;
            })

            // TODO: continue reducing # of repeated albums
            const unique = albumObject
            .map(e => e['albumName'])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(obj=> albumObject[obj])
            .map(e => albumObject[e]);

            this.setState({albumData: unique})
        })    
    }

    componentDidUpdate(prevProps) {
        const { token, artistInfo } = this.props

        // If user searches for another artist, component compares previous props
        if (this.props.artistInfo.artist !== prevProps.artistInfo.artist) {
            this.setState({isLoading: true})
            SpotifyApi.getAlbums(token, artistInfo.id)
            .then(response => {
                const albums = response.data.items
                const albumObject = albums.map(album => {
                    const albumData = {
                        albumId: album.id,
                        albumImages: album.images,
                        albumName: album.name,
                        albumTracks: album.total_tracks,
                        albumExternalUrl: album.external_urls.spotify
                    }
                    return albumData;
                })

            // TODO: continue reducing # of repeated albums
            const unique = albumObject
            .map(e => e['albumName'])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(obj=> albumObject[obj])
            .map(e => albumObject[e]);

            this.setState({albumData: unique, isLoading: false})
        })        
    }
}

    render() {
        const { albumData, isLoading } = this.state;
        const { token } = this.props;

        return (
            <div style={{marginLeft: '50px', marginRight: '25px', marginTop: '100px'}}>
                {albumData?.length > 0 && <h3 style={{textAlign: 'left'}}>Albums</h3>}
                {albumData?.length > 0 && (isLoading ? <Spinner animation="border" role="status" /> : albumData.map(album => <AlbumCard albumInfo={album} token={token}/>))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    artistInfo: state.selectArtist.artistData
})

export default connect(mapStateToProps, null)(ArtistCollections)