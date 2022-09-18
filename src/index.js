import React from "react";
import {createRoot} from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import App from "./App";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
