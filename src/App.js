import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
 import Login from "./components/Login";
 import Signup from "./components/Signup";
 import Forgot from "./components/Forgot";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/Forgot" element={<Forgot />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
