import React, { useEffect } from "react";
import Autocomplete from "./Autocomplete";
import useSWR from 'swr';

function App() {
  const fetcher = (url) => fetch(url).then(res => res.json())
  const { data, error } = useSWR('https://api.github.com/users', fetcher)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Typeahead without any libs
        </p>
        <div>
          <h1>React Autocomplete Demo</h1>
          <Autocomplete suggestions={ data }/>
        </div>
      </header>
    </div>
  );
}

export default App;
