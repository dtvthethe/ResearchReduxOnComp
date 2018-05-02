import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { plush, sub } from "../actions";

class ButtonCal extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.tang();
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.giam();
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
    tang: () => dispatch(plush()),
    giam: () => dispatch(sub()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCal);
