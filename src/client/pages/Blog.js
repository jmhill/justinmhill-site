import React from 'react';
import PostSummary from '../components/PostSummary.js'

export default class Blog extends React.Component {
  constructor() {
    super();
    this.posts = [
      {
        title: "Title 1",
        url: "http://google.com",
        date: "12/1/2016",
        summary: "Summary of blog post number 1",
        id: 1
      },
      {
        title: "Title 2",
        url: "http://google.com",
        date: "12/2/2016",
        summary: "Summary of blog post number 2",
        id: 2
      },
      {
        title: "Title 3",
        url: "http://google.com",
        date: "12/3/2016",
        summary: "Summary of blog post number 3",
        id: 3
      }
    ]
  }
  
  render() {
    return (
      <div>
        {this.posts.map( post => {
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