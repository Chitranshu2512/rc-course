import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Ebookndresorces from './ebookndresorces';
import User from './component/user';
import AdminDashboard from './component/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<User />} />
          <Route path="/enr" element={<Ebookndresorces />} />
          <Route path="/admin@Rcrao" element ={<AdminDashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;






