import React from 'react';
import { Container } from 'react-bootstrap';

import AboutDropdownComponent from './about-dropdown.component';

class ResourcesComponent extends React.Component {
  render() {
    return (<div>
      <h3>Resources and Documents</h3>
      <AboutDropdownComponent />
    </div>);
  }
}

export default ResourcesComponent;
