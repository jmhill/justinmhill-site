import React from 'react';
import ContentBlock from '../components/ContentBlock.js';
import PostSummary from '../components/PostSummary.js';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <ContentBlock
          headerText="Testing"
          bodyText="This is just a test"
        />
        <h2 className="content-subhead">Recent Posts</h2>
        <PostSummary
          title="Test post"
          url="http://google.com"
          date="11/26/2016"
          summary="This is just a test post for the Summary component"
        />
      </div>
    );
  }
}