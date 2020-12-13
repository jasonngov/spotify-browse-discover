import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from 'react-router-dom'
import SignIn from './components/SignIn.jsx'
import Welcome from './components/Welcome.jsx'

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/welcome" component={Welcome}/>
          <Route path="/" component={SignIn} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter;
