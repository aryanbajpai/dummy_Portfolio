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
import myPhoto from "../../assets/Images/myPhoto.jpg";

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

const Portfolio = () => {
  return (
    <div className="bg-[#0D0D0D] text-white font-sans scroll-smooth">
      {/* Hero Section */}
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

      {/* Work Experience Section */}
      <section className="py-28 px-6 bg-[#161616]">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          WORK EXPERIENCE
        </h2>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-5 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-600 to-pink-500 rounded-full opacity-30" />

          {/* Experience Block */}
          <motion.div
            className="relative pl-16 mb-14"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Dot */}
            <div className="absolute left-2.5 top-2 w-6 h-6 bg-indigo-500 border-4 border-[#161616] rounded-full shadow-lg" />

            <h3 className="text-2xl font-semibold text-indigo-400 mb-1">
              Junior React JS Developer
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              GLOBAL GARNER SALES SERVICES LTD • 2024 - Present
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
              <li>
                Developed and maintained React.js components and pages with
                reusable logic and performance optimizations.
              </li>
              <li>
                Collaborated closely with UI/UX designers to implement
                responsive designs using Tailwind CSS.
              </li>
              <li>
                Integrated REST APIs and enhanced user interaction with
                animations using Framer Motion.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-28 px-10">
        <h2 className="text-4xl font-bold text-center mb-20">PROJECTS</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[1, 2, 3].map((project, idx) => (
            <motion.div
              key={project}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1F1F1F] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={`/images/project${project}.png`}
                  alt={`Project ${project}`}
                  className="w-full h-52 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Description of the project and the technologies used.
                </p>
                <a
                  href="#"
                  className="text-indigo-400 font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
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

      {/* About Section */}
      <section className="py-28 px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-12">ABOUT ME</h2>

        <motion.div
          className="max-w-4xl mx-auto space-y-6 text-gray-400 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            I'm a passionate{" "}
            <span className="text-indigo-400 font-semibold">
              Frontend Developer
            </span>{" "}
            who thrives on transforming creative ideas into beautiful,
            functional digital experiences. With a strong grasp of modern web
            technologies like React.js, Next.js, Tailwind CSS, and Framer
            Motion, I aim to build web interfaces that are not just responsive,
            but truly engaging.
          </p>

          <p>
            My approach is deeply user-centric — I believe that the best
            solutions are born from understanding real-world problems and
            crafting intuitive, accessible designs. I enjoy collaborating with
            designers, product teams, and fellow developers to bring scalable
            solutions to life.
          </p>

          <p>
            I continuously push my learning boundaries by exploring new tools
            and keeping up with the evolving JavaScript ecosystem. When I'm not
            coding, you'll find me refining side projects, sketching UI
            concepts, or geeking out over design systems.
          </p>
        </motion.div>

        {/* Subtle Divider Animation */}
        <motion.div
          className="mt-12 w-32 h-1 bg-indigo-500 mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "left" }}
        />
      </section>

      {/* Contact Section */}
      <section className="relative py-28 px-6 text-center bg-[#161616] overflow-hidden">
        <h2 className="text-4xl font-bold mb-4 text-white">LET'S CONNECT</h2>

        <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto">
          I'm always open to discussing new ideas, collaboration, or just
          chatting about frontend tech!
        </p>

        <motion.div
          className="flex justify-center gap-10 text-3xl mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: <FaEnvelope />,
              link: "mailto:john.doe@example.com",
              label: "Email",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/yourusername",
              label: "GitHub",
            },
            {
              icon: <FaLinkedin />,
              link: "https://linkedin.com/in/yourusername",
              label: "LinkedIn",
            },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1F1F1F] p-4 rounded-full shadow-md hover:shadow-indigo-500/20 text-white hover:text-indigo-400 transition transform hover:scale-110"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="mailto:john.doe@example.com"
          className="inline-block mt-4 px-8 py-3 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          Say Hello
        </motion.a>

        {/* Floating Glow Orbs */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-indigo-500 rounded-full opacity-10 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-400 rounded-full opacity-10 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
      </section>

      <footer className="text-center py-8 text-sm text-gray-500 bg-[#0D0D0D] border-t border-neutral-800">
        © {new Date().getFullYear()} Aryan Bajpai. Designed & Built with ❤️
      </footer>
    </div>
  );
};

export default Portfolio;
