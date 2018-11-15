import React from 'react';

import AboutDropdownComponent from './about-dropdown.component';

class TechnologyComponent extends React.Component {
  render() {
    return (<div>
      <h3>Technology</h3>
      <AboutDropdownComponent />
      <p>Technology details will go here.</p>
    </div>);
  }
}

export default TechnologyComponent;
