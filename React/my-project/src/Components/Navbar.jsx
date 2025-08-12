import React from "react";

function Navbar() {
  return (
    <div className="w-full px-20 py-3  flex justify-between items-center">
      <h3>orange</h3>
      <div className="flex p-4 bg-orange-400 text-white  rounded-md text-xl ">
        <h3>Faviourates</h3>
        <h4>2</h4>
      </div>
    </div>
  );
}

export default Navbar;
