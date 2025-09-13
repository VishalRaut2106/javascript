import { useEffect, useState } from "react";

const Service = () => {
  const [first, setfirst] = useState("this is first data");
  const [second, setsecond] = useState("this is imp second data");

  useEffect(() => {
    console.log("service is created");
    return () => {
      console.log("service is deleted");
    };
  });

  return (
    <div className="m-10">
      <h1>{first}</h1>
      <button
        onClick={() => setfirst("normal data has been changed")}
        className="p-3 mb-10  transition-all bg-blue-200 hover:bg-blue-300 rounded-2xl"
      >
        Change normal data
      </button>

      <h1>{second}</h1>
      <button
        onClick={() => setsecond("large data has been changed")}
        className="p-3 mb-10  transition-all bg-blue-200 hover:bg-blue-300 rounded-2xl"
      >
        Change large data
      </button>
    </div>
  );
};

export default Service;
