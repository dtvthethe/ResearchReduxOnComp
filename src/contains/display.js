import React, { Component } from "react";
import { connect } from "react-redux";

class Display extends Component {
  componentDidMount() {
    console.log("Did mount: " + this.props.num);
  }

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
    num: state.data,
  };
}

export default connect(mapStateToProps)(Display);
