import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Space from './Space'
import Showtracks from './Showtracks'
import Home from "./Home"
import Playlist from "./Playlist"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/playlist" component={Playlist} />
          <Route path="/showtracks" component={Showtracks} />
          <Route path="/space" component={Space} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
