

import Navbar from "@/components/Navbar";
// import { useState, useEffect } from "react";

import fs from "fs/promises";

export default function Home() {
  // const [count, setCount] = useState(0);
  console.log("Hey I am Hafijur");

  let a = fs.readFile(".gitignore");
  a.then((e) => {
    console.log(e.toString());
  });
  return (
    <div>
      <Navbar/>
      I am component
      {/* {count} */}
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
  );
}
