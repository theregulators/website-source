import React from 'react';

import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

class IndexComponent extends React.Component {
  render() {
    return (<Row className='mx-0'>
      <Col xs='12' className='p-0'>
        <Jumbotron fluid className='jumbotron-impression text-center d-flex flex-column justify-content-center mb-0 bg-dark text-light' id='header-jumbotron'>
          <Container>
            <Row>
              <Col lg='6' xs='12' className='mb-5'>
                <img className='mb-4' id='strip-img' src='./assets/strip.svg' alt='The Regulator is a low-cost colorimetric test strip for blood glucose testing.' />
                <h1 className='display-5'>Low-cost blood sugar monitoring</h1>
                <h5 className='font-weight-light'><Link to='/about/solution'>How do we do it?</Link></h5>
              </Col>
              <Col lg='6' xs='12'>
                <video muted loop controls id='main-video' className='bg-light'>
                  <source src='/assets/intro-video.webm' type='video/webm' />
                  <source src='/assets/intro-video.mp4' type='video/mp4' />
                </video>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Col>
      <Col md='6' xs='12' className='p-0'>
        <Jumbotron fluid className='jumbotron-impression text-center d-flex flex-column justify-content-center text-light mb-0'
          style={{ background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/assets/code.png)', backgroundSize: 'cover' }}>
          <Container>
            <h1 className='display-5'>Modern</h1>
            <h5 className='font-weight-light'><Link to='/about/technology'>See our tech stack.</Link></h5>
          </Container>
        </Jumbotron>
      </Col>
      <Col md='6' xs='12' className='p-0'>
        <Jumbotron fluid className='jumbotron-impression text-center d-flex flex-column justify-content-center text-light mb-0'
          style={{ background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/assets/team.jpg)', backgroundSize: 'cover' }}>
          <Container>
            <h1 className='display-5'>See what we do</h1>
            <h5 className='font-weight-light'><Link to='/media'>See the gallery.</Link></h5>
          </Container>
        </Jumbotron>
      </Col>
      <Col xs='12' className='p-0'>
        <Jumbotron fluid className='jumbotron-impression text-center d-flex flex-column justify-content-center text-light mb-0' id='lower-jumbotron'>
          <video autoPlay muted loop id='lower-video'>
            <source src='/assets/header.webm' type='video/webm' />
          </video>
          <Container>
            <h1 className='display-5'>We are The Regulators</h1>
            <h5 className='font-weight-light'><Link to='/team'>Meet the team</Link></h5>
          </Container>
        </Jumbotron>
      </Col>
    </Row>);
  }
}

export default IndexComponent;
