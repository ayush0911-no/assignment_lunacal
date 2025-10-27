
"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HelpCircle } from "lucide-react";
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
    <div className="flex gap-4">
      <div className="flex flex-col gap-4 items-center">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground"
        >
          <HelpCircle className="h-5 w-5" />
        </Button>
      </div>
      <ScrollArea className="h-48 pr-4">
        <div className="space-y-6 text-muted-foreground">
          {recommendations.map((rec, index) => (
            <div key={index}>
              <p className="font-semibold text-card-foreground">
                {rec.title} - <span className="font-normal text-muted-foreground">{rec.author}</span>
              </p>
              <p className="text-sm mt-1">{rec.description}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
