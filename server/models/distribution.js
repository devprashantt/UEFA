import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Distribution = sequelize.define('distribution', {
    serial: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    player_name: {
        type: DataTypes.STRING,
    },
    club: {
        type: DataTypes.STRING,
    },
    position: {
        type: DataTypes.STRING,
    },
    pass_accuracy: {
        type: DataTypes.FLOAT,
    },
    pass_attempted: {
        type: DataTypes.INTEGER,
    },
    pass_completed: {
        type: DataTypes.INTEGER,
    },
    cross_accuracy: {
        type: DataTypes.FLOAT,
    },
    cross_attempted: {
        type: DataTypes.INTEGER,
    },
    cross_completed: {
        type: DataTypes.INTEGER,
    },
    freekicks_taken: {
        type: DataTypes.INTEGER,
    },
    match_played: {
        type: DataTypes.INTEGER,
    },
});

export default Distribution;
