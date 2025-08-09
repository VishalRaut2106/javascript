import React, { useState } from "react";

function UseState() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  // Add number function
  const handleAdd = () => {
    setVal((prev) => {
      const newVal = [...prev, prev[prev.length - 1] + 1];
      if (newVal[newVal.length - 1] === 7) {
        console.log("Thala for a reason 🐐");
        alert("Thala for a reason 🐐");
      }
      return newVal;
    });
  };

  // Remove last number
  const handleRemove = () => {
    setVal((prev) => prev.filter((_, index) => index !== prev.length - 1));
  };

  return (
    <div>
      {val.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}

      <button
        onClick={handleRemove}
        className="px-2 py-1 bg-blue-500 text-white rounded m-2"
      >
        Remove Last Number
      </button>

      <button
        onClick={handleAdd}
        className="px-2 py-1 bg-green-500 text-white rounded m-2"
      >
        Add Next Number
      </button>
    </div>
  );
}

export default UseState;
