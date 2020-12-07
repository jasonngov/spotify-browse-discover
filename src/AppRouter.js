import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home'
import Redirect from './components/Redirect'

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/redirect">Redirect</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/redirect" component={Redirect}/>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter;
