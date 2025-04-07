// src/DashboardView.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';  // Import necessary components from react-router-dom
import MealPlans from './MealPlans';  // Your MealPlans component

function DashboardView() {
  return (
    <div style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/meals" style={{ marginRight: '1rem' }}>Meals</Link>
        <Link to="/shopping-list">Shopping List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<div>Welcome to KosherFit Home Page</div>} />
        <Route path="/dashboard" element={<div>Dashboard Content</div>} />
        <Route path="/meals" element={<MealPlans calories={2000} proteinGoal={150} carbGoal={200} fatGoal={70} />} />
      </Routes>
    </div>
  );
}

export default DashboardView;
