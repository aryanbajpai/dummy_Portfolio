import React, { useState, useEffect } from "react";

const Project = () => {
    const [state, setState] = useState({
      scrollPosition: 0,
    })
  
    const handleScroll = () => {
      setState((prevState) => ({
        ...prevState,
        scrollPosition: window.scrollY,   //pixel scrolled vertically
      }))
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const opacity = Math.min((state.scrollPosition - 600) / 700, 1);
    const translateY = Math.min((state.scrollPosition - 740) / 3, 100); 

  return (
    <section className="w-full min-h-[100vh] h-auto py-[180px] mt-[-10px] relative z-30 bg-gradient-to-b from-[#011425] to-[#5c7c89] via-[#1f4959] rounded-b-2xl">
      <div
        className="text-center text-[70px] tracking-tighter text-[#D3D3D3] nunito-family"
        style={{
          textShadow: "4px 4px 3px #5c7c89",
          opacity: opacity,
          transform: `translateY(-${translateY}px)`, 
          transition: "transform 0.9s ease-out, opacity 0.4s ease-out", 
        }}
      >
        PROJECTS
      </div>
    </section>
  );
};

export default Project;
