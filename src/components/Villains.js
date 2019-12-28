import React, { Component } from 'react';

class Villains extends Component {
    render() {
        return this.props.villain.map((character) => (
            <li>
                <img src={character.picture} />
            </li>
        ));
    }
}

export default Villains;