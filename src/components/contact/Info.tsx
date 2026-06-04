"use client";

import { itemVariants } from "@/utils/framerVariants";
import { social } from "@/utils/data";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <motion.div
      variants={itemVariants()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-h2 font-heading font-bold leading-tight">
          Let&apos;s work <span className="text-brand">together</span>
        </h2>
        <p className="text-base leading-relaxed text-text-secondary">
          Open to frontend contracts, freelance projects and full-time roles. If
          you have something interesting — a product to build, a problem to
          solve or just want to connect — my inbox is open.
        </p>
        <p className="text-sm leading-relaxed text-text-muted">
          I typically respond within 24 hours.
        </p>
      </div>
      {/* Social links */}
      <div className="flex flex-col gap-3">
        {social.map((social, i) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-text-secondary bg-background border border-border group transition-all duration-200"
          >
            <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-text-secondary bg-surface transition-colors duration-200">
              {social.icon && <social.icon />}
            </span>
            <div className="flex flex-col gap-0.5 flex-1">
              <span className="text-xs font-mono text-text-muted">
                {social.label}
              </span>
              <span className="text-sm font-medium transition-colors duration-200 group-hover:text-brand">
                {social.value}
              </span>
            </div>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="shrink-0 opacity-0 group-hover:opacity-100 text-brand transition-opacity duration-200"
            >
              <path d="M2 12L12 2M12 2H6M12 2v6" />
            </svg>
          </motion.a>
        ))}
      </div>

      {/* Availability status */}
      <motion.div
        variants={itemVariants()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="flex items-center gap-3 px-4 py-3 rounded-xl border bg-[rgba(99,102,241,0.05)] border-[rgba(99,102,241,0.2)]"
      >
        <span className="w-2 h-2 rounded-full shrink-0 animate-pulse bg-brand" />
        <span className="text-sm text-text-secondary">
          Currently available for{" "}
          <span className="font-medium">
            fulltime, freelance & contract work
          </span>
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Info;
