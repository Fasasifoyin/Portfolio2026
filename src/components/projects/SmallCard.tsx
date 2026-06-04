import { statusConfig } from "@/utils/helpers";
import { Project } from "@/utils/types";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { itemVariants } from "@/utils/framerVariants";
import { ExternalLink, GitHub } from "../svgs";

type Props = {
  project: Project;
  index: number;
};

const SmallCard = ({ project, index }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const status = statusConfig[project.status];

  return (
    <motion.div
      variants={itemVariants(index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="flex flex-col rounded-xl bg-surface border border-border overflow-hidden"
    >
      <div className="flex flex-col gap-4 p-6 flex-1">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl border"
            style={{
              background: `${project.color}10`,
              borderColor: `${project.color}20`,
            }}
          >
            {project.icon}
          </div>
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-mono px-2 py-0.5 rounded-full"
              style={{ background: status.bg, color: status.color }}
            >
              {status.label}
            </span>
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-7 h-7 rounded-lg text-text-muted border border-border flex items-center justify-center transition-colors duration-200"
              >
                <ExternalLink />
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-7 h-7 rounded-lg text-text-muted border border-border flex items-center justify-center transition-colors duration-200"
              >
                <GitHub />
              </motion.a>
            )}
          </div>
        </div>
        {/* Name + description */}
        <div className="flex flex-col gap-1.5 flex-1">
          <h3 className="font-heading font-bold text-large">{project.name}</h3>
          <p className="text-sm leading-relaxed text-text-secondary">
            {project.description}
          </p>
        </div>
        {/* Expandable highlights */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                {project.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-2 text-xs text-text-secondary"
                  >
                    <span
                      className="mt-0.5 shrink-0"
                      style={{ color: project.color }}
                    >
                      ✓
                    </span>
                    {h}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2 py-0.5 rounded-md bg-background text-text-muted border border-border"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="font-mono text-xs px-2 py-0.5 rounded-md bg-background text-text-muted border border-border">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>
      {/* Expand toggle */}
      <button
        onClick={() => setExpanded((p) => !p)}
        className="flex items-center justify-center gap-1.5 py-3 border-t border-border text-xs transition-colors duration-200"
        style={{
          color: expanded ? project.color : "var(--text-muted)",
          background: expanded ? `${project.color}06` : "transparent",
        }}
      >
        {expanded ? "Show less" : "Show highlights"}
        <motion.svg
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M2 4l4 4 4-4" />
        </motion.svg>
      </button>
    </motion.div>
  );
};

export default SmallCard;
