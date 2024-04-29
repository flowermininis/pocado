import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import BasketPage from "./pages/BasketPage";
import UserProfile from "./pages/UserProfile";
import UserEdit from "./pages/UserEdit";
import NewListing from "./pages/NewListing";
import PublicUserProfile from "./pages/PublicUserProfile";
import ListingDetails from "./pages/ListingDetails";
import SearchResults from "./pages/SearchResults";
import PhotocardListings from "./pages/PhotocardListings";
import HolderListings from "./pages/HolderListings";
import SleeveListings from "./pages/SleeveListings";
import BinderColbukListings from "./pages/BinderColbukListings";
import ToploaderListings from "./pages/ToploaderListings";

function App() {
  return (
    <div id="app-div">
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/"></Route>
          <Route element={<SignIn />} path="/sign-in"></Route>
          <Route element={<SignUp />} path="/sign-up"></Route>
          <Route element={<FavoritesPage />} path="/favorites"></Route>
          <Route element={<BasketPage />} path="/basket"></Route>
          <Route element={<UserProfile />} path="/my-account"></Route>
          <Route element={<UserEdit />} path="/edit-profile"></Route>
          <Route element={<NewListing />} exact path="/new-listing"></Route>
          <Route element={<PublicUserProfile />} path="/user/:id"></Route>
          <Route element={<ListingDetails />} path="/listings/:id"></Route>
          <Route element={<SearchResults />} path="/search/"></Route>
          <Route
            element={<PhotocardListings />}
            path="/categories/photocards"
          ></Route>
          <Route
            element={<HolderListings />}
            path="/categories/photocard-holders"
          ></Route>
          <Route
            element={<SleeveListings />}
            path="/categories/photocard-sleeves"
          ></Route>
          <Route
            element={<BinderColbukListings />}
            path="/categories/binders-collect-books"
          ></Route>
          <Route
            element={<ToploaderListings />}
            path="/categories/toploaders"
          ></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
