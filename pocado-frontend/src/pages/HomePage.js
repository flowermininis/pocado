import "./HomePage.css";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { useSelector } from "react-redux";
import "swiper/element/css/autoplay";

function HomePage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <body id="home-body">
      <HeaderComponent></HeaderComponent>
      <br></br>
      <div id="slides-cont">
        <swiper-container
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#ff528e",
          }}
          effect="slide"
          pagination="true"
          pagination-clickable="true"
          navigation="true"
          loop="true"
          autoplay-delay="5000"
          autoplay-disable-on-interaction="false"
        >
          <swiper-slide>
            <img src={require("../images/melokuro_merch.jpg")}></img>
          </swiper-slide>
          <swiper-slide>
            {" "}
            <img src={require("../images/pink_clover_keyring.jpg")}></img>
          </swiper-slide>
          <swiper-slide>
            {" "}
            <img src={require("../images/bow_keychains.jpg")}></img>
          </swiper-slide>
          <swiper-slide>
            {" "}
            <img src={require("../images/heart_photo_holder.jpg")}></img>
          </swiper-slide>
          <swiper-slide>
            {" "}
            <img src={require("../images/honeyworks_keychain.jpg")}></img>
          </swiper-slide>
          <swiper-slide>
            {" "}
            <img src={require("../images/jimin_pcs.jpg")}></img>
          </swiper-slide>
        </swiper-container>
      </div>
      <div id="home-h-div">
        {user ? (
          <h1>Welcome back, {user.username}!</h1>
        ) : (
          <h1>Welcome to Pocado!</h1>
        )}
      </div>
      <div id="cat-btns-div">
        <div>
          <h1>Shop by different categories:</h1>
        </div>
        <div>
          <a href="/categories/photocards">
            <button className="home-cat-btn">Photocards</button>
          </a>
          <a href="/categories/photocard-holders">
            <button className="home-cat-btn">Photocard holders</button>
          </a>
          <a href="/categories/photocard-sleeves">
            <button className="home-cat-btn">Photocard sleeves</button>
          </a>
          <a href="/categories/binders-collect-books">
            <button className="home-cat-btn">Binders/collect books</button>
          </a>
          <a href="/categories/toploaders">
            <button className="home-cat-btn">Toploaders</button>
          </a>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </body>
  );
}
export default HomePage;
