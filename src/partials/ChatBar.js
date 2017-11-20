import React, { Component } from 'react';
class ChatBar extends Component {
  render() {
    return (
          <footer className="chatbar">
              <input className="chatbarmessage" id="newmessage" placeholder="Type a message and hit ENTER" onKeyPress={this.props.pressKey} />
          </footer>
        );
      }
}

export default ChatBar;
