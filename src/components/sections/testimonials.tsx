"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/testimonial-card";

const testimonials = [
  {
    quote:
      "GymWyse caught 18 members who were about to churn this month. That's $3,600 in saved revenue. It paid for itself 5x over.",
    author: "Sarah Chen",
    role: "Owner, FitHub Downtown LA",
    metric: "+18.3% MRR growth",
  },
  {
    quote:
      "I manage 4 locations. Before GymWyse, I had to log into 4 different dashboards. Now I see everything in 30 seconds.",
    author: "Marcus Johnson",
    role: "Regional Director, Apex Fitness",
    metric: "4 locations, 1 dashboard",
  },
  {
    quote:
      "The member app is insane. Engagement is up 40%. Members actually love their AI avatar coaches.",
    author: "Priya Patel",
    role: "Owner, Zen Warrior Studio",
    metric: "+40% app engagement",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-deep-space">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pure-white leading-tight">
            What Gym Owners Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
