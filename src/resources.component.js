import React from 'react';
import { Container } from 'react-bootstrap';

import AboutDropdownComponent from './about-dropdown.component';

class ResourcesComponent extends React.Component {
  render() {
    return (<div>
      <h3>Resources and Documents</h3>
      <AboutDropdownComponent />

      <p>Click on one of the files below to download it.</p>
      <ul>
        <li>
          <span className='text-secondary small mr-3'>[PDF, modified 11/1/18]</span>
          <a href='/downloads/regulators-summary_of_methods_for_experts.pdf' download>Summary of Methods (for Experts)</a>
        </li>
        <li>
          <span className='text-secondary small mr-3'>[PDF, modified 10/30/18]</span>
          <a href='/downloads/regulators-design_summary_presentation.pdf' download>Design Summary Presentation</a>
        </li>
        <li>
          <span className='text-secondary small mr-3'>[DOCX, modified 10/10/18]</span>
          <a href='/downloads/regulators-duncker_diagram.docx' download>Duncker Diagram</a>
        </li>
      </ul>
    </div>);
  }
}

export default ResourcesComponent;
