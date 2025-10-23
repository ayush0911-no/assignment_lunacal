import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const recommendations = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    description: "A comprehensive guide to the principles of data systems. A must-read for any backend or systems engineer.",
    image: PlaceHolderImages.find((img) => img.id === "rec1"),
  },
  {
    title: "Visual Studio Code",
    author: "Microsoft",
    description: "An incredibly powerful and extensible code editor. Its rich ecosystem of extensions makes it adaptable to any workflow.",
    image: PlaceHolderImages.find((img) => img.id === "rec2"),
  },
];

export function RecommendedTab() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {recommendations.map((rec, index) => (
        <Card key={index} className="flex flex-col bg-card/50 hover:bg-card/70 transition-colors">
          <CardHeader className="flex-row gap-4 items-center">
             {rec.image && (
                <div className="relative w-[60px] h-[90px] flex-shrink-0">
                  <Image
                    src={rec.image.imageUrl}
                    alt={rec.title}
                    fill
                    className="rounded-md object-cover"
                    data-ai-hint={rec.image.imageHint}
                  />
                </div>
              )}
            <div>
              <CardTitle>{rec.title}</CardTitle>
              <CardDescription>{rec.author}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">{rec.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
