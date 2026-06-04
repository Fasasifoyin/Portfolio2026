"use client";

import { itemVariants } from "@/utils/framerVariants";
import Headings from "../Headings";
import { motion } from "framer-motion";
import { skillGroups } from "@/utils/data";
import { useState } from "react";
import SkillGroupRow from "./SkillGroupRow";

const Skills = () => {
  const [activeGroup, setActiveGroup] = useState<string>("frontend");

  const toggle = (id: string) => {
    setActiveGroup((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="skills" className="py-28 relative bg-background">
      <Headings number="02" section="skills" />
      <motion.div
        variants={itemVariants()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
      >
        <h2 className="text-h2 font-heading font-bold leading-tight max-w-sm text-text-primary">
          My <span className="text-brand">technical</span> stack
        </h2>
        <p className="text-sm max-w-xs md:text-right leading-relaxed text-text-muted">
          Hover over any skill to see proficiency level. Click a category to
          expand.
        </p>
      </motion.div>
      <div>
        {skillGroups.map((group, index) => (
          <SkillGroupRow
            key={group.id}
            group={group}
            index={index}
            isActive={activeGroup === group.id}
            onClick={() => toggle(group.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
