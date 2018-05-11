import React, { Component } from 'react'
import Header from './components/Header'
import './index.css';


class App extends Component {
  
  // renders content to DOM
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App
