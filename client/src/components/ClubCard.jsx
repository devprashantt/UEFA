import PropTypes from "prop-types";

const ClubGoal = ({ title, club, goals }) => {
  return (
    <div
      style={{
        padding: "1rem",
        width: "100%",

        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)",

        borderRadius: "0.4rem",
      }}
    >
      <h2>{title}</h2>
      <p>{club}</p>
      <p>{goals}</p>
    </div>
  );
};

ClubGoal.propTypes = {
  title: PropTypes.string.isRequired,
  club: PropTypes.string.isRequired,
  goals: PropTypes.number.isRequired,
};

export default ClubGoal;
