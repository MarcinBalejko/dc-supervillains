import React, { Component } from "react";

class CharacterNameCard extends Component {
  render() {
    return this.props.villain.map((character) => (
      <article id="character-card" className="card">
        <img id="character-card-picture" src={character.secondpicture} alt="" />
        <div id="character-name">
          <p id="character-name-p">{character.name}</p>
        </div>
      </article>
    ));
  }
}

export default CharacterNameCard;
