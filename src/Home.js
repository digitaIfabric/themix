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
            <a href="http://localhost:3003/" className="btn btn-sm animated-button victoria-three">Get Started</a>
        </div>
        </div>
          <footer className="content">
            <div className="copyright">
              <a href="">© The Mix 2017 All rights Reserved</a>
            </div>
          </footer>
      </div>

    )
  }
};

export default Home;
