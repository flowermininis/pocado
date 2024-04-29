import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { useSelector } from "react-redux";
import "./FavoritesPage.css";

function FavoritesPage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <body>
      <HeaderComponent></HeaderComponent>
      <div id="fv-pg-bdy">
        {user ? (
          <h1 id="fv-hdr">Favorites</h1>
        ) : (
          <div>
            <h1>You must be logged in to see your favorite posts!</h1>
          </div>
        )}
      </div>
      <FooterComponent></FooterComponent>
    </body>
  );
}

export default FavoritesPage;
