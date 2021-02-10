import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../Actions/cartActions";
import ImageDisplay from "../Components/ImageDisplay";

class ImageDisplayContainer extends Component {
  render() {
    return <ImageDisplay {...this.props} />;
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
    addPhoto: (photo) => {
      dispatch(addItem(photo));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageDisplayContainer);
