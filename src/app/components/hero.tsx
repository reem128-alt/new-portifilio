"use client";

import { Button } from "@/components/ui/button";
import { Boxes } from "@/components/ui/background-boxes";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Reem Hasan", "IT Enginner", "Full-Stack Developer"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[80vh] md:min-h-screen flex items-center justify-center pb-0 -mb-8">
      <div className="absolute inset-0 opacity-40 sm:opacity-60 pointer-events-none">
        <Boxes className="text-primary/30 pointer-events-auto" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/60 to-background pointer-events-none" />
      </div>
      <div className="relative container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <div
            className={`space-y-4 ${
              isVisible ? "animate-fadeIn opacity-0" : "opacity-0"
            }`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-balance leading-tight">
              <span className="inline-block overflow-hidden">
                <span
                  key={currentRole}
                  className="inline-block animate-slideUp"
                  style={{ animationDuration: "0.5s" }}
                >
                  {roles[currentRole]}
                </span>
              </span>
              <span className="block text-primary mt-2 animate-gradient bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_auto]">
                Building the Web
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance animate-typing overflow-hidden whitespace-normal">
              Crafting modern, scalable web applications with React and Node.js.
              Turning complex problems into elegant solutions.
            </p>
          </div>

          <div
            className={`flex flex-wrap items-center justify-center gap-4 ${
              isVisible
                ? "animate-fadeIn animation-delay-200 opacity-0"
                : "opacity-0"
            }`}
          >
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/Reem-cv.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
