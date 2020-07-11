import React, { Component } from 'react';
import Navigator from './components/Navigator/navigator'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Forex from './pages/forex/forex'
import PredictedForex from './pages/predicted-forex/predicted-forex'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Title">Dubaotiente.com</h1>
          <Navigator />
          <Switch>
            <Route path='/forex' component={Forex} />
            <Route path='/predicted-forex' component={PredictedForex} />
            <Redirect to='/forex' />
          </Switch>
        </header>
      </div>
    )
  }
}

export default App;
