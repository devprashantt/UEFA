import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { getAllGoals } from "../services/goalsApi";

const PlayerGoal = () => {
  const [playerData, setPlayerData] = useState([]);
  const [selectedClub, setSelectedClub] = useState("Ajax");
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await getAllGoals();
        const goalsData = response.data;

        // Group players by club and collect unique players for each club
        const clubPlayers = goalsData.reduce((accumulator, player) => {
          const { player_name, club, goals } = player;

          if (!accumulator[club]) {
            accumulator[club] = [];
          }
          accumulator[club].push({ player_name, goals });

          return accumulator;
        }, {});

        // Convert club players to array of objects
        const playerData = Object.entries(clubPlayers).map(
          ([club, players]) => ({
            club,
            players,
          })
        );

        setPlayerData(playerData);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    fetchPlayerData();
  }, []);

  useEffect(() => {
    if (selectedClub) {
      const clubPlayers = playerData.find((data) => data.club === selectedClub);
      if (clubPlayers) {
        setFilteredPlayers(clubPlayers.players);
      } else {
        setFilteredPlayers([]);
      }
    } else {
      setFilteredPlayers([]);
    }
  }, [selectedClub, playerData]);

  const handleClubSelect = (event) => {
    setSelectedClub(event.target.value);
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "1rem",
        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)",
        borderRadius: "0.4rem",
      }}
    >
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <label htmlFor="clubSelect">Select Club: </label>
        <select
          id="clubSelect"
          value={selectedClub}
          onChange={handleClubSelect}
        >
          {playerData.map((data) => (
            <option key={data.club} value={data.club}>
              {data.club}
            </option>
          ))}
        </select>
      </div>
      <div style={{ width: "100%", height: "400px" }}>
        <ResponsiveContainer>
          <BarChart data={filteredPlayers}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="category" dataKey="player_name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="goals" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PlayerGoal;
