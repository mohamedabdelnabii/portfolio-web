"use client"

import { Card } from "@/components/ui/card"
import { Code2, Database, Wrench, Star, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Dart", "C++", "JavaScript", "HTML", "CSS"],
    icon: Code2,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Flutter", "BLoC", "Provider", "Freezed", "JsonSerializable", "React"],
    icon: Zap,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Databases",
    skills: ["Hive", "SQLite", "Shared Preferences", "Firebase", "Supabase"],
    icon: Database,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Postman", "Android Studio", "GitHub Actions", "CI/CD"],
    icon: Wrench,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    title: "Core Competencies",
    skills: [
      "REST API Integration",
      "State Management",
      "Clean Architecture",
      "Performance Optimization",
      "Unit Testing",
    ],
    icon: Star,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold animate-in fade-in slide-in-from-left-4 duration-700">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon
              return (
                <Card
                  key={category.title}
                  className="group p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 hover:border-primary/50 animate-in fade-in slide-in-from-bottom-8 duration-700 cursor-pointer"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-3 rounded-lg ${category.bgColor} ${category.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 ${category.bgColor} ${category.color} rounded-full text-sm font-medium hover:scale-110 transition-all duration-300 hover:shadow-md animate-in fade-in duration-500`}
                        style={{ animationDelay: `${idx * 100 + skillIdx * 50}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
