# ProteinTracker

A clean and minimal web application for tracking daily protein intake and building a personalized nutrition profile.

ProteinTracker is designed around a simple idea: make daily nutrition tracking easy to understand, quick to update, and visually focused.

---

## Overview

ProteinTracker allows users to create a basic nutrition profile and track their daily protein progress.

The application currently includes:

- Nutrition profile setup
- Personal information collection
- Gender and goal selection
- Local profile persistence
- Dashboard interface
- Daily protein progress
- Calorie and meal tracking
- Consistency / streak tracking
- Progress overview

The project is being developed incrementally, with the UI/UX treated as a core part of the product.

---

## Features

### Profile Setup

Users can create a nutrition profile containing:

- Name
- Age
- Gender
- Weight
- Height
- Fitness goal

Supported goals:

- Build Muscle
- Maintain Weight
- Lose Weight

Profile information is persisted using browser `localStorage`.

### Dashboard

The dashboard provides a daily overview of:

- Protein consumption
- Daily protein goal
- Calories
- Number of meals
- Current streak
- Daily progress

### Navigation

The application is structured around:

- Dashboard
- Meals
- Progress

The navigation is designed to keep the primary nutrition workflow accessible without unnecessary complexity.

---

## Tech Stack

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts — Inter

### Backend

- Python
- Flask

### Storage

- Browser `localStorage`

### Development

- Git
- GitHub
- VS Code

---

## Project Structure

```text
ProteinTracker/
│
├── app.py
│
├── templates/
│   ├── index.html
│   └── dashboard.html
│
├── static/
│   ├── style.css
│   └── script.js
│
├── README.md
└── requirements.txt

Application Flow
User
 │
 ▼
Profile Setup
 │
 ├── Name
 ├── Age
 ├── Gender
 ├── Weight
 ├── Height
 └── Goal
 │
 ▼
Profile Validation
 │
 ▼
localStorage
 │
 ▼
Dashboard
 │
 ├── Protein Intake
 ├── Calories
 ├── Meals
 ├── Streak
 └── Daily Progress

## Getting Started

1. Clone the repository
git clone <your-repository-url>

Move into the project directory:

cd ProteinTracker
2. Create a virtual environment

Windows:

python -m venv venv

Activate it:

venv\Scripts\activate

macOS / Linux:

source venv/bin/activate
3. Install dependencies
pip install -r requirements.txt

If requirements.txt does not exist yet:

pip install flask

Then generate it with:

pip freeze > requirements.txt
4. Run the application
python app.py

The Flask development server will start locally.

Open:

http://127.0.0.1:5000
Flask Routes
Route	Purpose
/	Profile setup
/dashboard	Nutrition dashboard

The application currently uses Flask primarily for page routing and template rendering.
