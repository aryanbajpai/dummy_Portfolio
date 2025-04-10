import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BG1 from './backgrounds/BG1/BG1';
import Portfolio from './backgrounds/BG3/Portfolio';
import Portfolio2 from './backgrounds/Portfolio/Portfolio2.jsx';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<BG1 />} />
            <Route exact path='/2' element={<Portfolio2 />} />
            <Route exact path='/3' element={<Portfolio />} />
        </Routes>
    </Router>
  )
}

export default App;