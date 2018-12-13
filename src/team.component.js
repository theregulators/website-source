import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const teamMembers = [
  {
    'name': 'Peter Baccarella',
    'tagline': 'Chemistry Team',
    'description': '',
    'profilePicture': '/assets/peter.jpg'
  },
  {
    'name': 'Catherine Chen',
    'tagline': 'Chemistry Team',
    'description': '',
    'profilePicture': '/assets/catherine.jpg'
  },
  {
    'name': 'Vincent Wang',
    'tagline': 'Chemistry Team',
    'description': '',
    'profilePicture': '/assets/vincent.jpg'
  },
  {
    'name': 'Emily Yasharpour',
    'tagline': 'Chemistry Team',
    'description': '',
    'profilePicture': '/assets/emily.jpg'
  },
  {
    'name': 'Jonathan Lam',
    'tagline': 'Technology Team',
    'description': '',
    'profilePicture': '/assets/jonathan.jpg'
  },
  {
    'name': 'Amy Leong',
    'tagline': 'Technology Team',
    'description': '',
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
      <p>In short: We are The Regulators!</p>
      <p>In long: We are freshmen at The Cooper Union in Task One Team One of Prof. Raja&apos;s EID101(E) section, Cost Effective Diabetes Management. Our goal as a class is to apply the principles of the engineering design process to a real-world field of study.</p>
      <Row>
        {teamMembersHtml}
      </Row>
      <p>If you&apos;d like to reach out to the team or inquire about the website, you may contact Jonathan Lam (webmaster) at <a href='mailto:jonathanlamdev@gmail.com'>jonathanlamdev@gmail.com</a>.</p>
    </Container>);
  }
}

export default TeamComponent;
