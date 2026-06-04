"use client";

import { itemVariants } from "@/utils/framerVariants";
import { motion } from "framer-motion";

type Props = {
  number: string;
  section: string;
};

const Headings = ({ number, section }: Props) => {
  return (
    <motion.div
      variants={itemVariants()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="flex items-center gap-3 mb-12"
    >
      <span className="font-mono text-sm text-text-muted">{number}</span>
      <div className="h-px w-8 bg-border" />
      <span className="font-mono text-sm text-brand">{section}</span>
    </motion.div>
  );
};

export default Headings;
