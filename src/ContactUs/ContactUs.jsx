import React, { Component } from "react";
import "./ContactUs.css";

export class ContactUs extends Component {
  render() {
    return (
      <div className="contactUs secondaryTextFont">
        <div style={{ marginTop: 20 }}>
          <span>
            <i class="fa fa-envelope"></i>
          </span>
          <span style={{ marginLeft: 10, textAlign: "left" }}>
            +91 98310 19522
          </span>
        </div>
        <div style={{ marginTop: 20 }}>
          <span>
            <i class="fa fa-envelope"></i>
          </span>
          <span style={{ marginLeft: 10, textAlign: "left" }}>
            the145east@gmail.com
          </span>
        </div>
        <div style={{ marginTop: 20 }}>
          <span>
            <i class="fa fa-map-marker"></i>
          </span>
          <span style={{ marginLeft: 10, textAlign: "left" }}>
            145, Jodhpur Park, Kolkata, West Bengal 70068
          </span>
        </div>
      </div>
    );
  }
}

export default ContactUs;
