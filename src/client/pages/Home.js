import React from 'react';
import ContentBlock from '../components/ContentBlock.js';
import PostSummaryList from '../components/PostSummaryList.js';
import axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('/posts')
      .then( response => {
        this.setState({
          posts: response.data.posts
        });
      })
      .catch( error => {
        console.log(error);
      });
  }
  
  render() {
    let posts = this.state.posts;

    return (
      <div>
        <ContentBlock
          headerText="Testing"
          bodyText="This is just a test"
        />
        <h2 className="content-subhead">Recent Posts</h2>
        <PostSummaryList posts={posts} />
      </div>
    );
  }
}