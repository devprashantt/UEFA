import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';

import attackingRoutes from './routes/attacking.routes.js';
import attemptsRoutes from './routes/attempts.routes.js';
import defendingRoutes from './routes/defending.routes.js';
import disciplineRoutes from './routes/disciplinary.routes.js';
import distributionRoutes from './routes/distribution.routes.js';
import goalKeepingRoutes from './routes/goalkeeping.routes.js';
import goalsRoutes from './routes/goals.routes.js';
import keyStatsRoutes from './routes/keystats.routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/api', attackingRoutes);
app.use('/api', attemptsRoutes);
app.use('/api', defendingRoutes);
app.use('/api', disciplineRoutes);
app.use('/api', distributionRoutes);
app.use('/api', goalKeepingRoutes);
app.use('/api', goalsRoutes);
app.use('/api', keyStatsRoutes);

// Test the server
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Sync database and start server
sequelize
    .authenticate()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Unable to connect to the database:', error);
    });
