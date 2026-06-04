import { Skill } from "@/utils/types";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { levelLabel } from "@/utils/helpers";
import { scaleInVariants } from "@/utils/framerVariants";

type Props = {
  skill: Skill;
  color: string;
  isActive: boolean;
};

const SkillPill = ({ skill, color, isActive }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={scaleInVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative cursor-default"
    >
      <div
        style={{
          borderColor: hovered ? color : "var(--border)",
          background: hovered ? `${color}12` : "var(--surface)",
        }}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm"
      >
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                background: i < skill.level ? color : "var(--border)",
                opacity: i < skill.level ? 1 : 0.4,
              }}
              transition={{ duration: 0.2 }}
              className="w-1 h-1 rounded-full"
            />
          ))}
        </div>
        <span
          className="font-mono text-xs"
          style={{ color: hovered ? color : "var(--text-primary)" }}
        >
          {skill.name}
        </span>
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap z-10 bg-background border border-border"
            style={{
              color: color,
            }}
          >
            {levelLabel(skill.level)}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-4 border-l-transparent border-r-transparent border-t-border border-b-0" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillPill;
