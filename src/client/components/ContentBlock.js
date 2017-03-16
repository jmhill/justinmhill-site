import React from 'react';

export default class ContentBlock extends React.Component {
  
  render() {
    let content = this.props.content;

    return (
      <div>
        <h2 className="content-subhead">{content.title}</h2>
        <p>{content.body}</p>
      </div>
    );
  }
}

ContentBlock.propTypes = {
  content: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string
  }).isRequired
};