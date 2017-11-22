import React, { Component } from 'react';
// let {username, content} = this.props;
class Message extends Component {
  render () {
    let {username, content} = this.props;
    return (
    <div>
      <div className="message">
        <span className="message-username">{username}</span>
        <span className="message-content">{content}</span>
      </div>
    </div>
    );
  }
}

export default Message;
