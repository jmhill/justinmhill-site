import React from 'react';

export default class ContentBlock extends React.Component {
  render() {
    return (
      <div>
        <h2 className="content-subhead">{this.props.headerText}</h2>
        <p>{this.props.bodyText}</p>
      </div>
    );
  }
}