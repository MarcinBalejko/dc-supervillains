import React, { Component } from 'react';

class Villains extends Component {
    render() {
        return this.props.villain.map((character) => (
            <div className="villain-pic-box"><img id="villain-pic" src={character.picture} /></div>
        ));
    }
}

export default Villains;