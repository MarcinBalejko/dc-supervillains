import React, { Component } from 'react';

class CharacterNameCard extends Component {
    render() {
        return this.props.villain.map((villain) => (
            <article id="character-card" className="card">
                <div id="character-name">
                    <p>{villain.name}</p>
                </div>
            </article>

        ));
    }
}

export default CharacterNameCard;





