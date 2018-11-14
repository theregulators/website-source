import React from 'react';

import { Jumbotron, Container } from 'react-bootstrap';

class IndexComponent extends React.Component {
  render() {
    return (<div>
      <Jumbotron fluid>
        <Container>
          <h1 className='display3'>Title</h1>
        </Container>
      </Jumbotron>
    </div>);
  }
}

export default IndexComponent;
