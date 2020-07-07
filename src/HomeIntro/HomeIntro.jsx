import React, { Component } from "react";
import "./HomeIntro.css";

export class HomeIntro extends Component {
  render() {
    return (
      <div className="headingText">
        <div style={{ visibility: "hidden" }}>
          <img
            src="https://s3.ap-south-1.amazonaws.com/145east.com-files/images/static/logo_png.png"
            alt="145east logo"
            style={{ width: 160, height: 59 }}
          />
        </div>
        <div className="headingPrimaryText">GAMCHA</div>
        <div className="headingSecondaryText">COLLECTION</div>
      </div>
    );
  }
}

export default HomeIntro;
