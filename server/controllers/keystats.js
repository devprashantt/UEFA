import KeyStats from '../models/keystats.js';

// Get all key stats
export const getKeyStats = async (req, res) => {
    try {
        const keyStats = await KeyStats.findAll();
        res.json(keyStats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch key stats' });
    }
};

// Get key stats by ID
export const getKeyStatById = async (req, res) => {
    const { id } = req.params;
    try {
        const keyStats = await KeyStats.findByPk(id);
        if (keyStats) {
            res.json(keyStats);
        } else {
            res.status(404).json({ error: 'Key stats not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch key stats' });
    }
};

// Create a new key stats
export const createKeyStat = async (req, res) => {
    const { player_name, club, position, minutes_played, match_played, goals, assists, distance_covered } = req.body;
    try {
        const keyStats = await KeyStats.create({
            player_name,
            club,
            position,
            minutes_played,
            match_played,
            goals,
            assists,
            distance_covered
        });

        res.status(201).json(keyStats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create key stats' });
    }
};

// Update a key stats
export const updateKeyStat = async (req, res) => {
    const { id } = req.params;
    const { player_name, club, position, minutes_played, match_played, goals, assists, distance_covered } = req.body;

    try {
        const keyStats = await KeyStats.findByPk(id);
        if (keyStats) {
            keyStats.player_name = player_name;
            keyStats.club = club;
            keyStats.position = position;
            keyStats.minutes_played = minutes_played;
            keyStats.match_played = match_played;
            keyStats.goals = goals;
            keyStats.assists = assists;
            keyStats.distance_covered = distance_covered;

            await keyStats.save();

            res.json(keyStats);
        } else {
            res.status(404).json({ error: 'Key stats not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update key stats' });
    }
};

// Delete a key stats
export const deleteKeyStat = async (req, res) => {
    const { id } = req.params;

    try {
        const keyStats = await KeyStats.findByPk(id);
        if (keyStats) {
            await keyStats.destroy();
            res.json({ message: 'Key stats deleted successfully' });
        } else {
            res.status(404).json({ error: 'Key stats not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete key stats' });
    }
};

