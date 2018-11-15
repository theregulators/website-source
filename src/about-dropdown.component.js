import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Dropdown } from 'react-bootstrap';

class AboutDropdownComponent extends React.Component {
  render() {
    return (<div>
      <Dropdown.Menu show className='float-none w-auto d-inline-block mb-3' style={{ position: 'static' }}>
        <Dropdown.Header>About the Colorimetric Test Strip</Dropdown.Header>
        <LinkContainer to='/about/solution'>
          <Dropdown.Item>Solution</Dropdown.Item>
        </LinkContainer>
        <LinkContainer to='/about/background'>
          <Dropdown.Item>Background</Dropdown.Item>
        </LinkContainer>
        <LinkContainer to='/about/chemistry'>
          <Dropdown.Item>Chemistry</Dropdown.Item>
        </LinkContainer>
        <LinkContainer to='/about/technology'>
          <Dropdown.Item>Technology</Dropdown.Item>
        </LinkContainer>
        <LinkContainer to='/about/resources'>
          <Dropdown.Item>Resources</Dropdown.Item>
        </LinkContainer>
      </Dropdown.Menu>
    </div>);
  }
}

export default AboutDropdownComponent;
