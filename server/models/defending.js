import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Defending = sequelize.define('defending', {
    serial: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    player_name: DataTypes.STRING,
    club: DataTypes.STRING,
    position: DataTypes.STRING,
    balls_recovered: DataTypes.INTEGER,
    tackles: DataTypes.INTEGER,
    t_won: DataTypes.INTEGER,
    t_lost: DataTypes.INTEGER,
    clearance_attempted: DataTypes.INTEGER,
    match_played: DataTypes.INTEGER,
});

export default Defending;
