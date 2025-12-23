import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    title: "Flutter Developer",
    company: "BayesianBits",
    location: "Tanta, Egypt",
    period: "01/2024 – 03/2025",
    description: [
      "Developed cross-platform apps using Flutter, BLoC, Firebase, REST APIs",
      "Built scalable UI and clean data layers using Hive, SQLite, Freezed",
      "Improved performance, stability, and delivery through optimization & CI/CD",
    ],
  },
  {
    title: "Flutter Developer Internship",
    company: "Naqla Sehia",
    location: "Riyadh, Saudi Arabia (Remote)",
    period: "3-Month Internship",
    description: [
      "Assisted in building medical apps with UI components and API integrations",
      "Supported debugging, optimization, and module enhancements",
    ],
  },
]

const education = [
  {
    degree: "B.Sc. in Computer and Information Science",
    institution: "Menofia University",
    location: "Shabin Al-Kom, Menofia",
    period: "2020 – 2024",
  },
]

const courses = [
  "The Complete 2022 Flutter & Dart Development Course [Arabic], Udemy",
  "Sprints x Microsoft Summer Camp - Mobile Development",
  "Mobile App Development at STEM Entrepreneurship Center",
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-16">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <Card
                  key={exp.title}
                  className="animate-in fade-in slide-in-from-left-4 duration-700"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <CardContent className="p-6 space-y-3">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-primary">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                    </div>
                    <ul className="space-y-2 pl-5">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground list-disc">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <Card
                  key={edu.degree}
                  className="animate-in fade-in slide-in-from-left-4 duration-700"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <p className="text-primary">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.location}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{edu.period}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Certificates & Courses</h3>
            <div className="space-y-3">
              {courses.map((course) => (
                <Card key={course}>
                  <CardContent className="p-4">
                    <p className="text-muted-foreground">{course}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
