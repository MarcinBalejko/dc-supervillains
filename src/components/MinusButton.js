import React, { Component } from 'react';

class MinusButton extends Component {

    render() {
        return (
            <button onClick={this.props.btnMinusClick}>-Button</button>
        )

    }
}


export default MinusButton;