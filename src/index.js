import { createRoot, creteRoot } from "react-dom/client";
import React from "react";
import App from "./App";

const root = document.getElementById("root");
const rootElement = createRoot(root);
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
