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

Frontend Architecture

The frontend intentionally uses standard HTML, CSS, and JavaScript rather than a frontend framework.

HTML

Responsible for:

Page structure
Forms
Navigation
Dashboard components
Semantic content
CSS

Responsible for:

Layout
Typography
Colors
Spacing
Responsive behavior
Components
Animations
Visual hierarchy
JavaScript

Responsible for:

Custom dropdowns
Form validation
Profile persistence
Loading saved profile data
Client-side interactions
Data Persistence

The current implementation stores profile information in the browser using:

localStorage

The profile is stored under:

proteinProfile

Example structure:

{
  "name": "SHUBHAM MALI",
  "age": "18",
  "gender": "male",
  "weight": "63",
  "height": "180",
  "goal": "gain"
}

This approach keeps the current application simple while the backend architecture is being developed.

Design Philosophy

ProteinTracker follows a minimal product-oriented design approach.

The interface prioritizes:

Clear information hierarchy
Generous whitespace
Strong typography
Minimal visual noise
Consistent spacing
Clear interactions
Simple navigation
Responsive layouts

The visual system is intentionally restrained so that nutrition data remains the primary focus.

Development Principles

The project follows a few core principles:

UI is intentional

Spacing, typography, colors, components, and interactions should remain consistent across the application.

Keep the architecture simple

Avoid unnecessary frameworks, abstractions, and dependencies when a simpler implementation is sufficient.

Build incrementally

Features are implemented in small, testable stages rather than building the entire application at once.

Separate concerns

HTML handles structure, CSS handles presentation, JavaScript handles client-side behavior, and Flask handles server-side routing.

Don't over-engineer

The project should remain understandable and maintainable as it grows.

Current Status

Development — In Progress

Completed
 Flask application setup
 Profile setup page
 Profile form
 Custom dropdowns
 Client-side validation
 Local profile persistence
 Dashboard route
 Dashboard UI foundation
 Protein progress interface
In Progress
 Meal logging
 Persistent nutrition data
 Protein calculations
 Progress analytics
 Improved responsive behavior
 Backend data layer
 Database integration
 Authentication
Roadmap
Phase 1 — Foundation
Profile creation
Dashboard
Basic nutrition tracking
Core UI system
Phase 2 — Tracking
Add meals
Calculate protein intake
Calculate calories
Daily targets
Meal history
Phase 3 — Progress
Weekly protein trends
Progress statistics
Consistency tracking
Historical data
Phase 4 — Backend
Database integration
User accounts
Server-side persistence
API endpoints
Phase 5 — Product Polish
Responsive refinement
Accessibility
Performance improvements
UI/UX refinement
Production deployment
Running in Development

Start the Flask server:

python app.py

For development, Flask runs with debug mode enabled:

app.run(debug=True)

Do not use Flask debug mode in production.

Future Architecture

As the application grows, the current client-side storage can be replaced with a proper backend data layer.

A possible architecture:

Browser
   │
   ▼
HTML / CSS / JavaScript
   │
   ▼
Flask Application
   │
   ├── Routes
   ├── Business Logic
   └── API
        │
        ▼
     Database

This will allow nutrition records and user profiles to persist across devices and sessions.

Contributing

This project is currently developed as a personal software project.

Before making significant changes:

Understand the existing architecture.
Keep the UI system consistent.
Avoid unnecessary dependencies.
Test existing functionality.
Keep commits focused and descriptive.
License

This project is currently intended for personal and educational development.

License details can be added when the project is prepared for public distribution.

Author

Shubham Mali

Computer Science & Business Systems

Built with Python, Flask, HTML, CSS and JavaScript.



### One important change I'd make

Since you're moving toward the **target UI/UX**, don't put claims like *"production-ready"* or *"fully optimized"* in the README yet. Your current project is better presented as:

> **Development — In Progress**

That looks much more professional on GitHub because the README accurately reflects the state of the project.

Also, once we start adding the database and actual meal/protein calculations, we can update the README progressively rather than rewriting it again.
