import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";

const RoutingComponents = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/about" Component={About} />
    </Routes>
  );
};

export default RoutingComponents;
