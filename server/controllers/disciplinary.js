import Disciplinary from '../models/disciplinary.js';

// Get all disciplinary records
export const getDisciplinaryStats = async (req, res) => {
    try {
        const disciplinaryRecords = await Disciplinary.findAll();
        res.json(disciplinaryRecords);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch disciplinary records' });
    }
};

// Get disciplinary record by ID
export const getDisciplinaryStatById = async (req, res) => {
    const { id } = req.params;
    try {
        const disciplinaryRecord = await Disciplinary.findByPk(id);
        if (disciplinaryRecord) {
            res.json(disciplinaryRecord);
        } else {
            res.status(404).json({ error: 'Disciplinary record not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch disciplinary record' });
    }
};

// Create a new disciplinary record
export const createDisciplinaryStat = async (req, res) => {
    const { player_name, club, position, yellow_cards, red_cards, fouls_committed, fouls_suffered, match_played } = req.body;
    try {
        const disciplinaryRecord = await Disciplinary.create({
            player_name,
            club,
            position,
            yellow_cards,
            red_cards,
            fouls_committed,
            fouls_suffered,
            match_played
        });

        res.status(201).json(disciplinaryRecord);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create disciplinary record' });
    }
};

// Update a disciplinary record
export const updateDisciplinaryStat = async (req, res) => {
    const { id } = req.params;
    const { player_name, club, position, yellow_cards, red_cards, fouls_committed, fouls_suffered, match_played } = req.body;

    try {
        const disciplinaryRecord = await Disciplinary.findByPk(id);
        if (disciplinaryRecord) {
            disciplinaryRecord.player_name = player_name;
            disciplinaryRecord.club = club;
            disciplinaryRecord.position = position;
            disciplinaryRecord.yellow_cards = yellow_cards;
            disciplinaryRecord.red_cards = red_cards;
            disciplinaryRecord.fouls_committed = fouls_committed;
            disciplinaryRecord.fouls_suffered = fouls_suffered;
            disciplinaryRecord.match_played = match_played;

            await disciplinaryRecord.save();

            res.json(disciplinaryRecord);
        } else {
            res.status(404).json({ error: 'Disciplinary record not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update disciplinary record' });
    }
};

// Delete a disciplinary record
export const deleteDisciplinaryStat = async (req, res) => {
    const { id } = req.params;

    try {
        const disciplinaryRecord = await Disciplinary.findByPk(id);
        if (disciplinaryRecord) {
            await disciplinaryRecord.destroy();
            res.json({ message: 'Disciplinary record deleted successfully' });
        } else {
            res.status(404).json({ error: 'Disciplinary record not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete disciplinary record' });
    }
};
