import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from "../components/ThemeProvider";
import ThemeToggle from "../components/ThemeToggle";

export const metadata: Metadata = {
  title: 'Investment Banking Guide',
  description: 'Comprehensive guide to investment banking, structured products, and leverage products in Germany',
  keywords: 'investment banking, structured products, leverage products, derivatives, Germany',
  authors: [{ name: 'Investment Banking Guide' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900" suppressHydrationWarning>
        {/* Animated Finance Characters Background */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-visible" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
          {/* Left Side Characters */}
          <div className="absolute left-[-2vw] top-[10vh] animate-float-slow opacity-10 select-none text-gray-400 dark:text-gray-600" style={{ fontSize: '10vw', fontFamily: 'system-ui' }}>€</div>
          <div className="absolute left-[-3vw] top-[50vh] animate-float-medium opacity-10 select-none text-gray-400 dark:text-gray-600" style={{ fontSize: '8vw', fontFamily: 'system-ui' }}>📈</div>
          <div className="absolute left-[-2vw] top-[80vh] animate-float-fast opacity-10 select-none text-gray-400 dark:text-gray-600" style={{ fontSize: '8vw', fontFamily: 'system-ui' }}>$</div>
          {/* Right Side Characters */}
          <div className="absolute right-[-2vw] top-[20vh] animate-float-medium opacity-10 select-none text-gray-400 dark:text-gray-600" style={{ fontSize: '10vw', fontFamily: 'system-ui' }}>%</div>
          <div className="absolute right-[-3vw] top-[60vh] animate-float-slow opacity-10 select-none text-gray-400 dark:text-gray-600" style={{ fontSize: '8vw', fontFamily: 'system-ui' }}>📊</div>
          <div className="absolute right-[-2vw] top-[85vh] animate-float-fast opacity-10 select-none text-gray-400 dark:text-gray-600" style={{ fontSize: '8vw', fontFamily: 'system-ui' }}>£</div>
        </div>

        <ThemeProvider>
          {children}
          {/* Floating Theme Toggle */}
          <div className="fixed bottom-6 right-6 z-50">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
