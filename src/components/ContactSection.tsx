"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, TwitterIcon as Twitter } from "./icons/SocialIcons";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only for now — can hook up EmailJS / server action later
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-white" },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-[#0A66C2]",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-[#1DA1F2]",
    },
    {
      icon: Mail,
      href: "mailto:hello@raiyan.dev",
      label: "Email",
      color: "hover:text-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together to make it happen"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Let&apos;s build something amazing together
            </h3>
            <p className="text-text-secondary leading-relaxed mb-8">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Feel free to reach out
              through any of the channels below.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className={`w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-text-secondary ${social.color} hover:border-primary/50 hover:shadow-lg transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Email display */}
            <div className="mt-8 p-4 rounded-xl bg-surface border border-border">
              <p className="text-text-secondary text-sm mb-1">Email me at</p>
              <p className="text-primary font-medium">hello@raiyan.dev</p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-secondary resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl
                           font-semibold text-white shadow-lg transition-all duration-300 cursor-pointer
                           ${
                             isSubmitted
                               ? "bg-green-500 shadow-green-500/25"
                               : "bg-gradient-to-r from-primary to-primary-dark shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
                           }`}
              >
                {isSubmitted ? (
                  <>
                    <span>✓</span> Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
