import React from 'react';
import './containers/CountriesContainer.css';
import CountriesContainer from './containers/CountriesContainer';

function App() {
  return (
    <div className="App">
      <h1>Countries of the World</h1>
      <hr/>
     <CountriesContainer />
    </div>
  );
}

export default App;
