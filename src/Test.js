import React, { Component } from 'react';
import './Test.css';
import './features.js';
class Test extends Component {
  componentDidMount() {
    document.body.classList.add('fullbg');
  }
  render() {
    return (
      <div class="slider">
        <div class="items-group">
          <div class="item">
            <div class="block">
              <span class="circleLight"></span>
              <div class="text">
                <h2>Hi</h2>
                <p>I`m cool card</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="block">
              <span class="circleLight"></span>
              <div class="text">
                <h2>Hi</h2>
                <p>I`m cool card</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="block">
              <span class="circleLight"></span>
              <div class="text">
                <h2>Hi</h2>
                <p>I`m cool card</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="block">
              <span class="circleLight"></span>
              <div class="text">
                <h2>Hi</h2>
                <p>I`m cool card</p>
              </div>
            </div>
          </div>
        </div>
        <div class="navigations">
          <ul class="dots"></ul>
        </div>
      </div>
    )
  }
}

export default Test;
