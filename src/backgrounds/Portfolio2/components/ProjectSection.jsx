import React from "react";
import { motion } from "framer-motion";
import boPage from "../../../assets/Images/bOPage.png";
import bpPage from '../../../assets/Images/bpPage.png';

const ProjectSection = () => {
  const projects = [
    {
      title: "Franchise Buyer App",
      description: "A multi-role mobile and web application designed to streamline the franchise ecosystem. The app includes dedicated modules for brand owners, promoters, and customers to manage operations, promotions, and purchases effectively.",
      link: "",
      image: ``,
    },
    {
      title: "Brand Owner Module",
      description: "Enables businesses to create, manage, and expand their franchise network with tools for monitoring performance and handling franchise requests.",
      link: "",
      image: `${boPage}`,
    },
    {
      title: "Brand Promoter Module",
      description: "Allows promoters to earn through lead generation, referrals, and sales-based commissions with real-time tracking and reporting.",
      link: "",
      image: `${bpPage}`,
    },
  ];

  return (
    <section id="projects" className="py-28 px-10">
        <h2 className="text-4xl font-bold text-center mb-20">PROJECTS</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
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
                  src={project?.image}
                  alt={`${project?.title}`}
                  className="w-full h-52 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project?.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project?.description}
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
  )
}

export default ProjectSection