"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function AboutTab() {
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
      </div>

      
        <div className="space-y-4 text-muted-foreground">
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now. 
          </p>
          <p>
            I was born and raised in Albany, NY & have been living in Santa
            Carla for the past 10 years with my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella.
          </p>
        </div>
      
    </div>
  );
}
