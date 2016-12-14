import React from 'react';
import PostSummary from '../components/PostSummary.js';
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
        {posts.map( post => {
          return (
            <PostSummary 
              title={post.title}
              url={post.url}
              date={post.date}
              summary={post.summary}
              key={post.id}
            />
          );
        })}
      </div>
    );
  }
}