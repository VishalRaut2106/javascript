import React, { useState } from "react";

// ---------- CARD 1 ----------
function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=1000&auto=format&fit=crop&q=60",
      name: "amazon Basics",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      instok: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1624521793559-136bfe16fc86?w=1000&auto=format&fit=crop&q=60",
      name: "Amazon Prime",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
      instok: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=1000&auto=format&fit=crop&q=60",
      name: "amazon one",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      instok: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1624521793559-136bfe16fc86?w=1000&auto=format&fit=crop&q=60",
      name: "Amazon Day",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing2",
      instok: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=1000&auto=format&fit=crop&q=60",
      name: "amazon one",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      instok: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1624521793559-136bfe16fc86?w=1000&auto=format&fit=crop&q=60",
      name: "Amazon Day",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing2",
      instok: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=1000&auto=format&fit=crop&q=60",
      name: "amazon one",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      instok: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1624521793559-136bfe16fc86?w=1000&auto=format&fit=crop&q=60",
      name: "Amazon Day",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing2",
      instok: true,
    },
  ];

  return (
    <div className="bg-zinc-500 flex flex-wrap gap-10 items-center justify-center w-full min-h-screen p-4">
      {data.map((elem, index) => (
        <div
          key={index}
          className="w-52 bg-zinc-100 rounded-md overflow-hidden shadow-md"
        >
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="object-cover h-full w-full"
              src={elem.image}
              alt={elem.name}
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-3">{elem.description}</p>
            <div className="flex gap-3 mt-2">
              <button
                className={`px-4 py-1 text-xs text-white rounded-xl ${
                  elem.instok ? "bg-blue-500" : "bg-red-600"
                }`}
              >
                {elem.instok === true ? "In Stock" : "Out of Stock"}
              </button>
              <button className="bg-amber-300 px-4 py-1 text-xs rounded">
                Know More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------- CARD 2 ----------
function Card2() {
  const data = [
    {
      name: "Mahiya ve..!",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Sajni re..!",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Raabta Raabta..!",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Hello..!",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="bg-zinc-500 flex flex-wrap gap-4 items-center justify-center w-full min-h-screen p-4">
      {data.map((elem, index) => (
        <div
          key={index}
          className="w-64 px-3 py-4 bg-zinc-100 rounded shadow-md"
        >
          <h3 className="font-semibold text-lg">{elem.name}</h3>
          <p className="text-xs mt-2">{elem.description}</p>
          <button
            onClick={() => window.open("https://google.com", "_blank")}
            className="cursor-pointer px-3 py-1 bg-blue-400 rounded text-sm mt-3"
          >
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
}

function Card3() {
  const [val, setVal] = useState(false);

  return <div className="m-10 bg-amber-400">
    <h1>
      {val === false ? "BAHAR JAO":"MAT JAO" }
    </h1>
    <button onClick={()=> setVal(()=> !val)} className="px-2 py-1 bg-violet-300 cursor-pointer"> Change</button>
  </div>;
}


export { Card, Card2, Card3 };
