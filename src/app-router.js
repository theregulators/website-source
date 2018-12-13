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
import Team from './team.component';
import Media from './media.component';

// main template
const AppRouter = () => (
  <Router>
    <div>
      {/* nav bar */}
      <Navbar expand='lg' sticky='top' id='nav-bar'>
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
            <LinkContainer to='/media'>
              <Nav.Link>Media</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* routes */}
      <Route path='/' exact component={Index} />
      <Route path='/about/' component={About} />
      <Route path='/team/' component={Team} />
      <Route path='/media/' component={Media} />

      {/* footer */}
      <Jumbotron fluid className='mb-0' id='footer'>
        <Container className='text-right'>
          <div>Copyright &copy; 2018 The Regulators.</div>
          <div>The Cooper Union for the Advancement of Science and Art.</div>
        </Container>
      </Jumbotron>
    </div>
  </Router>
);

export default AppRouter;
