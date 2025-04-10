import React from "react";
import Home from "./Home";
import Project from "./Project";
import Contact from "./Contact";
import MyJourney from "./MyJourney";

const BG1 = () => {
  return (
    <section className="w-[100vw] min-h-[100vh] h-auto bg-gradient-to-b from-[#011425] to-[#1f4959]">
      <Home />
      <MyJourney />
      <Project />
      <Contact />
    </section>
  );
};

export default BG1;
