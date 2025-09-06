import axios from "axios";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Show from "./Show";
import Service from "./components/Service";

const App = () => {
  return (
    <div className="pt-[5%]">
      <nav className=" flex bg-amber-200 p-3  gap-10 font-bold uppercase justify-center">
        <Link to="/">home</Link>
        <Link to="/show">show</Link>
        <Link to="/service">service</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/show" element={<Show />}></Route>
        <Route path="/service" element={<Service />}></Route>
      </Routes>
    </div>
  );
};

export default App;
