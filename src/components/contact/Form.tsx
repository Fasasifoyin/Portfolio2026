"use client";

import { itemVariants } from "@/utils/framerVariants";
import { FormState } from "@/utils/types";
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

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: form.name,
          phone: form.phone || "",
          email: form.email,
          subject: form.subject || `Portfolio message from ${form.name}`,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Failed");
      }

      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.log(`From form, ${err}`);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={itemVariants()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="h-full flex flex-col items-center justify-center gap-5 text-center py-16"
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl bg-[rgba(99,102,241,0.08)] border border-[rgba(99,102,241,0.2)]">
            ✅
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-large font-heading font-bold">Message sent!</h3>
            <p className="text-sm text-text-secondary">
              Thanks for reaching out. I&apos;ll get back to you within 24
              hours.
            </p>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="text-sm font-medium underline underline-offset-4 transition-colors duration-200 text-brand cursor-pointer"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <>
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
            {error && (
              <div className="flex justify-between gap-4">
                <p className="text-red-600 text-xs">{error}</p>
                <a
                  href={`https://wa.me/2348023349218?text=${encodeURIComponent(
                    "Hello, I need your services",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs"
                >
                  WhatsApp us instead
                </a>
              </div>
            )}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.01 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="w-full py-3.5 rounded-lg text-sm font-medium transition-opacity duration-200 flex items-center justify-center gap-2 bg-brand text-white cursor-pointer disabled:bg-brand/70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
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
        </>
      )}
    </motion.div>
  );
};

export default Form;
