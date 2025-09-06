import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../Compontents/Home";
import User from "../Compontents/User";
import About from "../Compontents/About";
import UserDetails from "../Compontents/UserDetails";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User" element={<User />}>
          <Route path="/User/:name" element={<UserDetails />} />{" "}
          {/* if you want to open the info on same then make it child and give <Outlet></outlet>   and if you want to give separate page then use  doe make the child */}
        </Route>
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default Routing;
