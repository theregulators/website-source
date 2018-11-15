import React from 'react';

import AboutDropdownComponent from './about-dropdown.component';

class BackgroundComponent extends React.Component {
  render() {
    return (<div>
      <h3>Background</h3>
      <AboutDropdownComponent />
      <h5 className='mt-3'>About Diabetes</h5>
      <p>Diabetes is a chronic disease where the body lacks the ability to produce enough insulin. Since diabetes is incurable, checking daily blood glucose levels are vital in ensuring well-being and safety. Currently, the most prevalent method is to use a glucometer with one-time-use test strips, where glucometers range from $40 to $601 and individual test strips cost between $0.40 to $2.002. However, in a city like Kampala, the average monthly income is roughly $300 per family, which makes it too costly for regular check-ups.</p>
    </div>);
  }
}

export default BackgroundComponent;
