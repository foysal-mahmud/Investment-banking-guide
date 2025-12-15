import Link from "next/link";
import { getAllPhases, getTopicsByPhase } from "@/lib/markdown";
import { BookOpen, Target, TrendingUp, BarChart3, Wallet, LineChart, PieChart, Shield, Scale, Briefcase, Search, ScrollText } from "lucide-react";

const phaseIcons: Record<number, React.ReactNode> = {
  0: <BookOpen className="h-6 w-6" />,
  1: <BarChart3 className="h-6 w-6" />,
  2: <TrendingUp className="h-6 w-6" />,
  3: <Wallet className="h-6 w-6" />,
  4: <LineChart className="h-6 w-6" />,
  5: <PieChart className="h-6 w-6" />,
  6: <Shield className="h-6 w-6" />,
  7: <Scale className="h-6 w-6" />,
};

const cardGradients: Record<string, string> = {
  emerald: "bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800",
  blue: "bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800",
  violet: "bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20 border-2 border-violet-200 dark:border-violet-800",
  orange: "bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-900/20 dark:via-amber-900/20 dark:to-yellow-900/20 border-2 border-orange-200 dark:border-orange-800",
  pink: "bg-gradient-to-r from-pink-50 via-rose-50 to-red-50 dark:from-pink-900/20 dark:via-rose-900/20 dark:to-red-900/20 border-2 border-pink-200 dark:border-pink-800",
  cyan: "bg-gradient-to-r from-cyan-50 via-sky-50 to-blue-50 dark:from-cyan-900/20 dark:via-sky-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-800",
  amber: "bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/20 dark:via-yellow-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800",
  red: "bg-gradient-to-r from-red-50 via-rose-50 to-pink-50 dark:from-red-900/20 dark:via-rose-900/20 dark:to-pink-900/20 border-2 border-red-200 dark:border-red-800",
};

const iconGradients: Record<string, string> = {
  emerald: "bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600",
  blue: "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600",
  violet: "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600",
  orange: "bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600",
  pink: "bg-gradient-to-r from-pink-600 via-rose-600 to-red-600",
  cyan: "bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600",
  amber: "bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600",
  red: "bg-gradient-to-r from-red-600 via-rose-600 to-pink-600",
};

const titleColors: Record<string, string> = {
  emerald: "text-emerald-700 dark:text-emerald-400",
  blue: "text-blue-700 dark:text-blue-400",
  violet: "text-violet-700 dark:text-violet-400",
  orange: "text-orange-700 dark:text-orange-400",
  pink: "text-pink-700 dark:text-pink-400",
  cyan: "text-cyan-700 dark:text-cyan-400",
  amber: "text-amber-700 dark:text-amber-400",
  red: "text-red-700 dark:text-red-400",
};

export default async function Home() {
  const phases = await getAllPhases();

  // Get topic counts for each phase
  const phasesWithTopicCounts = await Promise.all(
    phases.map(async (phase) => {
      const topics = await getTopicsByPhase(phase.phaseNumber);
      return { ...phase, topicCount: topics.length };
    })
  );

  const totalTopics = phasesWithTopicCounts.reduce((acc, phase) => acc + phase.topicCount, 0);

  return (
    <main className="relative z-10 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white mx-auto">
            <Briefcase className="h-8 w-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Investment Banking Guide
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive, self-paced curriculum for software engineers working with investment
            banking software in Germany. Learn about structured products, derivatives, and leverage
            products.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
              <BookOpen className="h-4 w-4" />
              {phases.length} phases
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium">
              <Target className="h-4 w-4" />
              {totalTopics} topics
            </span>
          </div>
        </div>

        {/* History / Lifecycle Overview Card */}
        <Link href="/history" className="block group">
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 rounded-xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all hover:scale-[1.01]">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <ScrollText className="h-8 w-8" />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  🏦 Story of Investment Banking & Product Lifecycle
                </h2>
                <p className="text-white/90 text-sm sm:text-base">
                  Learn how universal banks, wealth managers, and exchanges fit together – and what actually happens
                  inside a bank when a new structured product is designed, approved, documented, listed, and traded.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white font-medium group-hover:bg-white/30 transition-colors">
                  Read the overview
                  <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Phases Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {phasesWithTopicCounts.map((phase) => {
            const cardGradient = cardGradients[phase.color] || cardGradients.blue;
            const iconGradient = iconGradients[phase.color] || iconGradients.blue;
            const titleColor = titleColors[phase.color] || titleColors.blue;
            const icon = phaseIcons[phase.phaseNumber] || <BookOpen className="h-6 w-6" />;

            return (
              <Link key={phase.phaseNumber} href={`/phase/${phase.phaseNumber}`} className="block group h-full">
                <div className={`flex items-start p-4 sm:p-6 rounded-xl shadow-lg ${cardGradient} hover:shadow-2xl transition-all hover:scale-[1.02] h-full`}>
                  <div className="flex-shrink-0 mr-4 sm:mr-6">
                    <div className={`inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full ${iconGradient} text-white`}>
                      {icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Phase {phase.phaseNumber}</span>
                      {phase.topicCount > 0 && (
                        <span className="text-xs text-gray-400 dark:text-gray-500">• {phase.topicCount} topics</span>
                      )}
                    </div>
                    <h2 className={`text-lg sm:text-xl font-bold mb-1 ${titleColor} group-hover:underline transition-all`}>
                      {phase.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-2">
                      {phase.subtitle}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Target className="h-3 w-3" />
                        {phase.goal?.slice(0, 50)}...
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Dictionary Feature Card - at bottom after phases */}
        <Link href="/dictionary" className="block group">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all hover:scale-[1.01]">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <Search className="h-8 w-8" />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  📖 Investment Banking Dictionary
                </h2>
                <p className="text-white/90 text-sm sm:text-base">
                  Search and browse 100+ terms, abbreviations, and definitions used in structured products,
                  leverage products, and investment banking systems.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white font-medium group-hover:bg-white/30 transition-colors">
                  Browse Dictionary
                  <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Info Section */}
        <div className="bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50 dark:from-gray-800/50 dark:via-slate-800/50 dark:to-gray-800/50 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            How to Use This Guide
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  📚
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Sequential Learning</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Follow phases in order. Each phase builds on previous knowledge.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                  💼
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Real-World Examples</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Every topic includes real product examples from German markets.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">
                  👨‍💻
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Software Engineer Focus</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Concepts explained with focus on banking software and system architecture.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                  ⏱️
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Self-Paced Learning</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Go at your own pace - understanding is more important than speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
