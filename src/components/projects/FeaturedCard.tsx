import {
  containerVariants,
  itemVariants,
  scaleInVariants,
} from "@/utils/framerVariants";
import { statusConfig } from "@/utils/helpers";
import { Project } from "@/utils/types";
import { motion } from "framer-motion";
import { ExternalLink, GitHub } from "../svgs";

type Props = {
  project: Project;
  index: number;
};

const FeaturedCard = ({ project, index }: Props) => {
  const status = statusConfig[project.status];

  return (
    <motion.div
      variants={itemVariants(index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl border border-border overflow-hidden"
    >
      <div
        className="relative min-h-64 lg:min-h-80 flex items-center justify-center overflow-hidden"
        style={{ background: `${project.color}08` }}
      >
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-size-[24px_24px]" />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center gap-4"
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl border border-border bg-background"
            style={{
              boxShadow: `0 0 40px ${project.color}20`,
            }}
          >
            {project.icon}
          </div>
          <div
            className={`font-mono text-xs px-3 py-1.5 rounded-full border`}
            style={{
              background: status.bg,
              borderColor: `${status.color}30`,
              color: status.color,
            }}
          >
            ● {status.label}
          </div>
        </motion.div>
        <span className="absolute top-4 left-4 font-mono text-xs text-text-muted">
          0{index + 1}
        </span>
      </div>
      <div className="flex flex-col gap-5 p-8 bg-surface">
        <div className="flex flex-col gap-2">
          <span
            className="text-xs font-mono font-medium px-2 py-0.5 rounded-full w-max"
            style={{
              background: `${project.color}12`,
              color: project.color,
            }}
          >
            Featured
          </span>
          <h3 className="text-h3 font-heading font-bold">{project.name}</h3>
          <p className="text-sm leading-relaxed text-text-secondary">
            {project.longDescription}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-1.5 text-text-muted"
        >
          {project.stack.map((tech) => (
            <motion.span
              key={tech}
              variants={scaleInVariants}
              className="font-mono text-xs px-2.5 py-1 rounded-md border border-border bg-background text-text-muted"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        <div className="flex gap-3 mt-auto pt-2">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-background border border-border text-xs font-medium transition-colors duration-200"
            >
              <GitHub />
              GitHub
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-opacity duration-200 text-white"
              style={{
                background: project.color,
              }}
            >
              <ExternalLink />
              Live site
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedCard;
