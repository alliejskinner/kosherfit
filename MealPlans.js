// src/MealPlans.js
import React, { useState } from 'react';

function MealPlans({ calories, proteinGoal, carbGoal, fatGoal }) {
  console.log("MealPlans component is rendering");  // Debugging log

  const sampleMeals = [
    {
      name: "Shakshuka",
      ingredients: ["eggs", "tomatoes", "onion", "garlic", "spices"],
      kosherType: "dairy",
      vegetarian: true,
      glutenFree: true,
      prepTime: 20
    },
    {
      name: "Chicken Soup",
      ingredients: ["chicken", "carrots", "celery", "onion", "water"],
      kosherType: "meat",
      vegetarian: false,
      glutenFree: true,
      prepTime: 90
    },
    {
      name: "Mujadara",
      ingredients: ["lentils", "rice", "onions", "spices"],
      kosherType: "pareve",
      vegetarian: true,
      glutenFree: true,
      prepTime: 45
    }
  ];

  const [mealPlan, setMealPlan] = useState([]);

  const addMealToPlan = (meal) => {
    setMealPlan((prevPlan) => [...prevPlan, meal]);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📅 Meal Plans</h2>
      <p>Target Calories: {calories}</p>
      <p>Protein Goal: {proteinGoal}g</p>
      <p>Carb Goal: {carbGoal}g</p>
      <p>Fat Goal: {fatGoal}g</p>

      <h3>Available Meals:</h3>
      <ul>
        {sampleMeals.map((meal, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <strong>{meal.name}</strong> ({meal.kosherType}) - Prep time: {meal.prepTime} minutes
            <br />
            Ingredients: {meal.ingredients.join(", ")}
            <button
              onClick={() => addMealToPlan(meal)}
              style={{ marginLeft: '1rem', padding: '5px 10px', backgroundColor: '#008080', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}
            >
              Add to Meal Plan
            </button>
          </li>
        ))}
      </ul>

      <h3>Your Meal Plan:</h3>
      <ul>
        {mealPlan.map((meal, index) => (
          <li key={index}>
            {meal.name} ({meal.kosherType}) - Prep time: {meal.prepTime} minutes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealPlans;


