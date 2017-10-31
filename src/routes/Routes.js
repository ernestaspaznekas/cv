import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import Button from 'material-ui/Button';

const activeStyle={
    color: 'white',
    textDecoration: 'none !important',
   }

const BasicRouter = () => (
  <Router>
    <div>
        <nav>
            <Button raised color="primary"><NavLink to="/" activeStyle={activeStyle}>Home</NavLink></Button>
            <Button raised color="primary"><NavLink to="/about" activeStyle={activeStyle}>About</NavLink></Button>
            <Button raised color="primary"><NavLink to="/topics" activeStyle={activeStyle}>Topics</NavLink></Button>
        </nav>

      {/*<hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      */}</div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default BasicRouter