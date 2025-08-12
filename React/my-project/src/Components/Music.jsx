import React from "react";

function Music({ musicListData , handleSongAdd ,index }) {
  // destructuring the data
  const { song, artist, image, added } = musicListData;

  return (
    <div className="w-60 h-40 bg-zinc-100 p-4 rounded-md m-2 flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="w-20 h-20 overflow-hidden rounded-md ">
          <img
            className=" w-full bg-amber-500 h-full object-cover"
            src={image}
            alt="image"
          />
        </div>
        <div>
          <h3 className="text-xl leading-none font-bold font-[serif]">
            {song}
          </h3>
          <h6 className="text-sm text-gray-600">{artist}</h6>
        </div>
      </div>
      <div className="flex justify-center mt-auto">
        <button
          onClick={()=>handleSongAdd(index)}
          className={`cursor-pointer px-4 py-2 ${added === true ? "bg-teal-500": "bg-orange-500"} text-xs rounded-full`}
        >
          {added === false ? "Add to Favourites" : "Remove from Favourites"}
        </button>
      </div>
    </div>
  );
}

export default Music;
