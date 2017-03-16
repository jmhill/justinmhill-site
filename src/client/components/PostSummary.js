import React from 'react';

export default class PostSummary extends React.Component {
  constructor() {
    super();
    this.formatDate = this.formatDate.bind(this);
  }
  
  render() {
    var post = this.props.post;
    
    return (
      <section className="post">
        <h2 className="post-title">
          <a href={post.url}>{post.title}</a>
        </h2>
        <p className="post-meta">{this.formatDate(post.datePublished)}</p>
        <div className="post-description">
          {post.summary}
          <a href={post.url}> Read more...</a>
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
  post: React.PropTypes.object
}