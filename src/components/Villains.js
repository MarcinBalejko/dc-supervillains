import React, { Component } from 'react';

class Villains extends Component {
    render() {
        return this.props.villains.map((villain) => (
            <li><p>{villain.name}</p>
                <p> {villain.description} </p>
                <p> {villain.power} </p>
                <p> {villain.identity} </p>
                <p> {villain.enemy} </p>
                <img src={villain.picture} />
            </li>
        ));
    }
}

export default Villains;