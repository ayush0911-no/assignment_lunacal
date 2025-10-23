
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
        <TabsList className="grid w-full grid-cols-3 bg-neutral-900 p-1 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.5),_inset_0_2px_4px_rgba(255,255,255,0.05)]">
          <TabsTrigger value="about" className="rounded-full text-gray-400 data-[state=active]:bg-neutral-800 data-[state=active]:text-white data-[state=active]:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),_0_1px_1px_rgba(255,255,255,0.05)]">
            <User className="mr-2 h-4 w-4" /> About Me
          </TabsTrigger>
          <TabsTrigger value="experiences" className="rounded-full text-gray-400 data-[state=active]:bg-neutral-800 data-[state=active]:text-white data-[state=active]:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),_0_1px_1px_rgba(255,255,255,0.05)]">
            <Briefcase className="mr-2 h-4 w-4" /> Experiences
          </TabsTrigger>
          <TabsTrigger value="recommended" className="rounded-full text-gray-400 data-[state=active]:bg-neutral-800 data-[state=active]:text-white data-[state=active]:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),_0_1px_1px_rgba(255,255,255,0.05)]">
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
