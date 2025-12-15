'use client';

import Header from '@/components/Header';
import { BookOpen, ArrowRight, FileText, Landmark, Workflow } from 'lucide-react';

export default function HistoryPage() {
  return (
    <>
      <Header
        title="How Investment Banking Works"
        subtitle="Banks, markets, and the real product lifecycle"
        backLink={{ href: '/', text: 'Back to Roadmap' }}
        showHomeLink={true}
      />

      <main className="relative z-10 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {/* Intro */}
          <section className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-2">
              <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  Big Picture: Who Issues Products and What Happens Around Them?
                </h1>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  This page gives you a compact overview of{' '}
                  <span className="font-semibold">which banks are active</span>,{' '}
                  <span className="font-semibold">how markets are organised</span>, and{' '}
                  <span className="font-semibold">which lifecycle steps and documents</span> every
                  structured product must pass before it reaches an investor.
                </p>
              </div>
            </div>
          </section>

          {/* Bank types */}
          <section className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Landmark className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                1. Types of Banks Involved
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200">
              In Europe, the same legal entity can often be{' '}
              <span className="font-semibold">both a commercial bank and an investment bank</span>{' '}
              (&quot;universal bank&quot;). Still, you can group the main players as:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200 dark:border-gray-700 rounded-lg">
                <thead className="bg-gray-50 dark:bg-gray-900/60">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      Type
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      Role in Products
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      Example Banks
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-3 py-2 font-semibold text-gray-900 dark:text-white">
                      Universal / Global Banks
                    </td>
                    <td className="px-3 py-2 text-gray-700 dark:text-gray-200">
                      Issue structured products, make markets, run large trading and risk platforms.
                    </td>
                    <td className="px-3 py-2 text-gray-700 dark:text-gray-200">
                      Deutsche Bank, Commerzbank, UBS, UniCredit Bank (HypoVereinsbank)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold text-gray-900 dark:text-white">
                      Cooperative / Central Institutions
                    </td>
                    <td className="px-3 py-2 text-gray-700 dark:text-gray-200">
                      Provide capital markets and product capabilities for regional member banks.
                    </td>
                    <td className="px-3 py-2 text-gray-700 dark:text-gray-200">
                      DZ Bank, Helaba, LBBW
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold text-gray-900 dark:text-white">
                      Retail / Direct Banks
                    </td>
                    <td className="px-3 py-2 text-gray-700 dark:text-gray-200">
                      Distribute structured products to end clients via online platforms.
                    </td>
                    <td className="px-3 py-2 text-gray-700 dark:text-gray-200">
                      ING Germany, Consorsbank, comdirect, DKB
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold text-gray-900 dark:text-white">
                      Private Banks / Wealth Managers
                    </td>
                    <td className="px-3 py-2 text-gray-700 dark:text-gray-200">
                      Use structured products in discretionary portfolios and advisory mandates.
                    </td>
                    <td className="px-3 py-2 text-gray-700 dark:text-gray-200">
                      UBS Wealth Management, Vontobel, Julius Baer, HSBC Trinkaus &amp; Burkhardt
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* How markets work – very high level */}
          <section className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                2. How the Markets Around These Products Work
              </h2>
            </div>

            {/* Primary vs Secondary market table */}
            <div className="overflow-x-auto text-sm sm:text-base text-gray-700 dark:text-gray-200">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Primary vs Secondary Market
              </h3>
              <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg">
                <thead className="bg-gray-50 dark:bg-gray-900/60">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      Market
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      What Happens
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      Typical Venues / Examples
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-3 py-2 font-semibold text-gray-900 dark:text-white">
                      Primary Market
                    </td>
                    <td className="px-3 py-2">
                      Bank issues a new product, assigns an ISIN, publishes term sheet / KID and
                      sells initial volume to clients (often via distribution networks).
                    </td>
                    <td className="px-3 py-2">
                      Syndication desks, primary issuance platforms, internal order books.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold text-gray-900 dark:text-white">
                      Secondary Market
                    </td>
                    <td className="px-3 py-2">
                      After issuance the product trades between investors; issuing bank or market
                      maker quotes bid / ask prices and provides liquidity.
                    </td>
                    <td className="px-3 py-2">
                      Börse Stuttgart (EUWAX), Börse Frankfurt, SIX Swiss Exchange, OTC RFQ with the
                      issuing bank.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Exchange vs OTC table */}
            <div className="overflow-x-auto text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Exchange Trading vs OTC (Over-the-Counter)
              </h3>
              <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg">
                <thead className="bg-gray-50 dark:bg-gray-900/60">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      Channel
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      Characteristics
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      Examples
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-3 py-2 font-semibold text-gray-900 dark:text-white">
                      Exchange
                    </td>
                    <td className="px-3 py-2">
                      Transparent order book, standardised rules, central counterparty, public
                      prices. Retail investors typically access via brokers or banks.
                    </td>
                    <td className="px-3 py-2">
                      Xetra (equities / ETFs), Börse Stuttgart (EUWAX), SIX Swiss Exchange.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold text-gray-900 dark:text-white">
                      OTC
                    </td>
                    <td className="px-3 py-2">
                      Bilateral trading directly with a bank; pricing, documentation and lifecycle
                      managed via RFQ platforms, phone, or chat.
                    </td>
                    <td className="px-3 py-2">
                      Bank RFQ portals, dealer platforms, voice trading with the issuing bank.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Product launch lifecycle */}
          <section className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3 mb-2">
              <Workflow className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                3. When a Bank Launches a Structured Product – End‑to‑End View
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200">
              The details appear later in <span className="font-semibold">Phase 5 (Lifecycle)</span>{' '}
              and <span className="font-semibold">Phase 7 (Regulation)</span>, but this is the{' '}
              <span className="font-semibold">high‑level sequence</span> you should keep in mind
              when reading the guide:
            </p>
            {/* High-level timeline as cards (one step per row) */}
            <div className="grid grid-cols-1 gap-4 text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-3">
              <div className="relative bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-1">
                  Step 1
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Idea &amp; Structuring
                </h3>
                <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
                  <li>Sales / structuring identify client demand.</li>
                  <li>Structurers design payoff, choose underlyings, barriers, coupons.</li>
                  <li>Pricing engines compute fair value and issuer margin.</li>
                </ul>
              </div>

              <div className="relative bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-1">
                  Step 2
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Risk, Compliance &amp; Legal
                </h3>
                <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
                  <li>Check product against internal risk limits.</li>
                  <li>Validate target market, complexity, and distribution rules (MiFID / PRIIPs).</li>
                  <li>Confirm product fits issuer and platform governance.</li>
                </ul>
              </div>

              <div className="relative bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-1">
                  Step 3
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Documents &amp; Product Data
                </h3>
                <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
                  <li>Generate and approve Term Sheet / Final Terms.</li>
                  <li>Produce PRIIPs KID and update base prospectus where required.</li>
                  <li>On‑board product into master data, pricing, risk, booking &amp; reporting systems.</li>
                </ul>
              </div>

              <div className="relative bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-1">
                  Step 4
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Listing, Trading &amp; Lifecycle
                </h3>
                <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
                  <li>Activate ISIN, list on exchanges or OTC platforms, start distribution.</li>
                  <li>Stream secondary market prices and process client orders.</li>
                  <li>Handle coupons, barrier checks, corporate actions, and final settlement.</li>
                </ul>
              </div>
            </div>

            {/* Product must-have properties (data fields) */}
            <div className="mt-5 space-y-2">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                Product &quot;must‑have&quot; properties in bank systems
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-200">
                No product can be issued or booked until a minimum set of fields is defined and
                consistent across front‑office, risk, and back‑office systems. Typical{' '}
                <span className="font-semibold">core properties</span> include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <span className="font-semibold">Identification:</span> ISIN, internal product ID,
                  product name / marketing name, issuer legal entity.
                </li>
                <li>
                  <span className="font-semibold">Economic terms:</span> underlying(s), type
                  (Discount, Bonus, Autocallable, KO, etc.), currency, nominal amount, issue price,
                  strike levels, barriers, caps / floors.
                </li>
                <li>
                  <span className="font-semibold">Timeline:</span> trade date, issue date, first
                  valuation date, observation dates, maturity date, call dates.
                </li>
                <li>
                  <span className="font-semibold">Cash‑flow terms:</span> coupon rate and frequency,
                  memory / conditional logic, redemption formula, settlement type (cash vs
                  physical).
                </li>
                <li>
                  <span className="font-semibold">Risk &amp; regulation:</span> target market,
                  complexity flag, risk class, PRIIPs / MiFID references, KID and prospectus
                  identifiers.
                </li>
                <li>
                  <span className="font-semibold">Trading &amp; listing:</span> primary distribution
                  channel, listing venue (if any), market‑making desk, fee / margin parameters.
                </li>
              </ul>
            </div>

            <div className="mt-4 flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
              <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
              <p>
                As you read each phase of the guide, try to map concepts back to this lifecycle:{' '}
                <span className="font-semibold">
                  where is this used – pricing, documentation, risk, or lifecycle events?
                </span>{' '}
                That mental model is exactly how product and platform teams at banks think about
                their systems.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
