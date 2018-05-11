import React, { Component } from 'react';
import Button from './Button.js';

class Header extends Component {
  // renders content to DOM
  render(){
    return (
      <div>
        <header>
          <h1 className='header'>COLORS</h1>
          <h5 className='header'>Click the circle below to change the color of the page</h5>
        </header>
        <Button />
      </div>
    )
  }
}

export default Header
