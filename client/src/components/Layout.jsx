import PropTypes from "prop-types";

import Sidebar from "./Sidebar";

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
        style={{
          backgroundColor: "#f2f2f2",
          padding: "20px",
        }}
      >
        <h1>UEFA Champions League</h1>
      </header>
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",

          gap: "20px",
        }}
      >
        <Sidebar />
        <main
          style={{
            flex: 1,
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
