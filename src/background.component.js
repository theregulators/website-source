import React from 'react';

import AboutDropdownComponent from './about-dropdown.component';

class BackgroundComponent extends React.Component {
  render() {
    return (<div>
      <h3>Background</h3>
      <AboutDropdownComponent />
      <p>Background details will go here.</p>
    </div>);
  }
}

export default BackgroundComponent;
