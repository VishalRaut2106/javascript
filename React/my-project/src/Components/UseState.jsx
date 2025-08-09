import React, { useState } from "react";

function UseState() {
  const [val, setval] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div>
      {val.map((item) => (
        <h1>{item}</h1>
      ))}
      <button
        onClick={() =>
          setval(() => val.filter((item, index) => index != val.length - 1))
        }
        className="px-2 py-1 bg-blue-500 text-white rounded m-2"
      >
        {" "}
        click
      </button>
      <button
        onClick={() =>
          setval((val) =>[...val, val.length + 1])
        }
        className="px-2 py-1 bg-blue-500 text-white rounded m-2"
      >
        {" "}
        Add next Number
      </button>
    </div>
  );
}

export default UseState;
