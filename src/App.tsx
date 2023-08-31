import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';


function App() {
  return (
      <Fragment>
          <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              

          </Routes>
      
      </Fragment>
  );
}

export default App;
