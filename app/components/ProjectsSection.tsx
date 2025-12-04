"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "555 Timer LED Oscillator",
    description: "Built an astable 555 timer circuit that controls LED blinking based on resistor and capacitor values.",
    image: "/images/Projects/ElectronicsDefault.png",
    tag: ["All", "Electronics", "Arduino"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Logic Gate Alarm System",
    description: "Designed a digital logic circuit using AND, OR, and NAND gates to create a working alarm system.",
    image: "/images/Projects/ElectronicsDefault.png",
    tag: ["All", "Electronics"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Arduino Multi-Sensor System",
    description: "Developed an Arduino setup that reads multiple sensors in real-time with serial monitoring.",
    image: "/images/Projects/ElectronicsDefault.png",
    tag: ["All", "Arduino", "Electronics"],
    gitUrl: "",
    previewUrl: "",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: any) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      {/* ONLY THESE TAGS */}
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
        {["All", "Electronics", "Arduino"].map((category) => (
          <ProjectTag
            key={category}
            onClick={handleTagChange}
            name={category}
            isSelected={tag === category}
          />
        ))}
      </div>

      {/* Projects */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
