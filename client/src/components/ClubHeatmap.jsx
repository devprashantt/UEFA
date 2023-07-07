import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { getAllDefending } from "../services/defendingApi";
import { getAllAttacking } from "../services/attackingApi";
import { getAllGoalkeeping } from "../services/goalkeepingApi";
import { getAllGoals } from "../services/goalsApi";

const ClubHeatmap = () => {
  const [selectedType, setSelectedType] = useState("Attack");
  const [selectedTeam, setSelectedTeam] = useState("LOSC");

  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  const [defendingStats, setDefendingStats] = useState([]);
  const [attackingStats, setAttackingStats] = useState([]);
  const [goalkeepingStats, setGoalkeepingStats] = useState([]);
  const [goalsStats, setGoalsStats] = useState([]);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [defendingRes, attackingRes, goalkeepingRes, goalsRes] =
        await Promise.all([
          getAllDefending(),
          getAllAttacking(),
          getAllGoalkeeping(),
          getAllGoals(),
        ]);

      const defendingData = defendingRes.data;
      const attackingData = attackingRes.data;
      const goalkeepingData = goalkeepingRes.data;
      const goalsData = goalsRes.data;

      const uniqueTeams = [
        ...new Set(defendingData.map((stat) => stat.club)),
        ...new Set(attackingData.map((stat) => stat.club)),
        ...new Set(goalkeepingData.map((stat) => stat.club)),
      ];

      setTeams(uniqueTeams);

      setDefendingStats(defendingData);
      setAttackingStats(attackingData);
      setGoalkeepingStats(goalkeepingData);
      setGoalsStats(goalsData);
    } catch (error) {
      console.log("Error fetching stats:", error);
    }
  };

  useEffect(() => {
    let uniquePlayers = [];

    if (selectedType === "Defence") {
      uniquePlayers = [
        ...new Set(defendingStats.map((stat) => stat.player_name)),
      ];
    } else if (selectedType === "Attack") {
      uniquePlayers = [
        ...new Set(attackingStats.map((stat) => stat.player_name)),
      ];
    } else if (selectedType === "Goalkeeping") {
      uniquePlayers = [
        ...new Set(goalkeepingStats.map((stat) => stat.player_name)),
      ];
    }
    setPlayers(uniquePlayers);
  }, [selectedType, defendingStats, attackingStats, goalkeepingStats]);

  const toggleType = (type) => {
    setSelectedType(type);
  };

  const handleTeamChange = (e) => {
    setSelectedTeam(e.target.value);
  };

  const filterStats = () => {
    let filteredStats = [];

    if (selectedType === "Defence") {
      filteredStats = defendingStats;
    } else if (selectedType === "Attack") {
      filteredStats = attackingStats;
    } else if (selectedType === "Goalkeeping") {
      filteredStats = goalkeepingStats;
    }

    if (selectedTeam !== "All") {
      filteredStats = filteredStats.filter(
        (stat) => stat.club === selectedTeam
      );
    }
    return filteredStats;
  };

  const subCategories = {
    Attack: ["goals", "assists", "corner_taken", "offsides", "dribbles"],
    Defence: [
      "goals",
      "t_won",
      "t_lost",
      "clearance_attempted",
      "balls_recovered",
    ],
    Goalkeeping: ["saved", "conceded", "clean_sheets", "punches_made"],
  };

  const getStats = () => {
    const filteredStats = filterStats();

    return filteredStats.map((stat) => {
      const data = subCategories[selectedType].map((key) => {
        let value = stat[key] || 0;

        // Fill goals column with 0 if it is missing in the data
        if (key === "goals" && value === 0) {
          const goalData = goalsStats.find(
            (goal) => goal.player_name === stat.player_name
          );
          value = goalData ? goalData.goals : 0;
        }

        return {
          x: key,
          y: value,
        };
      });

      return {
        name: stat.player_name,
        data: data,
      };
    });
  };

  const options = {
    chart: {
      type: "chart",
      toolbar: {
        show: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 5,
              name: "Low",
              color: "#E5F0FF", // Light blue shade
            },
            {
              from: 5,
              to: 10,
              name: "Medium",
              color: "#99C2FF", // Medium blue shade
            },
            {
              from: 10,
              to: 20,
              name: "High",
              color: "#3385FF", // Darker blue shade
            },
            {
              from: 20,
              to: 100,
              name: "Very High",
              color: "#0052CC", // Deepest blue shade
            },
          ],
        },
      },
    },
    xaxis: {
      type: "category",
      categories: subCategories[selectedType],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      type: "category",
      categories: players,
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: "12px",
      },
    },
  };

  return (
    <div className="flex-col">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div className="flex-row">
          <label htmlFor="teamSelect">Select Team:</label>
          <select
            id="teamSelect"
            value={selectedTeam}
            onChange={handleTeamChange}
          >
            {teams.map((team, index) => (
              <option key={index} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-row">
          <button
            onClick={() => toggleType("Attack")}
            style={{
              color: selectedType === "Attack" ? "blue" : "black",
              fontWeight: selectedType === "Attack" ? "bold" : "normal",
            }}
          >
            Attack
          </button>
          <button
            onClick={() => toggleType("Defence")}
            style={{
              color: selectedType === "Defence" ? "blue" : "black",
              fontWeight: selectedType === "Defence" ? "bold" : "normal",
            }}
          >
            Defence
          </button>
          <button
            onClick={() => toggleType("Goalkeeping")}
            style={{
              color: selectedType === "Goalkeeping" ? "blue" : "black",
              fontWeight: selectedType === "Goalkeeping" ? "bold" : "normal",
            }}
          >
            Goalkeeping
          </button>
        </div>
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <ReactApexChart
          options={options}
          series={getStats()}
          type="heatmap"
          height={500}
        />
      </div>
    </div>
  );
};

export default ClubHeatmap;
