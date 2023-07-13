# UEFA Champions League Analysis and Visualization

This project is a web application for analyzing and visualizing UEFA Champions League data. It provides a dashboard to query and visualize various statistics related to players, clubs, goals, and more.

![UEFA](https://ik.imagekit.io/officialprashant/UEFA_Mko4a1cT_.png?updatedAt=1689251328803)

## Dataset

The dataset used for this project can be found at the following link: [UEFA Champions League Dataset](https://www.kaggle.com/datasets/azminetoushikwasi/ucl-202122-uefa-champions-league)

The dataset includes the following CSV files:

- Attacking.csv
- Attempts.csv
- Defending.csv
- Disciplinary.csv
- Distribution.csv
- Goalkeeping.csv
- Goals.csv
- Key Stats.csv

## Backend Technologies

The backend of this project is built using the following technologies:

- Node.js: A JavaScript runtime environment
- Express.js: A web application framework for Node.js
- TiDB: A distributed SQL database
- Sequelize: A promise-based ORM (Object-Relational Mapping) for Node.js

## Frontend Technologies

The frontend of this project is built using the following technologies:

- React.js: A JavaScript library for building user interfaces
- Recharts: A charting library for React.js

## Database

A database table needs to be created to store player information. The table should have the following columns:

- Player ID 
- Player First Name
- Player Last Name
- Player Club

Additionally, separate tables should be created for each CSV file, containing only the Player ID column. Player name and Player club should not be present in these tables.

## Dashboard and Visualizations

The dashboard allows users to query and visualize the following data:

- Club, Goals scored, minutes played, fouls committed, fouls suffered, red cards, yellow cards (Table)
- Club with highest goals, club with lowest goals, club with second highest goals (Table)
- Total Goals Scored, Total Goals Conceded, Total Goals Saved, Total Matches Played, Total Assists, Top Scorer (Table)
- Goals Scored by Players in given position (Bar Graph)
- Players vs Statistics Heatmap (Y axis: Player name, X axis: Statistics)

The dashboard provides an option to toggle between Attack, Defence, and Goalkeeping statistics, as well as an input for selecting a team.

## Installation

1. Clone the repository: `git clone https://github.com/devprashantt/UEFA`
2. Install backend dependencies: `cd server && npm install`
3. Install frontend dependencies: `cd client && npm install`
4. Start the backend server: `cd server && npm start`
5. Start the frontend development server: `cd frontend && npm run dev`
6. Open the application in your browser: `http://localhost:3000`

