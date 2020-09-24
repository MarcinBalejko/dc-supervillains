import React, { Component } from "react";
import Villains from "./components/Villains";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import AddButton from "./components/AddButton";
import MinusButton from "./components/MinusButton";
import Arrow from "./components/Arrow";
import "./App.css";
import axios from "axios";
import Content2 from "./components/Content2";
import Footer2 from "./components/Footer2";
import Header3 from "./components/Header3";
import CharacterNameCard from "./components/CharacterNameCard";
import CharacterDescriptionCard from "./components/CharacterDescriptionCard";
import CharacterPowerCard from "./components/CharacterPowerCard";
import CharacterEnemyCard from "./components/CharacterEnemyCard";
import Footer3 from "./components/Footer3";

class App extends Component {
  state = {
    villains: [],
    oneVillain: [],
    buttonCount: 0,
  };

  componentDidMount() {
    axios
      .get("https://supervillains-react.herokuapp.com/villains")
      .then((res) => {
        const villains = res.data;

        this.setState({
          villains,
        });
      });
  }

  addButtonOnClickHandler = (e) => {
    e.preventDefault();

    if (this.state.buttonCount < 4) {
      this.setState({
        oneVillain: [this.state.villains[this.state.buttonCount]],
        buttonCount: this.state.buttonCount + 1,
      });
    } else if (this.state.buttonCount === 4) {
      this.setState({
        oneVillain: [this.state.villains[this.state.buttonCount]],
        buttonCount: this.state.buttonCount + 1,
      });
    }
  };

  // below needs refactoring

  minusButtonOnClickHandler = (e) => {
    e.preventDefault();

    if (this.state.buttonCount === 5) {
      this.setState({
        buttonCount: this.state.buttonCount - 1,
        oneVillain: [this.state.villains[this.state.buttonCount - 2]],
      });
    }

    if (this.state.buttonCount === 4) {
      this.setState({
        buttonCount: this.state.buttonCount - 1,
        oneVillain: [this.state.villains[this.state.buttonCount - 2]],
      });
    }

    if (this.state.buttonCount === 3) {
      this.setState({
        buttonCount: this.state.buttonCount - 1,
        oneVillain: [this.state.villains[this.state.buttonCount - 2]],
      });
    }

    if (this.state.buttonCount === 2) {
      this.setState({
        buttonCount: this.state.buttonCount - 1,
        oneVillain: [this.state.villains[this.state.buttonCount - 2]],
      });
    }

    if (this.state.buttonCount === 1) {
      this.setState({
        buttonCount: this.state.buttonCount - 1,
        oneVillain: [],
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div id="real_body">
          <div id="logo">
            <Logo />
          </div>
          <div className="nav">
            <Navbar />
          </div>
          <div id="header">
            <Header />
          </div>
          <div id="content-background" className="content">
            <div className="gallery-container">
              <div className="minus">
                <MinusButton btnMinusClick={this.minusButtonOnClickHandler} />
              </div>
              <p className="select">SELECT</p>
              <div className="the-pic">
                <Villains villain={this.state.oneVillain} />
              </div>
              <div className="plus">
                <AddButton btnClick={this.addButtonOnClickHandler} />
              </div>
            </div>
          </div>
          <div className="footer">
            <Arrow />
          </div>
          <Header2 />
          <Content2 />
          <Footer2 />
          <Header3 />
          <div id="third-content-background" class="third-content">
            <div class="centered">
              <section id="cards-to-show" class="cards">
                <CharacterNameCard villain={this.state.oneVillain} />
                <CharacterDescriptionCard villain={this.state.oneVillain} />
                <CharacterPowerCard villain={this.state.oneVillain} />
                <CharacterEnemyCard villain={this.state.oneVillain} />
              </section>
            </div>
          </div>
          <Footer3 />
        </div>
      </div>
    );
  }
}

export default App;
