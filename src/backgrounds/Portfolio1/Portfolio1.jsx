import React, { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaExternalLinkAlt,
  FaTwitter,
  FaPhone,
  FaMailBulk,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  motion,
  useAnimation,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
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

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart functionality, product filtering, and secure checkout.",
    tags: ["React", "Redux", "Tailwind CSS", "Node.js"],
    image: "/images/project1.png",
    links: {
      live: "#",
      code: "#",
    },
  },
  {
    id: 2,
    title: "Portfolio Builder",
    description:
      "A drag-and-drop interface for creating professional portfolios with customizable templates.",
    tags: ["Next.js", "Framer Motion", "Firebase"],
    image: "/images/project2.png",
    links: {
      live: "#",
      code: "#",
    },
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Kanban-style productivity app with real-time updates and team collaboration features.",
    tags: ["React", "TypeScript", "Tailwind CSS", "WebSockets"],
    image: "/images/project3.png",
    links: {
      live: "#",
      code: "#",
    },
  },
];

const techStack = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
    proficiency: 90,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
    proficiency: 85,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" />,
    proficiency: 88,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    proficiency: 85,
  },
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-300" />,
    proficiency: 90,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" />,
    proficiency: 80,
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-400" />,
    proficiency: 75,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-400" />,
    proficiency: 80,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer className="text-pink-400" />,
    proficiency: 70,
  },
];

const Portfolio1 = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const handleLinkHover = (hovering) => {
    setIsHovering(hovering);
  };

  // Particle background component
  const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      let particles = [];
      const particleCount = window.innerWidth < 768 ? 50 : 100;

      // Set canvas size
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      // Particle class
      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 5 + 1;
          this.speedX = Math.random() * 2 - 1;
          this.speedY = Math.random() * 2 - 1;
          this.color = `rgba(99, 102, 241, ${Math.random() * 0.7 + 0.5})`;
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
          if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        }

        draw() {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Initialize particles
      const init = () => {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }
      };

      // Animation loop
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();

          // Connect particles
          for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.strokeStyle = `rgba(99, 102, 241, ${1 - distance / 100})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        requestAnimationFrame(animate);
      };

      // Handle resize
      window.addEventListener("resize", () => {
        resizeCanvas();
        init();
      });

      // Start everything
      resizeCanvas();
      init();
      animate();

      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }, []);

    return (
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20"
      />
    );
  };

  // Interactive project cards with parallax effect
  const ProjectCard = ({ project }) => {
    const ref = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden rounded-xl bg-[#1F1F1F] h-full"
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.div
          className="p-6"
          animate={{
            y: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0.9,
          }}
        >
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        </motion.div>

        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
            x: "-50%",
            y: "-50%",
          }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <div className="w-32 h-32 rounded-full bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/30" />
        </motion.div>
      </motion.div>
    );
  };

  // Animated background effect
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        backgroundPosition: [
          `${Math.random() * 100}% ${Math.random() * 100}%`,
          `${Math.random() * 100}% ${Math.random() * 100}%`,
        ],
        transition: { duration: 20, ease: "linear" },
      });
    }, 20000);
    return () => clearInterval(interval);
  }, [controls]);

  // const AIChatAssistant = () => {
  //   const [messages, setMessages] = useState([]);
  //   const [input, setInput] = useState("");
  //   const [isOpen, setIsOpen] = useState(false);
  //   const messagesEndRef = useRef(null);

  //   const scrollToBottom = () => {
  //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  //   };

  //   useEffect(() => {
  //     scrollToBottom();
  //   }, [messages]);

  //   const handleSend = async () => {
  //     if (!input.trim()) return;

  //     const userMessage = { text: input, sender: "user" };
  //     setMessages(prev => [...prev, userMessage]);
  //     setInput("");

  //     // Simulate AI response
  //     setTimeout(() => {
  //       const aiResponses = [
  //         "I'd be happy to help with that! Aryan has extensive experience with React and modern web development.",
  //         "That's a great question! Aryan has worked on similar projects before.",
  //         "Let me check Aryan's availability for you...",
  //         "For project inquiries, Aryan typically responds within 24 hours."
  //       ];
  //       const aiMessage = {
  //         text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
  //         sender: "ai"
  //       };
  //       setMessages(prev => [...prev, aiMessage]);
  //     }, 1000);
  //   };

  //   return (
  //     <div className="fixed bottom-8 right-8 z-50">
  //       {isOpen ? (
  //         <motion.div
  //           initial={{ scale: 0.8, opacity: 0 }}
  //           animate={{ scale: 1, opacity: 1 }}
  //           className="w-80 h-96 bg-[#1A1A1A] rounded-xl shadow-2xl flex flex-col border border-gray-800 overflow-hidden"
  //         >
  //           <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium flex justify-between items-center">
  //             <span>Ask About Aryan</span>
  //             <button onClick={() => setIsOpen(false)} className="text-white">
  //               ×
  //             </button>
  //           </div>

  //           <div className="flex-1 p-4 overflow-y-auto space-y-4">
  //             {messages.map((msg, i) => (
  //               <div
  //                 key={i}
  //                 className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
  //               >
  //                 <div
  //                   className={`max-w-xs p-3 rounded-lg ${
  //                     msg.sender === "user"
  //                       ? "bg-indigo-600 text-white"
  //                       : "bg-[#2A2A2A] text-gray-300"
  //                   }`}
  //                 >
  //                   {msg.text}
  //                 </div>
  //               </div>
  //             ))}
  //             <div ref={messagesEndRef} />
  //           </div>

  //           <div className="p-4 border-t border-gray-800">
  //             <div className="flex gap-2">
  //               <input
  //                 type="text"
  //                 value={input}
  //                 onChange={(e) => setInput(e.target.value)}
  //                 onKeyPress={(e) => e.key === "Enter" && handleSend()}
  //                 placeholder="Ask about my work..."
  //                 className="flex-1 px-3 py-2 bg-[#2A2A2A] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
  //               />
  //               <button
  //                 onClick={handleSend}
  //                 className="px-4 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700 transition-colors"
  //               >
  //                 Send
  //               </button>
  //             </div>
  //           </div>
  //         </motion.div>
  //       ) : (
  //         <motion.button
  //           whileHover={{ scale: 1.1 }}
  //           whileTap={{ scale: 0.95 }}
  //           onClick={() => setIsOpen(true)}
  //           className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg flex items-center justify-center text-white"
  //         >
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             className="h-6 w-6"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth={2}
  //               d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
  //             />
  //           </svg>
  //         </motion.button>
  //       )}
  //     </div>
  //   );
  // };

  return (
    <main className="bg-[#0D0D0D] text-white font-sans scroll-smooth overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference bg-white"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          scale: isHovering ? 1.5 : 1,
        }}
      />

      {/* Navigation */}
      <nav className="fixed w-full py-6 px-6 lg:px-12 flex justify-between items-center z-40 bg-[#0D0D0D]/80 backdrop-blur-sm">
        <motion.a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Aryan.
        </motion.a>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex gap-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {["Home", "About", "Work", "Projects", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors relative group"
                onMouseEnter={() => handleLinkHover(true)}
                onMouseLeave={() => handleLinkHover(false)}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            )
          )}
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 8 } : {}}
              className="block w-6 h-0.5 bg-white"
            ></motion.span>
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white"
            ></motion.span>
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -8 } : {}}
              className="block w-6 h-0.5 bg-white"
            ></motion.span>
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-0 bg-[#0D0D0D] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {["Home", "About", "Work", "Projects", "Contact"].map(
                (item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="text-2xl font-medium text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 bg-[#0D0D0D] text-white overflow-hidden"
      >
        <ParticleBackground />
        <motion.div
          className="absolute inset-0"
          animate={controls}
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 30%),
              radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 30%),
              radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.15) 0%, transparent 30%)
            `,
            backgroundSize: "200% 200%",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-lg md:text-xl text-indigo-400 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hi, I'm Aryan Bajpai
              </motion.p>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                  React.js Developer
                </span>{" "}
                Building Digital Experiences
              </motion.h1>

              <motion.p
                className="text-lg text-gray-400 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                I specialize in creating beautiful, functional, and user-centric
                web applications with modern technologies.
              </motion.p>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
                  onMouseEnter={() => handleLinkHover(true)}
                  onMouseLeave={() => handleLinkHover(false)}
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-gray-700 rounded-full font-medium hover:bg-gray-800 transition-all"
                  onMouseEnter={() => handleLinkHover(true)}
                  onMouseLeave={() => handleLinkHover(false)}
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="relative">
                <motion.img
                  src={myPhoto}
                  alt="Aryan Bajpai"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-indigo-500/30 shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-500 border-r-purple-500 -rotate-45"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-indigo-500/10 backdrop-blur-sm p-4 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-gray-400 rounded-full mt-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-28 px-6 lg:px-12 bg-gradient-to-b from-[#0D0D0D] to-[#161616] relative overflow-hidden"
      >
        <div className="container mx-auto">
          <motion.div
            className="flex flex-col lg:flex-row gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Left Column - Image */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <img
                  src={myPhoto}
                  alt="Aryan Bajpai"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-lg object-cover shadow-xl"
                />
                <motion.div
                  className="absolute -inset-4 border-2 border-indigo-500/30 rounded-lg -z-10"
                  initial={{ opacity: 0, x: -20, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-2/3">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6 inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                About <span className="text-indigo-400">Me</span>
                <span className="block w-16 h-1 bg-indigo-500 mt-2"></span>
              </motion.h2>

              <motion.p
                className="text-lg text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                I'm a passionate{" "}
                <span className="text-indigo-300 font-medium">
                  Frontend Developer
                </span>{" "}
                with expertise in React.js, Next.js, and modern web
                technologies. I specialize in creating intuitive, performant,
                and visually appealing user interfaces.
              </motion.p>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-200">
                    Skills & Technologies
                  </h3>
                  <ul className="space-y-2">
                    {techStack.slice(0, 5).map((tech, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="text-indigo-400">{tech.icon}</span>
                        <span className="text-gray-300">{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-200">
                    Other Proficiencies
                  </h3>
                  <ul className="space-y-2">
                    {techStack.slice(5).map((tech, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="text-indigo-400">{tech.icon}</span>
                        <span className="text-gray-300">{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium transition-colors shadow-lg"
                  onMouseEnter={() => handleLinkHover(true)}
                  onMouseLeave={() => handleLinkHover(false)}
                >
                  Let's Connect
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section
        id="work"
        className="py-28 px-6 lg:px-12 bg-[#161616] relative overflow-hidden"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              My <span className="text-indigo-400">Experience</span>
            </h2>

            <div className="max-w-4xl mx-auto relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform -translate-x-1/2"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Experience 1 */}
                <motion.div
                  className="relative pl-16 md:pl-0 md:odd:pr-16 md:even:pl-16"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 bg-indigo-500 border-4 border-[#161616] rounded-full transform -translate-x-1/2 z-10"></div>

                  {/* Content */}
                  <div className="bg-[#1F1F1F] p-6 rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-indigo-400">
                        Junior React JS Developer
                      </h3>
                      <span className="text-sm bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full">
                        2024 - Present
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      GLOBAL GARNER SALES SERVICES LTD
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-1">•</span>
                        <span>
                          Developed and maintained React.js components with
                          reusable logic and performance optimizations.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-1">•</span>
                        <span>
                          Collaborated with UI/UX designers to implement
                          responsive designs using Tailwind CSS.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-1">•</span>
                        <span>
                          Integrated REST APIs and enhanced user interaction
                          with animations using Framer Motion.
                        </span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Experience 2 */}
                <motion.div
                  className="relative pl-16 md:pl-0 md:odd:pr-16 md:even:pl-16"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 bg-purple-500 border-4 border-[#161616] rounded-full transform -translate-x-1/2 z-10"></div>

                  {/* Content */}
                  <div className="bg-[#1F1F1F] p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-purple-400">
                        Frontend Developer Intern
                      </h3>
                      <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                        2023 - 2024
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      Tech Solutions Inc.
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>
                          Assisted in building responsive web applications using
                          React and TypeScript.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>
                          Implemented UI components based on design mockups with
                          pixel-perfect accuracy.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>
                          Participated in code reviews and learned best
                          practices for frontend development.
                        </span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-28 px-6 lg:px-12 bg-[#161616] relative overflow-hidden"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured <span className="text-indigo-400">Projects</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and
                expertise.
              </p>
            </div>

            {/* Project Filters */}
            <motion.div
              className="flex justify-center gap-4 mb-12 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {["all", "react", "nextjs", "animation"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-indigo-600 text-white"
                      : "bg-[#1F1F1F] text-gray-300 hover:bg-gray-800"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-28 px-6 lg:px-12 bg-[#161616] relative overflow-hidden"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                My <span className="text-indigo-400">Skills</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#1A1A1A] p-6 rounded-xl hover:shadow-lg hover:shadow-indigo-500/10 transition-all"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl">{tech.icon}</span>
                    <h3 className="text-lg font-medium">{tech.name}</h3>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                      style={{ width: `${tech.proficiency}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-28 px-6 lg:px-12 bg-[#161616] relative overflow-hidden"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get In <span className="text-indigo-400">Touch</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential
                opportunities? I'd love to hear from you!
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#1F1F1F] p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-6">
                  Send Me a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                      placeholder="Hello Aryan, I'd like to talk about..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
                    onMouseEnter={() => handleLinkHover(true)}
                    onMouseLeave={() => handleLinkHover(false)}
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-[#1F1F1F] p-8 rounded-xl shadow-lg h-full">
                  <h3 className="text-xl font-semibold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-indigo-500/10 rounded-lg">
                        {/* <MailIcon className="h-6 w-6 text-indigo-400" /> */}
                        <FaMailBulk className="h-6 w-6 text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="text-gray-300 font-medium">Email</h4>
                        <a
                          href="mailto:aryan@example.com"
                          className="text-indigo-400 hover:underline"
                          onMouseEnter={() => handleLinkHover(true)}
                          onMouseLeave={() => handleLinkHover(false)}
                        >
                          aryan@example.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-indigo-500/10 rounded-lg">
                        {/* <PhoneIcon className="h-6 w-6 text-indigo-400" /> */}
                        <FaPhone className="h-6 w-6 text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="text-gray-300 font-medium">Phone</h4>
                        <a
                          href="tel:+1234567890"
                          className="text-indigo-400 hover:underline"
                          onMouseEnter={() => handleLinkHover(true)}
                          onMouseLeave={() => handleLinkHover(false)}
                        >
                          +91 99999 99999
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-indigo-500/10 rounded-lg">
                        {/* <MapPinIcon className="h-6 w-6 text-indigo-400" /> */}
                        <FaMapMarkerAlt className="h-6 w-6 text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="text-gray-300 font-medium">Location</h4>
                        <p className="text-gray-400">Ahmedabad, GUJARAT</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-gray-300 font-medium mb-4">
                      Follow Me
                    </h4>
                    <div className="flex space-x-4">
                      {[
                        {
                          icon: <FaGithub />,
                          url: "https://github.com/aryanbajpai",
                        },
                        { icon: <FaTwitter />, url: "https://twitter.com" },
                        {
                          icon: <FaLinkedin />,
                          url: "https://www.linkedin.com/in/aryan-bajpai-72a021238/",
                        },
                      ].map((social, i) => (
                        <a
                          key={i}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-[#2A2A2A] rounded-lg hover:bg-indigo-500/10 transition-colors"
                          onMouseEnter={() => handleLinkHover(true)}
                          onMouseLeave={() => handleLinkHover(false)}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* <AIChatAssistant /> */}
    </main>
  );
};

export default Portfolio1;
