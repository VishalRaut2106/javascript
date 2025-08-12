import React from "react";

function Navbar({data}) {

  return (
    <div className="w-full px-20 py-3  flex justify-between items-center">
      <h3>orange</h3>
      <div className="flex gap-3 p-4 bg-orange-400 text-white  rounded-md text-xl ">
        <h3>Faviourates</h3>
        <h4>{data.filter(item =>item.added).length}</h4>
      </div>
    </div>
  );
}

export default Navbar;
