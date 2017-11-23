import React, { Component } from 'react';
// let {username, content} = this.props;
class Message extends Component {
  render () {
    let {username, avatar, content} = this.props;
    return (
    <div>
      <div className="message">
        <img className="message-avatar" src={avatar} alt="avatarimg"/>
        <span className="message-username">{username}</span>
        <span className="message-content">{content}</span>
      </div>
    </div>
    );
  }
}

export default Message;
