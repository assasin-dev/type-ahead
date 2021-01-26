import React from "react";
import Autocomplete from "./Autocomplete";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Typeahead without any libs
        </p>
        <div>
          <h1>React Autocomplete Demo</h1>
          <h2>Start typing and experience the autocomplete wizardry!</h2>
          <Autocomplete suggestions={ ["David Beckham", "M. Owen", "Rooney", "Leo Messi", "Cristiano Ronaldo", "Hazard", "George Best"]}/>
        </div>
      </header>
    </div>
  );
}

export default App;
