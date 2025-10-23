import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutTab() {
  return (
    <Card className="bg-card/50">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-muted-foreground">
        <p>
          Hello! I'm John Doe, a passionate Senior Software Engineer with over a
          decade of experience in building scalable and user-friendly web
          applications. My journey in tech started with a fascination for how
          things work, which evolved into a career dedicated to crafting elegant
          code and robust systems.
        </p>
        <p>
          I thrive in collaborative environments, leveraging agile methodologies
          to deliver high-quality products. My expertise lies in full-stack
          development, with a strong focus on modern JavaScript frameworks like
          React and Next.js, and backend technologies including Node.js and
          GraphQL.
        </p>
        <p>
          When I'm not coding, you can find me exploring mountain trails,
          experimenting with new recipes in the kitchen, or diving into a good
          sci-fi novel.
        </p>
      </CardContent>
    </Card>
  );
}
