import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  return (
    <>
      <h2>Messages</h2>
      {messages.map((message, i) =>
        // TODO: format as cards, add timestamp
        <p key={i} className={message.premium ? 'is-premium' : ''}>
          <strong>{message.sender}</strong>:<br/>
          Message: {message.text}<br/>
          Storage Usage: {message.storageUsage} (bytes)<br/>
          Block Timestamp: {message.blockTimestamp}<br/>
          Used Gas: {message.usedGas} (units of gas)<br/>
          Account Balance: {message.accountBalance}
        </p>
      )}
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};
