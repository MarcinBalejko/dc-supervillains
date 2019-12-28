import React, { Component } from 'react';
import Villains from './components/Villains';
import AddButton from './components/AddButton';
import './App.css';
import axios from 'axios';

class App extends Component {


  state = {
    villains: [],
    oneVillain: [],
    addButtonCount: 0
  }


  componentDidMount() {
    axios.get('https://supervillains-react.herokuapp.com/villains')
      .then(res => {
        const villains = res.data;
        this.setState({
          villains
        });
      })

  }


  addButtonOnClickHandler = (e) => {
    e.preventDefault();
    let count = this.state.addButtonCount;

    if (count !== 5) {
      this.setState({
        oneVillain: [this.state.villains[count]],
        addButtonCount: (count + 1)
      });
    } else {
      this.setState({
        oneVillain: [this.state.villains[0]],
        addButtonCount: 1,
      });
    }

  }


  render() {
    return (
      <div className="App">
        <AddButton btnClick={this.addButtonOnClickHandler} />
        <ul>
          <Villains villain={this.state.oneVillain} />
        </ul>
      </div>
    );
  }
}


export default App;