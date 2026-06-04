"use client";

import { links } from "@/utils/data";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../Container";
import ThemeToggle from "./ThemeToggle";
import Menu from "./Menu";
import { containerVariants, navVariants } from "@/utils/framerVariants";
import { Close, MenuSVG } from "../svgs";
import Links from "./Links";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = "";

        // Find the section with the highest intersection ratio
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            // You can also compare ratios if multiple are visible
            visibleSection = entry.target.id;
          }
        });

        setActiveSection(visibleSection); // Will be "" if none visible
      },
      {
        threshold: 0.4,
        rootMargin: "-80px 0px -20% 0px", // Helps with top section behavior
      },
    );

    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <Container className="h-16 flex items-center justify-between">
        <motion.button
          variants={navVariants()}
          initial="hidden"
          animate="show"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer font-mono text-sm font-medium text-text-primary hover:text-brand transition-colors duration-200"
        >
          foyin<span className="text-brand">.</span>dev
        </motion.button>
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="hidden md:flex items-center gap-1"
        >
          {links.map((link) => (
            <motion.div key={link.href} variants={navVariants()}>
              <Links
                link={link}
                activeSection={activeSection}
                handleNav={handleNav}
              />
            </motion.div>
          ))}
        </motion.nav>
        <motion.div
          variants={navVariants()}
          initial="hidden"
          animate="show"
          className="flex items-center gap-3"
        >
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="cursor-pointer md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-border text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              {menuOpen ? <MenuSVG /> : <Close />}
            </svg>
          </button>
        </motion.div>
      </Container>
      <AnimatePresence>
        {menuOpen && (
          <Menu handleNav={handleNav} activeSection={activeSection} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
