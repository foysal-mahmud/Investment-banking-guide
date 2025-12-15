'use client';

import Link from "next/link";
import { BookOpen, Home, ArrowLeft } from "lucide-react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showHomeLink?: boolean;
  backLink?: {
    href: string;
    text: string;
  };
}

export default function Header({ 
  title = "Investment Banking Guide", 
  subtitle = "German Banks & Structured Products",
  showHomeLink = true,
  backLink
}: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/20 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            {/* Back Button - Styled like JLPT-N5 */}
            {backLink && (
              <Link
                href={backLink.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700/50 backdrop-blur-md border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium transition-all duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600/50 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="hidden sm:inline">{backLink.text}</span>
                <span className="sm:hidden">Back</span>
              </Link>
            )}
            
            {/* Title Section */}
            <div className="flex items-center">
              <BookOpen className="h-7 w-7 text-emerald-600 dark:text-emerald-400 mr-3" />
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {showHomeLink && (
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:scale-105"
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            )}
            <div className="hidden md:block text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
              Investment Banking Guide
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

