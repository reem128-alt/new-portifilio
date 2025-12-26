"use client";

import { Card } from "@/components/ui/card";
import { Code, Database, Lightbulb, Palette, Rocket, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: Code,
      title: "Frontend Engineering",
      description:
        "Crafting immersive interfaces with React and Next.js that load fast, look polished, and feel intuitive across devices.",
      features: [
        "Next.js app directory builds",
        "Reusable component systems",
        "Accessibility-first layouts",
        "Advanced animation & theming",
      ],
    },
    {
      icon: Rocket,
      title: "Backend APIs",
      description:
        "Designing robust Node.js services that power your product with secure, well-documented REST and GraphQL endpoints.",
      features: [
        "Express & NestJS APIs",
        "Real-time features via WebSockets",
        "Observability & logging",
      ],
    },
    {
      icon: Database,
      title: "Database Architecture",
      description:
        "Selecting and modeling data stores tailored to your workload, from flexible documents to enterprise-grade SQL.",
      features: [
        "MongoDB schema design",
        "MySQL performance tuning",
        "PostgreSQL advanced features",
        "Backup & migration strategies",
      ],
    },
    {
      icon: Lightbulb,
      title: "Stack Advisory & Suggestions",
      description:
        "Helping you choose the right mix of tools, integrations, and hosting so your roadmap stays lean and future-proof.",
      features: [
        "Architecture reviews",
        "Tech stack comparisons",
        "Roadmap prioritization",
        "Build vs. buy guidance",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Applying existing UX/UI directions with refined visuals, micro-copy, and interaction polish—ensuring designs are correctly implemented and expression issues are resolved.",
      features: [
        "Responsive Design",
        "Design Systems",
        "Prototyping",
        "User Testing",
      ],
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "Providing ongoing maintenance, updates, and technical support. Keeping your applications secure, up-to-date, and running smoothly.",
      features: [
        "Bug Fixes",
        "Security Updates",
        "Feature Additions",
        "24/7 Support",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div
          className={`space-y-4 mb-16 text-center ${
            isVisible ? "animate-fadeIn" : ""
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            My Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden p-8 border border-primary/10 bg-background/80 backdrop-blur group hover:shadow-xl hover:-translate-y-1 transition-all ${
                isVisible
                  ? `animate-fadeIn animation-delay-${200 + index * 100}`
                  : ""
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -inset-px rounded-lg border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative z-10 flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-linear-to-br from-primary/20 via-purple-500/20 to-primary/10 text-primary shadow-inner">
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              <ul className="relative z-10 space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-linear-to-r from-primary to-purple-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
