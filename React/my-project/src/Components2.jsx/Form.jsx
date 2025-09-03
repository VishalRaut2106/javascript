import React, { useState } from "react";

function Form() {
  

  
  
  return (
    <div className="mt-10 flex justify-center ">
      <form className="flex gap-10 " action="">
        <input
          className="rounded-md px-2 bg-amber-200  py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          className="rounded-md px-2 bg-amber-200 py-1 text-base font-semibold outline-none "
          type="text"
          placeholder="Email"
        />
        <input
          className="rounded-md px-2 bg-amber-200  py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Image url"
        />
        <input
          className="px-5 text-white font-semibold py-1 rounded-md bg-blue-300 "
          type="submit"
        />
      </form>
    </div>
  );
}

export default Form;
