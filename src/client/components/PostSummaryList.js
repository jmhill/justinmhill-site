import React from 'react';
import PostSummary from './PostSummary.js';

export default class PostSummaryList extends React.Component {
  
  render() {
    let posts = this.props.posts;

    return (
      <div>
        {posts.map( post => {
            return (
              <PostSummary 
                key={post._id}
                post={post}
              />
            );
          })}
      </div>
    );
  }
}
