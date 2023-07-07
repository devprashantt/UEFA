import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";

import { getAllAttacking } from "../services/attackingApi";
import { getAllGoals } from "../services/goalsApi";

import { DisciplineStats, PlayerCard, PlayerGoal } from "../components";

const columns = [
  {
    field: "id",
    headerName: "Serial",
    width: 100,
  },
  { field: "player_name", headerName: "Name", width: 160 },
  { field: "club", headerName: "Club", width: 120 },
  { field: "position", headerName: "Position", type: "number", width: 120 },
  { field: "assists", headerName: "Assists", type: "number", width: 120 },
  {
    field: "corner_taken",
    headerName: "Corners",
    type: "number",
    width: 120,
  },
  { field: "offsides", headerName: "Offsides", type: "number", width: 120 },
  { field: "dribbles", headerName: "Dribbles", type: "number", width: 120 },
  {
    field: "match_played",
    headerName: "Matches",
    type: "number",
    width: 120,
  },
];

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [clubQuery, setClubQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [attackingResponse, goalsResponse] = await Promise.all([
          getAllAttacking(),
          getAllGoals(),
        ]);

        const attackingData = attackingResponse.data;
        const goalsData = goalsResponse.data;

        const updatedPlayers = attackingData.map((player) => {
          const matchPlayed = goalsData.find(
            (goal) => goal.player_name === player.player_name
          )?.match_played;

          return {
            ...player,
            match_played: matchPlayed || 0,
          };
        });

        setPlayers(updatedPlayers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClubSearch = (e) => {
    setClubQuery(e.target.value);
  };

  const filteredPlayers = players.filter((player) => {
    const regex = new RegExp(searchQuery, "i");
    const clubRegex = new RegExp(clubQuery, "i");

    return regex.test(player.player_name) && clubRegex.test(player.club);
  });

  return (
    <div
      className="flex-col"
      style={{
        width: "100%",
        gap: "1.6rem",
      }}
    >
      {/* player goal component */}
      <div
        className="flex-row"
        style={{
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <PlayerCard number={1} />

        <PlayerCard number={2} />

        <PlayerCard number={3} />
      </div>

      {/* player discipline data */}
      <DisciplineStats />

      {/* player bar-chart */}
      <PlayerGoal />

      {/* heading for table*/}
      <div
        className="flex-row"
        style={{
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h1>Players Table</h1>
        <div className="search-container flex-row">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by player name"
          />
          <input
            type="text"
            value={clubQuery}
            onChange={handleClubSearch}
            placeholder="Search by club"
          />
        </div>
      </div>

      {/* player table */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={filteredPlayers.map((row, index) => ({
            id: index.toString(),
            ...row,
          }))}
          columns={columns}
          getRowId={(row) => row.id}
          pagination
          pageSize={15}
          checkboxSelection
        />
      </div>
    </div>
  );
}
