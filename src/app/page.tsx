import { ImageGallery, ImageGalleryProvider } from "@/components/profile/image-gallery";
import { ProfileTabs } from "@/components/profile/profile-tabs";

export default function Home() {
  return (
    <ImageGalleryProvider>
      <main className="min-h-screen bg-background font-sans text-foreground">
        <div className="grid min-h-screen md:grid-cols-2">
          <div className="flex items-center justify-center p-4 md:p-8">
            <div className="w-full max-w-2xl mx-auto space-y-8">
              <div className="bg-card/50 rounded-xl border">
                <ProfileTabs />
              </div>
              <ImageGallery />
            </div>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </main>
    </ImageGalleryProvider>
  );
}
