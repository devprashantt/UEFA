import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        className="flex-row"
        style={{
          boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)",

          padding: "0.8rem 1.6rem",
          justifyContent: "space-between",
        }}
      >
        <h1>UEFA Champions League</h1>
        <div className="flex-row">
          <Link
            to="/players"
            style={{
              color:
                location.pathname === "/players" || location.pathname === "/"
                  ? "black"
                  : "gray",
            }}
          >
            Player
          </Link>

          <Link
            to="/clubs"
            style={{
              color: location.pathname === "/clubs" ? "black" : "gray",
            }}
          >
            Clubs
          </Link>
        </div>
      </header>
      <main
        style={{
          flex: 1,
          padding: "1.6rem",
        }}
      >
        {children}
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
