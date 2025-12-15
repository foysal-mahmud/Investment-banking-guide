'use client'

import { useState } from 'react'
import { Search, BookOpen } from 'lucide-react'

export interface GlossaryTerm {
  key: string
  term: string
  definition: string
}

interface GlossaryProps {
  terms: GlossaryTerm[]
}

export default function Glossary({ terms }: GlossaryProps) {
  const [search, setSearch] = useState('')

  const filteredTerms = terms.filter(
    (term) =>
      term.key.toLowerCase().includes(search.toLowerCase()) ||
      term.term.toLowerCase().includes(search.toLowerCase()) ||
      term.definition.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-800 overflow-hidden">
      <div className="bg-blue-100/50 dark:bg-blue-900/30 border-b border-blue-200 dark:border-blue-700 px-4 py-3 flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300">Key Terms & Abbreviations</h3>
      </div>
      
      {/* Search */}
      <div className="p-3 border-b border-blue-200 dark:border-blue-700">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search terms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Terms */}
      <div className="p-3 max-h-64 overflow-y-auto">
        {filteredTerms.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">No terms found</p>
        ) : (
          <div className="space-y-2">
            {filteredTerms.map((term, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
                <div className="flex items-start gap-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold">
                    {term.key}
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {term.term}
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {term.definition}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

