import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import route from './Route'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route>
        {route}
      </Route>
      </BrowserRouter>
    );
  }
}

export default App;
