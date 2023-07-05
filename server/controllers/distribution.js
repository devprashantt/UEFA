import Distribution from '../models/distribution.js';

// Get all distribution stats
export const getDistributionStats = async (req, res) => {
    try {
        const distributionStats = await Distribution.findAll();
        res.json(distributionStats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch distribution stats' });
    }
};

// Get distribution stats by ID
export const getDistributionStatById = async (req, res) => {
    const { id } = req.params;
    try {
        const distributionStat = await Distribution.findByPk(id);
        if (distributionStat) {
            res.json(distributionStat);
        } else {
            res.status(404).json({ error: 'Distribution stat not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch distribution stat' });
    }
};

// Create a new distribution stat
export const createDistributionStat = async (req, res) => {
    const { player_name, club, position, pass_accuracy, pass_attempted, pass_completed, cross_accuracy, cross_attempted, cross_completed, freekicks_taken, match_played } = req.body;
    try {
        const distributionStat = await Distribution.create({
            player_name,
            club,
            position,
            pass_accuracy,
            pass_attempted,
            pass_completed,
            cross_accuracy,
            cross_attempted,
            cross_completed,
            freekicks_taken,
            match_played
        });

        res.status(201).json(distributionStat);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create distribution stat' });
    }
};

// Update a distribution stat
export const updateDistributionStat = async (req, res) => {
    const { id } = req.params;
    const { player_name, club, position, pass_accuracy, pass_attempted, pass_completed, cross_accuracy, cross_attempted, cross_completed, freekicks_taken, match_played } = req.body;

    try {
        const distributionStat = await Distribution.findByPk(id);
        if (distributionStat) {
            distributionStat.player_name = player_name;
            distributionStat.club = club;
            distributionStat.position = position;
            distributionStat.pass_accuracy = pass_accuracy;
            distributionStat.pass_attempted = pass_attempted;
            distributionStat.pass_completed = pass_completed;
            distributionStat.cross_accuracy = cross_accuracy;
            distributionStat.cross_attempted = cross_attempted;
            distributionStat.cross_completed = cross_completed;
            distributionStat.freekicks_taken = freekicks_taken;
            distributionStat.match_played = match_played;

            await distributionStat.save();

            res.json(distributionStat);
        } else {
            res.status(404).json({ error: 'Distribution stat not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update distribution stat' });
    }
};

// Delete a distribution stat
export const deleteDistributionStat = async (req, res) => {
    const { id } = req.params;

    try {
        const distributionStat = await Distribution.findByPk(id);
        if (distributionStat) {
            await distributionStat.destroy();
            res.json({ message: 'Distribution stat deleted successfully' });
        } else {
            res.status(404).json({ error: 'Distribution stat not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete distribution stat' });
    }
};
