import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const teamMembers = [
  {
    'name': 'Peter Baccarella',
    'tagline': 'Chem. Team',
    'description': 'Glucose is my city.',
    'profilePicture': '/assets/peter.jpg'
  },
  {
    'name': 'Catherine Chen',
    'tagline': 'Chem. Team',
    'description': 'Generic Asian.',
    'profilePicture': '/assets/catherine.jpg'
  },
  {
    'name': 'Vincent Wang',
    'tagline': 'Chem. Team',
    'description': 'An ambitious programmer who likes Rubik\'s cubing and bowling!',
    'profilePicture': '/assets/vincent.jpg'
  },
  {
    'name': 'Emily Yasharpour',
    'tagline': 'Chem. Team',
    'description': 'An ambitious programmer who likes Rubik\'s cubing and bowling!',
    'profilePicture': '/assets/emily.jpg'
  },
  {
    'name': 'Jonathan Lam',
    'tagline': 'Tech. Team',
    'description': 'An ambitious programmer who likes Rubik\'s cubing and bowling!',
    'profilePicture': '/assets/jonathan.jpg'
  },
  {
    'name': 'Amy Leong',
    'tagline': 'Tech. Team',
    'description': 'An ambitious programmer who likes Rubik\'s cubing and bowling!',
    'profilePicture': '/assets/amy.jpg'
  }
];
const teamMembersHtml = teamMembers.map(member => (<Col key={member.name} className='mb-3'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={member.profilePicture} />
        <Card.Body>
          <h3>{member.name}</h3>
          <h5 className='text-secondary'>{member.tagline}</h5>
          <p>{member.description}</p>
        </Card.Body>
      </Card>
    </Col>));

class TeamComponent extends React.Component {
  render() {
    return (<Container className='my-5'>
      <h3>Who are we?</h3>
      <p>We are a team of freshmen at the Cooper Union.</p>
      <Row>
        {teamMembersHtml}
      </Row>
    </Container>);
  }
}

export default TeamComponent;
