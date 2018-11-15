// react and react router
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// bootstrap
import { Navbar, Nav, NavDropdown, Container, Jumbotron } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import Index from './index.component';
import About from './about.component';
import Solution from './solution.component';
import Background from './background.component';
import Chemistry from './chemistry.component';
import Technology from './technology.component';
import Resources from './resources.component';
import Team from './team.component';
import News from './news.component';

// main template
const AppRouter = () => (
  <Router>
    <div>
      {/* nav bar */}
      <Navbar bg='light' expand='lg'>
        <LinkContainer to='/'>
          <Navbar.Brand>The Regulators</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <LinkContainer to='/about'>
              <NavDropdown title='About'>
                <LinkContainer to='/about/solution'>
                  <NavDropdown.Item>Solution</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/about/background'>
                  <NavDropdown.Item>Background</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/about/chemistry'>
                  <NavDropdown.Item>Chemistry</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/about/technology'>
                  <NavDropdown.Item>Technology Stack</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/about/resources'>
                  <NavDropdown.Item>Resources</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </LinkContainer>
            <LinkContainer to='/team'>
              <Nav.Link>Team</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/news'>
              <Nav.Link>News</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* routes */}
      <Route path='/' exact component={Index} />
      <Route path='/about/' component={About} />
      <Route path='/about/solution/' component={Solution} />
      <Route path='/about/background/' component={Background} />
      <Route path='/about/chemistry/' component={Chemistry} />
      <Route path='/about/technology/' component={Technology} />
      <Route path='/about/resources/' component={Resources} />
      <Route path='/team/' component={Team} />
      <Route path='/news/' component={News} />

      {/* footer */}
      <Jumbotron fluid className='bg-light'>
        <Container>
          <div className='text-center'>Copyright &copy; 2018 The Regulators</div>
        </Container>
      </Jumbotron>
    </div>
  </Router>
);

export default AppRouter;
