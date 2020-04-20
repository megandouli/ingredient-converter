import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppBody from "./Components/AppBody.js";

function App() {
  return (
    <div className="App">
      <header className="App-header m-0 p-4">
        <h1>Ingredient Converter</h1>
      </header>
      <AppBody />
    </div>
  );
}

export default App;
