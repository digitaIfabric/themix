import React, { Component } from 'react';
import './Test.css';
import './features.js';
class Test extends Component {
  render() {
    return (
      <div class='box'>
        <div class='title'>Playlist Name</div>
        <div className="button"><a><button>Add to The Mix</button></a></div>
        <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>
      </div>
    )
  }
}

export default Test;
