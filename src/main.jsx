import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/main.scss";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={1000}
      theme="dark"
      style={{ fontSize: "2rem", textTransform: "capitalize" }}
    />
  </StrictMode>
);
