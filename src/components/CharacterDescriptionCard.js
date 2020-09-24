import React, { Component } from "react";

class CharacterDescriptionCard extends Component {
  render() {
    return this.props.villain.map((character) => (
      <div id="description-card">
        <div id="description-container">
          <p id="description-name">{character.description}</p>
        </div>
        <div id="description-title-container">
          <p id="character-description-p">Character description</p>
        </div>
      </div>
    ));
  }
}

export default CharacterDescriptionCard;
