import React, { useState, useEffect } from "react";
import img from "../../assets/wenDev.jpg";

const MyJourney
 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.min(scrollPosition / 120, 1);
  const translateY = Math.min(scrollPosition / 3, 100);

  return (
    <section className="w-full min-h-[100vh] h-auto py-[160px] mt-[-10px] bg-gradient-to-b relative z-40 from-[#011425] to-[#5c7c89] via-[#1f4959] rounded-b-2xl">
      {/* TITLE */}
      <div
        className="text-center text-[70px] tracking-tighter text-[#D3D3D3] nunito-family"
        style={{
          textShadow: "4px 4px 3px #5c7c89",
          opacity: opacity,
          transform: `translateY(-${translateY}px)`,
          transition: "transform 0.9s ease-out, opacity 0.4s ease-out",
        }}
      >
        MY JOURNEY
      </div>

      {/* CONTENT */}
      <section className="flex  items-center w-[80%] mx-auto -mt-8">
        <figure className="w-full h-auto">
          <div className="w-[480px] rounded-full h-[480px] mx-auto relative">
            <img
              className="w-full rounded-full h-full object-cover"
              src={img}
              alt="Developer"
            />
            <div className="absolute z-20 top-0 w-[75px] rounded-full overflow-hidden h-[75px] backdrop-blur-lg bg-[#4e6f7c] opacity-[75%]"></div>
          </div>
        </figure>

        <div className="w-full relative">
          <div className="text-[#D3D3D3] text-[27px] font-bold my-2">
            Hello and Welcome!
          </div>{" "}
          {/* WELCOME */}
          <p className="text-white text-[18px] my-3">
            I’m an enthusiastic fresher with a strong passion for{" "}
            <span className="font-semibold text-[19px] text-[#8bc0d4]">
              Frontend Development
            </span>{" "}
            and a deep understanding of modern web technologies. My journey in
            the world of web development started with mastering the basics of{" "}
            <span className="font-semibold text-[19px] text-[#8bc0d4]">
              HTML, CSS, and JavaScript
            </span>
            . As I grew more confident, I transitioned to frameworks like{" "}
            <span className="font-semibold text-[19px] text-[#8bc0d4]">
              React and Redux
            </span>
            , building a solid foundation for dynamic user interfaces. Along the
            way, I also became comfortable using libraries such as{" "}
            <span className="font-semibold text-[19px] text-[#8bc0d4]">
              TailwindCSS, MUI, and Axios
            </span>
            , which greatly enhanced my development experience.
          </p>
          <p className="text-white text-[18px] my-3">
            Halfway through my internship, I expanded my skill set to include
            backend technologies. This shift allowed me to explore{" "}
            <span className="font-semibold text-[19px] text-[#8bc0d4]">
              Node.js, Express.js, MySQL, and Postman
            </span>
            , where I focused on creating dynamic applications and using{" "}
            <span className="font-semibold text-[19px] text-[#8bc0d4]">
              MySQL
            </span>{" "}
            with Node.js to store and manage data. I also integrated React with
            the backend to dynamically access and display data from the server.
          </p>
          <p className="text-white text-[18px] my-3 relative z-10">
            After completing my internship, I joined the company as a
            <span className="font-semibold text-[19px] text-[#8bc0d4]">
              Junior Frontend Developer
            </span>{" "}
            and continued to build on my skills in a full-time role. Recently,
            I’ve started exploring{" "}
            <span className="font-semibold text-[19px] text-[#8bc0d4]">
              React Native,
            </span>{" "}
            strengthening my knowledge in mobile app development. I've also
            gained hands-on experience integrating payment systems like{" "}
            <span className="font-semibold text-[19px] text-[#8bc0d4]">
              Razorpay
            </span>{" "}
            into web applications.
          </p>
          <p className="text-white text-[18px] my-3 relative z-10">
            All my work, both during my internship and in my current role, is
            available on my{" "}
            <span className="font-semibold text-[19px] text-[#8bc0d4]">
              GitHub
            </span>{" "}
            profile{" "}
            <span className="font-semibold text-[19px] text-[#0b2a47] underline">
              <a className="mx-0 hover:text-indigo-300 duration-300" href="https://github.com/aryanbajpai" target="_blank">https://github.com/aryanbajpai</a>
            </span>
            . Thank you for visiting, and I look forward to connecting with you!
          </p>
          {/* Glass Blur */}
          <div
            className="absolute z-0 bottom-[-4%] right-[-8%] w-[205px] rounded-full overflow-hidden h-[205px] backdrop-blur-lg bg-[#092136] opacity-[75%]"
            style={{
              transform: `translateY(${scrollY * 0.04}px)`, // Slight movement for background elements
            }}
          ></div>
        </div>
      </section>
    </section>
  );
};

export default MyJourney
;
