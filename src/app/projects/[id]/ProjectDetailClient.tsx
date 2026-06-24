"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Code2,
} from "lucide-react";
import { GithubIcon as Github } from "@/components/icons/SocialIcons";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectDetailClient({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl">
              {project.shortDescription}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Project Image */}
            <div className="rounded-2xl overflow-hidden mb-8 border border-border">
              <div className="h-64 sm:h-80 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <p className="text-white/80 font-medium">
                    {project.title.split(" — ")[0]}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-primary" />
                About This Project
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Tech Stack */}
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h3 className="font-bold text-text-primary mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="p-6 rounded-2xl bg-surface border border-border space-y-3">
              <h3 className="font-bold text-text-primary mb-4">Links</h3>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border text-text-primary hover:border-primary hover:text-primary font-medium transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                Source Code
              </a>
            </div>

            {/* Info */}
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Calendar className="w-4 h-4" />
                <span>2024</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Back to all projects */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-text-primary font-medium hover:border-primary hover:text-primary transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to All Projects
        </Link>
      </div>
    </div>
  );
}
