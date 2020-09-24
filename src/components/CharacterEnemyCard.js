import React, { Component } from "react";
import card from "../images/card.png";

class CharacterEnemyCard extends Component {
  render() {
    return this.props.villain.map((character) => (
      <div class="flip3D">
        <div class="front">
          <article>
            <img src={card} alt="" />
          </article>
        </div>
        <div class="back">
          <img id="villain-enemy-pic" src={character.enemypicture} alt="" />

          <div id="enemy-name">
            <p id="enemy-name-p">Arch-enemy: {character.enemy}</p>
          </div>
        </div>
      </div>
    ));
  }
}

export default CharacterEnemyCard;
