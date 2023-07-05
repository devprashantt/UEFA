import Defending from '../models/defending.js';

// Get all defending stats
export const getDefendingStats = async (req, res) => {
    try {
        const defendingStats = await Defending.findAll();
        res.json(defendingStats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch defending stats' });
    }
};

// Get defending stats by ID
export const getDefendingStatById = async (req, res) => {
    const { id } = req.params;
    try {
        const defendingStat = await Defending.findByPk(id);
        if (defendingStat) {
            res.json(defendingStat);
        } else {
            res.status(404).json({ error: 'Defending stat not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch defending stat' });
    }
};

// Create a new defending stat
export const createDefendingStat = async (req, res) => {
    const { player_name, club, position, fouls_committed, fouls_suffered, red, yellow, minutes_played, match_played } = req.body;
    try {
        const defendingStat = await Defending.create({
            player_name,
            club,
            position,
            fouls_committed,
            fouls_suffered,
            red,
            yellow,
            minutes_played,
            match_played
        });

        res.status(201).json(defendingStat);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create defending stat' });
    }
};

// Update a defending stat
export const updateDefendingStat = async (req, res) => {
    const { id } = req.params;
    const { player_name, club, position, fouls_committed, fouls_suffered, red, yellow, minutes_played, match_played } = req.body;

    try {
        const defendingStat = await Defending.findByPk(id);
        if (defendingStat) {
            defendingStat.player_name = player_name;
            defendingStat.club = club;
            defendingStat.position = position;
            defendingStat.fouls_committed = fouls_committed;
            defendingStat.fouls_suffered = fouls_suffered;
            defendingStat.red = red;
            defendingStat.yellow = yellow;
            defendingStat.minutes_played = minutes_played;
            defendingStat.match_played = match_played;

            await defendingStat.save();

            res.json(defendingStat);
        } else {
            res.status(404).json({ error: 'Defending stat not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update defending stat' });
    }
};

// Delete a defending stat
export const deleteDefendingStat = async (req, res) => {
    const { id } = req.params;

    try {
        const defendingStat = await Defending.findByPk(id);
        if (defendingStat) {
            await defendingStat.destroy();
            res.json({ message: 'Defending stat deleted successfully' });
        } else {
            res.status(404).json({ error: 'Defending stat not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete defending stat' });
    }
};
