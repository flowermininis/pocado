import React from "react";
import "./BasketPage.css";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

function BasketPage() {
  return (
    <body>
      <HeaderComponent className="navbar-bsk" />
      <div id="bsk-pg-bdy">
        <h1 id="bsk-hdr">Basket</h1>
      </div>
      <FooterComponent></FooterComponent>
    </body>
  );
}

export default BasketPage;
