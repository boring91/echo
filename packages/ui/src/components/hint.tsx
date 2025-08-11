"use client";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "@workspace/ui/components/tooltip";

type HintPros = {
  children: React.ReactNode;
  text: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
};

export const Hint = ({
  children,
  text,
  side = "top",
  align = "center",
}: HintPros) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
