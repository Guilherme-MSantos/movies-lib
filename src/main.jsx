import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
