import Link from "next/link";
import { notFound } from "next/navigation";
import { getPhaseByNumber, getAllPhases } from "@/lib/markdown";
import { ArrowLeft, Target, BookOpen, ChevronRight, Lightbulb } from "lucide-react";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Header from "@/components/Header";

const cardGradients: Record<string, string> = {
  emerald: "bg-gray-800/80 border border-emerald-500/50 dark:bg-gray-800/80 dark:border-emerald-500/50",
  blue: "bg-gray-800/80 border border-blue-500/50 dark:bg-gray-800/80 dark:border-blue-500/50",
  violet: "bg-gray-800/80 border border-violet-500/50 dark:bg-gray-800/80 dark:border-violet-500/50",
  orange: "bg-gray-800/80 border border-orange-500/50 dark:bg-gray-800/80 dark:border-orange-500/50",
  pink: "bg-gray-800/80 border border-pink-500/50 dark:bg-gray-800/80 dark:border-pink-500/50",
  cyan: "bg-gray-800/80 border border-cyan-500/50 dark:bg-gray-800/80 dark:border-cyan-500/50",
  amber: "bg-gray-800/80 border border-amber-500/50 dark:bg-gray-800/80 dark:border-amber-500/50",
  red: "bg-gray-800/80 border border-red-500/50 dark:bg-gray-800/80 dark:border-red-500/50",
};

// Phase header title colors
const titleColors: Record<string, string> = {
  emerald: "text-emerald-600 dark:text-emerald-400",
  blue: "text-blue-600 dark:text-blue-400",
  violet: "text-violet-600 dark:text-violet-400",
  orange: "text-orange-600 dark:text-orange-400",
  pink: "text-pink-600 dark:text-pink-400",
  cyan: "text-cyan-600 dark:text-cyan-400",
  amber: "text-amber-600 dark:text-amber-400",
  red: "text-red-600 dark:text-red-400",
};

// Rotating accent colors for topic titles to add variety
const topicAccentColors = [
  "text-cyan-400",
  "text-blue-400",
  "text-violet-400",
  "text-pink-400",
  "text-amber-400",
  "text-emerald-400",
  "text-orange-400",
  "text-rose-400",
];

const badgeColors: Record<string, string> = {
  emerald: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  violet: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300",
  orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
  pink: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
  cyan: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300",
  amber: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
  red: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
};

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  Intermediate: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
  Advanced: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
};

// Phase-level real-world examples that tie topics together
type PhaseExampleStep = {
  heading: string;
  text: string;
  topics: string[]; // human-readable topic names
};

const phaseExamples: Record<
  number,
  {
    title: string;
    scenario: string;
    steps: PhaseExampleStep[];
  }
> = {
  0: {
    title: "From First Brokerage Account to Understanding the Market Map",
    scenario:
      "Lea opens her first brokerage account at a German direct bank. At the beginning she only sees a watchlist with DAX shares, ETFs and some products she doesn’t recognise yet. Phase 0 explains the mental map she slowly builds in the first weeks so that later, structured and leverage products make sense instead of looking like random tickers.",
    steps: [
      {
        heading: "Seeing that a \"market\" is more than just a price on a screen",
        text:
          "When Lea buys her first ETF on the DAX, she realises there is an organised place (Xetra, Börse Stuttgart, SIX) where orders from thousands of investors are matched. The price is not chosen by the bank or the app – it is discovered by supply and demand in the order book.",
        topics: ["What is a Financial Market", "Market Participants & Roles"],
      },
      {
        heading: "Realising that products are born once, then live a long life",
        text:
          "Later she reads that her ETF was created years ago in the primary market and has traded daily in the secondary market ever since. When she sees a brand‑new structured product with a fresh ISIN, she understands this is the primary issuance moment for that product.",
        topics: ["Primary vs Secondary Market"],
      },
      {
        heading: "Understanding who is actually on the other side of a trade",
        text:
          "News articles talk about issuers, investors, market makers and trading venues. Lea now recognises that her bank is just one player: issuers create products, market makers quote continuous prices, exchanges provide the platform and she is one of many investors providing capital.",
        topics: ["Market Participants & Roles"],
      },
      {
        heading: "Separating everyday banking from capital markets activity",
        text:
          "Her bank app shows both a current account and a trading account. Phase 0 helps her see the difference between the commercial‑bank part of the institution (payments, cards, deposits) and the investment‑bank part (capital raising, trading, derivatives) that sits behind the product shelf.",
        topics: ["Investment Banking vs Commercial Banking"],
      },

    ],
  },
  1: {
    title: "Designing the Underlyings for a Worst‑of Autocallable",
    scenario:
      "A structurer at a Frankfurt desk receives a request from a distributor: clients want a 3‑year worst‑of Autocallable on large European stocks with an attractive coupon. Before talking about barriers and coupons, they must choose and understand the underlyings correctly – this is exactly what Phase 1 is about.",
    steps: [
      {
        heading: "Choosing liquid blue‑chip stocks and indices",
        text:
          "The structurer starts with highly liquid equities such as DAX constituents and maybe adds an index like EURO STOXX 50 for diversification. They check that every name has deep trading volume so that hedges can be executed without too much market impact.",
        topics: ["Equities (Stocks & Indices)"],
      },
      {
        heading: "Adding yield and rate components via bonds and cash",
        text:
          "Part of the structure is funded by investing into high‑quality bonds. Understanding coupons, yield curves and credit quality is critical to know how much of the product budget is available for option features versus fixed‑income components.",
        topics: ["Fixed Income (Bonds)"],
      },
      {
        heading: "Thinking about currency risk for non‑EUR names",
        text:
          "If one of the underlyings is quoted in CHF or USD, the desk must decide whether the product will hedge FX risk. Here the concepts from the FX topic appear directly in product design: spot vs forward rates, and whether the client should see or be shielded from currency moves.",
        topics: ["Foreign Exchange (FX)"],
      },
      {
        heading: "Understanding how volatility and correlation shape the basket",
        text:
          "Because this is a worst‑of structure, correlation matters a lot. The structurer studies historical and implied volatility for each name and the correlation matrix of the basket. Low correlation can justify a higher coupon but also increases the chance that one name underperforms badly.",
        topics: ["Volatility & Correlation"],
      },
      {
        heading: "Writing all of this into the term sheet as precise underlyings",
        text:
          "Finally, every underlying is written into the term sheet with ISINs and clear asset‑class descriptions. Later, pricing and risk systems rely on this information to fetch correct market data and Greeks for each leg of the product.",
        topics: ["Equities (Stocks & Indices)", "Fixed Income (Bonds)", "Foreign Exchange (FX)", "Volatility & Correlation"],
      },
    ],
  },
  2: {
    title: "Decomposing a Capital‑Protected Note into Hedgeable Derivatives",
    scenario:
      "A bank is about to issue a 5‑year 100% capital‑protected note on the EURO STOXX 50. The sales slide looks simple, but the trading desk must translate this promise into a concrete hedge made from forwards, futures and options. Phase 2 gives the language and tools for that translation.",
    steps: [
      {
        heading: "Locking in the bond component with forwards / futures",
        text:
          "To guarantee capital protection, the desk effectively buys a 5‑year zero‑coupon bond. In practice this may be replicated or hedged using interest‑rate futures and forwards. Understanding forwards and futures allows you to see how the bank fixes the future value of today’s cash.",
        topics: ["Forwards & Futures"],
      },
      {
        heading: "Creating upside with a strip of call options",
        text:
          "The participation in index performance comes from long call options on EURO STOXX 50. The team sketches classic payoff diagrams to make sure the payoff at maturity matches the marketing material in all scenarios.",
        topics: ["Options: Call & Put", "Payoff Diagrams"],
      },
      {
        heading: "Checking moneyness and time value over the life of the product",
        text:
          "When the index rallies, options move in‑the‑money and time value shrinks. Risk reports explicitly track how intrinsic and time value evolve, because that is what drives the daily P&amp;L for the hedge, even while the client only sees a single structured product price.",
        topics: ["Moneyness & Time Value"],
      },
      {
        heading: "Seeing the structured product as \"bond + options\" instead of magic",
        text:
          "Once you can express the note as bond + forward/futures hedges + a portfolio of calls, the product stops being a black box. Every lifecycle event in later phases (coupon fixing, barrier monitoring, early redemption) can then be analysed via its impact on this underlying derivative portfolio.",
        topics: ["What is a Derivative", "Forwards & Futures", "Options: Call & Put", "Payoff Diagrams"],
      },
    ],
  },
  3: {
    title: "Day‑Trading the DAX with Knock‑Outs and Mini‑Futures",
    scenario:
      "A very active client trades DAX directionally several times per day but doesn’t want to trade futures on Eurex directly. Instead, they use knock‑out certificates and mini‑futures listed on Börse Stuttgart. Phase 3 explains what is really happening behind those convenient broker screens.",
    steps: [
      {
        heading: "Using knock‑out certificates to get large exposure with small capital",
        text:
          "The client buys a long knock‑out on DAX with a barrier 8–10% below the current level. The leverage section explains how a relatively small price move in DAX leads to a much larger percentage move in the product, and why gap risk near the barrier is dangerous.",
        topics: ["Knock-Out Certificates (Turbos)", "Leverage & Margin Mechanics"],
      },
      {
        heading: "Rolling mini‑futures overnight and understanding financing",
        text:
          "When the client holds mini‑futures overnight, the bank adjusts the financing level each day. The product documentation shows how interest rates and dividends flow into this financing and therefore into the client’s P&amp;L, even if the underlying price doesn’t move.",
        topics: ["Mini-Futures", "Leverage & Margin Mechanics"],
      },
      {
        heading: "Experiencing a barrier hit in a volatile market",
        text:
          "On a volatile day, DAX opens with a large gap down and touches the barrier. The knock‑out is terminated at a residual value close to zero. This single event ties together the concepts of barrier mechanics, path dependency and gap risk from the leverage topics.",
        topics: ["Knock-Out Certificates (Turbos)", "Leverage & Margin Mechanics"],
      },
      {
        heading: "Comparing this to trading the underlying future directly",
        text:
          "The trader compares margin requirements and risk between turbos / mini‑futures and a standard DAX future. They see that although the headline leverage looks similar, the embedded financing costs and knock‑out structure make the risk profile very different.",
        topics: ["Warrants", "Knock-Out Certificates (Turbos)", "Mini-Futures", "Leverage & Margin Mechanics"],
      },
    ],
  },
  4: {
    title: "Creating a Product Shelf: From Simple Yield Products to Autocallables",
    scenario:
      "A German bank wants a coherent shelf of structured products for its retail platform: starting with very conservative notes and going all the way to complex Autocallables. Phase 4 shows how all these products are built from the same option building blocks, just combined differently.",
    steps: [
      {
        heading: "Starting with a pure capital‑protected note for cautious clients",
        text:
          "For investors who mainly care about getting their capital back, the desk structures a capital‑protection note: most of the money goes into a zero‑coupon bond, and a smaller part buys a call option to give some upside participation.",
        topics: ["Capital Protection Notes"],
      },
      {
        heading: "Adding yield with discount and bonus certificates",
        text:
          "For investors willing to cap their upside, discount certificates are offered – clients buy the underlying at a discount but give up gains above the cap. Bonus certificates add a barrier and a bonus level so clients can still earn money in sideways markets as long as the barrier holds.",
        topics: ["Discount Certificates", "Bonus Certificates"],
      },
      {
        heading: "Offering high coupons with reverse convertibles",
        text:
          "For yield‑hungry clients, reverse convertibles pay a high fixed coupon but may deliver depressed shares instead of cash at maturity. Internally this is mostly a short put strategy, but for the platform it sits neatly between conservative notes and aggressive leverage products.",
        topics: ["Reverse Convertibles"],
      },
      {
        heading: "Designing flagship Autocallables using all building blocks",
        text:
          "The flagship products are Autocallables that combine coupons, barriers, step‑down triggers and sometimes worst‑of baskets. The team chooses autocall levels, coupon structures and barrier types using everything learned from the earlier product types.",
        topics: ["Autocallables (Very Important)", "Capital Protection Notes", "Discount Certificates", "Bonus Certificates", "Reverse Convertibles"],
      },
    ],
  },
  5: {
    title: "Following One Bonus Certificate Through Its Entire Life",
    scenario:
      "An operations analyst is asked to document what happens to a single bonus certificate from the day it is created until the day it matures. Phase 5 provides the vocabulary for every event that appears in that document and every system that reacts to it.",
    steps: [
      {
        heading: "Issuance and initial hedging",
        text:
          "On issue date the product is created in the product master, booked into the trading book and initial hedges are put on using options and delta hedges on the underlying share. An ISIN is assigned and the term sheet and KID are linked to the internal product ID.",
        topics: ["Product Issuance"],
      },
      {
        heading: "Daily pricing and client reporting",
        text:
          "Each day, pricing engines fetch market data and compute fair value and bid/ask prices for the certificate. These prices feed client statements, online dashboards and risk reports, and P&amp;L is booked based on the mark‑to‑market changes.",
        topics: ["Daily Pricing & Valuation"],
      },
      {
        heading: "Handling corporate actions on the underlying share",
        text:
          "When the underlying company announces a dividend, stock split or takeover, corporate‑action engines adjust strikes, barriers and bonus levels according to pre‑defined formulas. The product lifecycle state machine records each of these adjustments.",
        topics: ["Corporate Actions", "Lifecycle Events"],
      },
      {
        heading: "Final barrier check and settlement at maturity",
        text:
          "At maturity the system checks whether the barrier was ever touched during the life of the product. If not, the bonus level payoff is applied; otherwise the final performance of the share determines the redemption amount and the settlement system delivers cash to client accounts.",
        topics: ["Lifecycle Events", "Event-Driven Architecture"],
      },
    ],
  },
  6: {
    title: "Explaining Risk on a Large Autocallable Book",
    scenario:
      "Management receives a one‑page dashboard each morning that shows how sensitive the bank’s Autocallable portfolio is to market moves. Phase 6 builds the intuition behind the numbers and charts on that dashboard.",
    steps: [
      {
        heading: "Breaking down risk into Greeks the desk can control",
        text:
          "Risk managers aggregate delta, gamma, vega, theta and rho across thousands of products and show how each sensitivity contributes to potential P&amp;L changes for moves in the underlying, volatility, time and rates.",
        topics: ["The Greeks", "Fair Value & Pricing Models"],
      },
      {
        heading: "Running realistic what‑if scenarios and stress tests",
        text:
          "Scenario engines simulate moderate moves (e.g. ‑5% index, +5 vol points) and extreme stresses (e.g. 2008‑style crash) and show how much the portfolio could lose. These runs are parameterised using the volatility and correlation concepts from earlier phases.",
        topics: ["Volatility in Pricing", "Sensitivity Analysis"],
      },
      {
        heading: "Reconciling traded prices with model fair value",
        text:
          "Traders constantly compare the quoted secondary‑market price of a product with its model fair value. The difference – the margin – is monitored over time so that the bank neither underprices nor overprices risk relative to the market.",
        topics: ["Fair Value & Pricing Models"],
      },
      {
        heading: "Explaining complex behaviour in simple language",
        text:
          "The final report translates model output into narratives such as: \"we are short vega in the 2–3 year bucket\" or \"delta drops quickly if barriers are approached\". These sentences are only meaningful once you understand the Greeks and their interaction.",
        topics: ["The Greeks", "Sensitivity Analysis"],
      },
    ],
  },
  7: {
    title: "Rolling Out a Digital Structured‑Products Platform Under EU Rules",
    scenario:
      "A mid‑size retail bank wants to allow clients to buy structured products directly through its mobile app. Before going live, the project team must prove to the regulator that products are governed, documented and reported correctly. Phase 7 connects regulatory buzzwords to very concrete system features.",
    steps: [
      {
        heading: "Embedding product governance and target markets",
        text:
          "For every product in the system, the bank stores target market, complexity, risk class and distribution channels. These fields drive which client segments are allowed to see and buy each instrument.",
        topics: ["MiFID II", "Suitability & Appropriateness"],
      },
      {
        heading: "Attaching KIDs and making performance scenarios transparent",
        text:
          "The platform links each structured product to its PRIIPs KID so that clients can open the document directly from the app. Performance scenarios, costs and the Summary Risk Indicator all come from the PRIIPs logic.",
        topics: ["PRIIPs & KID", "Transparency Requirements"],
      },
      {
        heading: "Blocking orders that fail suitability or appropriateness tests",
        text:
          "Order‑entry screens call suitability and appropriateness services that check the client’s knowledge, experience and risk profile. If the product is too complex or risky for that client, the system must reject the order or show strong warnings.",
        topics: ["Suitability & Appropriateness"],
      },
      {
        heading: "Reporting all trades to regulators and trade repositories",
        text:
          "Every executed order triggers MiFIR transaction reporting and, where relevant, EMIR derivatives reporting. The platform enriches trades with LEIs, ISINs and other regulatory fields so downstream reporting engines can build complete, auditable messages.",
        topics: ["MiFID II", "Transparency Requirements"],
      },
    ],
  },
};

export async function generateStaticParams() {
  const phases = await getAllPhases();
  return phases.map((phase) => ({
    phaseNumber: phase.phaseNumber.toString(),
  }));
}

export default async function PhasePage({
  params,
}: {
  params: Promise<{ phaseNumber: string }>;
}) {
  const { phaseNumber } = await params;
  const phaseNum = parseInt(phaseNumber);
  const phase = await getPhaseByNumber(phaseNum);

  if (!phase) {
    notFound();
  }

  const cardGradient = cardGradients[phase.metadata.color] || cardGradients.blue;
  const titleColor = titleColors[phase.metadata.color] || titleColors.blue;
  const badgeColor = badgeColors[phase.metadata.color] || badgeColors.blue;

  return (
    <>
      <Header
        title={`Phase ${phase.metadata.phaseNumber}: ${phase.metadata.title}`}
        subtitle={phase.metadata.subtitle}
        backLink={{
          href: "/",
          text: "Back to Roadmap"
        }}
        showHomeLink={false}
      />

      <main className="relative z-10 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          {/* Phase Header */}
          <div className="space-y-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${badgeColor}`}>
              Phase {phase.metadata.phaseNumber}
            </span>

            <h1 className={`text-2xl sm:text-3xl font-bold ${titleColor}`}>
              {phase.metadata.title}
            </h1>

            <p className="text-base text-gray-600 dark:text-gray-300">
              {phase.metadata.subtitle}
            </p>

            <div className="flex items-start gap-2 text-sm">
              <Target className="h-4 w-4 mt-0.5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-200">Goal:</span>{" "}
                <span className="text-gray-600 dark:text-gray-300">{phase.metadata.goal}</span>
              </div>
            </div>
          </div>

          {/* Phase Description */}
          {phase.content && (
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-800/80 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">Overview</h2>
              </div>
              <div className="p-4">
                <MarkdownRenderer content={phase.content} />
              </div>
            </div>
          )}

          {/* Topics List */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-gray-600 dark:text-gray-300" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Topics</h2>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs">
                {phase.topics.length} topics
              </span>
            </div>

            <div className="grid gap-3">
              {phase.topics.map((topic, index) => {
                const accentColor = topicAccentColors[index % topicAccentColors.length];
                return (
                  <Link
                    key={topic.id}
                    href={`/phase/${phaseNum}/${topic.id}`}
                    className="block group"
                  >
                    <div className={`flex items-start p-3 sm:p-4 rounded-xl shadow-sm ${cardGradient} hover:shadow-lg transition-all hover:scale-[1.01]`}>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-700 text-white">
                            Topic {index + 1}
                          </span>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${difficultyColors[topic.difficulty] || ""}`}>
                            {topic.difficulty}
                          </span>
                        </div>
                        <h3 className={`text-base font-semibold ${accentColor} group-hover:underline flex items-center gap-2`}>
                          {topic.title}
                          <ChevronRight className={`h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity ${accentColor}`} />
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Phase Example Section */}
          {phaseExamples[phaseNum] && (
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 sm:p-5 space-y-3">
              <div className="flex items-start gap-2">
                <Lightbulb className="h-5 w-5 text-amber-500 dark:text-amber-300 mt-0.5" />
                <div className="space-y-2">
                  <div>
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      Example: {phaseExamples[phaseNum].title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                      {phaseExamples[phaseNum].scenario}
                    </p>
                  </div>

                  <ol className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    {phaseExamples[phaseNum].steps.map((step, idx) => (
                      <li key={idx} className="bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">
                          {idx + 1}. {step.heading}
                        </p>
                        <p className="text-[13px] sm:text-sm">{step.text}</p>
                        <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                          Topics touched:{" "}
                          <span className="font-medium">
                            {step.topics.join(", ")}
                          </span>
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
            {phaseNum > 0 ? (
              <Link href={`/phase/${phaseNum - 1}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm">
                <ArrowLeft className="h-4 w-4" />
                Previous Phase
              </Link>
            ) : (
              <div></div>
            )}

            {phaseNum < 7 && (
              <Link href={`/phase/${phaseNum + 1}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm">
                Next Phase
                <ChevronRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
