import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    const {name} =     useParams();
    const Navigate =  useNavigate()
    const gobackhandler = () =>{
        // Navigate("/user")
        Navigate(-1)
    }
  return (
    <div className=" bg-zinc-500 m-auto w-1/2 mt-10 rounded-2xl p-10 ">
      <h1 className="text-5xl text-white font-bold">User Detail Page</h1>
      <h1 className="text-3xl mt-2 text-yellow-500 font-bold">Hii    {name} </h1>
      <button onClick={gobackhandler} className="p-3 mt-3 bg-blue-300 hover:bg-blue-400 rounded-full ml-[40%]">
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
