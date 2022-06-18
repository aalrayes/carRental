import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Nav />
      <App />
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
);
