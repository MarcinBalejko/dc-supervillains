import React, { Component } from 'react';

class MinusButton extends Component {

    render() {
        return (
            <button className="minus-btn" style={minusBtn} onClick={this.props.btnMinusClick}>Previous</button>
        )

    }
}


const minusBtn = {

    background: 'black',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}


export default MinusButton;