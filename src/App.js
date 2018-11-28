import React, { Component } from 'react';
import Navbar from './Layout/Navbar';
import Content from './Layout/Content';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Content/>
      </div>
    );
  }
}

export default App;
