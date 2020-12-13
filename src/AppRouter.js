import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from 'react-router-dom'
import Home from './components/Home.jsx'
import Welcome from './components/Welcome.jsx'

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/welcome" component={Welcome}/>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter;
