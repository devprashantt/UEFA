import { Link, useLocation } from "react-router-dom";

import "./../styles/Sidebar.scss";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-links">
        <Link
          to="/players"
          className={`${
            location.pathname === "/players" ? "active-link" : ""
          } sidebar-link`}
        >
          Player
        </Link>

        <Link
          to="/clubs"
          className={`${
            location.pathname === "/clubs" ? "active-link" : ""
          } sidebar-link`}
        >
          Clubs
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
