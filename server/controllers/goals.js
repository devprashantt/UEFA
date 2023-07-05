import Goals from '../models/goals.js';

// Get all goals stats
export const getGoals = async (req, res) => {
    try {
        const goalsStats = await Goals.findAll();
        res.json(goalsStats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch goals stats' });
    }
};

// Get goals stats by ID
export const getGoalById = async (req, res) => {
    const { id } = req.params;
    try {
        const goalsStat = await Goals.findByPk(id);
        if (goalsStat) {
            res.json(goalsStat);
        } else {
            res.status(404).json({ error: 'Goals stat not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch goals stat' });
    }
};

// Create a new goals stat
export const createGoal = async (req, res) => {
    const { player_name, club, position, goals, right_foot, left_foot, headers, others, inside_area, outside_areas, penalties, match_played } = req.body;
    try {
        const goalsStat = await Goals.create({
            player_name,
            club,
            position,
            goals,
            right_foot,
            left_foot,
            headers,
            others,
            inside_area,
            outside_areas,
            penalties,
            match_played
        });

        res.status(201).json(goalsStat);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create goals stat' });
    }
};

// Update a goals stat
export const updateGoal = async (req, res) => {
    const { id } = req.params;
    const { player_name, club, position, goals, right_foot, left_foot, headers, others, inside_area, outside_areas, penalties, match_played } = req.body;

    try {
        const goalsStat = await Goals.findByPk(id);
        if (goalsStat) {
            goalsStat.player_name = player_name;
            goalsStat.club = club;
            goalsStat.position = position;
            goalsStat.goals = goals;
            goalsStat.right_foot = right_foot;
            goalsStat.left_foot = left_foot;
            goalsStat.headers = headers;
            goalsStat.others = others;
            goalsStat.inside_area = inside_area;
            goalsStat.outside_areas = outside_areas;
            goalsStat.penalties = penalties;
            goalsStat.match_played = match_played;

            await goalsStat.save();

            res.json(goalsStat);
        } else {
            res.status(404).json({ error: 'Goals stat not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update goals stat' });
    }
};

// Delete a goals stat
export const deleteGoal = async (req, res) => {
    const { id } = req.params;

    try {
        const goalsStat = await Goals.findByPk(id);
        if (goalsStat) {
            await goalsStat.destroy();
            res.json({ message: 'Goals stat deleted successfully' });
        } else {
            res.status(404).json({ error: 'Goals stat not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete goals stat' });
    }
};
