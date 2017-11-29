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
        <div className="header">
            <a href="http://localhost:3000/create">Create a space</a>
        </div>
        <div className="pagebrand content">
            <h1> Welcome to The Mix </h1>
            <p>Bring your mix to places near you</p>
        </div>
        <div className="content">
            <a href="./join" className="btn btn-sm animated-button victoria-three">Get Started</a>
        </div>
          <video id="my-video" className="video" autoPlay="autoplay" loop="loop" muted="true" width="300" height="150">
          <source src={Video} type="video/mp4"/>
          </video>
          <footer className="content">
            <div className="copyright">
              <p>© The Mix 2017 All Rights Reserved. <a href="/privacy">Privacy Policy.</a> ✌<i class="fa fa-heart" aria-hidden="true"></i> <a href="https://github.com/TylerNRobertson/" target="_blank" rel="noopener noreferrer">T</a><a href="https://github.com/digitalfabric92/" target="_blank" rel="noopener noreferrer"> D</a></p>
            </div>
          </footer>
      </div>

    )
  }
};

export default Home;
