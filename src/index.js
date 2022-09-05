import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />

      <a href="https://github.com/Rae40/weather-project-react">Open-source coded</a> by Renee Christian
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
