import React, { Component } from 'react';
import Message from './Message';
class MessageList extends Component {
  render() {
    const {messages} = this.props;
    return (
      <main className="messages">
        {messages.map((message) => {
          return <Message key={message.id} username={message.username} content={message.content} avatar="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png" />
        })}
      </main>
    );
  }
}

export default MessageList;
