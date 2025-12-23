"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Pharmacista",
    description:
      "Complete e-pharmacy application with product browsing, authentication, and user management. Built with Flutter, Cubit, Freezed, and JsonSerializable for clean state management.",
    image: "/pharmacy-mobile-app-interface.jpg",
    liveDemo: "https://play.google.com/store/apps/details?id=com.medipex.pharmacista&pcampaignid=web_share",
    github: "#",
    tags: ["Flutter", "Cubit", "REST API", "Freezed"],
    color: "primary",
  },
  {
    title: "Ivita",
    description:
      "Medical application featuring doctor profiles, booking system, and laboratory onboarding. Implemented with responsive UI and seamless user experience across all modules.",
    image: "/medical-booking-app-interface.jpg",
    liveDemo: "https://play.google.com/store/apps/details?id=com.ivistasa.app&pcampaignid=web_share",
    github: "#",
    tags: ["Flutter", "BLoC", "Firebase", "REST API"],
    color: "accent",
  },
  {
    title: "One Care",
    description:
      "E-commerce mobile app for medical, skincare, and beauty products. Designed full UI with responsive layouts and reusable widgets supporting large product catalog.",
    image: "/ecommerce-beauty-products-app.jpg",
    liveDemo: "https://play.google.com/store/apps/details?id=com.medipex.one_care&pcampaignid=web_share",
    github: "#",
    tags: ["Flutter", "E-commerce", "UI/UX"],
    color: "secondary",
  },
  {
    title: "Pottery App",
    description:
      "E-commerce mobile app for pottery shopping with cart, favorites, and light/dark mode. Optimized for smooth user experience with persistent state management.",
    image: "/pottery-shopping-app-interface.jpg",
    liveDemo: "#",
    github: "https://github.com/mohamedabdelnabii/pottery_app",
    tags: ["Flutter", "Shared Preferences", "Dark Mode"],
    color: "success",
  },
  {
    title: "Todo App",
    description:
      "Task management application with full CRUD functionality using local state management. Clean and intuitive interface for managing daily tasks.",
    image: "/todo-task-manager-app.jpg",
    liveDemo: "#",
    github: "https://github.com/mohamedabdelnabii/todoapp",
    tags: ["Flutter", "State Management", "CRUD"],
    color: "primary",
  },
  {
    title: "BMI Calculator",
    description:
      "BMI calculator app featuring custom widgets and fully responsive design. Simple and effective tool for health tracking.",
    image: "/bmi-calculator-app-interface.jpg",
    liveDemo: "#",
    github: "https://github.com/mohamedabdelnabii/bmi",
    tags: ["Flutter", "UI Design", "Health"],
    color: "accent",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold animate-in fade-in slide-in-from-left-4 duration-700">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <Card
                key={project.title}
                className="group flex flex-col hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700 overflow-hidden border-2 hover:border-primary/50"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader className="p-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </CardHeader>
                <CardContent className="flex-1 p-6 space-y-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 bg-${project.color}/20 text-${project.color} text-xs rounded-full font-medium hover:bg-${project.color}/30 transition-colors duration-300 animate-in fade-in duration-500`}
                        style={{ animationDelay: `${idx * 100 + tagIdx * 50}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 bg-transparent hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
