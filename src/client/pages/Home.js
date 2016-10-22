import React from 'react';
import ContentBlock from '../components/ContentBlock.js';

export default class Home extends React.Component {
  render() {
    return (
      <ContentBlock
        headerText="Testing"
        bodyText="This is just a test"
      />
    );
  }
}