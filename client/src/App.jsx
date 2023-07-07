import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./components/Layout";

//import pages from "./views
import { Clubs, Players } from "./views";

const App = () => {
  //check if route changes location
  const location = useLocation();

  useEffect(() => {
    //scroll to top of page
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Players />} />
          <Route path="/players" element={<Players />} />
          <Route path="/clubs" element={<Clubs />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
