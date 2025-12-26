"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Laptop, Server } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [openCodeIndex, setOpenCodeIndex] = useState<number | null>(null)
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([])

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openCodeIndex === null) return
      const wrapper = dropdownRefs.current[openCodeIndex]
      if (wrapper && !wrapper.contains(event.target as Node)) {
        setOpenCodeIndex(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [openCodeIndex])

  const projects = [
    {
      title: "Music app",
      description:
        "make this app using React,redux tookit and tailwind for designing ,i used Shazam core Api for fetching data like music ,top chart,artist",
      image: "/music.png",
      tags: ["React", "tailwind", "redux"],
      liveUrl: "https://music-app-omega-one-73.vercel.app/",
      codeLinks: {
        frontend: "https://github.com/reem128-alt/music-app",
        backend: "https://github.com/reem128-alt/music-app",
      },
    },
    {
      title: "Polling system",
      description:
        "The project is an Arabic-language polling platform that lets visitors browse public surveys, sign in, and submit responses through a streamlined interface. It also offers poll creators a single dashboard to build questionnaires, manage questions, and monitor participation metrics in real time.",
      image: "/poll.png",
      tags: ["Next.js", "TypeScript", "Express", "Mongo db"],
      liveUrl: "https://polling-tau.vercel.app/",
      codeLinks: {
        frontend: "https://github.com/reem128-alt/polling",
        backend: "https://github.com/reem128-alt/polling",
      },
    },
    {
      title: "Reservation app",
      description:
        "Reserve is booking platform that greets visitors with a polished marketing homepage highlighting quick reservations, premium spaces, and always-on support. Beyond the hero flow, it includes dedicated dashboards and auth flows for both general users and admins, indicating a full self-service experience once signed in.",
      image: "/reservation.png",
      tags: ["Next", "Nest", "tailwind", "postgres","prisma"],
      liveUrl: "https://reservation-murex.vercel.app/en",
      codeLinks: {
        frontend: "https://github.com/reem128-alt/Reservation",
        backend: "https://github.com/reem128-alt/reservation-back",
      },
    },
    {
      title: "Health platform",
      description:
        "HealthCare is a patient-centric platform that highlights available doctors, services, and educational blog content to help users manage their healthcare journey. It emphasizes trusted medical expertise, transparent service offerings, and easy navigation for booking appointments or exploring",
      image: "/doctor.png",
      tags: ["Next js","clerk","Tailwind", "Express", "Mongo db"],
      liveUrl: "https://health-care-qw9j.vercel.app",
      codeLinks: {
        frontend: "https://github.com/reem128-alt/health-care",
        backend: "https://github.com/reem128-alt/health-care",
      },
    },
    {
      title: "Blog App",
      description:
        "Social Blog is a members-only storytelling space where authenticated users share rich posts, manage profiles, and converse through comments. It blends a live social feed feel with lightweight moderation for small communities or teams.",
      image: "/weather-app-interface.png",
      tags: ["Next js","Express","Tailwind", "Mongo db"],
      liveUrl: "https://blog-one-virid-60.vercel.app",
      codeLinks: {
        frontend: "https://github.com/reem128-alt/blog",
        backend: "https://github.com/reem128-alt/blog-backend",
      },
    },
    {
      title: "Movie dashboard",
      description:
        "Movie Dash is a centralized dashboard for curating a film catalog—admins can highlight featured titles, inspect detailed records, track performance metrics, and keep the library updated through secure add/edit flows.",
      image: "/move.png",
      tags: ["Next js","Express","Tailwind","Mongo db"],
      liveUrl: "https://movie-dash-front.vercel.app/",
      codeLinks: {
        frontend: "https://github.com/reem128-alt/movie-dash-front",
        backend: "https://github.com/reem128-alt/movie-dashboard",
      },
    },
     {
      title: "chat App",
      description:
        "The repository hosts a user-facing chat portal where members log in, browse available rooms, and launch real-time conversations with others. It centers on presenting a welcoming dashboard that highlights personal info, room types, and quick actions to hop into active chats.",
      image: "/weather-app-interface.png",
      tags: ["Next js","Zustand","Express","Tailwind","Mongo db","web socket"],
      liveUrl: "https://chat-app-front-phi.vercel.app/",
      codeLinks: {
        frontend: "https://github.com/reem128-alt/chat-app-front",
        backend: "https://github.com/reem128-alt/chat-app-back",
      },
    },
  ]

  return (
    <section id="projects" className="py-24 px-4" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className={`space-y-4 mb-16 text-center ${isVisible ? "animate-fadeIn" : ""}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`relative flex flex-col h-full overflow-visible group border border-primary/10 bg-background/90 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all hover:scale-[1.02] ${
                isVisible ? `animate-fadeIn animation-delay-${200 + index * 150}` : ""
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-purple-500 to-primary opacity-70 group-hover:opacity-100 transition-opacity" />
              {/* <div className="relative w-full bg-muted h-52 overflow-hidden aspect-video">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className=" group-hover:scale-105 transition-transform duration-300"
                />
              </div> */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold bg-linear-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-linear-to-r from-primary/15 via-purple-500/10 to-primary/15 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <div
                    className="relative"
                    ref={(el) => {
                      dropdownRefs.current[index] = el
                    }}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setOpenCodeIndex(openCodeIndex === index ? null : index)}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <div
                      className={`absolute right-0 bottom-full mb-2 w-48 rounded-lg border border-border bg-background shadow-xl transition-all duration-150 ${
                        openCodeIndex === index
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 translate-y-1 pointer-events-none"
                      }`}
                    >
                      <a
                        href={project.codeLinks.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-muted transition-colors rounded-t-lg"
                        onClick={() => setOpenCodeIndex(null)}
                      >
                        <Laptop className="h-4 w-4 text-primary" />
                        Frontend Code
                      </a>
                      {project.codeLinks.backend && (
                        <a
                          href={project.codeLinks.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-muted transition-colors rounded-b-lg border-t border-border/60"
                          onClick={() => setOpenCodeIndex(null)}
                        >
                          <Server className="h-4 w-4 text-primary" />
                          Backend Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
