import React from "react";

function Music({ musicListData }) {
  // destructuring the data
  const { name, artist, image } = musicListData;

  return (
    <div className="w-60 h-40 bg-zinc-100 p-4 rounded-md m-2 flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="w-20 h-20 overflow-hidden rounded-md ">
          <img
            className=" w-full  h-full object-cover"
            src={image}
            alt="image"
          />
        </div>
        <div>
          <h3 className="text-xl leading-none font-bold font-[serif]">
            {name}
          </h3>
          <h6 className="text-sm text-gray-600">{artist}</h6>
        </div>
      </div>
      <div className="flex justify-center mt-auto">
        <button className="px-4 py-2 bg-orange-300 text-xs rounded-full">
          Add to Favourites
        </button>
      </div>
    </div>
  );
}

export default Music;
