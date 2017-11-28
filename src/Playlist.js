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
      this.setState({currentUser: {name: res.data.display_name}})
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
       let postUrl = `https://api.spotify.com/v1/users/0dg3avo57i3ocwbeca8nymwen/playlists/2lh5ZSPvdWojJ3TKG4u7pI/tracks?uris=${uri}`;
       let accessToken2 = "BQD8InLCFBI_PzAc7LnVtdXfx0JDSgVhPWI2dCZ6nv9wKyjYOappY87e_I4f_PmZC6lhNtWmzmo--_gCqLRQFNcInQoSrkNC5YXRYA_6oWG8_yoj5hPKPA3l7rnP3amaujAUjtAGPOOA3VVPMIocg1qfLLLKAh3n6Jdl93f3RJZe9fHs-zRTC4dRW6oW3eVIeag8EUaiZFn45B8gFX6kRBnpUDQR5MOnw262zVm6kyUav0te_sbIEf41RC3lRxiOrmW-VHSelp82cNPt7X9TFXMCBN5Gtw";
        // let accessToken2 = "BQC2dSfCH7yL8XnY9N7IRgz8gl1TczhmekSt-0puss5HbqgVl0eeIzb7cyBKTbTDglVoEWFmvAN4v3LhLrJeTtsCdKWd9euytK9lxWXWpeLbLGi7CNIx7oc_31vvCJQe_sV-M7ijQYqyDI6OyfB2o3axM8vnTkNDkEav1CsL_E-jMCgbmIz9RpPGl0QvXbPecKYm-Hx0qE1eaLeIQ6JHOBiWPR71oTg7tuou1M7WHKji4jIcy_ba2B9xg-UeoN2u8DB4e6l9OT_EY4wFybjvC9fNaFTNjQ";
       axios({
         method: 'post',
         url: postUrl,
         headers: { 'Authorization': `${token_type} ${accessToken2}`,'Accept': 'application/json'}
       })
       .then((res) => {
        console.log('posted to playlist')
           let iframe = document.getElementsByClassName('spotify');
           iframe.src = iframe.src;
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
          <li><img src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png" alt="userimage" className="userimg"/></li>
          <li><h3>Logged in as {this.state.currentUser.name}</h3></li>
          <li><button>Logout</button></li>
        </ul>
      </nav>
      <h1 className="head">Choose your Playlist</h1>
      <div className='overall'>
      { playlists.map( (playlist, index) => {
      return(
        <div id="card" key={index}>
          <h1><a href={playlist.external_urls.spotify} target='_blank' rel='noopener noreferrer'>{playlist.name}</a></h1>
          <h3>{playlist.tracks.total} Tracks</h3>
          <button onClick={(evt) => this.getTracks(playlist.id)}>Add to WeWork Mix</button>
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
