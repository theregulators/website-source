import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Dropdown } from 'react-bootstrap';

import Solution from './solution.component';
import Background from './background.component';
import Chemistry from './chemistry.component';
import Technology from './technology.component';
import Resources from './resources.component';

import AboutDropdownComponent from './about-dropdown.component';

// if none of the specialty about pages are used
const DefaultAbout = () => (<div>
  <h3>Choose one of the about pages for more information.</h3>
  <AboutDropdownComponent />
</div>);

class AboutComponent extends React.Component {
  render() {
    return (<Container className='my-5'>

      {/* routes */}
      <Switch>
        <Route path='/about/solution/' component={Solution} />
        <Route path='/about/background/' component={Background} />
        <Route path='/about/chemistry/' component={Chemistry} />
        <Route path='/about/technology/' component={Technology} />
        <Route path='/about/resources/' component={Resources} />
        <Route component={DefaultAbout} />
      </Switch>

    </Container>);
  }
}

export default AboutComponent;
