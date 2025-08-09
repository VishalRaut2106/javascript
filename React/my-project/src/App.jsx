import React from "react";
import { Card, Card2 } from "./Components/Card"; // named import
import UseState from "./Components/UseState";

function App() {
  const data = ["vishal", "vishal raut", "kiran"];

  return (
    <>
      <Card />
      <UseState/>
      <Card2 />
    </>
  );
}

export default App;
