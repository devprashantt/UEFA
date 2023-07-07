import { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { DataGrid } from "@mui/x-data-grid";

import { getAllDiscipline } from "./../services/disciplineApi";

const DisciplineStats = () => {
  const [data, setData] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState("Felipe");
  const [selectedPlayerData, setSelectedPlayerData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchDisciplineData = async () => {
      try {
        const response = await getAllDiscipline();
        setData(response.data);
      } catch (error) {
        console.error("Error fetching discipline data:", error);
      }
    };

    fetchDisciplineData();
  }, []);

  useEffect(() => {
    if (selectedPlayer) {
      const playerData = data.find(
        (player) => player.player_name === selectedPlayer
      );
      setSelectedPlayerData(playerData);
    } else {
      setSelectedPlayerData(null);
    }
  }, [selectedPlayer, data]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handlePlayerSelect = (event) => {
    setSelectedPlayer(event.target.value);
  };

  const handleSearch = (event) => {
    const searchKeyword = event.target.value.toLowerCase();
    const filteredPlayerData = data.filter((player) =>
      player.player_name.toLowerCase().includes(searchKeyword)
    );
    setFilteredData(filteredPlayerData);
  };

  const renderPieChart = () => {
    if (!selectedPlayerData) return null;

    const { fouls_committed, fouls_suffered, red, yellow } = selectedPlayerData;

    const pieChartData = [
      { name: "Fouls Committed", value: fouls_committed, color: "#ff5252" },
      { name: "Fouls Suffered", value: fouls_suffered, color: "#ff7f27" },
      { name: "Red Cards", value: red, color: "#ff0000" },
      { name: "Yellow Cards", value: yellow, color: "#ffd700" },
    ];

    return (
      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          data={pieChartData}
          cx={200}
          cy={150}
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    );
  };

  const renderBarChart = () => {
    if (!selectedPlayerData) return null;

    const { fouls_committed, fouls_suffered, red, yellow } = selectedPlayerData;

    const barChartData = [
      { name: "Fouls Committed", value: fouls_committed },
      { name: "Fouls Suffered", value: fouls_suffered },
      { name: "Red Cards", value: red },
      { name: "Yellow Cards", value: yellow },
    ];

    return (
      <BarChart width={600} height={300} data={barChartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    );
  };

  const columns = [
    { field: "player_name", headerName: "Player Name", width: 160 },
    { field: "club", headerName: "Club", width: 120 },
    { field: "position", headerName: "Position", width: 120 },
    { field: "fouls_committed", headerName: "Fouls Committed", width: 130 },
    { field: "fouls_suffered", headerName: "Fouls Suffered", width: 130 },
    { field: "red", headerName: "Red Cards", width: 120 },
    { field: "yellow", headerName: "Yellow Cards", width: 120 },
    { field: "minutes_played", headerName: "Minutes Played", width: 120 },
    { field: "match_played", headerName: "Matches Played", width: 120 },
  ];

  return (
    <div
      className="flex-col"
      style={{
        width: "100%",
      }}
    >
      <div
        className="flex-row"
        style={{
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h1>Player Discipline Stats</h1>
        <div className="flex-row">
          <label htmlFor="playerSelect">Select Player: </label>
          <select
            id="playerSelect"
            value={selectedPlayer}
            onChange={handlePlayerSelect}
          >
            <option value="">All Players</option>
            {data.map((player) => (
              <option key={player.id} value={player.player_name}>
                {player.player_name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          gap: "1rem",
        }}
      >
        {/* pie chart */}
        <div
          className="flex-col"
          style={{
            height: "100%",
            width: "100%",
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "0.4rem",
            padding: "1rem",
            flex: "1",
          }}
        >
          <h3>Pie Chart</h3>
          {renderPieChart()}
        </div>
        {/* bar graph */}
        <div
          className="flex-col"
          style={{
            height: "100%",
            width: "100%",
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "0.4rem",
            padding: "1rem",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3>Bar Chart</h3>
          {renderBarChart()}
        </div>
      </div>
      <div
        style={{
          height: 400,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          className="flex-row"
          style={{
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <h1>Players Discipline</h1>
          <input
            type="text"
            placeholder="Search player"
            onChange={handleSearch}
          />
        </div>
        <DataGrid rows={filteredData} columns={columns} pageSize={10} />
      </div>
    </div>
  );
};

export default DisciplineStats;
