import React, { Component } from 'react';
import power from '../images/power.svg';

class CharacterPowerCard extends Component {
    render() {
        return this.props.villain.map((character) => (
            <article id="power-card" class="card">
                <p> {character.power} </p>
                <div id="power-image">
                    <img src={power} alt="" />
                </div>
                <div id="power-name">
                    <p>super power</p>
                </div>
            </article>
        ));
    }
}

export default CharacterPowerCard;
