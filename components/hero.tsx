"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-accent animate-gradient">
              Mohamed ElFkharany
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Flutter Developer | Mobile Software Engineer
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Flutter Developer with hands-on experience delivering production-grade mobile applications using Flutter,
            Dart, Firebase, REST APIs, and modern state management. Strong foundation in OOP, C++, Clean Architecture,
            and scalable UI/UX design.
          </p>

          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button size="lg" className="gap-2 relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <Download className="h-5 w-5 relative z-10" />
              <span className="relative z-10">Download CV</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent hover:bg-primary/10 border-2 border-primary/50 hover:border-primary transition-all duration-300"
              asChild
            >
              <a href="#contact">
                <Mail className="h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
              asChild
            >
              <a href="https://github.com/mohamedabdelnabii" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent/20 hover:text-accent transition-all duration-300 hover:scale-110"
              asChild
            >
              <a href="https://linkedin.com/in/mohamed-abdelnabi-801412339" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
