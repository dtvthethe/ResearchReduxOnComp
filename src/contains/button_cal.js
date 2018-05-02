import React, { Component } from "react";
import { connect } from "react-redux";
import { plush, sub } from "../actions";

class ButtonCal extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.tang;
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.giam;
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    tang: dispatch(plush(1)),
    giam: dispatch(sub(1)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCal);
