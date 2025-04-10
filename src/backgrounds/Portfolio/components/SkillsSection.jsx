import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiFigma,
  SiFramer,
} from "react-icons/si";

const techStack = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    // { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-300" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
    // { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
  ];

const SkillsSection = () => {
  return (
    <section className="py-28 px-6 text-center bg-[#161616] overflow-hidden">
        <h2 className="text-4xl font-bold mb-16 text-white">TECH STACK</h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-10 whitespace-nowrap animate-slide"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >
            {[...techStack, ...techStack].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-[#222] px-6 py-3 rounded-full text-sm font-medium text-gray-300 min-w-fit hover:bg-indigo-500 hover:text-white transition duration-300 shadow-md"
              >
                <span className="text-xl">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
  )
}

export default SkillsSection