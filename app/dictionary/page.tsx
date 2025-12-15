'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, BookOpen, ArrowLeft, Home, ChevronDown, ChevronRight, Info } from 'lucide-react';
import { dictionaryData, searchTerms, DictionaryTerm } from '@/lib/dictionary-data';

export default function DictionaryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(dictionaryData.map(c => c.id)) // All expanded by default
  );

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    return searchTerms(searchQuery);
  }, [searchQuery]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    setExpandedCategories(new Set(dictionaryData.map(c => c.id)));
  };

  const collapseAll = () => {
    setExpandedCategories(new Set());
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/20 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700/50 backdrop-blur-md border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium transition-all duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600/50 hover:scale-105"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back to Roadmap</span>
                <span className="sm:hidden">Back</span>
              </Link>
              
              <div className="flex items-center">
                <BookOpen className="h-7 w-7 text-blue-600 dark:text-blue-400 mr-3" />
                <div>
                  <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                    Investment Banking Dictionary
                  </h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Terms, Abbreviations & Definitions
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:scale-105"
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              📖 Investment Banking Glossary
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive reference for structured products, leverage products, and investment banking terminology — 
              optimized for software engineers working with banking systems in EU, Germany & Switzerland.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by term, abbreviation, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  ✕
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                Found {filteredResults?.length || 0} result{filteredResults?.length !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
              </p>
            )}
          </div>

          {/* Search Results */}
          {filteredResults && filteredResults.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Results
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredResults.map((term, index) => (
                    <TermRow key={`${term.shortForm}-${index}`} term={term} showCategory />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredResults && filteredResults.length === 0 && (
            <div className="text-center py-12 mb-8">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No results found</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try searching with different keywords or browse the categories below.
              </p>
            </div>
          )}

          {/* Categories - Show when not searching or no results */}
          {(!searchQuery || (filteredResults && filteredResults.length === 0)) && (
            <>
              {/* Expand/Collapse Controls */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Browse by Category
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={expandAll}
                    className="px-3 py-1.5 text-sm rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Expand All
                  </button>
                  <button
                    onClick={collapseAll}
                    className="px-3 py-1.5 text-sm rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Collapse All
                  </button>
                </div>
              </div>

              {/* Category Cards */}
              <div className="space-y-4">
                {dictionaryData.map((category) => {
                  const isExpanded = expandedCategories.has(category.id);
                  return (
                    <div
                      key={category.id}
                      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden transition-all"
                    >
                      {/* Category Header */}
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{category.icon}</span>
                          <div className="text-left">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {category.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {category.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium">
                            {category.terms.length} terms
                          </span>
                          {isExpanded ? (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </button>

                      {/* Category Terms */}
                      {isExpanded && (
                        <div className="border-t border-gray-200 dark:border-gray-700">
                          <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            {category.terms.map((term, index) => (
                              <TermRow key={`${term.shortForm}-${index}`} term={term} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* Stats Footer */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {dictionaryData.length}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Categories</div>
              </div>
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  {dictionaryData.reduce((acc, cat) => acc + cat.terms.length, 0)}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Total Terms</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// Term Row Component
function TermRow({ term, showCategory = false }: { term: DictionaryTerm & { category?: string }; showCategory?: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
      {/* Short Form Badge */}
      <div className="flex-shrink-0">
        <span className="inline-flex items-center justify-center min-w-[60px] px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-bold font-mono shadow-sm">
          {term.shortForm}
        </span>
      </div>
      
      {/* Term Details */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-gray-900 dark:text-white">
            {term.term}
          </span>
          {term.isOptional && (
            <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] uppercase tracking-wide">
              Optional
            </span>
          )}
          {showCategory && term.category && (
            <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs">
              {term.category}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {term.meaning}
        </p>
        {term.notes && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
            <Info className="h-3 w-3" />
            {term.notes}
          </p>
        )}
      </div>
    </div>
  );
}

