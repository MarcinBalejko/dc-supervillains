import React, { Component } from 'react';

class Villains extends Component {
    render() {
        return this.props.villain.map((character) => (
            <img id="villain-pic" src={character.picture} />
        ));
    }
}

export default Villains;