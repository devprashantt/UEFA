import GoalKeeping from '../models/goalkeeping.js';

// Get all goalkeeping stats
export const getGoalKeepingStats = async (req, res) => {
    try {
        const goalkeepingStats = await GoalKeeping.findAll();
        res.json(goalkeepingStats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch goalkeeping stats' });
    }
};

// Get goalkeeping stats by ID
export const getGoalKeepingStatById = async (req, res) => {
    const { id } = req.params;
    try {
        const goalkeepingStat = await GoalKeeping.findByPk(id);
        if (goalkeepingStat) {
            res.json(goalkeepingStat);
        } else {
            res.status(404).json({ error: 'Goalkeeping stat not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch goalkeeping stat' });
    }
};

// Create a new goalkeeping stat
export const createGoalKeepingStat = async (req, res) => {
    const { player_name, club, position, saved, conceded, saved_penalties, cleansheets, punches_made, match_played } = req.body;
    try {
        const goalkeepingStat = await GoalKeeping.create({
            player_name,
            club,
            position,
            saved,
            conceded,
            saved_penalties,
            cleansheets,
            punches_made,
            match_played
        });

        res.status(201).json(goalkeepingStat);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create goalkeeping stat' });
    }
};

// Update a goalkeeping stat
export const updateGoalKeepingStat = async (req, res) => {
    const { id } = req.params;
    const { player_name, club, position, saved, conceded, saved_penalties, cleansheets, punches_made, match_played } = req.body;

    try {
        const goalkeepingStat = await GoalKeeping.findByPk(id);
        if (goalkeepingStat) {
            goalkeepingStat.player_name = player_name;
            goalkeepingStat.club = club;
            goalkeepingStat.position = position;
            goalkeepingStat.saved = saved;
            goalkeepingStat.conceded = conceded;
            goalkeepingStat.saved_penalties = saved_penalties;
            goalkeepingStat.cleansheets = cleansheets;
            goalkeepingStat.punches_made = punches_made;
            goalkeepingStat.match_played = match_played;

            await goalkeepingStat.save();

            res.json(goalkeepingStat);
        } else {
            res.status(404).json({ error: 'Goalkeeping stat not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update goalkeeping stat' });
    }
};

// Delete a goalkeeping stat
export const deleteGoalKeepingStat = async (req, res) => {
    const { id } = req.params;

    try {
        const goalkeepingStat = await GoalKeeping.findByPk(id);
        if (goalkeepingStat) {
            await goalkeepingStat.destroy();
            res.json({ message: 'Goalkeeping stat deleted successfully' });
        } else {
            res.status(404).json({ error: 'Goalkeeping stat not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete goalkeeping stat' });
    }
};
