"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ImagePlus, Trash2, HelpCircle, ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

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
    <div className="space-y-4 rounded-xl bg-card/50 p-4 border">
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
                 <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <HelpCircle className="h-5 w-5" />
                 </Button>
                 <div className="bg-primary text-primary-foreground font-semibold px-6 py-2 rounded-full text-sm">
                    Gallery
                 </div>
            </div>
            <div className="flex items-center gap-2">
                <Button onClick={triggerFileSelect} variant="secondary" className="rounded-full">
                    <ImagePlus className="mr-2 h-4 w-4" />
                    Add Image
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                    <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
      
        <div className="flex gap-4">
            <div className="flex flex-col gap-2 items-center">
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <LayoutGrid className="h-5 w-5" />
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {images.map((image) => (
                    <div key={image.id} className="p-1">
                    <Card className="overflow-hidden group rounded-xl">
                      <CardContent className="relative flex aspect-[4/3] items-center justify-center p-0">
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
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 rounded-full h-8 w-8"
                          onClick={() => removeImage(image.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove Image</span>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
            </div>
        </div>
    </div>
  );
}
