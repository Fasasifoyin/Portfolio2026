"use client";

import { socials, stats } from "@/utils/data";
import {
  containerVariants,
  itemVariants,
  scaleInVariants,
} from "@/utils/framerVariants";
import { motion } from "framer-motion";

const RightContent = () => {
  return (
    <motion.div
      variants={itemVariants()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-h3 font-heading font-bold leading-tight text-text-primary">
          Building things for the <span className="text-brand">web</span> and
          learning every day
        </h3>
        <div className="flex flex-col gap-2">
          <p className="text-base leading-relaxed text-text-secondary">
            I&apos;m a frontend developer based in Lagos, Nigeria with 3+ years
            of experience building production-ready web applications. I
            specialize in the React ecosystem and love turning complex ideas
            into clean, performant interfaces that feel great to use.
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            I&apos;m currently studying Microbiology at the University of Lagos
            while actively taking on full-time. freelance and contract work,
            proof that curiosity doesn&apos;t stay in one lane.
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            I care deeply about clean architecture, reusable abstractions and
            writing code that the next developer (including future me) will
            actually enjoy working with.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleInVariants}
              className="flex flex-col gap-1 p-4 rounded-xl bg-surface border border-border"
            >
              <span className="text-large font-bold font-heading text-brand">
                {stat.num}
              </span>
              <span className="text-xs leading-tight text-text-muted">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-wrap gap-3 pt-2"
        >
          {socials.map((social) => (
            <motion.a
              key={social.id}
              variants={scaleInVariants}
              href={social.link}
              target="_blank"
              rel={social.download ? undefined : "noopener noreferrer"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${social.download ? "bg-brand" : "bg-surface border border-border text-text-primary"}`}
            >
              {social.icon && <social.icon />}
              {social.social}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RightContent;
