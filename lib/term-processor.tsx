import React from 'react';
import { TERMS_DEFINITIONS, getTermDefinition } from './terms-data';
import { HighlightedTerm } from '@/components/TermTooltip';

interface TextSegment {
  type: 'text' | 'term';
  content: string;
  definition?: ReturnType<typeof getTermDefinition>;
}

/**
 * Processes text and identifies terms that should be highlighted with tooltips
 * Returns an array of React elements that can be rendered
 */
export function processTextWithTerms(text: string): React.ReactNode[] {
  if (!text || typeof text !== 'string') {
    return [text];
  }

  // Sort terms by length (longest first) to match longer terms first
  const sortedTerms = [...TERMS_DEFINITIONS].sort(
    (a, b) => b.term.length - a.term.length
  );

  const segments: TextSegment[] = [];
  let remainingText = text;
  let lastIndex = 0;

  // Find all term matches (case-insensitive)
  const matches: Array<{
    index: number;
    term: string;
    definition: ReturnType<typeof getTermDefinition>;
  }> = [];

  sortedTerms.forEach((def) => {
    const regex = new RegExp(`\\b${escapeRegex(def.term)}\\b`, 'gi');
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push({
        index: match.index,
        term: match[0],
        definition: def,
      });
    }
  });

  // Sort matches by index
  matches.sort((a, b) => a.index - b.index);

  // Remove overlapping matches (keep the first one)
  const nonOverlappingMatches: typeof matches = [];
  let lastEnd = -1;

  for (const match of matches) {
    const matchEnd = match.index + match.term.length;
    if (match.index >= lastEnd) {
      nonOverlappingMatches.push(match);
      lastEnd = matchEnd;
    }
  }

  // Build segments
  let currentIndex = 0;

  for (const match of nonOverlappingMatches) {
    // Add text before the match
    if (match.index > currentIndex) {
      segments.push({
        type: 'text',
        content: text.substring(currentIndex, match.index),
      });
    }

    // Add the term
    segments.push({
      type: 'term',
      content: match.term,
      definition: match.definition,
    });

    currentIndex = match.index + match.term.length;
  }

  // Add remaining text
  if (currentIndex < text.length) {
    segments.push({
      type: 'text',
      content: text.substring(currentIndex),
    });
  }

  // If no matches found, return the original text
  if (segments.length === 0) {
    return [text];
  }

  // Convert segments to React elements
  return segments.map((segment, index) => {
    if (segment.type === 'term' && segment.definition) {
      return (
        <HighlightedTerm
          key={`term-${index}`}
          term={segment.content}
          definition={segment.definition}
        />
      );
    }
    return <React.Fragment key={`text-${index}`}>{segment.content}</React.Fragment>;
  });
}

/**
 * Escape special regex characters
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Process a React node (can be string or already a React element)
 */
export function processNodeWithTerms(node: React.ReactNode): React.ReactNode {
  if (typeof node === 'string') {
    const processed = processTextWithTerms(node);
    // If only one element and it's a fragment with the original text, return as is
    if (processed.length === 1 && React.isValidElement(processed[0])) {
      return processed[0];
    }
    return <>{processed}</>;
  }

  if (React.isValidElement(node)) {
    // If it's a React element, process its children recursively
    if (node.props.children) {
      const processedChildren = React.Children.map(node.props.children, (child) =>
        processNodeWithTerms(child)
      );
      return React.cloneElement(node, { ...node.props, children: processedChildren });
    }
  }

  return node;
}

/**
 * Component wrapper for processing text with terms
 * Usage: <ProcessedText>Your text here</ProcessedText>
 */
export function ProcessedText({ children }: { children: React.ReactNode }) {
  return <>{processNodeWithTerms(children)}</>;
}

