import React, { Component } from 'react';
import './Join.css';
import Video2 from './bgidea1.mp4';

// import Button from './partials/Button';

class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inputValue: '',
        space:'',
        buttonStyle:{pointerEvents: "none", cursor: "default"}
        // showButton: false
    };
  }

  updateInputValue = (evt) => {
    this.setState({
        inputValue: evt.target.value
    });
  };

  handleKeyPress = (event) => {
    if(event.key === 'Enter' && this.state.inputValue === 'ABCD'){
        console.log('Enter WEWORK');
        this.setState({
            space: 'WeWork',
            buttonStyle:{}
        });
        console.log(this.state.inputValue)
    } else if (event.key === 'Enter' && this.state.inputValue === 'CVHQ') {
        console.log('Enter CREW');
        console.log(this.state.inputValue)
        this.setState({
            space: 'CREW',
            buttonStyle:{}
        });
    } else if (event.key === 'Enter' && this.state.inputValue.length === 4) {
        alert('Try another code.')
    }
  };

  render() {
    return (
      <div>
        <div>
        <div className="pagebrand content">
            <h1> Join a Space </h1>
            <p>Enter the 4 digit code to join</p>
        </div>
        <div className="content">
            <h1><input type="text" className="input-code" maxLength="4" name="sessionNum" placeholder=" ____" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} onKeyPress={this.handleKeyPress} /></h1>
            {/*{ this.state.showButton ? <Button /> : null }*/}
            <a href="http://localhost:3003" style={this.state.buttonStyle} className="btn btn-sm animated-button victoria-three join-button">Join {this.state.space}</a>
        </div>
        </div>
        <video id="my-video" className="video" autoPlay="autoplay" loop="loop" width="300" height="150">
          <source src={Video2} type="video/mp4"/>
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

export default Join;
