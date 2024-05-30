import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from "./components/SinglePage/SinglePage";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
