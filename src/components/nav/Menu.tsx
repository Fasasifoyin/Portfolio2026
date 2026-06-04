import { links } from "@/utils/data";
import { mobileMenuVariants } from "@/utils/framerVariants";
import { motion } from "framer-motion";
import Container from "../Container";
import Links from "./Links";

type MenuProps = {
  handleNav: (href: string) => void;
  activeSection: string;
};

const Menu = ({ handleNav, activeSection }: MenuProps) => {
  return (
    <motion.div
      variants={mobileMenuVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
    >
      <Container className="py-4 flex flex-col gap-1">
        {links.map((link) => (
          <Links
            key={link.href}
            link={link}
            activeSection={activeSection}
            handleNav={handleNav}
          />
        ))}
      </Container>
    </motion.div>
  );
};

export default Menu;
