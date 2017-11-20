import React, { Component } from 'react';
import ChatBar from './partials/ChatBar';
import MessageList from './partials/MessageList';
class Space extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      currentUser: {name: "Bill"
                    },
      messages: []
    };
  }
  componentDidMount() {
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
          throw ('Event type unknown ' + data.type)
    }
  }
}};

  handleKeyPress(event){
  if(event.key === 'Enter'){
    const newMessage = {
      type: 'postMessage',
      username: this.state.currentUser.name,
      content: event.target.value,
    }
    this.state.socket.send(JSON.stringify(newMessage))
  }
}
  render() {
    return (
        <aside className="messenger">
          <nav className="navbar">
            <a href="/" className="navbar-brand">The Mix</a>
          </nav>
          <button id="showchat">Click to show chat</button>
          <MessageList messages={this.state.messages} />
          <ChatBar pressKey={this.handleKeyPress} className="chatbarclass"/>
        </aside>
    );
  }
}

export default Space;
