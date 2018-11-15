import React from 'react';

import AboutDropdownComponent from './about-dropdown.component';

class ChemistryComponent extends React.Component {
  render() {
    return (<div>
      <h3>Chemistry</h3>
      <AboutDropdownComponent />
      <p>Chemistry details will go here.</p>
    </div>);
  }
}

export default ChemistryComponent;
