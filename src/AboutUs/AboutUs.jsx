import React, { Component } from "react";
import "./AboutUs.css";

export class AboutUs extends Component {
  render() {
    return (
      <div className="aboutUs">
        <div className="menu">
          <div onClick={this.props.apparelClicked} className="menuItem active">
            APPAREL
          </div>
          <div className="menuItem">FILM</div>
          <div className="menuItem">DESIGN</div>
          <div className="menuItem">MUSIC</div>
        </div>
        <div className="about">
          145 East is a creative agency based in Calcutta, India. We also make
          clothes. We' re a troupe of passionate visual bandits - outlaws of
          design who want to bring the local aesthetic of Calcutta to every day
          products . From apparel to stationery to house hold to accessories ,
          we keep churning out new things that are exciting to make. We're
          storytellers, architects, mathematics majors, graphic designers,
          illustrators, and we have a Labrador who is our marketing head and
          fulltime stress buster.
          <br />
          <br /> More importantly, we're a fun circus and our work is serious
          fun
        </div>
      </div>
    );
  }
}

export default AboutUs;
