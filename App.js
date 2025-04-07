// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';  // Import the ErrorBoundary
import MealPlans from './MealPlans';  // Your MealPlans component
import DashboardView from './DashboardView';  // Your DashboardView component

function App() {
  console.log("App component is rendering");  // Debugging log

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/meals">Meals</Link>
        </nav>

        {/* Wrap the Routes with the ErrorBoundary */}
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<h1>Welcome to KosherFit</h1>} />
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/meals" element={<MealPlans />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
