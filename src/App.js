import React, { Component } from 'react';
import Villains from './components/Villains';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    villains: []
  }



  componentDidMount() {
    axios.get('https://supervillains-react.herokuapp.com/villains')
      .then(res => {
        const villains = res.data;
        this.setState({ villains });
      })
  }


  render() {
    return (
      <div className="App">
        <ul>
          <Villains villains={this.state.villains} />
        </ul>
      </div>
    );
  }
}

export default App;