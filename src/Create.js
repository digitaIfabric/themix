import React, { Component } from 'react';
import './Create.css';

class Create extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="pagebrand content">
            <h1> Create a Space </h1>
            <p>We'll text you the 4 digit room code.</p>
        </div>
        <div className="content">
            <h1><input type="text" className="input-name" maxlength="12" placeholder="SPACE NAME"/></h1>
            <h1><input type="text" className="input-number" maxlength="15" placeholder="PHONE NUMBER"/></h1>
            {/*<input type="text" className="input" maxlength="4" name="sessionNum" onkeypress="return isNumberKey(event)" />*/}
            <a href="http://localhost:3000/" className="btn btn-sm animated-button victoria-three">Create a new space</a>
        </div>
        </div>
          <footer className="content">
            <div className="copyright">
              <p>© The Mix 2017 All Rights Reserved. <a href="/privacy">Privacy Policy.</a> ✌<i class="fa fa-heart" aria-hidden="true"></i> <a href="https://github.com/TylerNRobertson/" target="_blank" rel="noopener noreferrer">T</a><a href="https://github.com/digitalfabric92/" target="_blank" rel="noopener noreferrer"> D</a></p>
            </div>
          </footer>
      </div>

    )
  }
};

export default Create;
