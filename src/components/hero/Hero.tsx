"use client";

import useTypingAnimation from "@/hooks/useTypingAnimation";
import { ROLES, STACK } from "@/utils/data";
import {
  containerVariants,
  itemVariants,
  scaleInVariants,
} from "@/utils/framerVariants";
import { motion } from "framer-motion";
import Container from "../Container";

const Hero = () => {
  const role = useTypingAnimation(ROLES);

  const handleScrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    window.open("/My Resume (1).pdf", "_blank");
  };

  return (
    <section id="hero" className="relative min-h-screen flex">
      <Container className="flex flex-1">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col my-auto align-center gap-7 py-24"
        >
          <motion.div variants={itemVariants()}>
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border border-border bg-surface text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Available for work
            </span>
          </motion.div>
          <motion.div variants={itemVariants()} className="flex flex-col gap-2">
            <p className="font-mono text-sm text-text-muted">
              Hi there, I&apos;m
            </p>
            <h1 className="text-h1 font-heading font-bold text-text-primary leading-tight">
              Fasasi <span className={"text-brand"}>Foyin</span>
            </h1>
          </motion.div>
          <motion.div
            variants={itemVariants()}
            className="flex items-center gap-2"
          >
            <span className="text-h3 font-heading font-semibold text-text-secondary">
              {role}
            </span>
            <span className="inline-block w-0.5 h-8 animate-pulse bg-brand" />
          </motion.div>
          <motion.p
            variants={itemVariants()}
            className="text-md text-text-secondary leading-relaxed max-w-lg"
          >
            I build fast, accessible and beautiful web experiences using React,
            TypeScript and Next.js — from side projects to production SaaS apps.
            Based in Lagos, Nigeria.
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-2"
          >
            {STACK.map((tech) => (
              <motion.span
                key={tech}
                variants={scaleInVariants}
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-text-muted hover:border-brand hover:text-brand transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            variants={itemVariants()}
            className="flex flex-wrap gap-3 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleScrollToProjects}
              className="cursor-pointer px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 bg-brand text-white"
            >
              View my work →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownloadCV}
              className="cursor-pointer px-6 py-3 rounded-lg text-sm font-medium border border-border text-text-primary hover:bg-surface transition-all duration-200"
            >
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
      {/* Dot grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-100 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-size-[32px_32px]" />
    </section>
  );
};

export default Hero;
