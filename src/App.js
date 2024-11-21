import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
