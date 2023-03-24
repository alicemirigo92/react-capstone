import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Details from './Components/detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/country/:country" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
