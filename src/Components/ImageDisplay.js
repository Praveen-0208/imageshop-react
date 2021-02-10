import React, { Component } from "react";
import { FaPlusCircle, FaTrash } from "react-icons/fa";

class ImageDisplay extends Component {
  constructor() {
    super();
    this.state = {
      flag: "undefined",
    };
  }

  addToCart(photo) {
    this.props.addPhoto(photo);
    this.setState({ flag: "remove" });
  }

  removeFromCart(photoId) {
    this.props.removePhoto(photoId);
    this.setState({ flag: "add" });
  }

  render() {
    return (
      <div id="imagediv" key={this.props.photo.id}>
        <img
          className="mb-2"
          src={this.props.photo.source}
          style={{ width: "100%" }}
          alt="..."
        />
        <div className="col-6 offset-3 mb-3 buttons">
          <p
            className="text-center"
            style={{
              textShadow: "1px 4px 4px rgba(0, 0, 0, 0.73)",
            }}
          >
            &#8377;{this.props.photo.price}
          </p>
        </div>
        {this.state.flag === "remove" ? (
          <div className="col-8 offset-2 mb-3 buttons">
            <button
              className="btn btn-block btn-outline-warning"
              style={{
                boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.73)",
              }}
              onClick={() => {
                this.removeFromCart(this.props.photo.id);
              }}
            >
              <p className="text-center">
                Remove From Cart
                <FaTrash
                  style={{
                    marginLeft: "10px",
                    color: "#76a7c5",
                    transform: "scale(1.2)",
                  }}
                />
              </p>
            </button>
          </div>
        ) : (
          <div className="col-8 offset-2 mb-3 buttons">
            <button
              className="btn btn-block btn-outline-success"
              style={{
                boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.73)",
              }}
              onClick={() => {
                this.addToCart(this.props.photo);
              }}
            >
              <p className="text-center">
                Add To Cart
                <FaPlusCircle
                  style={{
                    marginLeft: "10px",
                    color: "#76a7c5",
                    transform: "scale(1.2)",
                  }}
                />
              </p>
            </button>
          </div>
        )}
        <div className="col-10 offset-1 mb-3 buttons">
          <p className="text-muted text-center">{this.props.photo.artist}</p>
        </div>
      </div>
    );
  }
}

export default ImageDisplay;
