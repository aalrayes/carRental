import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CarDetails from "./components/CarDetails";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import NotFound from "./components/layout/NotFound";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details" element={<CarDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
);
