import { Card, Card2 , Card3 , CardProp } from "./Components/Card"; // named import
import React from "react";
import UseState from "./Components/UseState";
import MiniCard from "./Components/MiniCard"; // named import

function App() {
  const data = ["vishal", "vishal raut", "kiran"];

  return (
    <>
      <Card />
      <CardProp text="know more" color = "bg-green-600"/>
      <CardProp text="Download" color = "bg-yellow-600"/>
      <UseState/>
      <Card2 />
      <Card3/>
      <MiniCard/>
      
    </>
  );
}

export default App;
