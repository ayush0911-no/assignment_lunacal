"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Briefcase, ThumbsUp, LayoutGrid, Square } from "lucide-react";
import { AboutTab } from "@/components/profile/about-tab";
import { ExperiencesTab } from "@/components/profile/experiences-tab";
import { RecommendedTab } from "@/components/profile/recommended-tab";
import { useImageGallery } from "./image-gallery";
import { Button } from "../ui/button";

export function ProfileTabs() {
  const { layout, toggleLayout } = useImageGallery();

  return (
    <div className="p-4">
      <Tabs defaultValue="about" className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList className="grid w-full grid-cols-3 bg-card-foreground/10 p-1">
            <TabsTrigger value="about">
              <User className="mr-2 h-4 w-4" /> About Me
            </TabsTrigger>
            <TabsTrigger value="experiences">
              <Briefcase className="mr-2 h-4 w-4" /> Experiences
            </TabsTrigger>
            <TabsTrigger value="recommended">
              <ThumbsUp className="mr-2 h-4 w-4" /> Recommended
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-4 items-center pl-4">
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
        </div>
        <TabsContent value="about" className="mt-4">
          <AboutTab />
        </TabsContent>
        <TabsContent value="experiences" className="mt-4">
          <ExperiencesTab />
        </TabsContent>
        <TabsContent value="recommended" className="mt-4">
          <RecommendedTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
