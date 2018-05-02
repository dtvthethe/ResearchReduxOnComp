import React, { Component } from "react";
import { connect } from "react-redux";

class Display extends Component {
  render() {
    return (
      <div>
        <p>Number: {this.props.num}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    num: state.redu.data,
  };
}

export default connect(mapStateToProps)(Display);
