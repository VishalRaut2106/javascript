import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className=" bg-zinc-500 m-auto w-1/2 mt-10 rounded-2xl text-4xl flex gap-10 justify-center p-10 ">

        {/* ✅ 1st way: Using a function that returns JSX (custom render inside NavLink) */}
        <NavLink to="/">
          {(el) => {
            return (
              <span
                className={[
                  el.isActive ? "text-green-500" : "",
                  el.isActive ? "font-bold" : "",
                ].join(" ")}
              >
                Home
              </span>
            );
          }}
        </NavLink>

        {/* ✅ 2nd way: Using "style" prop to apply inline styles conditionally */}
        <NavLink
          style={(el) => {
            return {
              color: el.isActive ? "tomato" : "",
              fontWeight: el.isActive ? "bold" : "",
            };
          }}
          to="/User"
        >
          User
        </NavLink>

        {/* ✅ 3rd way: Using "className" prop to apply conditional Tailwind classes */}
        <NavLink
          className={(el) => {
            return [
              el.isActive ? "text-amber-400" : "",
              el.isActive ? "font-bold" : "",
            ].join(" ");
          }}
          to="/About"
        >
          About
        </NavLink>
      </nav>
    </>
  );
};

export default Nav;
