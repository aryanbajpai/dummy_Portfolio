import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
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
  )
}

export default ContactSection