import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import ParticlesBg from "./Component/particles/particles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ParticlesBg />
    <App />
  </React.StrictMode>
);
