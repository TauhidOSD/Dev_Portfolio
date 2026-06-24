"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./icons/SocialIcons";

const codeLines = [
  { text: "const ", cls: "syntax-keyword" },
  { text: "developer", cls: "syntax-variable" },
  { text: " = ", cls: "syntax-operator" },
  { text: "{", cls: "syntax-bracket" },
  { text: "", cls: "" },
  { text: "  name", cls: "syntax-variable" },
  { text: ": ", cls: "syntax-operator" },
  { text: '"Raiyan Ahmed"', cls: "syntax-string" },
  { text: ",", cls: "syntax-bracket" },
  { text: "  role", cls: "syntax-variable" },
  { text: ": ", cls: "syntax-operator" },
  { text: '"Full Stack Developer"', cls: "syntax-string" },
  { text: ",", cls: "syntax-bracket" },
  { text: "  skills", cls: "syntax-variable" },
  { text: ": ", cls: "syntax-operator" },
  { text: "[", cls: "syntax-bracket" },
  { text: '"React"', cls: "syntax-string" },
  { text: ", ", cls: "syntax-bracket" },
  { text: '"Next.js"', cls: "syntax-string" },
  { text: ", ", cls: "syntax-bracket" },
  { text: '"Node.js"', cls: "syntax-string" },
  { text: "]", cls: "syntax-bracket" },
  { text: ",", cls: "syntax-bracket" },
  { text: "  passion", cls: "syntax-variable" },
  { text: ": ", cls: "syntax-operator" },
  { text: '"Building amazing apps"', cls: "syntax-string" },
  { text: ",", cls: "syntax-bracket" },
  { text: "  available", cls: "syntax-variable" },
  { text: ": ", cls: "syntax-operator" },
  { text: "true", cls: "syntax-number" },
  { text: "", cls: "" },
  { text: "}", cls: "syntax-bracket" },
  { text: ";", cls: "syntax-operator" },
];

// Build full lines of code for display
const fullCode = `const developer = {
  name: "Raiyan Ahmed",
  role: "Full Stack Developer",
  skills: ["React", "Next.js", "Node.js"],
  passion: "Building amazing apps",
  available: true
};`;

export default function HeroSection() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);

  const typeCode = useCallback(() => {
    if (currentIndex < fullCode.length) {
      setDisplayedCode(fullCode.slice(0, currentIndex + 1));
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsTypingDone(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setTimeout(typeCode, 30 + Math.random() * 50);
    return () => clearTimeout(timer);
  }, [typeCode]);

  // Restart typing loop after a pause
  useEffect(() => {
    if (isTypingDone) {
      const restartTimer = setTimeout(() => {
        setDisplayedCode("");
        setCurrentIndex(0);
        setIsTypingDone(false);
      }, 4000);
      return () => clearTimeout(restartTimer);
    }
  }, [isTypingDone]);

  // Syntax highlight the displayed code
  const highlightCode = (code: string) => {
    return code
      .replace(/(const |let |var |return |export |default |import |from )/g, '<span class="syntax-keyword">$1</span>')
      .replace(/(".*?")/g, '<span class="syntax-string">$1</span>')
      .replace(/(\[|\]|\{|\}|\(|\))/g, '<span class="syntax-bracket">$1</span>')
      .replace(/(true|false|null|undefined)/g, '<span class="syntax-number">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="syntax-comment">$1</span>')
      .replace(/(=|:|,|;)/g, '<span class="syntax-operator">$1</span>');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-8 pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="code-editor rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#15161e] border-b border-[#2d2f3d]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="ml-3 text-xs text-[#565f89] font-mono">
                  developer.ts
                </span>
              </div>

              {/* Code area */}
              <div className="p-5 font-mono text-sm leading-relaxed min-h-[280px] relative">
                {/* Line numbers */}
                <div className="absolute left-4 top-5 select-none">
                  {displayedCode.split("\n").map((_, i) => (
                    <div
                      key={i}
                      className="text-[#565f89] text-xs leading-relaxed"
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>

                {/* Code content */}
                <div className="ml-8">
                  <pre className="whitespace-pre-wrap">
                    <code
                      dangerouslySetInnerHTML={{
                        __html: highlightCode(displayedCode),
                      }}
                    />
                    <span
                      className={`inline-block w-2 h-4 bg-primary ml-0.5 align-middle ${
                        isTypingDone ? "animate-blink" : ""
                      }`}
                    />
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-secondary font-mono text-sm mb-4"
            >
              {"<Hello World />"}
            </motion.p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              <span className="text-text-primary">I&apos;m </span>
              <span className="gradient-text">Raiyan</span>
              <br />
              <span className="gradient-text">Ahmed</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-xl sm:text-2xl font-semibold text-text-secondary mb-4">
                Full Stack Developer
              </p>
              <p className="text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
                I craft beautiful, performant web applications with modern
                technologies. Passionate about clean code, great UX, and turning
                complex problems into elegant solutions.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                Contact Me
              </button>
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-xl border border-border text-text-primary font-semibold hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-12 lg:mt-16"
        >
          <motion.button
            onClick={() => {
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
