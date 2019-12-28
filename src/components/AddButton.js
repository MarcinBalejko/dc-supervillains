import React, { Component } from 'react';

class AddButton extends Component {

    render() {
        return (
            <button onClick={this.props.btnClick}>Button</button>
        )

    }
}


export default AddButton;