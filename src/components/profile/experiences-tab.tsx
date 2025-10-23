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
    title: "Senior Software Engineer",
    company: "Innovate Inc.",
    period: "2020 - Present",
    description: "Leading the development of a new cloud-native platform, focusing on microservices architecture and CI/CD pipelines. Mentoring junior developers and driving best practices in code quality and testing.",
    skills: ["React", "Next.js", "TypeScript", "GraphQL", "AWS", "Docker"],
  },
  {
    title: "Software Engineer",
    company: "Tech Solutions",
    period: "2017 - 2020",
    description: "Developed and maintained features for a large-scale e-commerce website. Improved application performance by 30% through code optimization and database query tuning.",
    skills: ["JavaScript", "React", "Redux", "Node.js", "PostgreSQL"],
  },
  {
    title: "Junior Developer",
    company: "Code Crafters",
    period: "2015 - 2017",
    description: "Assisted in building responsive user interfaces and RESTful APIs for various client projects. Gained foundational experience in web development and version control with Git.",
    skills: ["HTML", "CSS", "jQuery", "PHP", "MySQL", "Git"],
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
