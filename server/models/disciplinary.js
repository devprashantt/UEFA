import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Disciplinary = sequelize.define('disciplinary', {
    serial: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    player_name: DataTypes.STRING,
    club: DataTypes.STRING,
    position: DataTypes.STRING,
    fouls_committed: DataTypes.INTEGER,
    fouls_suffered: DataTypes.INTEGER,
    red: DataTypes.INTEGER,
    yellow: DataTypes.INTEGER,
    minutes_played: DataTypes.INTEGER,
    match_played: DataTypes.INTEGER,
});

export default Disciplinary;
