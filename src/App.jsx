import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Footer from "./utilities/Footer";
import NavHeader from "./components/headers/NavHeader";
import RoutingComponents from "./components/routes/RoutingComponents";

const App = () => {
  return (
    <Router>
      <div className=" w-full min-h-screen bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200">
        <NavHeader />
        <RoutingComponents />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
