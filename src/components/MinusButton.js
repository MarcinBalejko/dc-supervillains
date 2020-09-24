import React, { Component } from "react";

class MinusButton extends Component {
  render() {
    return (
      <button className="minus-btn" onClick={this.props.btnMinusClick}>
        <i class="fas fa-chevron-left fa-2x"></i>
      </button>
    );
  }
}

export default MinusButton;
