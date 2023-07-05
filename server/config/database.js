import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('football', 'AVGJTnxUUEhME3e.root', '08aKjXy3sH60Nc9j', {
    host: 'gateway01.eu-central-1.prod.aws.tidbcloud.com',
    port: 4000,
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            minVersion: 'TLSv1.2',
            rejectUnauthorized: true,
        },
    },
});

// Test the database connection
try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize;
