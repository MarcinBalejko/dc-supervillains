import React, { Component } from 'react';
import card from '../images/card.png';


class CharacterDescriptionCard extends Component {
    render() {
        return this.props.villain.map((character) => (
            <div class="flip3D">
                <div class="front">
                    <article><img src={card} alt="" /></article>
                </div>
                <div class="back">
                    <article></article>
                    <div id="enemy-name">
                        <p>arch enemy</p>
                    </div>
                </div>
            </div>

        ));
    }
}

export default CharacterDescriptionCard;





