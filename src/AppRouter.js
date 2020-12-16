import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/store'
import SignIn from './components/SignIn.jsx'
import Welcome from './components/Welcome.jsx'
import './AppRouter.css'

class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/welcome" component={Welcome}/>
            <Route path="/" component={SignIn} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default AppRouter;
