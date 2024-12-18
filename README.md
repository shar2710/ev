# Dynamic Event Calendar Application

## Overview
This project is a dynamic and interactive Event Calendar Application built using React.js. It enables users to view, add, edit, and delete events on a monthly calendar interface. The project emphasizes advanced React logic, clean UI design, and deployment capabilities.

## Features

### Calendar View
- Displays a calendar grid for the current month with properly aligned days.
- Users can navigate between months using "Previous" and "Next" buttons.

### Event Management
- Add events by clicking on a day.
- Edit or delete events for a selected day.
- Each event includes:
  - Event name
  - Start time and end time
  - Optional description

### Event List
- Displays a list of all events for the selected day in a modal or side panel.

### Data Persistence
- Utilizes `localStorage` to persist events between page refreshes.

### UI Design
- A clean and modern interface with clear separation for weekends and weekdays.
- Highlights the current day and the selected day visually.

### Advanced Logic
- Handles month transitions automatically (e.g., from Jan 31 to Feb 1).
- Prevents overlapping events (e.g., two events at the same time).
- Allows filtering events by keyword.

### Bonus Features
- Drag-and-drop functionality to reschedule events between days.
- Color coding for events (e.g., work, personal, others).
- Export the event list for a specific month as a JSON or CSV file.

## Installation

### Prerequisites
- Node.js and npm installed on your machine.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd event-calendar-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Deployment

The application is deployed on [Vercel/Netlify/Your Platform]. Access it here:
https://ev-snowy-nine.vercel.app/



Happy Scheduling! 📅
```