// Service file for making API calls

// Example function to fetch player statistics
export const getPlayerStats = async () => {
    try {
        const response = await fetch('/players/stats');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch player statistics');
    }
};
