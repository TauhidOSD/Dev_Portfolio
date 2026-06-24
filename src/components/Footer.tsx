"use client";

import { Heart } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, TwitterIcon as Twitter } from "./icons/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-1 text-text-secondary text-sm">
            <span>© {currentYear} Raiyan Ahmed. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>and lots of coffee.</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface border border-border
                           flex items-center justify-center text-text-secondary
                           hover:text-primary hover:border-primary/50
                           transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
