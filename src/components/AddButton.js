import React, { Component } from 'react';

class AddButton extends Component {

    render() {
        return (
            <button className="btn" style={addBtn} onClick={this.props.btnClick}> Next </button>
        )

    }
}

const addBtn = {

    background: 'black',
    color: '#fff',
    textAlign: 'right',
    padding: '10px'
}


export default AddButton;