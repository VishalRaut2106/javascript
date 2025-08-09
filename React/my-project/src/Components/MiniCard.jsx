import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

function MiniCard() {
const [val, setval] =     useState(false);

  return (
    <div className="w-full h-screen flex bg-amber-100 justify-center items-center">
      <div className="relative flex rounded overflow-hidden bg-zinc-500 w-[280px] h-32">
        
        {/* First Image */}
        <img
          className={`transition-transform duration-500 ease-in-out shrink-0 ${val ===false ? "-translate-x-[0%]": "-translate-x-[100%]"}  w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1754630551378-e1ecffe9da6b?w=500&auto=format&fit=crop&q=60"
          alt="unsplash"
        />

        {/* Second Image */}
        <img
          className={`transition-all duration-500 ease-in-out shrink-0 ${val ===false ? "-translate-x-[0%]": "-translate-x-[100%]"}  w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1754629346524-272710ed75e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D"
          alt="unsplash"
        />

        {/* Arrow Button */}
       <span
  onClick={() => setval(() => !val)}
  className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#dadada7b] absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[10%] cursor-pointer
    transition-colors duration-300 hover:bg-[#dadada]`}
>
  <FaArrowRight
    size={".7em"}
    className={`transition-transform duration-500 ${val ? "rotate-180" : "rotate-0"}`}
  />
</span>

      </div>
    </div>
  );
}

export default MiniCard;
