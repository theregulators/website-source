import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const teamMembers = [
  {
    'name': 'Peter Baccarella',
    'tagline': 'Chem. Team',
    'description': 'An ambitious programmer who likes Rubik\'s cubing and bowling!',
    'profilePicture': 'https://www.morpht.com/sites/morpht/files/styles/landscape_medium/public/dalibor-matura_1.jpg'
  },
  {
    'name': 'Catherine Chen',
    'tagline': 'Chem. Team',
    'description': 'An ambitious programmer who likes Rubik\'s cubing and bowling!',
    'profilePicture': 'https://www.morpht.com/sites/morpht/files/styles/landscape_medium/public/dalibor-matura_1.jpg'
  },
  {
    'name': 'Vincent Wang',
    'tagline': 'Chem. Team',
    'description': 'An ambitious programmer who likes Rubik\'s cubing and bowling!',
    'profilePicture': 'https://www.morpht.com/sites/morpht/files/styles/landscape_medium/public/dalibor-matura_1.jpg'
  },
  {
    'name': 'Emily Yasharpour',
    'tagline': 'Chem. Team',
    'description': 'An ambitious programmer who likes Rubik\'s cubing and bowling!',
    'profilePicture': 'https://www.morpht.com/sites/morpht/files/styles/landscape_medium/public/dalibor-matura_1.jpg'
  },
  {
    'name': 'Jonathan Lam',
    'tagline': 'Tech. Team',
    'description': 'An ambitious programmer who likes Rubik\'s cubing and bowling!',
    'profilePicture': 'https://www.morpht.com/sites/morpht/files/styles/landscape_medium/public/dalibor-matura_1.jpg'
  },
  {
    'name': 'Amy Leong',
    'tagline': 'Tech. Team',
    'description': 'An ambitious programmer who likes Rubik\'s cubing and bowling!',
    'profilePicture': 'https://www.morpht.com/sites/morpht/files/styles/landscape_medium/public/dalibor-matura_1.jpg'
  }
];
const teamMembersHtml = teamMembers.map(member => (<Col key={member.name}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={member.profilePicture} />
        <Card.Body>
          <h3>{member.name}</h3>
          <h5>{member.tagline}</h5>
          <p>{member.description}</p>
        </Card.Body>
      </Card>
    </Col>));

class TeamComponent extends React.Component {
  render() {
    return (<Container>
      <h1>Who are we?</h1>
      <p>We are a team of freshmen at the Cooper Union.</p>
      <Row>
        {teamMembersHtml}
      </Row>
    </Container>);
  }
}

export default TeamComponent;
