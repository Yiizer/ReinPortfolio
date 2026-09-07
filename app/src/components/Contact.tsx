"use client";

import { useState } from "react";
import Magnetic from "@/components/Magnetic";
import ScrambleText from "@/components/ScrambleText";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const directEmail = "reingabrielgavino1723@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Formspree submission endpoint - defaults to clean mailto fallback if placeholder is unchanged
      const response = await fetch("https://formspree.io/f/placeholder_form_id", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        // Fallback gracefully to direct mailto if form endpoint isn't wired up yet
        const mailSubject = encodeURIComponent(subject.trim() || `Inquiry from ${name}`);
        const mailBody = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
        window.location.href = `mailto:${directEmail}?subject=${mailSubject}&body=${mailBody}`;
        setStatus("success");
      }
    } catch {
      const mailSubject = encodeURIComponent(subject.trim() || `Inquiry from ${name}`);
      const mailBody = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
      window.location.href = `mailto:${directEmail}?subject=${mailSubject}&body=${mailBody}`;
      setStatus("success");
    }
  };

  return (
    <div className="space-y-12 max-w-2xl">
      {/* Quick Email Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-surface border border-border">
        <div className="space-y-0.5 font-mono text-xs">
          <span className="text-text-dim block uppercase tracking-wider text-[10px]">
            Direct Address
          </span>
          <span className="text-text-main font-semibold select-all">
            {directEmail}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Magnetic strength={0.25}>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-3.5 py-1.5 rounded bg-primary border border-border hover:border-accent text-text-muted hover:text-accent font-mono text-xs transition-colors cursor-pointer"
            >
              <ScrambleText text={copied ? "✓ Copied" : "Copy Email"} />
            </button>
          </Magnetic>

          <Magnetic strength={0.25}>
            <a
              href={`mailto:${directEmail}`}
              className="px-3.5 py-1.5 rounded bg-accent text-white hover:bg-accent-hover font-mono text-xs font-semibold transition-colors block shadow-md shadow-accent/20"
            >
              <ScrambleText text="Open Client →" />
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Main Submission Form */}
      {status === "success" ? (
        <div className="p-8 rounded-xl bg-surface border border-border space-y-4 animate-in fade-in duration-300">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>Message Dispatched</span>
          </div>
          <h3 className="font-serif text-3xl text-text-main">
            Thank you for reaching out.
          </h3>
          <p className="text-text-muted text-sm leading-relaxed">
            I&apos;ve received your message details and will respond as promptly as possible.
          </p>
          <button
            type="button"
            onClick={() => {
              setName("");
              setEmail("");
              setSubject("");
              setMessage("");
              setStatus("idle");
            }}
            className="font-mono text-xs text-accent hover:underline pt-2 cursor-pointer inline-block"
          >
            &larr; Send another note
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="font-mono text-xs uppercase tracking-wider text-text-muted block"
              >
                Name <span className="text-accent">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full rounded-md bg-surface border border-border px-4 py-3 text-sm text-text-main placeholder:text-text-dim outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="font-mono text-xs uppercase tracking-wider text-text-muted block"
              >
                Email <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@domain.com"
                className="w-full rounded-md bg-surface border border-border px-4 py-3 text-sm text-text-main placeholder:text-text-dim outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="font-mono text-xs uppercase tracking-wider text-text-muted block"
            >
              Subject / Project Scope
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Web App / POS System / Fullstack Contract"
              className="w-full rounded-md bg-surface border border-border px-4 py-3 text-sm text-text-main placeholder:text-text-dim outline-none focus:border-accent transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="font-mono text-xs uppercase tracking-wider text-text-muted block"
            >
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your goals, requirements, or timeline..."
              className="w-full rounded-md bg-surface border border-border px-4 py-3 text-sm text-text-main placeholder:text-text-dim outline-none focus:border-accent transition-colors resize-y min-h-[120px]"
            />
          </div>

          <div>
            <Magnetic strength={0.25}>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-accent text-white hover:bg-accent-hover font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-150 cursor-pointer disabled:opacity-50 shadow-md shadow-accent/20"
              >
                <ScrambleText text={status === "submitting" ? "Sending..." : "Send Message"} />
                <span>&rarr;</span>
              </button>
            </Magnetic>
          </div>
        </form>
      )}
    </div>
  );
}
