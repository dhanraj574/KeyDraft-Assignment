import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Help from './Help';
import Branch from './Branch';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/master/branch" element={<Branch/>}/>
        <Route exact path="/help" element={<Help/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
