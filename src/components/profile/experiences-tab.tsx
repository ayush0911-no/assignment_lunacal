import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Senior Developer",
    company: "Future Forward",
    period: "2021 - Present",
    description: "Led the development of a cutting-edge platform, focusing on scalable architecture and continuous integration. Provided mentorship to team members and promoted best practices in software development.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Cloud Services", "DevOps"],
  },
  {
    title: "Software Developer",
    company: "Digital Dynamics",
    period: "2018 - 2021",
    description: "Contributed to the development and enhancement of a major e-commerce platform. Achieved significant performance improvements through code optimization and database enhancements.",
    skills: ["JavaScript", "React", "State Management", "REST APIs", "SQL"],
  },
  {
    title: "Junior Engineer",
    company: "Innovate Start",
    period: "2016 - 2018",
    description: "Gained hands-on experience in building responsive user interfaces and backend services for various projects. Developed a strong foundation in web technologies and version control systems.",
    skills: ["HTML", "CSS", "JavaScript", "Backend Basics", "Git"],
  },
];

export function ExperiencesTab() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="bg-card/50">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
              <div>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>
                  {exp.company}
                </CardDescription>
              </div>
              <p className="text-sm text-muted-foreground whitespace-nowrap pt-1">{exp.period}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
