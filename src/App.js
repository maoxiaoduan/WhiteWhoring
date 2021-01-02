import React, { Component } from 'react';

import { BrowserRouter, Switch, Route,  } from 'react-router-dom'
import Login from './pages/login/index'
import Movie from './pages/movie/index'
import Music from './pages/music/index'
import Home from './pages/home/index'
import NoFind from './pages/404/index'
import './index.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
    <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/movie' component={Movie} />
      <Route path='/music' component={Music} />
      <Route exact path='/' component={Home} />
      <Route path='/*' component ={NoFind} />
    </Switch>
    </BrowserRouter>
    );
  }
}

export default App;



