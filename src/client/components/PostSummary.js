import React from 'react';

export default class PostSummary extends React.Component {
  render() {
    var props = this.props;
    
    return (
      <section className="post">
        <h2 className="post-title">
          <a href={props.url}>{props.title}</a>
        </h2>
        <p className="post-meta">{props.date}</p>
        <div className="post-description">
          {props.summary}
          <a href={props.url}> Read more...</a>
        </div>
      </section>
    );
  }
}