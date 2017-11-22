import React, { Component } from 'react';
import Message from './Message';
class MessageList extends Component {
  render() {
    const {messages} = this.props;
    return (
      <main className="messages">
        {messages.map((message) => {
          return <Message key={message.id} username={message.username} content={message.content} avatar={message.avatar} />
        })}
      </main>
    );
  }
}

export default MessageList;
