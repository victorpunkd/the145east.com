import React, { Component } from "react";
import "./SpecialMessage.css";

export class SpecialMessage extends Component {
  render() {
    return (
      <div
        className="specialMessageContainer"
        style={{ color: this.props.color }}
      >
        Due to the present situation, all deliveries will be made from 3rd of
        May 2020 onwards.
      </div>
    );
  }
}

export default SpecialMessage;
