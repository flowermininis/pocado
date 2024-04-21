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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/"></Route>
          <Route element={<SignIn />} path="/sign-in"></Route>
          <Route element={<SignUp />} path="/sign-up"></Route>
          <Route element={<FavoritesPage />} path="/favorites"></Route>
          <Route element={<BasketPage />} path="/basket"></Route>
          <Route element={<UserProfile />} path="/my-account"></Route>
          <Route element={<UserEdit />} path="/edit-profile"></Route>
          <Route element={<NewListing />} path="/new-listing"></Route>
          <Route element={<PublicUserProfile />} path="/user/:id"></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
