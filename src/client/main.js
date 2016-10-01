import React from 'react';
import ReactDOM from 'react-dom';

// Testing
class Test extends React.Component {
  render() {
    return (
      <div>
        <p>Hello React!</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById("root")
);