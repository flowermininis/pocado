import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import HeaderComponent from "./HeaderComponent";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import BasketPage from "./pages/BasketPage";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
