import React, { Component } from 'react';
import Villains from './components/Villains';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    villains: []
  }

  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=7')
  //     .then(res => this.setState({ todos: res.data }))
  // }


  render() {
    return (
      <div className="App">
        <Villains />
      </div>
    );
  }
}

export default App;