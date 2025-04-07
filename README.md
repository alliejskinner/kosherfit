# KosherFit

KosherFit is a web application built to help observant Jews manage their meal planning, track their nutrition, and follow dietary laws (kashrut) with ease. The app allows users to create meal plans that align with their specific kosher dietary preferences, track calories and macronutrients, and get reminders for Shabbat preparations.

## Features

- **Bilingual**: Available in both English and Hebrew for a diverse user base.
- **Meal Planning**: Helps you plan meals based on your calorie and macronutrient goals (protein, carbs, fats).
- **Kosher Compliance**: Ensures meals follow the rules of kashrut, including meat/dairy separation and other kosher dietary laws.
- **Shabbat Prep Reminders**: Sends alerts to help with Shabbat meal preparation, including reminders for when to stop cooking before Shabbat begins.
- **Interactive Shopping List**: Generates a shopping list based on the meals you select and lets you filter ingredients by categories such as dairy, meat, gluten-free, etc.
- **User Preferences**: Allows users to customize their meal plan based on personal goals, dietary restrictions, and kosher preferences.

## Technologies Used

- **React**: Frontend JavaScript framework for building the user interface.
- **React Router**: For navigation and routing between pages.
- **npm**: Package manager used to manage dependencies.
- **CSS**: Custom styling for the app layout and theme.
- **Twilio**: To send alerts for Shabbat prep reminders (future implementation).

## Setup and Installation

### Prerequisites

- **Node.js** and **npm** installed on your machine. If you don't have them, you can install them from [here](https://nodejs.org/).
- Git for version control. If you don't have it installed, download it from [here](https://git-scm.com/).

### Installation

1. **Clone the repository** to your local machine:

    ```bash
    git clone https://github.com/yourusername/kosherfit.git
    ```

2. **Navigate into the project directory**:

    ```bash
    cd kosherfit
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Start the development server**:

    ```bash
    npm start
    ```

    This will open the app in your default browser at `http://localhost:3000`.

## File Structure

kosherfit/ ├── public/ │ ├── index.html │ └── favicon.ico ├── src/ │ ├── components/ │ │ ├── MealPlans.js │ │ ├── DashboardView.js │ │ └── ErrorBoundary.js │ ├── App.js │ ├── index.js │ ├── styles/ │ │ └── app.css ├── .gitignore ├── package.json └── README.md



