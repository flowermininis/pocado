import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import HeaderComponent from "./HeaderComponent";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import HomePage from "./HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/"></Route>
          <Route element={<SignIn />} path="/sign-in"></Route>
          <Route element={<SignUp />} path="/sign-up"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
