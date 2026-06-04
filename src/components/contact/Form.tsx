"use client";

import { itemVariants } from "@/utils/framerVariants";
import { FormState, Status } from "@/utils/types";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactInput from "../form/ContactInput";
import { RightArrow } from "../svgs";

const Form = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    setError(null);

    console.log(form);
  };

  return (
    <motion.div
      variants={itemVariants()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {submitted ? (
        <div></div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <ContactInput
            label="Name"
            required
            name="name"
            value={form.name}
            handleChange={handleChange}
            placeholder="Foyin Fasasi"
          />
          <ContactInput
            label="Phone"
            name="phone"
            value={form.phone}
            handleChange={handleChange}
            placeholder="090X XXX XXXX"
            type="number"
          />
          <ContactInput
            label="Email"
            required
            name="email"
            value={form.email}
            handleChange={handleChange}
            placeholder="you@example.com"
            type="email"
          />
          <ContactInput
            label="Subject"
            name="subject"
            value={form.subject}
            handleChange={handleChange}
            placeholder="Frontend contract, collaboration, etc."
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono uppercase tracking-wider text-text-muted">
              Message <span className="text-brand">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project, timeline and budget..."
              rows={6}
              required
              className={
                "w-full px-4 py-3 rounded-lg bg-background border border-border text-sm outline-none transition-all duration-200 font-sans resize-none"
              }
              onFocus={(e) => (e.target.style.borderColor = "var(--brand)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
          </div>
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.01 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            className="w-full py-3.5 rounded-lg text-sm font-medium transition-opacity duration-200 flex items-center justify-center gap-2 bg-brand text-white disabled:bg-brand/70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                />
                Sending...
              </>
            ) : (
              <>
                Send message
                <RightArrow />
              </>
            )}
          </motion.button>
          <p className="text-xs text-center text-text-muted">
            No spam. I read every message personally.
          </p>
        </form>
      )}
    </motion.div>
  );
};

export default Form;
