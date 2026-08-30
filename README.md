# ProteinTracker

A minimal web application for tracking daily protein intake and building a personalized nutrition profile.

## Overview

ProteinTracker helps users create a nutrition profile and monitor their daily nutrition progress through a simple, focused interface.

The project is being developed incrementally with a strong focus on clean UI, predictable UX, maintainable code, and practical functionality.

## Features

### Profile Setup

Users can create a nutrition profile with:

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

Profile data is currently stored in the browser using `localStorage`.

### Dashboard

The dashboard provides an overview of:

- Daily protein intake
- Protein target
- Calories
- Number of meals
- Current streak
- Daily progress

### Navigation

The application includes the following primary areas:

- Dashboard
- Meals
- Progress

## Tech Stack

### Backend

- Python
- Flask

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts — Inter

### Storage

- Browser `localStorage`

### Development Tools

- Git
- GitHub
- VS Code

## Project Structure

```text
ProteinTracker/
│
├── app.py
├── requirements.txt
├── README.md
│
├── templates/
│   ├── index.html
│   └── dashboard.html
│
└── static/
    ├── style.css
    └── script.js
```

## Application Flow

```text
Profile Setup
      │
      ▼
Enter Personal Information
      │
      ├── Name
      ├── Age
      ├── Gender
      ├── Weight
      ├── Height
      └── Goal
      │
      ▼
Validate Profile
      │
      ▼
Save Profile
      │
      ▼
Dashboard
      │
      ├── Protein Intake
      ├── Calories
      ├── Meals
      ├── Streak
      └── Daily Progress
```

## Getting Started

### Prerequisites

- Python 3.10+
- Git

### Clone the Repository

```bash
git clone <your-repository-url>
cd ProteinTracker
```

### Create a Virtual Environment

Windows:

```bash
python -m venv venv
venv\Scripts\activate
```

macOS / Linux:

```bash
python3 -m venv venv
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

If `requirements.txt` has not been created yet:

```bash
pip install flask
pip freeze > requirements.txt
```

### Run the Application

```bash
python app.py
```

Open:

```text
http://127.0.0.1:5000
```

## Flask Routes

| Route | Description |
|---|---|
| `/` | Profile setup page |
| `/dashboard` | Nutrition dashboard |

## Frontend Architecture

The frontend uses standard HTML, CSS, and JavaScript.

### HTML

Responsible for page structure, forms, navigation, dashboard content, and semantic markup.

### CSS

Responsible for layout, typography, colors, spacing, responsive behavior, components, and animations.

### JavaScript

Responsible for custom dropdown interactions, form validation, profile persistence, loading saved profile data, and client-side interactions.

### Flask

Responsible for application setup, server-side routing, and template rendering.

## Data Persistence

The current version uses browser `localStorage` for profile persistence.

The profile is stored using:

```text
proteinProfile
```

Example:

```json
{
  "name": "SHUBHAM MALI",
  "age": "18",
  "gender": "male",
  "weight": "63",
  "height": "180",
  "goal": "gain"
}
```

A database-backed persistence layer will be introduced as the project evolves.

## Design Principles

ProteinTracker follows a minimal, product-focused design approach.

The interface prioritizes:

- Clear information hierarchy
- Strong typography
- Consistent spacing
- Generous whitespace
- Minimal visual noise
- Simple navigation
- Clear interactions
- Responsive layouts

The goal is to make nutrition information easy to scan without adding unnecessary complexity.

## Development Principles

### UI Consistency

Components should follow the established typography, spacing, colors, and interaction patterns.

### Keep the Code Understandable

Prefer straightforward implementations over unnecessary abstractions or complexity.

### Separate Responsibilities

HTML handles structure, CSS handles presentation, JavaScript handles client-side behavior, and Flask handles server-side routing.

### Build Incrementally

New functionality should be introduced in small, testable stages without unnecessarily breaking existing features.

### Avoid Over-Engineering

Use the simplest reliable solution that fits the current requirements.

## Current Status

**Development — In Progress**

### Completed

- [x] Flask application setup
- [x] Profile setup page
- [x] Profile form
- [x] Custom dropdowns
- [x] Client-side validation
- [x] Local profile persistence
- [x] Dashboard route
- [x] Dashboard UI foundation
- [x] Protein progress interface

### In Progress

- [ ] Meal logging
- [ ] Protein calculations
- [ ] Calorie calculations
- [ ] Persistent nutrition data
- [ ] Progress analytics
- [ ] Backend data layer
- [ ] Database integration
- [ ] Authentication

## Roadmap

### Phase 1 — Foundation

- Profile creation
- Dashboard
- Core UI system
- Basic nutrition tracking

### Phase 2 — Nutrition Tracking

- Meal logging
- Protein calculations
- Calorie calculations
- Daily targets
- Meal history

### Phase 3 — Progress

- Weekly trends
- Progress statistics
- Consistency tracking
- Historical nutrition data

### Phase 4 — Backend

- Database integration
- User accounts
- Server-side persistence
- API endpoints

### Phase 5 — Product Polish

- Responsive refinement
- Accessibility improvements
- Performance improvements
- UI/UX refinement
- Production deployment

## Development Workflow

```text
Plan
  ↓
Implement
  ↓
Run Locally
  ↓
Test
  ↓
Review UI/UX
  ↓
Fix Issues
  ↓
Commit
  ↓
Continue
```

Keep Git commits focused on one meaningful change whenever possible.

Example commit messages:

```text
chore: initialize flask project
feat: add profile setup
feat: add dashboard layout
feat: add profile persistence
feat: add meal tracking
fix: correct dashboard spacing
style: refine responsive layout
```

## Production Considerations

The current application is intended for development and learning.

Before production deployment, address:

- Production Flask configuration
- Secure configuration management
- Database persistence
- Authentication
- Input validation
- Error handling
- Logging
- Security headers
- Production WSGI server
- Deployment configuration

Flask debug mode should not be enabled in production.

## Future Architecture

```text
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
```

This will allow user profiles and nutrition records to persist across sessions and devices.

## Contributing

This is currently a personal development project.

When making changes:

1. Understand the existing implementation.
2. Keep the established UI/UX consistent.
3. Avoid unnecessary dependencies.
4. Test existing functionality before committing.
5. Keep commits focused and descriptive.
6. Do not introduce unrelated changes.

## License

This project is currently intended for personal and educational development.

License information can be added when the project is prepared for public distribution.

## Author

**Shubham Mali**

Computer Science & Business Systems

Built with Python, Flask, HTML, CSS, and JavaScript.
