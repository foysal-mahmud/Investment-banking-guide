'use client';

import React, { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { TermDefinition } from '@/lib/terms-data';

interface TermTooltipProps {
  term: string;
  definition: TermDefinition;
  children?: React.ReactNode;
}

export function TermTooltip({ term, definition, children }: TermTooltipProps) {
  const [open, setOpen] = useState(false);

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <span 
            className="inline-block cursor-help touch-manipulation"
            onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
              // Toggle tooltip on click/tap (works on both mobile and desktop)
              // This allows mobile users to tap to see tooltips
              e.preventDefault();
              e.stopPropagation();
              setOpen(!open);
            }}
          >
            {children || term}
          </span>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          sideOffset={8}
          className="max-w-sm p-4 text-sm leading-relaxed z-50 border-0 shadow-xl backdrop-blur-xl bg-white/85 dark:bg-gray-800/85 border-white/30 dark:border-gray-700/30"
          onPointerDownOutside={() => setOpen(false)}
          onEscapeKeyDown={() => setOpen(false)}
        >
          <div className="space-y-2">
            <div className="font-semibold text-gray-900 dark:text-gray-100">
              {definition.term}
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              {definition.explanation}
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

// Styled term component with gradient, bold, and underline
interface HighlightedTermProps {
  term: string;
  definition: TermDefinition;
}

export function HighlightedTerm({ term, definition }: HighlightedTermProps) {
  return (
    <TermTooltip term={term} definition={definition}>
      <span
        className="font-bold underline decoration-2 underline-offset-2 cursor-help transition-all duration-200 hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {term}
      </span>
    </TermTooltip>
  );
}

