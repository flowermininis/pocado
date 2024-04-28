import React from "react";
import "./HeaderComponent.css";
import basket_shopping_solid from "../icons/basket_shopping_solid.svg";
import heart_solid from "../icons/heart_solid.svg";
import logo_test from "../logos/logo_test.png";
import user_solid from "../icons/user_solid.svg";
import magnifying_glass_solid from "../icons/magnifying_glass_solid.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useState, useEffect, useRef } from "react";

function HeaderComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  const searchSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });

    navigate("/search?q=" + encodeURIComponent(searchQuery));
  };

  const searchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav className="header-area">
      <div className="header-tag">
        <div className="logo-div-hdr">
          <a href="/">
            <img id="logo-png-header" src={logo_test} />
          </a>
        </div>
        <form onSubmit={searchSubmit} className="search-div">
          <input
            type="search"
            className="search-bar"
            placeholder="what can we help you with?"
            value={searchQuery}
            onChange={searchChange}
            name="q"
          ></input>
          {/* <a href="/search"> */}
          <button
            type="submit"
            id="srch-btn"
            className="header-buttons hdr-ico"
          >
            <img className="hdr-ico-svg" src={magnifying_glass_solid} />
          </button>
          {/* </a> */}
          <div></div>
        </form>
        <div id="buttons">
          <ul className="button-div">
            {user ? (
              <>
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
                      <img
                        className="hdr-ico-svg"
                        src={basket_shopping_solid}
                      />
                    </button>
                  </a>
                </li>
                <div className="dropdown" ref={menuRef}>
                  <li
                    className="nav-buttons"
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    <button className="header-buttons hdr-ico" id="acct-btn">
                      <img className="hdr-ico-svg" src={user_solid} />
                    </button>
                  </li>
                  <div
                    id="dropdown-menu"
                    className={`dropdown-content ${
                      open ? "active" : "inactive"
                    }`}
                  >
                    <a href="/my-account">My Account</a>
                    <a href="/account-settings">Account Settings</a>
                    <a onClick={onLogout}>Log Out</a>
                  </div>
                </div>
                <li className="nav-buttons acc-btn">
                  <a href="/new-listing">
                    <button id="sell-btn" className="header-buttons acc-btn">
                      Sell
                    </button>
                  </a>
                </li>
              </>
            ) : (
              <>
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
                      <img
                        className="hdr-ico-svg"
                        src={basket_shopping_solid}
                      />
                    </button>
                  </a>
                </li>
                <li className="nav-buttons acc-btn">
                  <a href="/sign-up">
                    <button
                      id="signup-button"
                      className="header-buttons acc-btn"
                    >
                      Sign Up
                    </button>
                  </a>
                </li>
                <li className="nav-buttons acc-btn">
                  <a href="/sign-in">
                    <button
                      id="login-button"
                      className="header-buttons acc-btn"
                    >
                      Sign In
                    </button>
                  </a>
                </li>
                <li className="nav-buttons acc-btn">
                  <a href="/sign-up">
                    <button className="header-buttons acc-btn">Sell</button>
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;
