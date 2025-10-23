"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Briefcase, ThumbsUp } from "lucide-react";
import { AboutTab } from "@/components/profile/about-tab";
import { ExperiencesTab } from "@/components/profile/experiences-tab";
import { RecommendedTab } from "@/components/profile/recommended-tab";

export function ProfileTabs() {
  return (
    <div className="p-4">
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-black/90 p-1 rounded-full">
          <TabsTrigger value="about" className="rounded-full">
            <User className="mr-2 h-4 w-4" /> About Me
          </TabsTrigger>
          <TabsTrigger value="experiences" className="rounded-full">
            <Briefcase className="mr-2 h-4 w-4" /> Experiences
          </TabsTrigger>
          <TabsTrigger value="recommended" className="rounded-full">
            <ThumbsUp className="mr-2 h-4 w-4" /> Recommended
          </TabsTrigger>
        </TabsList>
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
