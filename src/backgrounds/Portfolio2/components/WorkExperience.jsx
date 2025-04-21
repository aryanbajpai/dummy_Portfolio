import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
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
  )
}

export default WorkExperience