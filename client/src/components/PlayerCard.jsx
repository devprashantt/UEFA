import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getAllGoals } from "../services/goalsApi";

const PlayerGoal = ({ number }) => {
  const [playerInfo, setPlayerInfo] = useState(null);

  useEffect(() => {
    const fetchPlayerInfo = async () => {
      try {
        const response = await getAllGoals();
        const goalsData = response.data;

        // Sort the goalsData array in descending order based on goals
        const sortedData = goalsData.sort((a, b) => b.goals - a.goals);

        // Check if the number prop is within the range of available data
        if (number >= 1 && number <= sortedData.length) {
          const player = sortedData[number - 1]; // Subtract 1 to account for 0-based indexing
          setPlayerInfo(player);
        } else {
          setPlayerInfo(null); // Player not found for the given number
        }
      } catch (error) {
        console.error("Error fetching player info:", error);
      }
    };

    fetchPlayerInfo();
  }, [number]);

  return (
    <div
      className="flex-col"
      style={{
        padding: "1rem",
        width: "100%",

        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)",

        borderRadius: "0.4rem",
      }}
    >
      <h4>Rank {number}</h4>
      <h2
        style={{
          color: "purple",
        }}
      >
        {playerInfo ? playerInfo.player_name : "Loading name..."}
      </h2>
      <h4>{playerInfo ? playerInfo.club : "Loading club..."}</h4>
      <p>{playerInfo ? playerInfo.goals : "Loading goals..."}</p>
    </div>
  );
};

PlayerGoal.propTypes = {
  number: PropTypes.number.isRequired,
};

export default PlayerGoal;
