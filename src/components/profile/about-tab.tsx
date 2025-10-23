import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutTab() {
  return (
    <Card className="bg-card/50">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-muted-foreground">
        <p>
          Hello! I'm a passionate professional with extensive experience in creating
          dynamic and user-friendly web applications. My journey in technology
          is driven by a desire to build elegant and efficient solutions to
          complex problems.
        </p>
        <p>
          I excel in collaborative settings, applying agile practices to ensure
          the delivery of top-tier products. My background covers full-stack
          development, with a strong proficiency in modern web technologies.
        </p>
        <p>
          Outside of work, I enjoy exploring new hobbies, staying active, and
          delving into interesting books and articles.
        </p>
      </CardContent>
    </Card>
  );
}
