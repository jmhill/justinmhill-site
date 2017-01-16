import React from 'react';

export default class PostSummary extends React.Component {
  constructor() {
    super();
    this.formatDate = this.formatDate.bind(this);
  }
  
  render() {
    var props = this.props;
    
    return (
      <section className="post">
        <h2 className="post-title">
          <a href={props.url}>{props.title}</a>
        </h2>
        <p className="post-meta">{this.formatDate(props.date)}</p>
        <div className="post-description">
          {props.summary}
          <a href={props.url}> Read more...</a>
        </div>
      </section>
    );
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    const format = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', format);
  }
}

PostSummary.propTypes = {
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  summary: React.PropTypes.string.isRequired,
}