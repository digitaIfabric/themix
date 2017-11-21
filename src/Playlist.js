import React, { Component } from 'react';
import './Playlist.css';
import uuid from 'uuid/v4';
import axios from 'axios';
import queryString from 'query-string';
class Playlist extends Component {
    constructor(props){
        super(props);
        this.state = {
            accessToken: queryString.parse(this.props.location.search),
            playlists: [],
            tracks: []
        }
    }

    componentDidMount(){

        // Getting the users playlists
        const accessToken = this.state.accessToken.access_token;
        const options = {headers: {'Authorization': 'Bearer ' + accessToken}, json: true}
        let playlists = axios.get(`https://api.spotify.com/v1/users/digital-fabric/playlists`, options)
            .then((res)=>{
                console.log(res.data.items);
                this.setState({playlists: res.data.items})
            })
    }

    // Request for the playlists tracks and post to the mix playlists
    getTracks = (playlistID) => {
        const accessToken = this.state.accessToken.access_token;
        const options = {headers: {'Authorization': 'Bearer ' + accessToken}, json: true}
        axios.get(`https://api.spotify.com/v1/users/digital-fabric/playlists/${playlistID}/tracks`, options)
            .then((res) => {
                console.log(res.data.items);
                this.setState({tracks: res.data.items})
            })





        //postTracks = () =>
        // const options =
        // axios.post(https://api.spotify.com/v1/users/digital-fabric/playlists/2M3kZY1t1vocCub719j2qR/tracks?position=5&uris=spotify%3Atrack%3A6X5OFBbrsHRsyO1zP7udgr`,options)
        //     .then((res) => {
        //         console.log(res.data.items);
        //         this.setState({tracks: res.data.items})
        //     })
        // this.state.tracks[0].uri


    }

    postTracks = () => {
        const accessToken = this.state.accessToken.access_token;
        const accessToken2 = 'BQCXSOOmIHi8ulBgII9SqCHXGwkI2uOmd8nfl4myBb8kSTOniM5vlTbCwiv2h66emCpZpwb_cFMvN-5YCQY2PGOKhJzJxPwDruGe-RM6QT0gyWimZPvEXPcTv5PqI4-JhkByO4lXTXS5rWqPRYlHIg4e9HdwUJpVuXD7FX4lr3IfHtq1JeY5t_UqZdRRb4saOtriqH2mu_cliCk55CNEgjTzCOCia4_Uu9NdMq1UOy5gxk_dtDU9hpox-kNIUd5It346VGfo9dl';
        const uri = 'spotify%3Atrack%3A22nyEAEM29tcBRhukR089b';
        // const options = {headers: {'Authorization': 'Bearer ' + accessToken}, json: true}
        axios.post(`https://api.spotify.com/v1/users/digital-fabric/playlists/2M3kZY1t1vocCub719j2qR/tracks?uris=${uri}`, {headers: {'Authorization': 'Bearer ' + accessToken2}, json: true})
            .then((res) => {
                console.log('posted to playlist')
            })
            .catch((err) => {
                console.log(err);
            })
    }


    render() {
        // This if handles the empty array of playlists at first
        let { playlists = undefined } = this.state;
        if(playlists){
            return (
                <div>
                  <h1 className="head">Choose your Playlist</h1>
                    { playlists.map( (playlist, index) => {
                        return(
                            <div id="card" key={index}>
                              <h1>{playlist.name}</h1>
                              <h3>{playlist.tracks.total} Tracks</h3>
                              <button onClick={(evt) => this.getTracks(playlist.id)}>Get Track Info</button>
                              <button onClick={(evt) => this.postTracks()}>Add To Mix</button>
                            </div>
                        )})}
                </div>
            )} else {
            return (
                <h1>Loading.....</h1>
            )}
    }
};

export default Playlist;
