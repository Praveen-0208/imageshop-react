import React, { Component } from "react";
import Base from "../container/base";
import { FaTrash } from "react-icons/fa";
import tick from "../images/greentick.png";

class Cart extends Component {
  removeFromCart(photoId) {
    this.props.removePhoto(photoId);
  }

  calculateAmount() {
    let amount = 0;
    if (this.props.cart.items.length !== 0) {
      this.props.cart.items.map((photo) => {
        return (amount += photo.price);
      });
    }
    return amount;
  }

  render() {
    return (
      <Base>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Payment Successful
                  <img src={tick} alt="..." style={{ maxWidth: "50px" }} />
                </h5>
              </div>
            </div>
          </div>
        </div>
        {this.props.cart.items.length === 0 ? (
          <div className="container">
            <p className="text-center my-5 alert alert-primary">
              Cart looks empty...Lets add some photos..!!
            </p>
          </div>
        ) : (
          <>
            <div className="container-fluid">
              <div className="row mt-3">
                <div className="col-12">
                  <p className="text-center display-4">
                    Total Amount: &#8377;.{this.calculateAmount()}
                  </p>
                </div>
              </div>
            </div>
            <div className="container my-5">
              <div className="row">
                {this.props.cart.items &&
                  this.props.cart.items.map((photo, index) => {
                    return (
                      <div
                        className="col-lg-4 col-md-6 col-12 mx-auto mb-2"
                        key={index}
                      >
                        <div
                          className="card mx-auto"
                          style={{ width: "18rem", minHeight: "400px" }}
                        >
                          <img
                            className="img-thumbnail imagedisplay"
                            src={photo.source}
                            alt="Card cap"
                          />
                          <div className="card-body">
                            <p className="text-center">&#8377;{photo.price}</p>
                            <p className="text-muted">
                              <small>{photo.artist}</small>
                            </p>
                          </div>
                          <div className="card-footer">
                            <p
                              className="text-center"
                              style={{ color: "#a2afb5" }}
                            >
                              <FaTrash
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  this.removeFromCart(photo.id);
                                }}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="row">
              <div className="col-6 offset-3">
                <button
                  className="btn btn-primary btn-block mt-2"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <h4>Pay</h4>
                </button>
              </div>
            </div>
          </>
        )}
      </Base>
    );
  }
}

export default Cart;
