import React, { Component } from "react";
import "./Logo.css";

export class Logo extends Component {
  render() {
    return (
      <div>
        <img
          src="https://s3.ap-south-1.amazonaws.com/145east.com-files/images/static/logo.jpg"
          className="logo"
          alt="145 East Logo"
          onClick={this.props.logoClicked}
        />
      </div>
    );
  }
}

export default Logo;
