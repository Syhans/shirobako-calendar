import { NextImageWrapper as Image } from "@/components/image";
import { ImageCarousel } from "@/components/image-carousel";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Beer,
  Calendar,
  CircleAlert,
  CircleHelp,
  Lightbulb,
} from "lucide-react";
import React from "react";

import { cn } from "./lib/utils";

export const components = {
  Alert,
  AlertTitle,
  AlertDescription: ({
    className,
    ...props
  }: React.ComponentProps<typeof AlertDescription>) => (
    <AlertDescription {...props} className={cn(className, "pt-1")} />
  ),
  Beer: () => <Beer className="h-5 w-5" />,
  Calendar: () => <Calendar className="h-5 w-5" />,
  CircleAlert: () => <CircleAlert className="h-5 w-5" />,
  CircleHelp: () => <CircleHelp className="h-5 w-5" />,
  Image,
  ImageCarousel,
  Lightbulb: () => <Lightbulb className="h-5 w-5" />,
};
