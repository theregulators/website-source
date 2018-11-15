import React from 'react';

import AboutDropdownComponent from './about-dropdown.component';

class TechnologyComponent extends React.Component {
  render() {
    return (<div>
      <h3>Technology</h3>
      <AboutDropdownComponent />
      <p>Specific details about the technological stack (for the website and app) will go here.</p>
    </div>);
  }
}

export default TechnologyComponent;
