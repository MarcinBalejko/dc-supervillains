import React, { Component } from 'react';
import Villains from './components/Villains';
import './App.css';

class App extends Component {
  state = {
    villains: []
  }




  render() {
    return (
      <div className="App">
        <Villains />
      </div>
    );
  }
}

export default App;
