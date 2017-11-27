import React, { Component } from 'react';
import './Playlist.css';
import axios from 'axios';
import queryString from 'query-string';
class Playlist extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: queryString.parse(this.props.location.search),
      accessToken: queryString.parse(this.props.location.search),
      playlists: [],
      // playlists: ['37i9dQZEVXbKj23U1GF4IR','5YDfEFiFKFhZueO2wesqVS','41hLKhQkDDcShfQFLBysPw'],
      tracks: []
    }
  }

  componentDidMount(){
    document.body.classList.add('fullbg');
    // Saving the userID and the accessToken to local localStorage

    localStorage.setItem('userId', this.state.currentUser.userId);
    localStorage.setItem('accessToken', this.state.accessToken.access_token);

  // Getting the users playlists

    let userId = this.state.currentUser.userId;
    const accessToken = this.state.accessToken.access_token;
    const options = {headers: {'Authorization': 'Bearer ' + accessToken}, json: true}
    axios.get(`https://api.spotify.com/v1/users/${userId}/playlists`, options)
    // axios.get(`https://api.spotify.com/v1/users/spotify_canada/playlists`, options)
      .then((res)=>{
        console.log("==================== PLAYLISTS ============================ ", res.data.items);
        this.setState({playlists: res.data.items})
      })
  }

  // Request for the playlists tracks and post to the mix playlist

  getTracks = (playlistID) => {
    let userId = this.state.currentUser.userId;
    const accessToken = this.state.accessToken.access_token;
    const token_type = 'Bearer';
    const options = {headers: {'Authorization': 'Bearer ' + accessToken}, json: true}
    axios.get(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`, options)
    .then((res) => {
      // Posting the tracks of the selected playlist to the Mix playlist
      this.setState({tracks: res.data.items})
      this.state.tracks.forEach((track) => {
       let uri = track.track.uri;
       let postUrl = `https://api.spotify.com/v1/users/0dg3avo57i3ocwbeca8nymwen/playlists/2lh5ZSPvdWojJ3TKG4u7pI/tracks?uris=${uri}`
       axios({
         method: 'post',
         url: postUrl,
         headers: { 'Authorization': `${token_type} ${accessToken}`,'Accept': 'application/json'}
       })
       .then((res) => {
        console.log('posted to playlist')
       })
       .catch((err) => {
        console.log(err.response.data)
       })
     })
    })
    // This .then is a redirect to the space
    .then((res) => {
      this.props.history.push('/space')
      // this.props.history.push(`/${space}`)
    })
  }

  render() {
    // This if handles the empty array of playlists at first
    let { playlists = undefined } = this.state;
      if(playlists){
    return (
    <div className='overall'>
      <h1 className="head">Choose your Playlist</h1>
      { playlists.map( (playlist, index) => {
        let track_s = playlist.tracks.total;
        let TT;
        if (track_s === 1) {
            TT = 'Track';
        } else {
            TT = 'Tracks';
        }
        return(
          <div id="card" key={index}>
            <h1><a href={playlist.external_urls.spotify} target='_blank'>{playlist.name}</a></h1>
            {/*<h3>{playlist.tracks.total} Track(s)</h3>*/}
            <h3>{playlist.tracks.total} {TT}</h3>
            <button onClick={(evt) => this.getTracks(playlist.id)}>Add to Mix</button>
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