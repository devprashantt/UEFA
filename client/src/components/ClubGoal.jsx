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

import { ClubCard } from "../components";
import { getAllGoals } from "../services/goalsApi";

const ClubGoal = () => {
  const [clubStatistics, setClubStatistics] = useState([]);
  const [topClub, setTopClub] = useState(null);
  const [secondTopClub, setSecondTopClub] = useState(null);
  const [lastClub, setLastClub] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllGoals();
        const goalsData = response.data;

        // Group the goals by club
        const clubGoals = goalsData.reduce((accumulator, currentGoal) => {
          const { club, goals } = currentGoal;

          if (Object.prototype.hasOwnProperty.call(accumulator, club)) {
            accumulator[club].goals += goals;
            accumulator[club].matchesPlayed += currentGoal.match_played;
            accumulator[club].assists += currentGoal.assists;

            // Update the top scorer if necessary
            if (currentGoal.goals > accumulator[club].topScorer.goals) {
              accumulator[club].topScorer = {
                playerName: currentGoal.player_name,
                goals: currentGoal.goals,
              };
            }
          } else {
            accumulator[club] = {
              goals,
              goalsConceded: 0, // Add the code to fetch goals conceded data for each club
              goalsSaved: 0, // Add the code to fetch goals saved data for each club
              matchesPlayed: currentGoal.match_played,
              assists: currentGoal.assists,
              topScorer: {
                playerName: currentGoal.player_name,
                goals: currentGoal.goals,
              },
            };
          }

          return accumulator;
        }, {});

        // Convert the grouped data to an array of objects
        const clubStatisticsData = Object.keys(clubGoals).map((club) => ({
          club,
          goals: clubGoals[club].goals,
          goalsConceded: clubGoals[club].goalsConceded,
          goalsSaved: clubGoals[club].goalsSaved,
          matchesPlayed: clubGoals[club].matchesPlayed,
          assists: clubGoals[club].assists,
          topScorer: clubGoals[club].topScorer,
        }));

        // Sort the club statistics in descending order by goals
        clubStatisticsData.sort((a, b) => b.goals - a.goals);

        // Set the club statistics data in the state
        setClubStatistics(clubStatisticsData);

        // Set the top club, second top club, and last club
        setTopClub(clubStatisticsData[0]);
        setSecondTopClub(clubStatisticsData[1]);
        setLastClub(clubStatisticsData[clubStatisticsData.length - 1]);
      } catch (error) {
        console.error("Error fetching club data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: "club", headerName: "Club", width: 180 },
    { field: "goals", headerName: "Total Goals Scored", width: 200 },
    { field: "matchesPlayed", headerName: "Total Matches Played", width: 200 },
    { field: "topScorer", headerName: "Top Scorer", width: 180 },
  ];

  const rows = clubStatistics.map((clubStat, index) => ({
    id: index + 1,
    club: clubStat.club,
    goals: clubStat.goals,
    goalsConceded: clubStat.goalsConceded,
    goalsSaved: clubStat.goalsSaved,
    matchesPlayed: clubStat.matchesPlayed,
    assists: clubStat.assists,
    topScorer: `${clubStat.topScorer.playerName} (${clubStat.topScorer.goals} goals)`,
  }));
  return (
    <div
      className="flex-col"
      style={{
        gap: "2rem",
      }}
    >
      {/* top clubs and lowest club card */}
      <div
        className="flex-row"
        style={{
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <ClubCard
          title="Top Club"
          club={topClub ? topClub.club : "Loading..."}
          goals={topClub ? topClub.goals : "Loading goals.."}
        />
        <ClubCard
          title="Second Top Club"
          club={secondTopClub ? secondTopClub.club : "Loading..."}
          goals={secondTopClub ? secondTopClub.goals : "Loading goals.."}
        />
        <ClubCard
          title="Lowest Club"
          club={lastClub ? lastClub.club : "Loading..."}
          goals={lastClub ? lastClub.goals : "Loading goals.."}
        />
      </div>

      {/* clubs graph */}
      <div
        style={{
          padding: "1.6rem",
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
            <Bar dataKey="goals" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* clubs table */}
      <div
        style={{
          width: "100%",
          height: 400,
        }}
      >
        <DataGrid rows={rows} columns={columns} pagination pageSize={10} />
      </div>
    </div>
  );
};

export default ClubGoal;
