"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Square, HelpCircle } from "lucide-react";
import { useImageGallery } from "./image-gallery";
import { ScrollArea } from "@/components/ui/scroll-area";

export function AboutTab() {
  const { layout, toggleLayout } = useImageGallery();
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
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground"
          onClick={toggleLayout}
          title="Toggle layout"
        >
          {layout === "grid" ? (
            <Square className="h-5 w-5" />
          ) : (
            <LayoutGrid className="h-5 w-5" />
          )}
        </Button>
      </div>

      <ScrollArea className="h-48 pr-4">
        <div className="space-y-4 text-muted-foreground">
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now.
          </p>
          <p>
            I was born and raised in Albany, NY& have been living in Santa
            Carla for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school,
            so my calender is usually blocked between 9–10 AM. This is a...
          </p>
          <p>
            Outside of work, I enjoy exploring new hobbies, staying active, and
            delving into interesting books and articles.
          </p>
        </div>
      </ScrollArea>
    </div>
  );
}
