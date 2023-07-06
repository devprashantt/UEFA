import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Attacking = sequelize.define('attacking', {
    serial: {
        type: DataTypes.INTEGER,
    },
    player_name: DataTypes.STRING,
    club: DataTypes.STRING,
    position: DataTypes.STRING,
    assists: DataTypes.INTEGER,
    corner_taken: DataTypes.INTEGER,
    offsides: DataTypes.INTEGER,
    dribbles: DataTypes.INTEGER,
    total_attempts: DataTypes.INTEGER,
    match_played: DataTypes.INTEGER,
});

export default Attacking;
