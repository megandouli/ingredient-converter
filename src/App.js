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
      <div className="App-footer">
        <p className="w-50 m-auto p-4">
          Note: conversions are approximate because ingredients from different
          brands vary in density. Conversion rates taken from
          https://www.thecalculatorsite.com/cooking/cups-grams.php and
          https://www.kingarthurflour.com/learn/ingredient-weight-chart."
        </p>
      </div>
    </div>
  );
}

export default App;
