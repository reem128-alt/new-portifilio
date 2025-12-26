"use client"

import { Code2, Database, Layout, Server } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const skills = [
    {
      icon: Layout,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Express, RESTful APIs",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "MongoDB, PostgreSQL, MySQL",
    },
    {
      icon: Code2,
      title: "Best Practices",
      description: "Clean Code, Testing, Git, CI/CD",
    },
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 px-4 bg-background"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-background pointer-events-none" />
      <div className="absolute -top-32 right-10 h-64 w-64 bg-primary/30 blur-[120px] opacity-50" />
      <div className="relative container mx-auto max-w-6xl">
        <div className={`space-y-4 mb-16 text-center ${isVisible ? "animate-fadeIn opacity-0" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            I am Reem Hasan ,Passionate full-stack developer with expertise in building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div
            className={`space-y-6 p-6 rounded-2xl border border-primary/10 bg-background/80 backdrop-blur ${
              isVisible ? "animate-fadeInLeft animation-delay-200 opacity-0" : "opacity-0"
            }`}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a full-stack developer specializing in React and Node.js with a passion for creating seamless,
              user-friendly web experiences. With several years of experience in web development, I've worked on diverse
              projects ranging from e-commerce platforms to SaaS applications.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My approach combines clean code principles with modern design patterns to deliver scalable and
              maintainable solutions. I believe in continuous learning and staying up-to-date with the latest
              technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden p-6 border border-primary/10 bg-background/80 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 ${
                  isVisible ? `animate-scaleIn animation-delay-${300 + index * 100} opacity-0` : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <skill.icon className="relative z-10 h-8 w-8 text-primary mb-4" />
                <h3 className="relative z-10 font-semibold bg-linear-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
