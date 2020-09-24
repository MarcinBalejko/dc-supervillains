import React, { Component } from "react";

class Villains extends Component {
  render() {
    return this.props.villain.map((character) => (
      <div id="villain-card-name">
        <img id="villain-pic" src={character.picture} alt="SELECT VILLAIN" />
        <div id="char-name">
          <p id="char-name-p">{character.name}</p>
        </div>
      </div>
    ));
  }
}

export default Villains;
