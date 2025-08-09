import { Card, Card2 , Card3 } from "./Components/Card"; // named import
import React from "react";
import UseState from "./Components/UseState";
import MiniCard from "./Components/MiniCard"; // named import

function App() {
  const data = ["vishal", "vishal raut", "kiran"];

  return (
    <>
      <Card />
      <UseState/>
      <Card2 />
      <Card3/>
      <MiniCard/>
    </>
  );
}

export default App;
