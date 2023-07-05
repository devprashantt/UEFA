import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./components/Layout";

//import pages from "./pages
import Players from "./views/Players";
import Clubs from "./views/Clubs";

const App = () => {
  //check if route changes location
  const location = useLocation();

  useEffect(() => {
    //scroll to top of page
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/players" element={<Players />} />
          <Route path="/clubs" element={<Clubs />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
