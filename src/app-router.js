import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// routing
const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Solution = () => <h2>Solution</h2>;
const Team = () => <h2>Team</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/solution'>Solution</Link>
        <Link to='/team'>Team</Link>
      </nav>

      <Route path='/' exact component={Index} />
      <Route path='/about/' component={About} />
      <Route path='/solution/' component={Solution} />
      <Route path='/team/' component={Team} />
    </div>
  </Router>
);

export default AppRouter;
