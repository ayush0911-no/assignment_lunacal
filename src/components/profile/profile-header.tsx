import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ProfileHeader() {
  const avatarImage = PlaceHolderImages.find((img) => img.id === "avatar");

  return (
    <div className="flex flex-col items-center gap-4 text-center p-6 rounded-lg border bg-card/50">
      <Avatar className="h-32 w-32 border-4 border-primary">
        <AvatarImage
          src={avatarImage?.imageUrl}
          alt="User Avatar"
          data-ai-hint={avatarImage?.imageHint}
        />
        <AvatarFallback>UR</AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-3xl font-bold font-headline">Your Name</h1>
        <p className="text-lg text-muted-foreground">
          Your Title or Tagline
        </p>
      </div>
    </div>
  );
}
