import { ClubGoal, ClubHeatmap, ClubPosition } from "../components";

const Clubs = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* clubs goals stats */}
      <ClubGoal />

      {/* clubs position stats */}
      <ClubPosition />

      {/*clubs and players heatmap */}
      <ClubHeatmap />
    </div>
  );
};

export default Clubs;
