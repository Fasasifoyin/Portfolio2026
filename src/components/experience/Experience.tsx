"use client";

import { itemVariants } from "@/utils/framerVariants";
import Headings from "../Headings";
import { motion } from "framer-motion";
import { typeColors } from "@/utils/helpers";
import { experiences } from "@/utils/data";
import ExperienceItem from "./ExperienceItem";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const [progressHeight, setProgressHeight] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updateProgress = () => {
      if (!containerRef.current) return;

      const triggerLine = window.innerHeight * 0.5;

      let activeElement: HTMLDivElement | null = null;

      itemRefs.current.forEach((item) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();

        if (rect.top <= triggerLine) {
          activeElement = item;
        }
      });

      if (!activeElement) {
        setProgressHeight(0);
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const activeRect = (
        activeElement as HTMLDivElement
      ).getBoundingClientRect();

      const activeBottom =
        activeRect.top + activeRect.height - containerRect.top;

      setProgressHeight(activeBottom);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section id="experience" className="py-28 relative">
      <Headings number="03" section="experience" />
      <motion.div
        variants={itemVariants()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
      >
        <h2 className="text-h2 font-heading font-bold leading-tight text-text-primary max-w-sm">
          Where I&apos;ve <span className="text-brand">worked</span>
        </h2>
        <div className="flex items-center gap-4">
          {Object.entries(typeColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-1.5">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: color }}
              />
              <span className="text-xs font-mono text-text-muted">{type}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <div ref={containerRef} className="relative flex flex-col">
        {/* Track */}
        <div className="absolute top-0 bottom-0 left-4.5 w-px bg-border" />

        {/* Progress */}
        <motion.div
          className="absolute top-0 left-4.5 w-0.75 bg-brand rounded-full "
          animate={{
            height: progressHeight,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
        />

        {experiences.map((exp, index) => (
          <ExperienceItem
            key={exp.id}
            exp={exp}
            index={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
