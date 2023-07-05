import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Goals = sequelize.define('goals', {
    serial: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    player_name: DataTypes.STRING,
    club: DataTypes.STRING,
    position: DataTypes.STRING,
    goals: DataTypes.INTEGER,
    right_foot: DataTypes.INTEGER,
    left_foot: DataTypes.INTEGER,
    headers: DataTypes.INTEGER,
    others: DataTypes.INTEGER,
    inside_area: DataTypes.INTEGER,
    outside_area: DataTypes.INTEGER,
    penalties: DataTypes.INTEGER,
    match_played: DataTypes.INTEGER,
});

export default Goals;