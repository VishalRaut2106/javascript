import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../Compontents/Home";
import User from "../Compontents/User";
import About from "../Compontents/About";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User" element={<User />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default Routing;
