import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../../../assets/Images/myPhoto.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated Background Orbs */}
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-[120px] z-0"
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-120px] right-[-120px] w-80 h-80 bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 rounded-full opacity-20 blur-[100px] z-0"
          animate={{ scale: [1, 1.05, 1], x: [0, -15, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid Layout for Image + Text */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-6xl">
          {/* Left: Profile Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={myPhoto}
              alt="Aryan Bajpai"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-indigo-500 object-cover shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Right: Text + Button */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
              Hi, I'm <span className="text-indigo-400">ARYAN BAJPAI</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 mb-8 max-w-xl">
              A passionate React JS Developer crafting modern, responsive and
              accessible web interfaces.
            </p>
            <a
              href="#projects"
              className="bg-indigo-500 px-8 py-3 rounded-full font-medium text-white hover:bg-indigo-600 transition duration-300 shadow-lg"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </section>
  )
}

export default HeroSection