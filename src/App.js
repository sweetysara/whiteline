import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import EditCar from './components/editcar';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/editcar" element={<EditCar />} />
      </Routes>
    </Router>
  );
}

export default App;
