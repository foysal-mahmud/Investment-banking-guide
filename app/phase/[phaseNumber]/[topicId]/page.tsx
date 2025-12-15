import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopic, getTopicsByPhase, getPhaseByNumber, getAllPhases } from "@/lib/markdown";
import { ArrowLeft, ChevronRight, ChevronDown } from "lucide-react";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Glossary from "@/components/Glossary";
import { getGlossaryTermsForTopic } from "@/lib/glossary";
import Header from "@/components/Header";

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  Intermediate: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
  Advanced: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
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

export async function generateStaticParams() {
  const phases = await getAllPhases();
  const params: { phaseNumber: string; topicId: string }[] = [];

  for (const phase of phases) {
    const topics = await getTopicsByPhase(phase.phaseNumber);
    for (const topic of topics) {
      params.push({
        phaseNumber: phase.phaseNumber.toString(),
        topicId: topic.id,
      });
    }
  }

  return params;
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ phaseNumber: string; topicId: string }>;
}) {
  const { phaseNumber, topicId } = await params;
  const phaseNum = parseInt(phaseNumber);

  const topic = await getTopic(phaseNum, topicId);
  const phase = await getPhaseByNumber(phaseNum);
  const allTopics = await getTopicsByPhase(phaseNum);

  if (!topic || !phase) {
    notFound();
  }

  // Find current topic index for navigation
  const currentIndex = allTopics.findIndex((t) => t.id === topicId);
  const previousTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  const titleColor = titleColors[phase.metadata.color] || titleColors.blue;

  // Get topic-specific glossary terms
  const glossaryTerms = getGlossaryTermsForTopic(topicId);

  return (
    <>
      <Header
        title={topic.metadata.title}
        subtitle={`Phase ${phaseNum}: ${phase.metadata.title}`}
        backLink={{
          href: `/phase/${phaseNum}`,
          text: `Back to Phase ${phaseNum}`
        }}
        showHomeLink={true}
      />

      <main className="relative z-10 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          {/* Topic Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium">
              Phase {phaseNum} · Topic {currentIndex + 1}
            </span>
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[topic.metadata.difficulty] || ""}`}>
              {topic.metadata.difficulty}
            </span>
          </div>

          <h1 className={`text-2xl sm:text-3xl font-bold ${titleColor}`}>
            {topic.metadata.title}
          </h1>

          <p className="text-sm text-gray-600 dark:text-gray-300">
            Part of: {phase.metadata.title}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
          <MarkdownRenderer content={topic.content} />
        </div>

        {/* Quick Reference Section with proper accordion styling */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-gray-50 dark:bg-gray-800/80 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Quick Reference</h2>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Software Engineering Relevance</span>
                <ChevronDown className="h-4 w-4 text-gray-500 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Look for sections marked &quot;Why Software Engineers Should Understand This&quot;
                  in the content above to see how this applies to building banking systems.
                </p>
              </div>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Common Misconceptions</span>
                <ChevronDown className="h-4 w-4 text-gray-500 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Review the &quot;Common Misconceptions&quot; section in the article to avoid
                  typical misunderstandings about this topic.
                </p>
              </div>
            </details>
          </div>
        </div>

        {/* Glossary Section - At the bottom */}
        <Glossary terms={glossaryTerms} />

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
          {previousTopic ? (
            <Link href={`/phase/${phaseNum}/${previousTopic.id}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{previousTopic.title}</span>
              <span className="sm:hidden">Previous</span>
            </Link>
          ) : (
            <div></div>
          )}

          {nextTopic ? (
            <Link href={`/phase/${phaseNum}/${nextTopic.id}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm">
              <span className="hidden sm:inline">{nextTopic.title}</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : phaseNum < 7 ? (
            <Link href={`/phase/${phaseNum + 1}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm">
              Next Phase
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </div>
    </main>
    </>
  );
}
