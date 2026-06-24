"use client";

import { motion } from "framer-motion";
import { Code2, Coffee, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Get to know the person behind the code"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Gradient border glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-md opacity-50" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden bg-surface border border-border">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">RA</span>
                    </div>
                    <p className="text-text-secondary text-sm font-mono">
                      {"<Developer />"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0 }}
                className="absolute -top-4 -right-4 w-14 h-14 rounded-xl bg-surface border border-border shadow-lg flex items-center justify-center"
              >
                <Code2 className="w-7 h-7 text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-surface border border-border shadow-lg flex items-center justify-center"
              >
                <Coffee className="w-7 h-7 text-secondary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 2 }}
                className="absolute top-1/2 -right-6 w-14 h-14 rounded-xl bg-surface border border-border shadow-lg flex items-center justify-center"
              >
                <Rocket className="w-7 h-7 text-primary-light" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              A passionate developer who loves building things for the web
            </h3>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Hi there! I&apos;m Raiyan Ahmed, a Full Stack Developer with a
                deep passion for creating beautiful, functional, and
                user-centered digital experiences. I have a strong foundation in
                both frontend and backend technologies.
              </p>
              <p>
                I specialize in building modern web applications using React,
                Next.js, Node.js, and TypeScript. I love turning complex
                problems into simple, beautiful, and intuitive solutions. When
                I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or sipping
                coffee while brainstorming my next project.
              </p>
              <p>
                I believe that great software is not just about writing code —
                it&apos;s about crafting experiences that make people&apos;s
                lives easier and more enjoyable.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: "2+", label: "Years Experience" },
                { number: "20+", label: "Projects Completed" },
                { number: "10+", label: "Technologies" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-surface border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-xs text-text-secondary mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
