"use client";

import { facts } from "@/utils/data";
import { containerVariants, itemVariants } from "@/utils/framerVariants";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageFacts = () => {
  return (
    <motion.div
      variants={itemVariants()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="flex flex-col gap-6"
    >
      <div className="group relative w-full aspect-4/5 max-w-sm rounded-2xl overflow-hidden border border-border">
        {" "}
        <Image
          src="/MyImage.webp"
          alt="Fasasi Foyin"
          fill
          sizes="(max-width: 640px) 100vw, 384px"
          priority
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="absolute right-0 top-8 px-3 py-2 rounded-xl bg-background text-primary border border-border text-xs font-medium flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-success" />
          Open to work
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.75, duration: 0.4 }}
          className="absolute left-0 bottom-10 px-3 py-2 rounded-xl bg-background text-brand border border-border text-xs font-mono flex items-center gap-2"
        >
          React · TypeScript · Next.js
        </motion.div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-2 gap-3"
      >
        {facts.map((fact) => (
          <motion.div
            key={fact.text}
            variants={itemVariants()}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-surface text-text-secondary border border-border text-sm"
          >
            <span>{fact.icon}</span>
            <span className="text-xs">{fact.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ImageFacts;
