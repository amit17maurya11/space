import React from "react";
import { NavLink } from "react-router-dom";
import space from "../../src/space.png";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { Divider } from "antd";

function Home() {
  return (
    <>
      {/* <NavLink to="/">Home</NavLink> */}
      <Header />
      <Section1 />
      <Divider style={{ backgroundColor: "white" }} />
      <Section2 />
    </>
  );
}

export default Home;
