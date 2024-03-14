import React from "react";
import "./BasketPage.css";
import { HeaderComponent } from "../components/HeaderComponent";

function BasketPage() {
  return (
    <html>
      <body>
        <HeaderComponent className="navbar-bsk" />
        <div id="bsk-pg-bdy">
          <h1 id="bsk-hdr">Basket</h1>
        </div>
      </body>
    </html>
  );
}

export default BasketPage;
