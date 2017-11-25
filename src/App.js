import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./Home"
import Playlist from "./Playlist"
import Space from './Space'
import Privacy from './Privacy'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/playlist" component={Playlist} />
          <Route path="/space" component={Space} />
          <Route path="/privacy" component={Privacy} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
