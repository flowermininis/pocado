import React, { Component } from "react";
import "./HeaderComponent.css";
import basket_shopping_solid from "../icons/basket_shopping_solid.svg";
import heart_solid from "../icons/heart_solid.svg";
import logo_test from "../logos/logo_test.png";
import magnifying_glass_solid from "../icons/magnifying_glass_solid.svg";

export class HeaderComponent extends Component {
  render() {
    return (
      <nav className="header-area">
        <div className="header-tag">
          <div className="logo-div-hdr">
            <a href="/">
              <img id="logo-png-header" src={logo_test} />
            </a>
          </div>
          <div className="search-div">
            <input
              type="search"
              className="search-bar"
              placeholder="what can we help you with?"
            ></input>
            {/* <button className="search-button">
            <img className="" src={magnifying_glass_solid} />
          </button> */}
          </div>
          <div id="buttons">
            <ul className="button-div">
              <li className="nav-buttons">
                <a href="/favorites">
                  <button className="header-buttons hdr-ico">
                    <img className="hdr-ico-svg" src={heart_solid} />
                  </button>
                </a>
              </li>
              <li className="nav-buttons">
                <a href="/basket">
                  <button className="header-buttons hdr-ico">
                    <img className="hdr-ico-svg" src={basket_shopping_solid} />
                  </button>
                </a>
              </li>
              <li className="nav-buttons acc-btn">
                <a href="/sign-up">
                  <button id="signup-button" className="header-buttons acc-btn">
                    Sign Up
                  </button>
                </a>
              </li>
              <li className="nav-buttons acc-btn">
                <a href="/sign-in">
                  <button id="login-button" className="header-buttons acc-btn">
                    Log In
                  </button>
                </a>
              </li>
              <li className="nav-buttons acc-btn">
                <button className="header-buttons acc-btn">Sell</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
// export default HeaderComponent;
