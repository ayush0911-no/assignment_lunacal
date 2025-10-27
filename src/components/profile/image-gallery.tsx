"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ImagePlus, Trash2, HelpCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const initialImages = PlaceHolderImages.filter((img) =>
  img.id.startsWith("gallery")
);

export function ImageGallery() {
  const [images, setImages] = useState<ImagePlaceholder[]>(initialImages);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newImage: ImagePlaceholder = {
        id: `local-${Date.now()}`,
        description: file.name,
        imageUrl: URL.createObjectURL(file),
        imageHint: "uploaded image",
      };
      setImages((prevImages) => [...prevImages, newImage]);
    }
  };

  const triggerFileSelect = () => fileInputRef.current?.click();

  const removeImage = (id: string) => {
    const imageToRemove = images.find((image) => image.id === id);
    if (imageToRemove && imageToRemove.id.startsWith("local-")) {
      URL.revokeObjectURL(imageToRemove.imageUrl);
    }
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div className="space-y-4 rounded-xl bg-card/50 p-4 border">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        className="hidden"
        accept="image/*"
      />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground"
            >
              <HelpCircle className="h-5 w-5" />
            </Button>
            <div className="bg-black text-white font-semibold px-6 py-2 rounded-xl text-sm">
              Gallery
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={triggerFileSelect}
              variant="default"
              className="rounded-full shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.05),0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_2px_6px_0_rgba(0,0,0,0.06),0_6px_8px_rgba(0,0,0,0.15)] bg-card text-card-foreground hover:bg-card/80"
            >
              <ImagePlus className="mr-2 h-4 w-4" />
              Add Image
            </Button>
            <CarouselPrevious className="relative top-auto left-auto right-auto bottom-auto -translate-y-0 h-9 w-9 rounded-full bg-card/80 border-none text-muted-foreground hover:bg-card hover:text-foreground shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]" />
            <CarouselNext className="relative top-auto left-auto right-auto bottom-auto -translate-y-0 h-9 w-9 rounded-full bg-card/80 border-none text-muted-foreground hover:bg-card hover:text-foreground shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]" />
          </div>
        </div>

        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id} className="basis-1/2 md:basis-1/3">
              <div className="relative group">
                <Card className="overflow-hidden rounded-xl transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="relative flex aspect-[4/3] items-center justify-center p-0">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 rounded-full h-8 w-8"
                      onClick={() => removeImage(image.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove Image</span>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {images.length === 0 && (
        <div className="col-span-full flex items-center justify-center text-muted-foreground h-48">
          <p>No images in the gallery. Add some!</p>
        </div>
      )}
    </div>
  );
}


