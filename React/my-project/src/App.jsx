import React from "react";
import { Card, Card2 , Card3 } from "./Components/Card"; // named import
import UseState from "./Components/UseState";

function App() {
  const data = ["vishal", "vishal raut", "kiran"];

  return (
    <>
      <Card />
      <UseState/>
      <Card2 />
      <Card3/>
    </>
  );
}

export default App;
