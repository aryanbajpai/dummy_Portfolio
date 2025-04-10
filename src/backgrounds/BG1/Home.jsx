import React, { useEffect, useState } from "react";
import img from "../../assets/save.png";
import "../../index.css";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track the scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Add event listener for scroll when the component mounts and remove it on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className=" w-full h-[85vh] rounded-b-2xl overflow-hidden bg-gradient-to-b relative z-50 from-[#011425] to-[#5c7c89] via-[#1f4959]">
      <nav className="w-[80%] mx-auto h-auto px-8 bg-transparent flex justify-between items-center">
        <div
          className="text-3xl py-5 font-bold text-[#fff] italic"
          style={{ textShadow: "2px 2px 4px #5c7c89" }}
        >
          ARYAN BAJPAI
        </div>
        {/* Options */}
        <div className="text-lg  text-[#fff] flex gap-6 px-5">
          <div className="hover:backdrop-blur-lg hover:bg-[#1f4959] tracking-wider hover:tracking-widest rounded-xl p-5 cursor-pointer transition-all duration-500 ease-in-out">
            HOME
          </div>
          <div className="hover:backdrop-blur-lg hover:bg-[#1f4959] tracking-wider hover:tracking-widest rounded-xl p-5 cursor-pointer transition-all duration-500 ease-in-out">
          MY JOURNEY
          </div>
          <div className="hover:backdrop-blur-lg hover:bg-[#1f4959]  tracking-wider hover:tracking-widest rounded-xl p-5 cursor-pointer transition-all duration-500 ease-in-out">
            PROJECTS
          </div>
          <div className="hover:backdrop-blur-lg hover:bg-[#1f4959] tracking-wider hover:tracking-widest rounded-xl p-5 cursor-pointer transition-all duration-500 ease-in-out">
            CONTACT
          </div>
        </div>
      </nav>

      <main className="w-[80%] mx-auto grid grid-cols-[45%_minmax(55%,_1fr)] items-center mt-14">
        <section
          className="w-full text-white mt-[-55px] float-up"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <p className="text-[65px] mb-[-25px] font-bold text-[#D3D3D3]">
            <span className="text-[#6993a3]">Hello!</span> I'm
          </p>
          <p
            className="text-[65px] mb-[-8px] italic font-bold text-[#D3D3D3]"
            style={{ textShadow: "4px 4px 4px #5c7c89" }}
          >
            ARYAN BAJPAI
          </p>
          <p className="font-[700] italic text-[27px]">
            {/*FULL-STACK*/}REACT JS <span className="text-[#84abbb]">DEVELOPER</span>{" "}
            <span className="border-[3px] ml-4 rounded-full border-[#fff] h-full blink"></span>
          </p>
        </section>
        {/* IMG */}
        <section className="w-full flex justify-center text-white relative float-up-img">
          <img
            className="w-[70%] rounded-2xl h-[480px] mx-auto relative z-10 object-cover"
            src={img}
            alt="Developer"
            style={{
              transform: `translateY(${scrollY * 0.08}px)`, // Parallax effect for the image
            }}
          />

          {/* GLASS SHAPES 1 */}
          <div
            className="absolute h-[480px] w-[70%] rounded-2xl mr-[-22px] bottom-[-12px] backdrop-blur-xl bg-[#092136] opacity-[70%] z-0"
            style={{
              transform: `translateY(${scrollY * 0.04}px)`, // Slight movement for background elements
            }}
          ></div>
          {/* GLASS SHAPES 2 */}
          <div
            className="absolute h-[480px] w-[70%] rounded-2xl ml-[-22px] top-[-12px] backdrop-blur-xl bg-[#4e6f7c] opacity-[70%] z-0"
            style={{
              transform: `translateY(${scrollY * 0.04}px)`, // Slight movement for background elements
            }}
          ></div>
          {/* GLASS SHAPES 3 */}
          <div
            className="absolute h-[140px] w-[140px] rounded-3xl left-[60px] top-[-60px] backdrop-blur-xl bg-[#4e6f7c] opacity-[80%] z-20"
            style={{
              transform: `translateY(${scrollY * 0.04}px)`, // Slight movement for background elements
            }}
          >
            <div
              className="absolute h-[40px] w-[40px] overflow-hidden rounded-full left-[17px] top-[100%] backdrop-blur-xl bg-[#2d5374] opacity-[80%] z-20"
              style={{
                transform: `translateY(${scrollY * 0.04}px)`, // Slight movement for background elements
              }}
            ></div>
          </div>
          {/* GLASS SHAPES 4 */}
          <div
            className="absolute h-[140px] w-[140px] rounded-3xl right-[60px] bottom-[-60px] backdrop-blur-xl bg-[#092136] opacity-[80%] z-20"
            style={{
              transform: `translateY(${scrollY * 0.04}px)`, // Slight movement for background elements
            }}
          >
            <div
              className="absolute h-[40px] w-[40px] overflow-hidden rounded-full right-[17px] bottom-[100%] backdrop-blur-xl bg-[#6993a3] opacity-[80%] z-20"
              style={{
                transform: `translateY(${scrollY * 0.04}px)`, // Slight movement for background elements
              }}
            ></div>
          </div>
        </section>
      </main>

      <div
        className="absolute h-[480px] w-[480px] rounded-full overflow-hidden left-[-8%] bottom-[-34%] backdrop-blur-xl bg-[#242424] opacity-[80%] z-0"
        style={{
          transform: `translateY(${scrollY * 0.04}px)`, // Slight movement for background elements
        }}
      ></div>
    </main>
  );
};

export default Home;
