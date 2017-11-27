import React, { Component } from 'react';
import './Playlist.css';
import axios from 'axios';
import queryString from 'query-string';
class Playlist extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUserId: queryString.parse(this.props.location.search),
      currentUser: {
        name: "",
        avatar: ""
      },
      accessToken: queryString.parse(this.props.location.search),
      playlists: [],
      tracks: []
    }
  }

  componentDidMount(){
    document.body.classList.add('fullbg');
    // Saving the userID and the accessToken to local localStorage
    localStorage.setItem('userId', this.state.currentUserId.userId);
    localStorage.setItem('accessToken', this.state.accessToken.access_token);

  // Get users info
    let userId = this.state.currentUserId.userId;
    const accessToken = this.state.accessToken.access_token;
    const options = {headers: {'Authorization': 'Bearer ' + accessToken}, json: true}
    axios.get(`https://api.spotify.com/v1/users/${userId}`, options)
    .then((res) => {
      this.setState({currentUser: {name: res.data.display_name, avatar: res.data.images[0].url}})
      console.log(res.data)
      console.log(this.state.currentUser)
    })
  // Getting the users playlists
    axios.get(`https://api.spotify.com/v1/users/${userId}/playlists`, options)
      .then((res)=>{
        this.setState({playlists: res.data.items})
      })
  }

  // Request for the playlists tracks and post to the mix playlist

  getTracks = (playlistID) => {
    let userId = this.state.currentUserId.userId;
    const accessToken = this.state.accessToken.access_token;
    const token_type = 'Bearer';
    const options = {headers: {'Authorization': 'Bearer ' + accessToken}, json: true}
    axios.get(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`, options)
    .then((res) => {
      // Posting the tracks of the selected playlist to the Mix playlist
      this.setState({tracks: res.data.items})
      this.state.tracks.forEach((track) => {
       let uri = track.track.uri;
       let postUrl = `https://api.spotify.com/v1/users/digital-fabric/playlists/2M3kZY1t1vocCub719j2qR/tracks?uris=${uri}`
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
    })
  }
  render() {
    // This if handles the empty array of playlists at first
    let { playlists = undefined } = this.state;
      if(playlists){
    return (
    <div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/about">About</a></li>
          <li><img src={this.state.currentUser.avatar} alt="userimage" className="userimg"/></li>
          <li><h3>Logged in as {this.state.currentUser.name}</h3></li>
          <li><button>Logout</button></li>
        </ul>
      </nav>
      <h1 className="head">Choose your Playlist</h1>
      <div className='overall'>
      { playlists.map( (playlist, index) => {
      return(
        <div id="card" key={index}>
          <h1>{playlist.name}</h1>
          <h3>{playlist.tracks.total} Tracks</h3>
          <button onClick={(evt) => this.getTracks(playlist.id)}>Add to Mix</button>
        </div>
      )})}
     </div>
   </div>
    )} else {
      return (
        <h1>Loading.....</h1>
      )}
  }
};

export default Playlist;
