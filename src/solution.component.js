import React from 'react';

import AboutDropdownComponent from './about-dropdown.component';

class SolutionComponent extends React.Component {
  render() {
    return (<div>
      <h3>Solution</h3>
      <AboutDropdownComponent />
      <p>Solution details will go here.</p>
    </div>);
  }
}

export default SolutionComponent;
