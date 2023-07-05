import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Attacking = sequelize.define('attacking', {
    serial: {
        type: DataTypes.INTEGER,
    },
    player_name: DataTypes.STRING,
    club: DataTypes.STRING,
    position: DataTypes.STRING,
    total_attempts: DataTypes.INTEGER,
    on_target: DataTypes.INTEGER,
    off_target: DataTypes.INTEGER,
    blocked: DataTypes.INTEGER,
    match_played: DataTypes.INTEGER,
});

export default Attacking;
