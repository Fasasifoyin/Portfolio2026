"use client";

import { itemVariants } from "@/utils/framerVariants";
import Headings from "../Headings";
import { motion } from "framer-motion";
import { GitHub } from "../svgs";
import { projects } from "@/utils/data";
import FeaturedCard from "./FeaturedCard";
import SmallCard from "./SmallCard";

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 relative">
      <Headings number="04" section="projects" />
      <motion.div
        variants={itemVariants()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
      >
        <h2 className="text-h2 font-heading font-bold leading-tight max-w-sm text-text-primary">
          Things I&apos;ve <span className="text-brand">built</span>
        </h2>
        <a
          href="https://github.com/Fasasifoyin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-text-muted transition-colors duration-200"
        >
          <GitHub />
          View all on GitHub →
        </a>
      </motion.div>
      <div className="flex flex-col gap-6 mb-8">
        {featured.map((project, index) => (
          <FeaturedCard key={project.id} project={project} index={index} />
        ))}
      </div>
      <div>
        <motion.p
          variants={itemVariants()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="font-mono text-xs mb-6 text-text-muted"
        >
          other_projects/
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((project, index) => (
            <SmallCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
