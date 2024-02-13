import "./HeaderComponent.css";
import basket_shopping_solid from "./icons/basket_shopping_solid.svg";
import heart_solid from "./icons/heart_solid.svg";

function HeaderComponent() {
  return (
    <header className="header-area">
      <div className="header-tag">
        <div className="logo-div"></div>
        <div className="search-div">
          <input
            className="search-bar"
            placeholder="what can we help you with?"
          ></input>
        </div>
        <div id="buttons">
          <ul className="button-div">
            <li className="nav-buttons">
              <button className="header-buttons">
                <img id="heart-icon" src={heart_solid} />
              </button>
            </li>
            <li className="nav-buttons">
              <button className="header-buttons">
                <img id="basket-icon" src={basket_shopping_solid} />
              </button>
            </li>
            <li className="nav-buttons acc-btn">
              <button id="signup-button" className="header-buttons acc-btn">
                sign up
              </button>
            </li>
            <li className="nav-buttons acc-btn">
              <button id="login-button" className="header-buttons acc-btn">
                log in
              </button>
            </li>
            <li className="nav-buttons acc-btn">
              <button className="header-buttons acc-btn">sell</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default HeaderComponent;
