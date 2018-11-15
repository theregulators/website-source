import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Solution from './solution.component';
import Background from './background.component';
import Chemistry from './chemistry.component';
import Technology from './technology.component';
import Resources from './resources.component';

class AboutComponent extends React.Component {
  render() {
    return (<Container>
      <h2>About</h2>

      {/* routes */}
      <Route path='/about/solution/' component={Solution} />
      <Route path='/about/background/' component={Background} />
      <Route path='/about/chemistry/' component={Chemistry} />
      <Route path='/about/technology/' component={Technology} />
      <Route path='/about/resources/' component={Resources} />

    </Container>);
  }
}

export default AboutComponent;
