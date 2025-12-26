"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error ?? "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: "Thanks! Your message is on its way to my inbox.",
      });
      toast.success("Message sent! I’ll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again later.",
      });
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "reemhasan088@gmail.com",
      
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+96392212227",
      
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Syria",
     
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div
          className={`space-y-4 mb-16 text-center ${
            isVisible ? "animate-fadeIn" : ""
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Have a project in mind? Let's work together to create something
            amazing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className={`p-6 text-center bg-card/80 border border-border/60 shadow-lg shadow-primary/5 hover:border-primary/60 hover:-translate-y-1 transition-all duration-300 ${
                isVisible
                  ? `animate-scaleIn animation-delay-${200 + index * 100}`
                  : ""
              }`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-primary text-white shadow-lg shadow-primary/40 mb-4">
                <info.icon className="h-6 w-6" />
              </div>
              <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground/90 mb-2">
                {info.title}
              </p>
              <h3 className="text-xl font-semibold text-foreground">{info.value}</h3>
            </Card>
          ))}
        </div>

        <Card
          className={`p-8 md:p-12 max-w-3xl mx-auto ${
            isVisible ? "animate-fadeIn animation-delay-500" : ""
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Project inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            {status.type && (
              <p
                className={`text-center text-sm ${
                  status.type === "success" ? "text-green-600" : "text-destructive"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
}
