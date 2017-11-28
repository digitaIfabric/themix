import React, { Component } from 'react';
// let {username, content} = this.props;
class Message extends Component {
  render () {
    // let {username, avatar, content} = this.props;
    let {username, content} = this.props;
    return (
    <div>
      <div className="message">
        {/*<img className="message-avatar" src={avatar} alt="avatarimg"/>*/}
        <img className="message-avatar" src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png" alt="https://orig00.deviantart.net/c91f/f/2010/014/b/c/avatar_by_eggar919.jpg"/>
        <span className="message-username">{username}</span>
        <span className="message-content">{content}</span>
      </div>
    </div>
    );
  }
}

export default Message;
