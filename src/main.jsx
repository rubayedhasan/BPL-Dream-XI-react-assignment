import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*  root */}
    <App />

    {/* toast container to show toast  */}
    <ToastContainer
      theme={"colored"}
      autoClose={3000}
      closeOnClick={true}
      pauseOnHover={false}
      draggable={true}
    />
  </StrictMode>
);
