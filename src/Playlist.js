import React, { Component } from 'react';
import './Playlist.css';
import axios from 'axios';
import queryString from 'query-string';
class Playlist extends Component {
  constructor(props){
    super(props);
    this.state = {
      accessToken: queryString.parse(this.props.location.search),
      playlists: []
    }
  }
  componentDidMount(){
    const accessToken = this.state.accessToken.access_token;
    let playlists = axios.get(`https://api.spotify.com/v1/users/digital-fabric/playlists`,
      {headers: {'Authorization': 'Bearer ' + accessToken},
      json: true})
      .then((res)=>{
        console.log(res.data.items);
        this.setState({playlists: res.data.items})
      })
  }
  playlist = () => {
    if (this.state.playlists.length === 0) {
      return 'loading....'
    }
    return this.state.playlists[0].name
  }

  render() {
    let { playlists = undefined } = this.state;
      if(playlists){
    return (
    <div>
      <h1 className="head">Choose your Playlist</h1>
      { playlists.map( (playlist) => {
      return(
        <div id="card">
          <h1>{playlist.name}</h1>
          <h3>{playlist.tracks.total} Tracks</h3>
          <a href="/showtracks"><button>Add to WeWork Mix</button></a>
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
