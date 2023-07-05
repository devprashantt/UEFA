import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const KeyStats = sequelize.define('key_stats', {
    player_name: DataTypes.STRING,
    club: DataTypes.STRING,
    position: DataTypes.STRING,
    minutes_played: DataTypes.INTEGER,
    match_played: DataTypes.INTEGER,
    goals: DataTypes.INTEGER,
    assists: DataTypes.INTEGER,
    distance_covered: DataTypes.FLOAT,
});

export default KeyStats;
