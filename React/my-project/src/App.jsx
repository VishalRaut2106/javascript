import React, { useState } from "react";
import { Card, Card2, Card3, CardProp } from "./Components/Card";
import UseState from "./Components/UseState";
import MiniCard from "./Components/MiniCard";
import Practice_Props from "./Components/Props";

function App() {
  const dataProps = [
    { name: "Jon Doe", profession: "Painter", description: "A passionate painter who captures nature's beauty with bold colors and fine details.", image: "https://images.unsplash.com/photo-1594672830234-ba4cfe1202dc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0", friend: false },
    { name: "Amit", profession: "Software Engineer", description: "A tech enthusiast who loves building innovative solutions and solving complex coding problems.", image: "https://images.unsplash.com/photo-1602599157738-a2656c52aefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0", friend: false },
    { name: "Nano", profession: "Artist", description: "An artist with a unique style blending abstract forms with vibrant textures.", image: "https://images.unsplash.com/photo-1717248319281-0899e82147ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0", friend: false },
    { name: "Aman", profession: "Coder", description: "A problem-solver who thrives on creating scalable and efficient code structures.", image: "https://images.unsplash.com/photo-1615572359976-1fe39507ed7b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0", friend: false },
    { name: "Sophia", profession: "Photographer", description: "Captures moments that tell stories, with a keen eye for light and composition.", image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0", friend: false },
    { name: "Rahul", profession: "Musician", description: "A multi-instrumentalist creating melodies that inspire and uplift audiences.", image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0", friend: false },
    { name: "Emma", profession: "Fashion Designer", description: "Designs clothing with a blend of modern elegance and cultural heritage.", image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0", friend: false }
  ];

  const [realData, setRealData] = useState(dataProps);

  const handleFriend = (cardIndex) => {
    setRealData((previous) =>
      previous.map((item, index) =>
        index === cardIndex ? { ...item, friend: !item.friend } : item
      )
    );
  };

  return (
    <>
      <Card />
      <CardProp text="know more" color="bg-green-600" />
      <CardProp text="Download" color="bg-yellow-600" />
      <UseState />

      <div className="overflow-y-auto mt-5 bg-purple-100 h-screen mb-5 flex gap-10 flex-wrap items-center justify-center">
        {realData.map((item, index) => (
          <Practice_Props
            key={index}
            cardindex={index} 
            handleFriend={handleFriend}
            values={item}
          />
        ))}
      </div>

      <Card2 />
      <Card3 />
      <MiniCard />
    </>
  );
}

export default App;
