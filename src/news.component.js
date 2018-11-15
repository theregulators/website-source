import React from 'react';

import { Container } from 'react-bootstrap';

class NewsComponent extends React.Component {
  render() {
    return (<Container className='my-5'>
      <h3>News</h3>
      <p>No news yet.</p>
    </Container>);
  }
}

export default NewsComponent;
