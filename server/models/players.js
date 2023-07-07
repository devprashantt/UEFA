import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Player = sequelize.define('player', {
    player_name: DataTypes.STRING,
    club: DataTypes.STRING
});

export default Player;