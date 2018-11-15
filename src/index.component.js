import React from 'react';

import { Link } from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap';

class IndexComponent extends React.Component {
  render() {
    return (<div>
      <Jumbotron fluid className='jumbotron-impression text-center d-flex flex-column justify-content-center bg-dark text-light mb-0'>
        <Container>
          <img className='mb-4' id='strip-img' src='./assets/strip.svg' alt='The Regulator is a low-cost colorimetric test strip for blood glucose testing.' />
          <h1 className='display-5'>Low-cost blood sugar regulation</h1>
          <h5 className='font-weight-light'><Link to='/about/solution'>How do we do it?</Link></h5>
        </Container>
      </Jumbotron>
    </div>);
  }
}

export default IndexComponent;
