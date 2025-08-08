import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "amazon Basics",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1624521793559-136bfe16fc86?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Amazon Prime",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=https://images.unsplash.com/photo-1632813404574-b63d317ee258?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D%3D%3D",
      name: "amazon one",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1624521793559-136bfe16fc86?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=https://images.unsplash.com/photo-1624984608976-8a7358d25bce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D%3D%3D",
      name: "Amazon Day",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing2",
    },
    
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=https://images.unsplash.com/photo-1632813404574-b63d317ee258?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D%3D%3D",
      name: "amazon one",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1624521793559-136bfe16fc86?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=https://images.unsplash.com/photo-1624984608976-8a7358d25bce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D%3D%3D",
      name: "Amazon Day",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing2",
    },
    
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=https://images.unsplash.com/photo-1632813404574-b63d317ee258?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D%3D%3D",
      name: "amazon one",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1624521793559-136bfe16fc86?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=https://images.unsplash.com/photo-1624984608976-8a7358d25bce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D%3D%3D",
      name: "Amazon Day",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing2",
    },
    
  ];

  return (
  <div className="bg-zinc-500 flex flex-wrap gap-10 items-center justify-center w-full h-screen">
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
        </div>
      </div>
    ))}
  </div>
);

}

export default Card;
