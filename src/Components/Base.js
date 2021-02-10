import React, { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";

class Base extends Component {
  constructor() {
    super();
    this.state = {
      bgToggle: false,
    };
  }
  componentDidMount() {
    this.preload();
  }

  preload() {
    const jumbo = document.getElementById("jumbo");
    const navbar = document.getElementById("navigationbar");
    if (jumbo === null) {
      navbar.classList.remove("fixed-top");
      navbar.classList.add("navscroll");
    }
  }

  currentTab(history, path) {
    if (history.location.pathname === path) {
      return { color: "#f2f2f2" };
    } else {
      return { color: "#ffffff" };
    }
  }

  scroll() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        const navbar = document.getElementById("navigationbar");
        if (navbar !== null) {
          const jumbo = document.getElementById("jumbo");
          if (window.scrollY > 30) {
            jumbo === null
              ? navbar.classList.add("fixed-top")
              : navbar.classList.add("navscroll");
          } else {
            jumbo === null
              ? navbar.classList.remove("fixed-top")
              : navbar.classList.remove("navscroll");
          }
        }
      };
    }
  }

  navigationBar() {
    return (
      <div>
        <nav
          className="navbar w-100 navbar-expand-sm fixed-top navbar-dark"
          id="navigationbar"
        >
          <a className="navbar-brand" href="/" id="navbrand">
            <strong style={{ textShadow: "1px 4px 4px rgba(0,0,0,0.73)" }}>
              IMAGESHOP
            </strong>
          </a>
          <div>
            <Link to="/cart" className="mx-2 d-sm-none">
              <FaShoppingCart
                style={this.currentTab(this.props.history, "/cart")}
              />
              <span className="badge badge-pill badge-primary">
                {this.props.cart.items.length}
              </span>
            </Link>
            <button
              className="navbar-toggler ml-auto mx-1"
              type="button"
              onClick={() => {
                this.setState({
                  ...this.state,
                  bgToggle: !this.state.bgtoggle,
                });
              }}
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/"
                  style={this.currentTab(this.props.history, "/")}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item d-none d-sm-block">
                <Link to="/cart" className="nav-link">
                  <FaShoppingCart
                    style={this.currentTab(this.props.history, "/cart")}
                  />
                  <span
                    className="badge badge-pill badge-primary"
                    style={{ fontSize: "10px" }}
                  >
                    {this.props.cart.items.length}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

  footer() {
    return (
      <footer style={{ background: "#a2afb5" }}>
        <div className="container my-5 p-5">
          <p
            className="text-center text-white"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              textShadow: "1px 4px 4px rgba(0, 0, 0, 0.73)",
            }}
          >
            All images used here are open-source and taken from{" "}
            <a href="https://www.pexels.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
              >
                <path
                  d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
                  fill="#05A081"
                ></path>
                <path
                  d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
                  fill="#fff"
                ></path>
              </svg>
            </a>
          </p>
        </div>
      </footer>
    );
  }
  render() {
    return (
      <div>
        {this.navigationBar()}
        {this.scroll()}
        {this.props.children}
        {this.footer()}
      </div>
    );
  }
}

export default withRouter(Base);
