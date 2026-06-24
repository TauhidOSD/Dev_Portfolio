"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certificates } from "@/data/certificates";

export default function CertificatesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Certificates & Courses"
          subtitle="Professional certifications and courses I've completed"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-surface border border-border
                         hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10
                         transition-all duration-300"
            >
              {/* Certificate Image Placeholder */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20
                              flex items-center justify-center transition-transform duration-500
                              group-hover:scale-105"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 mx-auto mb-3 flex items-center justify-center">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-text-secondary text-sm font-medium">
                      Certificate
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-text-primary mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-text-secondary text-sm mb-3">
                  {cert.issuer} · {cert.date}
                </p>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary font-medium
                             hover:underline transition-all"
                >
                  View Credential
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
