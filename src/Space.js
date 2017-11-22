import React, { Component } from 'react';
import ChatBar from './partials/ChatBar';
import './Space.css';
import axios from 'axios';
import MessageList from './partials/MessageList';
class Space extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      currentUser: {
        name: "",
        avatar: ""
      },
      messages: []
    };
  }
  componentDidMount() {
    document.body.classList.remove('fullbg');
    document.body.classList.add('spacebg');
    // Getting user info for chat
    let userId = localStorage.getItem('userId');
    let accessToken = localStorage.getItem('accessToken');
    const options = {headers: {'Authorization': 'Bearer ' + accessToken}, json: true}
    axios.get(`https://api.spotify.com/v1/users/${userId}`, options)
    .then((res) => {
      this.setState({currentUser: {name: res.data.display_name, avatar: res.data.images[0].url}})
    })

    // Create Socket and handle chat events

    const socket = new WebSocket("ws://localhost:3001")
    console.log('connected to server');
    socket.onopen = (e) => {
    console.log('connected to WebSocket')
    this.setState({socket:socket})
    socket.onmessage = (event) => {
      console.log(event);
      const data = JSON.parse(event.data);
      switch(data.type) {
        case "incomingMessage":
          const messages = this.state.messages.concat(data);
          this.setState({messages: messages})
        break;
        default:

    }
  }
}};
  // Send message to chat server on key press
  handleKeyPress(event){
  if(event.key === 'Enter'){
    const newMessage = {
      type: 'postMessage',
      username: this.state.currentUser.name,
      avatar: this.state.currentUser.avatar,
      content: event.target.value,
    }
    this.state.socket.send(JSON.stringify(newMessage))
  }
}
  render() {
    return (
      <div>
          <iframe className="spotify" src="https://open.spotify.com/embed?uri=spotify:user:digital-fabric:playlist:2M3kZY1t1vocCub719j2qR&view=coverart" frameBorder="0" allowtransparency="true" title="spotifyplayer"></iframe>
        <div className="messenger">
          <nav className="navbar">
            <a className="navbar-brand">The Mixer</a>
          </nav>
          <button id="showchat">Click to show chat</button>
          <MessageList messages={this.state.messages} />
          <ChatBar pressKey={this.handleKeyPress} className="chatbarclass"/>
        </div>
      </div>
  );
  }

}

export default Space;
