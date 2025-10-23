import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Briefcase, ThumbsUp } from "lucide-react";

import { ImageGallery } from "@/components/profile/image-gallery";
import { AboutTab } from "@/components/profile/about-tab";
import { ExperiencesTab } from "@/components/profile/experiences-tab";
import { RecommendedTab } from "@/components/profile/recommended-tab";

export default function Home() {
  return (
    <main className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
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
            <TabsContent value="about" className="mt-6">
              <AboutTab />
            </TabsContent>
            <TabsContent value="experiences" className="mt-6">
              <ExperiencesTab />
            </TabsContent>
            <TabsContent value="recommended" className="mt-6">
              <RecommendedTab />
            </TabsContent>
          </Tabs>
        </div>
        <div className="lg:col-span-1 space-y-8">
          <ImageGallery />
        </div>
      </div>
    </main>
  );
}
