import HeaderComponent from "../components/HeaderComponent";
import "./HomePage.css";
import "swiper/element/css/autoplay";

function HomePage() {
  return (
    <body>
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
          <swiper-slide lazy="true">
            <img
              loading="lazy"
              src={require("../images/melokuro_merch.jpg")}
            ></img>
          </swiper-slide>
          <swiper-slide lazy="true">
            {" "}
            <img
              loading="lazy"
              src={require("../images/pink_clover_keyring.jpg")}
            ></img>
          </swiper-slide>
          <swiper-slide lazy="true">
            {" "}
            <img
              loading="lazy"
              src={require("../images/bow_keychains.jpg")}
            ></img>
          </swiper-slide>
          <swiper-slide lazy="true">
            {" "}
            <img
              loading="lazy"
              src={require("../images/heart_photo_holder.jpg")}
            ></img>
          </swiper-slide>
          <swiper-slide lazy="true">
            {" "}
            <img
              loading="lazy"
              src={require("../images/honeyworks_keychain.jpg")}
            ></img>
          </swiper-slide>
          <swiper-slide lazy="true">
            {" "}
            <img loading="lazy" src={require("../images/jimin_pcs.jpg")}></img>
          </swiper-slide>
        </swiper-container>
      </div>
    </body>
  );
}
export default HomePage;
