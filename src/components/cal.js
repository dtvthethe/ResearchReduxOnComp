import React, { Component } from "react";
import Display from "../contains/display";
import ButtonCal from "../contains/button_cal";

class Cal extends Component {
  render() {
    return (
      <div>
        <h3>Nana</h3>
        <Display />
        <ButtonCal />
      </div>
    );
  }
}

export default Cal;
