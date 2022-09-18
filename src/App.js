import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York" />
      <a
        href="https://github.com/Rae40/weather-project-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open-source coded
      </a>{" "}
      by Renee Christian
    </div>
    </div>
  );}