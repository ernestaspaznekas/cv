import React from 'react'
import {
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom'
import Button from 'material-ui/Button';

const style={
  NavLink:{
    color: 'white',
    textDecoration: 'none !important',
  },
  div:{
    display: '-webkit-inline-box',
  },
}

const BasicRouter = () => (
  <Router>
    <div style={style.div}>
        <nav>
            <Button raised color="primary"><NavLink to="/" activeStyle={style.NavLink}>Home</NavLink></Button>
            <Button raised color="primary"><NavLink to="/about" activeStyle={style.NavLink}>About</NavLink></Button>
            <Button raised color="primary"><NavLink to="/topics" activeStyle={style.NavLink}>Topics</NavLink></Button>
        </nav>

      {/*<hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      */}</div>
  </Router>
)

export default BasicRouter