import PropTypes from "prop-types";

const ClubGoal = ({ title, club, goals }) => {
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
      <h4>{title}</h4>
      <h2
        style={{
          color: "purple",
        }}
      >
        {club}
      </h2>
      <p>{goals} Goals</p>
    </div>
  );
};

ClubGoal.propTypes = {
  title: PropTypes.string.isRequired,
  club: PropTypes.string.isRequired,
  goals: PropTypes.number.isRequired,
};

export default ClubGoal;
