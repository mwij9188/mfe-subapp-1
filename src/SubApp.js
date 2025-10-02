import React from 'react';

// Accept props
const SubApp = ({ message, onMessage }) => (
  <div>
    SubApp1 Loaded! Message: {message}
    <br />
    <button onClick={() => onMessage && onMessage('Hello from SubApp1!')}>
      Send Message to Main App
    </button>
  </div>
);

export default SubApp;