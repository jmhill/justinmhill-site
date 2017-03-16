import React from 'react';
import PostSummaryList from '../components/PostSummaryList.js';
import ContentBlock from '../components/ContentBlock.js';
import axios from 'axios';


export default class Blog extends React.Component {
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
        <ContentBlock headerText="Blog" />
        <PostSummaryList posts={posts} />
      </div>
    );
  }
}