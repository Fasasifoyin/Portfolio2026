import { Link } from "@/utils/types";
import { motion } from "framer-motion";

type Props = {
  link: Link;
  activeSection: string;
  handleNav: (href: string) => void;
};

const Links = ({ link, activeSection, handleNav }: Props) => {
  const isActive = activeSection === link.href.slice(1);

  return (
    <button
      onClick={() => handleNav(link.href)}
      className={`cursor-pointer relative text-left px-4 py-3 md:py-2 text-sm rounded-lg transition-all md:transition-colors duration-200
        ${isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"}
        `}
    >
      {isActive && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 z-[-1] rounded-lg bg-surface border border-border"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
      {link.label}
    </button>
  );
};

export default Links;
