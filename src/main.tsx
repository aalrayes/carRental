import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CarDetails from "./components/CarDetails";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import NotFound from "./components/layout/NotFound";
import CarContext from "./context/CarContext";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Nav />
      <App />
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
);
