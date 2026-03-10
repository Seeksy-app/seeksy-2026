import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import pillarCreate from "@/assets/pillar-create.jpg";
import pillarConnect from "@/assets/pillar-connect.jpg";
import pillarMonetize from "@/assets/pillar-monetize.jpg";

const pillars = [
  {
    id: "create",
    badge: "Create",
    title: "AI-powered content tools for every creator.",
    description:
      "Record podcasts, generate clips, edit videos, and create content with AI assistance. Our studio handles transcription, captions, and distribution automatically.",
    image: pillarCreate,
    link: "/apps?view=modules",
    linkText: "Explore Creator Tools",
  },
  {
    id: "connect",
    badge: "Connect",
    title: "Build real relationships with your audience.",
    description:
      "Manage contacts, send emails and SMS, schedule meetings, and host events. Everything you need to grow and engage your community in one place.",
    image: pillarConnect,
    link: "/apps?view=modules",
    linkText: "See Engagement Tools",
  },
  {
    id: "monetize",
    badge: "Monetize",
    title: "Turn your influence into income.",
    description:
      "Accept payments, sell tickets, manage sponsorships, and track revenue. Verified voice identity unlocks premium ad opportunities with brands.",
    image: pillarMonetize,
    link: "/apps?view=modules",
    linkText: "Learn About Monetization",
  },
];

export function PlatformPillars() {
  return (
    <section className="w-full px-4 py-20 md:py-24"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="font-extrabold tracking-[-0.5px] mb-4"
            style={{ 
              fontSize: "clamp(28px, 4vw, 42px)",
              color: "hsl(var(--foreground))",
            }}
          >
            Create, connect, and earn on one
            <br />
            <span style={{ color: "hsl(var(--primary))" }}>trusted platform.</span>
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Everything you need to build your creator business, without the complexity.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="rounded-[28px] overflow-hidden flex flex-col"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                boxShadow: "0 10px 40px -10px hsl(var(--foreground)/0.06)",
              }}
            >
              {/* Image */}
              <div className="w-full h-48 md:h-52 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.badge}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                {/* Badge */}
                <span 
                  className="text-xs font-semibold mb-3 tracking-wide uppercase"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  {pillar.badge}
                </span>

                {/* Title */}
                <h3 
                  className="text-xl font-bold mb-4 leading-snug"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-base mb-8 flex-1"
                  style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.55 }}
                >
                  {pillar.description}
                </p>

                {/* Link */}
                <Link
                  to={pillar.link}
                  className="inline-flex items-center text-base font-semibold group"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  {pillar.linkText}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
