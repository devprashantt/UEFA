//Layout for dashboard layout
import PropTypes from "prop-types";

import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <header>Header</header>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
