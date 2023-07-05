import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Disciplinary = sequelize.define('disciplinary', {
    serial: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    player_name: DataTypes.STRING,
    club: DataTypes.STRING,
    position: DataTypes.STRING,
    pass_accuracy: DataTypes.FLOAT,
    pass_attempted: DataTypes.INTEGER,
    pass_completed: DataTypes.INTEGER,
    cross_accuracy: DataTypes.FLOAT,
    cross_attempted: DataTypes.INTEGER,
    cross_completed: DataTypes.INTEGER,
    freekicks_taken: DataTypes.INTEGER,
    match_played: DataTypes.INTEGER,
});

export default Disciplinary;
