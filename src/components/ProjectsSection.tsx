"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import { GithubIcon as Github } from "./icons/SocialIcons";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      layout
    >
      <Link href={`/projects/${project.id}`} className="block group">
        <div
          className="relative overflow-hidden rounded-2xl bg-surface border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
        >
          {/* Project Image */}
          <div className="relative h-52 sm:h-56 overflow-hidden">
            <div
              className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center transition-transform duration-700 group-hover:scale-110"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <p className="text-white/80 text-sm font-medium">
                  {project.title.split(" — ")[0]}
                </p>
              </div>
            </div>

            {/* Hover Overlay — slides up from bottom */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-end p-6"
            >
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {project.shortDescription}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full bg-white/10 text-white/80 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-5">
            <h3 className="font-bold text-text-primary text-lg mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-text-secondary text-sm line-clamp-2">
              {project.shortDescription}
            </p>

            {/* Tech badges */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action links */}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
              <span className="text-sm text-primary font-medium group-hover:underline flex items-center gap-1">
                View Details
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of my recent work that I'm proud of"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Show All / Show Less Button */}
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border text-text-primary font-semibold hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
            >
              {showAll ? "Show Less" : "Show All Projects"}
              <motion.span
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
