"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Developer",
    company: "Future Forward",
    period: "2021 - Present",
    description:
      "Led the development of a cutting-edge platform, focusing on scalable architecture and continuous integration. Provided mentorship to team members and promoted best practices in software development.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Cloud Services",
      "DevOps",
    ],
  },
  
];

export function ExperiencesTab() {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4 items-center">
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Briefcase className="h-5 w-5" />
        </Button>
      </div>

      <ScrollArea className="h-48 pr-4">
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                <div>
                  <p className="font-semibold text-card-foreground">
                    {exp.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {exp.company}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap pt-1">
                  {exp.period}
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
