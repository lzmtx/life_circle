import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import storageUtils from './utils/storageUtils'

import './assets/css/media.css'
import Index from './pages/Index';

class App extends Component {
  componentWillMount () {
    storageUtils.saveUser({ userName: "lm" })
  }

  render () {
    if (!storageUtils.getUser().userName) {
      return (
        <div className="App">
          <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <Redirect to="/login" />
            </Switch>
          </Router>
        </div>
      )
    }

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />


          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
