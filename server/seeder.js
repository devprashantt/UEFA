import sequelize from './config/database.js';
import GoalKeeping from './models/goalkeeping.js';

//Create tables
sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`);
    }
    );