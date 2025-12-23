"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Mohamed-Elfkharany",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mohamed-elfkharany",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:mohamedelfkharany12@gmail.com",
      icon: Mail,
    },
  ]

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background to-background/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Mohamed ElFkharany
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Flutter Developer passionate about creating beautiful and functional mobile applications.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:scale-110 hover:rotate-6 transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" fill="currentColor" /> by Mohamed ElFkharany
          </p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Scroll to top button */}
        <Button
          onClick={scrollToTop}
          size="icon"
          className="absolute bottom-8 right-8 rounded-full shadow-lg hover:shadow-primary/20 hover:scale-110 transition-all duration-300 bg-primary/80 backdrop-blur-sm"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  )
}
