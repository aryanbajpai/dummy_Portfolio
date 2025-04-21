import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
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
  )
}

export default AboutSection