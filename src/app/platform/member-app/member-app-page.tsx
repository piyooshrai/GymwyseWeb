"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Smartphone, Users, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const avatars = [
  { name: "Coach Max", personality: "High-energy motivator", style: "Intense HIIT focus" },
  { name: "Coach Serena", personality: "Calm & mindful", style: "Yoga & flexibility" },
  { name: "Coach Kai", personality: "Data-driven analyst", style: "Strength programming" },
  { name: "Coach Luna", personality: "Fun & social", style: "Group fitness" },
  { name: "Coach Atlas", personality: "Old-school discipline", style: "Powerlifting" },
  { name: "Coach Sage", personality: "Holistic wellness", style: "Recovery & nutrition" },
];

export function MemberAppPage() {
  return (
    <section className="py-24 md:py-32 bg-deep-space">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6 mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-electric-green text-sm font-medium tracking-wider uppercase">
            Member Experience
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-pure-white leading-[1.1] tracking-tight">
            AI Avatar Member App
          </h1>
          <p className="text-lg text-soft-white leading-relaxed">
            6 personality-driven AI coaches. 40% higher engagement. Members
            actually love using this app.
          </p>
        </motion.div>

        {/* Avatar grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto">
          {avatars.map((avatar, i) => (
            <motion.div
              key={i}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-sapphire-blue/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-sapphire-blue font-bold">{avatar.name.split(" ")[1][0]}</span>
              </div>
              <h3 className="text-base font-semibold text-pure-white mb-1">{avatar.name}</h3>
              <p className="text-sm text-electric-green mb-1">{avatar.personality}</p>
              <p className="text-xs text-dim-gray">{avatar.style}</p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { icon: Smartphone, title: "Native iOS & Android", desc: "Smooth, responsive native apps" },
            { icon: Users, title: "Personalized Experience", desc: "Each member gets their own AI coach" },
            { icon: Zap, title: "+40% Engagement", desc: "Members use the app 3x more often" },
            { icon: Heart, title: "Included Free", desc: "No extra cost with your GymWyse plan" },
          ].map((f, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <div className="w-10 h-10 bg-electric-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <f.icon className="w-5 h-5 text-electric-green" />
              </div>
              <h3 className="text-sm font-semibold text-pure-white mb-1">{f.title}</h3>
              <p className="text-xs text-cool-gray">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* App features list */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-pure-white text-center mb-8">
            App Features
          </h2>
          <div className="glass-card p-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "AI-powered workout plans",
                "Class booking & waitlists",
                "Progress photos & tracking",
                "Nutrition guidance",
                "Check-in via QR code",
                "Equipment reporting (QR)",
                "Payment & billing",
                "Push notifications",
                "Social challenges",
                "Wearable device sync",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-electric-green shrink-0" />
                  <span className="text-sm text-cool-gray">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/demo">
            <Button variant="primary" size="lg">
              See the App in Action
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
