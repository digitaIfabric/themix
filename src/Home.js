import React, { Component } from 'react';
class Home extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="pagebrand content">
            <h1> Welcome to The Mix </h1>
            <p>Bring your mix to places near you</p>
        </div>
        <div className="content">
            <a href="http://localhost:3000/join" className="btn btn-sm animated-button victoria-three">Get Started</a>
        </div>
        </div>
          <footer className="content">
            <div className="copyright">
              <a href="">© The Mix 2017 All Rights Reserved. <a href="/privacy">Privacy Policy.</a> ✌❤ <a href="https://github.com/TylerNRobertson/" target="_blank">T</a><a href="https://github.com/digitalfabric92/" target="_blank"> D</a></a>
            </div>
          </footer>
      </div>

    )
  }
};

export default Home;