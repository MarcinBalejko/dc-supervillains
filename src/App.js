import React, { Component } from 'react';
import Villains from './components/Villains';
//import Navbar from './components/Navbar';
//import Header from './components/Header';
//import Content from './components/Content';
import AddButton from './components/AddButton';
import MinusButton from './components/MinusButton';
//import Footer from './components/Footer';
import './App.css';
import axios from 'axios';

class App extends Component {


  state = {
    villains: [],
    oneVillain: [],
    buttonCount: 0,
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

    if (this.state.buttonCount < 4) {
      this.setState({
        oneVillain: [this.state.villains[this.state.buttonCount]],
        buttonCount: (this.state.buttonCount + 1)
      });
    } else if (this.state.buttonCount === 4) {
      this.setState({
        oneVillain: [this.state.villains[this.state.buttonCount]],
        buttonCount: (this.state.buttonCount + 1)
      });
    }

  }


  // below needs refactoring

  minusButtonOnClickHandler = (e) => {
    e.preventDefault();

    if (this.state.buttonCount === 5) {
      this.setState({
        buttonCount: (this.state.buttonCount - 1),
        oneVillain: [this.state.villains[(this.state.buttonCount - 2)]]
      })
    }

    if (this.state.buttonCount === 4) {
      this.setState({
        buttonCount: (this.state.buttonCount - 1),
        oneVillain: [this.state.villains[(this.state.buttonCount - 2)]]
      })
    }

    if (this.state.buttonCount === 3) {
      this.setState({
        buttonCount: (this.state.buttonCount - 1),
        oneVillain: [this.state.villains[(this.state.buttonCount - 2)]]
      })
    }

    if (this.state.buttonCount === 2) {
      this.setState({
        buttonCount: (this.state.buttonCount - 1),
        oneVillain: [this.state.villains[(this.state.buttonCount - 2)]]
      })
    }

    if (this.state.buttonCount === 1) {
      this.setState({
        buttonCount: (this.state.buttonCount - 1),
        oneVillain: []
      })
    }

  }


  render() {
    return (
      <div className="App">
        <div className="switcher">
          <MinusButton btnMinusClick={this.minusButtonOnClickHandler} />
          <AddButton btnClick={this.addButtonOnClickHandler} />
          <Villains villain={this.state.oneVillain} />
        </div>
      </div>
    );
  }
}


export default App;