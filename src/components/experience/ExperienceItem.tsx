import { typeColors } from "@/utils/helpers";
import { Experience } from "@/utils/types";
import { motion } from "framer-motion";
import { forwardRef } from "react";

type Props = {
  exp: Experience;
  index: number;
};

const ExperienceItem = forwardRef<HTMLDivElement, Props>(
  ({ exp, index }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0.25 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, margin: "0% 0px -50% 0px" }}
        className="grid grid-cols-[auto_1fr] gap-5 md:gap-10 relative"
      >
        <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-secondary bg-background">
          {index + 1}
        </div>
        <div className="pb-12">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-large font-heading font-bold">
                  {exp.role}
                </h3>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full border font-mono"
                  style={{
                    color: typeColors[exp.type],
                    borderColor: `${typeColors[exp.type]}40`,
                    background: `${typeColors[exp.type]}10`,
                  }}
                >
                  {exp.type}
                </span>
                {exp.current && (
                  <span className="flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full text-brand bg-[rgba(99,102,241,0.1)]">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-brand" />
                    Current
                  </span>
                )}
              </div>
              <span className="text-sm font-medium text-brand">
                {exp.company}
              </span>
            </div>
            <span className="font-mono text-xs shrink-0 mt-1 text-text-muted">
              {exp.period}
            </span>
          </div>
          {exp.achievement && (
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-[rgba(34,197,94,0.06)] border border[rgba(34,197,94,0.2)] text-[#22C55E] mb-4 text-sm font-medium">
              <span>🏆</span>
              {exp.achievement}
            </div>
          )}
          <ul className="flex flex-col gap-2.5 mb-5">
            {exp.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
              >
                <span
                  className="mt-2 w-1 h-1 rounded-full shrink-0"
                  style={{ background: typeColors[exp.type] }}
                />
                {bullet}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {exp.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface border-border text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  },
);

ExperienceItem.displayName = "ExperienceItem";
export default ExperienceItem;
