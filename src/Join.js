import React, { Component } from 'react';
import './Join.css';

class Join extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="pagebrand content">
            <h1> Join a Space </h1>
            <p>Enter the 4 digit code to join.</p>
        </div>
        <div className="content">
            <h1><input type="text" className="input-code" maxlength="4" name="sessionNum" placeholder=" ____"/></h1>
            {/*<input type="text" className="input" maxlength="4" name="sessionNum" onkeypress="return isNumberKey(event)" />*/}
            {/*<a href="http://localhost:3000/playlist" className="btn btn-sm animated-button victoria-three">Join the Party</a>*/}
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

export default Join;