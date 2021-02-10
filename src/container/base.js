import React, { Component } from "react";
import { connect } from "react-redux";
import Base from "../Components/Base";

class BaseContainer extends Component {
  render() {
    return <Base {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps, null)(BaseContainer);
