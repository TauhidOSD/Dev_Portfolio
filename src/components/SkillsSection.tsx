"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills, type Skill } from "@/data/skills";

const skillIcons: Record<string, React.JSX.Element> = {
  react: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
      <path d="M12 21.35c-1.1 0-2.13-.28-3.06-.78-.93-.5-1.72-1.23-2.36-2.1C5.33 16.9 4.5 14.6 4.5 12s.83-4.9 2.08-6.47c.64-.87 1.43-1.6 2.36-2.1C9.87 2.93 10.9 2.65 12 2.65s2.13.28 3.06.78c.93.5 1.72 1.23 2.36 2.1C18.67 7.1 19.5 9.4 19.5 12s-.83 4.9-2.08 6.47c-.64.87-1.43 1.6-2.36 2.1-.93.5-1.96.78-3.06.78Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-1.5 14.5V7.5l8 9h-2.5l-5.5-6.2v6.2H9z" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M3 3h18v18H3V3Zm10.71 13.32v1.78c.29.15.64.26 1.04.34.4.08.82.12 1.25.12.42 0 .81-.05 1.16-.14.36-.09.66-.24.91-.44.25-.2.45-.45.58-.76.14-.31.21-.68.21-1.1 0-.31-.05-.58-.14-.82a2.05 2.05 0 0 0-.4-.62 2.72 2.72 0 0 0-.62-.48c-.24-.14-.5-.28-.79-.41-.21-.1-.4-.19-.56-.28a1.7 1.7 0 0 1-.38-.27.95.95 0 0 1-.22-.3.88.88 0 0 1-.07-.36c0-.13.02-.25.08-.35.05-.1.13-.2.23-.27.1-.07.22-.13.36-.17a1.8 1.8 0 0 1 .49-.06c.13 0 .26.01.4.04.14.02.27.06.4.11.14.05.26.11.38.19.12.07.22.16.31.26l.8-1.1a2.8 2.8 0 0 0-.46-.32 3.22 3.22 0 0 0-1.07-.37 4.7 4.7 0 0 0-.72-.06c-.42 0-.8.05-1.15.16-.35.1-.65.25-.9.45-.25.2-.44.44-.58.73-.13.29-.2.62-.2 1 0 .42.1.78.3 1.06.2.28.5.53.93.73l.92.44c.18.09.33.18.47.27.13.09.24.19.33.3.09.1.15.22.2.34.04.13.06.27.06.43 0 .14-.03.26-.08.37-.06.11-.14.2-.25.28a1.18 1.18 0 0 1-.4.18 2 2 0 0 1-.53.06c-.42 0-.8-.08-1.15-.24a2.62 2.62 0 0 1-.9-.68ZM8.5 9.5H6v1.4h2.08v7.1H9.6v-7.1h2.08V9.5H8.5Z" />
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2l9 5.25v9.5L12 22l-9-5.25v-9.5L12 2Zm0 2.15L5 9.03v5.94L12 19.85l7-4.88V9.03L12 4.15ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.1 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.5 6 12 6ZM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.5 12 7 12Z" />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2C8 2 6 5 6 9c0 4 2 7 5 11l1 2 1-2c3-4 5-7 5-11 0-4-2-7-6-7Zm0 3c2.2 0 3 2 3 4s-.8 4-3 7c-2.2-3-3-5-3-7s.8-4 3-4Z" />
    </svg>
  ),
  express: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M4 4h16v2H4V4Zm0 7h12v2H4v-2Zm0 7h16v2H4v-2Zm14-7h2l2 3-2 3h-2l2-3-2-3Z" />
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2C8 2 5 4 5 7c0 2 1 3 3 4v5c0 2 1 4 4 4s4-2 4-4v-5c2-1 3-2 3-4 0-3-3-5-7-5Zm0 2c2.5 0 5 1.5 5 3s-2.5 3-5 3-5-1.5-5-3 2.5-3 5-3Zm-2 8.5c.6.3 1.3.5 2 .5s1.4-.2 2-.5V16c0 1.1-.9 2-2 2s-2-.9-2-2v-3.5Z" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M21.62 11.11 12.89 2.38a1.3 1.3 0 0 0-1.78 0L9.17 4.32l2.24 2.24c.52-.18 1.12-.06 1.54.36.42.42.54 1.02.36 1.54l2.16 2.16c.52-.18 1.12-.06 1.54.36a1.5 1.5 0 1 1-2.12 2.12c-.44-.44-.55-1.1-.33-1.63l-2.02-2.02v5.31a1.5 1.5 0 1 1-1.22-.12v-5.36a1.5 1.5 0 0 1-.81-1.97L8.28 5.7 2.38 11.6a1.3 1.3 0 0 0 0 1.78l8.73 8.73c.49.49 1.29.49 1.78 0l8.73-8.73a1.3 1.3 0 0 0 0-1.78Z" />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M13 4h2v2h-2V4Zm-3 0h2v2h-2V4ZM7 4h2v2H7V4Zm6 3h2v2h-2V7ZM10 7h2v2h-2V7ZM7 7h2v2H7V7ZM4 7h2v2H4V7Zm6 3h2v2h-2v-2ZM7 10h2v2H7v-2ZM4 10h2v2H4v-2Zm17 .5c-.84-.47-1.75-.52-2.6-.33-.17-1.16-.93-2.17-1.82-2.7l-.37-.2-.23.35c-.47.72-.6 1.9-.08 2.68-.27.13-.8.34-1.5.33H1.6l-.07.38c-.22 1.2-.22 4.93 2.77 7.82C6.2 20.73 8.87 22 12.3 22c5.32 0 9.26-2.46 11.12-6.93.73.04 2.29.05 3.1-1.53l.16-.31-.29-.17c-.79-.45-1.76-.52-2.6-.33ZM4 13h2v2H4v-2Z" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2c-1.66 0-3 .34-4 1-.83.55-1 1.17-1 2v2h5v1H6c-1 0-2.5.6-2.5 3.5S5 13 6 13h1.5v-2c0-1.1.9-2 2-2h5c.83 0 1.5-.67 1.5-1.5V4c0-.83-.67-1.5-1.5-1.5-.15 0-.33-.05-.5-.05V2Zm-1.5 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM17 8.5v2c0 1.1-.9 2-2 2h-5c-.83 0-1.5.67-1.5 1.5v3.5c0 .83.67 1.5 1.5 1.5h5c1 .66 3 1 4 1 .83-.55 1-1.17 1-2v-2h-5v-1h6c1 0 2.5-.6 2.5-3.5S19 8 18 8h-1Zm.5 7.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
    </svg>
  ),
  firebase: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M5.24 17.57 8.39 3.1a.43.43 0 0 1 .81-.1l3.37 6.3-1.54 2.87L5.24 17.57ZM19.08 18l-2.76-17.1a.44.44 0 0 0-.82-.07L5 18l6.54 3.74a1.26 1.26 0 0 0 1.24 0L19.08 18Zm-5.81-7.82L11.5 7.12 6.14 17.37l7.13-7.19Z" />
    </svg>
  ),
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 to-secondary/5 transition-opacity duration-300"
      />

      <div className="relative flex flex-col items-center text-center gap-3">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${skill.color}15`,
            color: skill.color,
          }}
        >
          {skillIcons[skill.icon] || (
            <span className="text-2xl font-bold">
              {skill.name.charAt(0)}
            </span>
          )}
        </div>
        <span className="font-semibold text-text-primary text-sm">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/50"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with to bring ideas to life"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
