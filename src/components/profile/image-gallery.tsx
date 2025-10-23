"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImagePlus, Trash2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

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
    const imageToRemove = images.find(image => image.id === id);
    if(imageToRemove && imageToRemove.id.startsWith('local-')) {
      URL.revokeObjectURL(imageToRemove.imageUrl);
    }
    setImages(images.filter(image => image.id !== id));
  };

  return (
    <div className="space-y-4 rounded-lg border bg-card/50 p-4">
      <h2 className="text-2xl font-semibold font-headline px-2">Gallery</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-full">
              <div className="p-1">
                <Card className="overflow-hidden group">
                  <CardContent className="relative flex aspect-video items-center justify-center p-0">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                     <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Button 
                      variant="destructive" 
                      size="icon" 
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
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
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        className="hidden"
        accept="image/*"
      />
      <Button onClick={triggerFileSelect} className="w-full" variant="secondary">
        <ImagePlus className="mr-2 h-4 w-4" />
        Add Image
      </Button>
    </div>
  );
}
