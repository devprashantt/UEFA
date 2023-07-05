import Attempts from '../models/attempts.js';

// Get all attempts
export const getAttempts = async (req, res) => {
    try {
        const attempts = await Attempts.findAll();
        res.json(attempts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch attempts' });
    }
};

// Get attempts by ID
export const getAttemptById = async (req, res) => {
    const { id } = req.params;
    try {
        const attempts = await Attempts.findByPk(id);
        if (attempts) {
            res.json(attempts);
        } else {
            res.status(404).json({ error: 'Attempts not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch attempts' });
    }
};

// Create a new attempts
export const createAttempt = async (req, res) => {
    const { player_name, club, position, total_attempts, on_target, off_target, blocked, match_played } = req.body;
    try {
        const attempts = await Attempts.create({ player_name, club, position, total_attempts, on_target, off_target, blocked, match_played });
        res.status(201).json(attempts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create attempts' });
    }
};

// Update attempts
export const updateAttempt = async (req, res) => {
    const { id } = req.params;
    const { player_name, club, position, total_attempts, on_target, off_target, blocked, match_played } = req.body;
    try {
        const attempts = await Attempts.findByPk(id);
        if (attempts) {
            attempts.player_name = player_name;
            attempts.club = club;
            attempts.position = position;
            attempts.total_attempts = total_attempts;
            attempts.on_target = on_target;
            attempts.off_target = off_target;
            attempts.blocked = blocked;
            attempts.match_played = match_played;
            await attempts.save();
            res.json(attempts);
        } else {
            res.status(404).json({ error: 'Attempts not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update attempts' });
    }
};

// Delete attempts
export const deleteAttempt = async (req, res) => {
    const { id } = req.params;
    try {
        const attempts = await Attempts.findByPk(id);
        if (attempts) {
            await attempts.destroy();
            res.json({ message: 'Attempts deleted successfully' });
        } else {
            res.status(404).json({ error: 'Attempts not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete attempts' });
    }
};
