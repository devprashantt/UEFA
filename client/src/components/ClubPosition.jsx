import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getAllGoals } from "../services/goalsApi";

const ClubPosition = () => {
  const [clubStatistics, setClubStatistics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllGoals();
        const goalsData = response.data;

        // Group the goals by club and position
        const clubPositionGoals = goalsData.reduce(
          (accumulator, currentGoal) => {
            const { club, position, goals } = currentGoal;

            if (!accumulator[club]) {
              accumulator[club] = {};
            }

            if (!accumulator[club][position]) {
              accumulator[club][position] = 0;
            }

            accumulator[club][position] += goals;

            return accumulator;
          },
          {}
        );

        // Convert the grouped data to an array of objects with unique ids
        const clubStatisticsData = Object.keys(clubPositionGoals).map(
          (club, index) => {
            const positions = clubPositionGoals[club];
            return {
              id: index + 1,
              club,
              ...positions,
            };
          }
        );

        // Set the club statistics data in the state
        setClubStatistics(clubStatisticsData);
      } catch (error) {
        console.error("Error fetching club data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: "club", headerName: "Club", width: 160 },
    { field: "Forward", headerName: "Forward", width: 120 },
    { field: "Midfielder", headerName: "Midfielder", width: 120 },
    { field: "Defender", headerName: "Defender", width: 120 },
  ];

  return (
    <div
      className="flex-col"
      style={{
        gap: "2rem",
      }}
    >
      <div
        style={{
          padding: "1.2rem",
          width: "100%",

          boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)",

          borderRadius: "0.4rem",
        }}
      >
        <ResponsiveContainer height={400}>
          <BarChart data={clubStatistics}>
            <XAxis dataKey="club" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Forward" stackId="goals" fill="#8884d8" />
            <Bar dataKey="Midfielder" stackId="goals" fill="#82ca9d" />
            <Bar dataKey="Defender" stackId="goals" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ width: "100%", height: 400 }}>
        <DataGrid
          rows={clubStatistics}
          columns={columns}
          pageSize={10}
          pagination
        />
      </div>
    </div>
  );
};

export default ClubPosition;
