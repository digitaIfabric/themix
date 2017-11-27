import React, { Component } from 'react';
import './Home.css';
import Video from './bgidea2.mp4';
class Home extends Component {
  componentDidMount() {
    document.body.classList.remove('fullbg');
  }
  render() {
    return (
      <div>
        <div>
        <div className="pagebrand content">
            <h1> Welcome to The Mix </h1>
            <p>Bring your mix to places near you</p>
        </div>
        <div className="content">
            <a href="http://localhost:3003/" className="btn btn-sm animated-button victoria-three">Get Started</a>
        </div>
        </div>
          <video id="my-video" class="video" autoplay="autoplay" loop="loop" muted="true" width="300" height="150">
          <source src={Video} type="video/mp4"/>
          </video>
      </div>

    )
  }
};

export default Home;
