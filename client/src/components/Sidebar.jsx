//Sidebar for dashboard

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/players">Player</Link>
        </li>
        <li>
          <Link to="/clubs">Clubs</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
