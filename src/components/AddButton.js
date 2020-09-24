import React, { Component } from "react";

class AddButton extends Component {
  render() {
    return (
      <button className="add-btn" onClick={this.props.btnClick}>
        <i className="fas fa-chevron-right fa-2x"></i>
      </button>
    );
  }
}

export default AddButton;
