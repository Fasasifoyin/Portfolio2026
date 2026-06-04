import { SkillGroup } from "@/utils/types";
import { AnimatePresence, motion } from "framer-motion";
import SkillPill from "./SkillPill";
import {
  containerVariants,
  navVariants,
} from "@/utils/framerVariants";

type Props = {
  group: SkillGroup;
  index: number;
  isActive: boolean;
  onClick: () => void;
};

const SkillGroupRow = ({ group, index, isActive, onClick }: Props) => {
  return (
    <motion.div
      variants={navVariants(index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="border-t border-border"
    >
      <motion.button
        onClick={onClick}
        className="w-full flex items-center gap-6 py-6 text-left group cursor-pointer"
        whileTap={{ scale: 0.99 }}
      >
        <span className="font-mono text-xs w-6 shrink-0 text-text-muted">
          0{index + 1}
        </span>
        <motion.span
          animate={{ color: isActive ? group.color : "var(--text-muted)" }}
          transition={{ duration: 0.2 }}
          className="text-lg w-6 shrink-0 font-mono"
        >
          {group.icon}
        </motion.span>
        <motion.span
          animate={{
            color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
          }}
          transition={{ duration: 0.2 }}
          className="text-h3 font-heading font-bold flex-1"
        >
          {group.category}
        </motion.span>
        <span className="hidden md:block text-sm shrink-0 max-w-48 text-right text-text-muted">
          {group.description}
        </span>
        <span
          className={`font-mono text-xs px-2 py-1 rounded-md border shrink-0`}
          style={{
            background: isActive ? `${group.color}12` : "var(--surface)",
            borderColor: isActive ? group.color : "var(--border)",
            color: isActive ? group.color : "var(--text-muted)",
          }}
        >
          {group.skills.length}
        </span>
        <motion.svg
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="shrink-0 text-text-muted"
        >
          <path
            d="M2 4.5L7 9.5L12 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.button>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "show" : {}}
              className="pb-6 flex flex-wrap gap-2"
            >
              {group.skills.map((skill, i) => (
                <SkillPill
                  key={skill.name}
                  skill={skill}
                  color={group.color}
                  isActive={isActive}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillGroupRow;
