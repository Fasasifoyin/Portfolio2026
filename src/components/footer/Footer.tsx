"use client";

import { links, social } from "@/utils/data";
import Container from "../Container";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-mono text-sm font-medium w-fit transition-colors duration-200 hover:opacity-70"
            >
              foyin<span className="text-brand">.</span>dev
            </button>
            <p className="text-sm leading-relaxed text-text-muted">
              Frontend developer based in Lagos, Nigeria. Building fast,
              accessible and beautiful web experiences.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-success" />
              <span className="text-xs font-mono text-text-muted">
                available_for_work
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p
              className="text-xs font-mono uppercase tracking-wider mb-1"
              style={{ color: "var(--text-muted)" }}
            >
              Navigation
            </p>
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() =>
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm text-left w-fit transition-colors duration-200 text-text-secondary cursor-pointer hover:text-brand"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-mono uppercase tracking-wider mb-1 text-text-muted">
              Connect
            </p>
            {social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm w-fit transition-colors duration-200 flex items-center gap-1.5 group text-text-secondary hover:text-brand"
              >
                {link.label}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <path d="M2 10L10 2M10 2H5M10 2v5" />
                </svg>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-xs font-mono text-text-muted">
            © {year} Fasasi Oluwafoyinkanla. All rights reserved.
          </p>
          <p className="text-xs font-mono flex items-center gap-1.5 text-text-muted">
            Built with
            <span className="text-brand">Next.js</span>·
            <span className="text-brand-secondary">Tailwind</span>·
            <span className="text-[#22C55E]">Framer Motion</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
