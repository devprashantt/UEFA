import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const GoalKeeping = sequelize.define('goalkeeping', {
    serial: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    player_name: DataTypes.STRING,
    club: DataTypes.STRING,
    position: DataTypes.STRING,
    saved: DataTypes.INTEGER,
    conceded: DataTypes.INTEGER,
    saved_penalties: DataTypes.INTEGER,
    cleansheets: DataTypes.INTEGER,
    punches_made: DataTypes.INTEGER,
    match_played: DataTypes.INTEGER,
});

export default GoalKeeping;
