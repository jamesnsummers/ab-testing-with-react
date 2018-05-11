import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {isBackgroundRed: true};
    // This binding makes `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // runs on page load/reload
  componentDidMount() {
    console.log('COMPONENT DID MOUNT: state = ', this.state);
    if (window.clearheadHook) {
      window.clearheadHook();
    }
  }

  // runs immediately after component is updated/state changes
  componentDidUpdate() {
    console.log('COMPONENT UDPATE: background red? ', this.state.isBackgroundRed);
    if (window.clearheadHook) {
      window.clearheadHook();
    }
  }

  // handler to toggle colors when clicking the button
  handleClick() {
    this.setState(prevState => ({
     isBackgroundRed: !prevState.isBackgroundRed
    }));
  }

  // renders content to DOM
  render(){
    return (
      <div className='button-container'>
        <button onClick={this.handleClick}>
          {this.state.isBackgroundRed ? document.getElementsByTagName('body')[0].style.background = '#CE5A5D' : document.getElementsByTagName('body')[0].style.background = '#A9EBC3'}
        </button>
      </div>
    )
  }
}

export default Button
