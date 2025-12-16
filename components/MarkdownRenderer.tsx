'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { processNodeWithTerms } from '@/lib/term-processor'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
        // Custom components for better styling - smaller fonts
        h1: ({ children }) => (
          <h1 className="text-xl font-bold text-finance-blue dark:text-blue-400 mb-4 border-b border-finance-blue dark:border-blue-400 pb-2 transition-colors duration-300">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-lg font-semibold text-finance-teal dark:text-teal-400 mb-3 mt-6 transition-colors duration-300">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-base font-medium text-finance-green dark:text-green-400 mb-2 mt-4 transition-colors duration-300">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <div className="mb-3 leading-relaxed text-sm text-gray-800 dark:text-gray-200 transition-colors duration-300">
            {processNodeWithTerms(children)}
          </div>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside mb-3 space-y-1 text-sm">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside mb-3 space-y-1 text-sm">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="mb-1 text-sm text-gray-800 dark:text-gray-200 transition-colors duration-300">
            {processNodeWithTerms(children)}
          </li>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-finance-gold dark:border-yellow-500 pl-4 italic bg-amber-50 dark:bg-gray-800 p-4 rounded my-4 transition-colors duration-300">
            {children}
          </blockquote>
        ),
        code: ({ children, className }) => {
          const isInline = !className
          return isInline ? (
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono text-finance-blue dark:text-blue-400 transition-colors duration-300">
              {children}
            </code>
          ) : (
            <code className={className}>
              {children}
            </code>
          )
        },
        pre: ({ children }) => (
          <pre className="bg-gray-900 dark:bg-gray-950 text-white p-4 rounded-lg overflow-x-auto my-4 transition-colors duration-300">
            {children}
          </pre>
        ),
        // Table styling
        table: ({ children }) => (
          <div className="overflow-x-auto my-4">
            <table className="min-w-full border border-gray-300 dark:border-gray-600 rounded-lg transition-colors duration-300">
              {children}
            </table>
          </div>
        ),
        th: ({ children }) => (
          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 bg-gray-100 dark:bg-gray-700 font-semibold text-left text-gray-900 dark:text-white transition-colors duration-300">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            {processNodeWithTerms(children)}
          </td>
        ),
        // Link styling
        a: ({ href, children }) => (
          <a 
            href={href} 
            className="text-finance-blue dark:text-blue-400 hover:text-finance-teal dark:hover:text-teal-400 underline transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
        // Image styling
        img: ({ src, alt }) => (
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full h-auto rounded-lg shadow-md dark:shadow-gray-900/20 my-4 transition-all duration-300"
          />
        ),
        // Strong text for examples and notes
        strong: ({ children }) => {
          const text = children?.toString() || ''
          
          // Example callout
          if (text.includes('📘 Example:')) {
            return <strong className="text-blue-600 dark:text-blue-400">{children}</strong>
          }
          // Note callout
          if (text.includes('💡 Note:') || text.includes('💡 Key Insight:')) {
            return <strong className="text-amber-600 dark:text-amber-400">{children}</strong>
          }
          // Warning/Misconception callout
          if (text.includes('⚠️')) {
            return <strong className="text-red-600 dark:text-red-400">{children}</strong>
          }
          
          return <strong className="font-semibold">{children}</strong>
        },
      }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

