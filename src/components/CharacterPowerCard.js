import React from 'react';
import power from '../images/power.svg';

function CharacterPowerCard() {
    return (
        <article id="power-card" class="card">
            <p>Uses Venom which grants him superhuman strength and healing process.</p>
            <div id="power-image">
                <img src={power} alt="" />
            </div>
            <div id="power-name">
                <p>super power</p>
            </div>
        </article>
    )
}

export default CharacterPowerCard;