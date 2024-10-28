import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Feed from './pages/Feed';
import Statistics from './pages/Statistics';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Feed</Link>
        <Link to="/stats">Statistics</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/stats" element={<Statistics />} />
      </Routes>
    </div>
  );
}

export default App;
