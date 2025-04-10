import React, { useState, useEffect } from "react";

const Contact = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const opacity = Math.min((scrollPosition - 1200) / 1150, 1);
    const translateY = Math.min((scrollPosition - 1750) / 3, 100); 

  return (
    <section className="w-full min-h-[100vh] h-auto py-[180px] mt-[-10px] rounded-2xl bg-gradient-to-b from-[#011425] to-[#5c7c89] via-[#1f4959] rounded-b-2xl">
      <div
        className="text-center text-[70px] tracking-tighter text-[#D3D3D3] nunito-family"
        style={{
          textShadow: "4px 4px 3px #5c7c89",
          opacity: opacity,
          transform: `translateY(-${translateY}px)`, 
          transition: "transform 0.6s ease-out, opacity 0.3s ease-out", 
        }}
      >
        CONTACT
      </div>
    </section>
  );
};

export default Contact;
