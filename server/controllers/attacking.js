import Attacking from '../models/attacking.js';

export const getAttackingStats = async (req, res) => {
    try {
        const attackingStats = await Attacking.findAll();
        res.json(attackingStats);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching attacking stats.' });
    }
};

export const getAttackingStatById = async (req, res) => {
    const { id } = req.params;
    try {
        const attackingStat = await Attacking.findByPk(id);
        if (attackingStat) {
            res.json(attackingStat);
        } else {
            res.status(404).json({ error: 'Attacking stat not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the attacking stat.' });
    }
};

export const createAttackingStat = async (req, res) => {
    const { player_name, club, position, assists, corner_taken, offsides, dribbles, match_played } = req.body;
    try {
        const attackingStat = await Attacking.create({
            player_name,
            club,
            position,
            assists,
            corner_taken,
            offsides,
            dribbles,
            match_played,
        });
        res.status(201).json(attackingStat);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the attacking stat.' });
    }
};

export const updateAttackingStat = async (req, res) => {
    const { id } = req.params;
    const { player_name, club, position, assists, corner_taken, offsides, dribbles, match_played } = req.body;
    try {
        const attackingStat = await Attacking.findByPk(id);
        if (attackingStat) {
            await attackingStat.update({
                player_name,
                club,
                position,
                assists,
                corner_taken,
                offsides,
                dribbles,
                match_played,
            });
            res.json(attackingStat);
        } else {
            res.status(404).json({ error: 'Attacking stat not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the attacking stat.' });
    }
};

export const deleteAttackingStat = async (req, res) => {
    const { id } = req.params;
    try {
        const attackingStat = await Attacking.findByPk(id);
        if (attackingStat) {
            await attackingStat.destroy();
            res.json({ message: 'Attacking stat deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Attacking stat not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the attacking stat.' });
    }
};
