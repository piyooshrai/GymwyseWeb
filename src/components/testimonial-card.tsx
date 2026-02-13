"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  metric: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  metric,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="glass-card p-8 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-sunset-orange text-sunset-orange" />
        ))}
      </div>

      <blockquote className="text-soft-white leading-relaxed mb-6 flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-full bg-sapphire-blue/20 flex items-center justify-center text-sapphire-blue font-semibold text-sm">
          {author.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <div className="text-sm font-medium text-pure-white">{author}</div>
          <div className="text-xs text-dim-gray">{role}</div>
        </div>
      </div>

      <div className="pt-4 border-t border-glass-border">
        <span className="text-sm font-medium text-electric-green">{metric}</span>
      </div>
    </motion.div>
  );
}
