import React, { Component } from 'react';

class AddButton extends Component {

    render() {
        return (
            <button className="add-btn" style={addBtn} onClick={this.props.btnClick}> Next </button>
        )

    }
}

const addBtn = {

    background: 'black',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}


export default AddButton;