import { removeItem } from "../Actions/cartActions";
import { connect } from "react-redux";
import Cart from "../Components/Cart";
import React, { Component } from "react";

class CartContainer extends Component {
  render() {
    return <Cart {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removePhoto: (id) => {
      dispatch(removeItem(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
