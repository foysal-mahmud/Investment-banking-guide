export interface DictionaryTerm {
  shortForm: string;
  term: string;
  meaning: string;
  notes?: string;
  /** Mark as \"nice-to-know\" (can be skipped on first pass) */
  isOptional?: boolean;
  /** Optional: phases where this term is most relevant (e.g. [3,4]) */
  phases?: number[];
  /** Optional: topic ids where this term appears (e.g. ["knock-outs", "autocallables"]) */
  topics?: string[];
  /** Optional: alternative names/aliases for better search (e.g. ["Express", "Phoenix"]) */
  aliases?: string[];
  /** Optional: region scope for the term */
  region?: 'EU' | 'DE' | 'CH' | 'UK' | 'US' | 'Global';
  /** Optional: rough complexity level for learners */
  complexity?: 'Beginner' | 'Intermediate' | 'Advanced';
  /** Optional: short mental-model hint for developers */
  devHint?: string;
}

export interface DictionaryCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  terms: DictionaryTerm[];
}

export const dictionaryData: DictionaryCategory[] = [
  {
    id: "product-identification",
    title: "Product Identification & Reference",
    icon: "🏷️",
    description: "Unique identifiers used to reference securities and products across systems",
    terms: [
      { shortForm: "ISIN", term: "International Securities Identification Number", meaning: "Global unique security ID (12 characters)", notes: "Example: DE000A1EWWW0", region: "Global", complexity: "Beginner", devHint: "Primary key for a security in most systems." },
      { shortForm: "WKN", term: "Wertpapierkennnummer", meaning: "German security identifier (6 characters)", notes: "Legacy German system", region: "DE", complexity: "Beginner" },
      { shortForm: "SEDOL", term: "Stock Exchange Daily Official List", meaning: "UK security identifier (7 characters)", notes: "Used in London Stock Exchange", region: "UK", complexity: "Beginner", isOptional: true },
      { shortForm: "CUSIP", term: "Committee on Uniform Securities Identification Procedures", meaning: "US/Canada security identifier (9 characters)", notes: "North American standard", region: "US", complexity: "Beginner", isOptional: true },
      { shortForm: "Ticker", term: "Trading Symbol", meaning: "Exchange-specific short code", notes: "Example: DAX, BMW, SAP" },
      { shortForm: "RIC", term: "Reuters Instrument Code", meaning: "Market data reference code", notes: "Used in Refinitiv/Reuters systems" },
      { shortForm: "BBG", term: "Bloomberg Ticker", meaning: "Bloomberg terminal identifier", notes: "Example: BMW GY Equity", region: "Global", complexity: "Beginner", isOptional: true },
      { shortForm: "LEI", term: "Legal Entity Identifier", meaning: "20-character code for legal entities", notes: "Required for regulatory reporting" },
    ],
  },
  {
    id: "product-lifecycle",
    title: "Product Structure & Lifecycle",
    icon: "📅",
    description: "Terms related to product timing, structure, and lifecycle events",
    terms: [
      { shortForm: "UL", term: "Underlying", meaning: "Asset on which product payoff is based", notes: "Can be stock, index, basket, etc.", phases: [1, 3, 4], complexity: "Beginner", devHint: "Think: foreign key pointing to market data instrument." },
      { shortForm: "AC", term: "Asset Class", meaning: "Category of financial instruments", notes: "Equities, FX, Rates, Commodities, Credit" },
      { shortForm: "Issue", term: "Issue Date", meaning: "Date the product is created and issued", notes: "Start of product lifecycle" },
      { shortForm: "T", term: "Trade Date", meaning: "Date the transaction is executed", notes: "When the deal is done" },
      { shortForm: "T+2", term: "Settlement Date", meaning: "Date cash and securities are exchanged", notes: "Standard settlement cycle in EU" },
      { shortForm: "Mat", term: "Maturity", meaning: "Final date of the product", notes: "End of product lifecycle" },
      { shortForm: "Tenor", term: "Tenor", meaning: "Time from issue to maturity", notes: "Example: 1Y, 3Y, 5Y" },
      { shortForm: "Red", term: "Redemption", meaning: "Final or early payoff event", notes: "Return of principal + payoff" },
      { shortForm: "ER", term: "Early Redemption", meaning: "Product ends before scheduled maturity", notes: "Can be issuer or autocall triggered" },
      { shortForm: "AC", term: "Autocall", meaning: "Automatic early redemption feature", notes: "Triggered when conditions are met", aliases: ["Autocallable", "Express"], phases: [4], topics: ["autocallables"], complexity: "Intermediate", devHint: "State machine transition to 'Redeemed' when trigger condition true." },
      { shortForm: "Obs", term: "Observation Date", meaning: "Date when conditions are evaluated", notes: "Key dates in product lifecycle" },
      { shortForm: "Fix", term: "Fixing", meaning: "Official price used for calculations", notes: "Immutable snapshot of market data" },
    ],
  },
  {
    id: "leverage-risk",
    title: "Leverage & Risk Metrics",
    icon: "📊",
    description: "Measures of leverage, sensitivity, and risk characteristics",
    terms: [
      { shortForm: "Lev", term: "Leverage", meaning: "Exposure divided by invested capital", notes: "Amplifies gains and losses" },
      { shortForm: "Δ", term: "Delta", meaning: "Sensitivity to underlying price", notes: "Range: -1 to +1 for options" },
      { shortForm: "Γ", term: "Gamma", meaning: "Rate of change of delta", notes: "Second derivative of price" },
      { shortForm: "ν", term: "Vega", meaning: "Sensitivity to volatility", notes: "Impact per 1% vol change" },
      { shortForm: "Θ", term: "Theta", meaning: "Time decay per day", notes: "Negative for long options" },
      { shortForm: "ρ", term: "Rho", meaning: "Sensitivity to interest rates", notes: "Less significant in short-dated products" },
      { shortForm: "Ω", term: "Omega", meaning: "Effective leverage (Δ × UL price ÷ product price)", notes: "True leverage indicator" },
      { shortForm: "VaR", term: "Value at Risk", meaning: "Maximum expected loss at confidence level", notes: "Example: 95% 1-day VaR" },
      { shortForm: "ES", term: "Expected Shortfall", meaning: "Average loss beyond VaR threshold", notes: "Also called CVaR" },
      { shortForm: "PD", term: "Path Dependency", meaning: "Payoff depends on price path, not just final price", notes: "Important for barriers" },
      { shortForm: "Gap", term: "Gap Risk", meaning: "Risk of sudden price jumps", notes: "Can skip over barriers" },
    ],
  },
  {
    id: "barriers-protection",
    title: "Barriers, Protection & Risk Control",
    icon: "🛡️",
    description: "Terms related to barriers, knock-outs, and capital protection features",
    terms: [
      { shortForm: "Barrier", term: "Barrier Level", meaning: "Price level triggering an event", notes: "Can be up or down" },
      { shortForm: "KO", term: "Knock-Out", meaning: "Product expires worthless if barrier is hit", notes: "Common in turbos/warrants", phases: [3, 5], topics: ["knock-outs", "lifecycle-events"], complexity: "Intermediate", devHint: "Event → set position notional to zero, move product to 'Terminated'." },
      { shortForm: "KI", term: "Knock-In", meaning: "Feature activates after barrier is breached", notes: "Often downside risk activation" },
      { shortForm: "KO Lvl", term: "Knock-Out Level", meaning: "Specific price that terminates the product", notes: "Usually close to financing level" },
      { shortForm: "SL", term: "Stop-Loss", meaning: "Risk control level (not always guaranteed)", notes: "May have residual value" },
      { shortForm: "CP", term: "Capital Protection", meaning: "Guaranteed minimum repayment at maturity", notes: "Usually 90-100% of nominal" },
      { shortForm: "Prot Lvl", term: "Protection Level", meaning: "Percentage of capital protected", notes: "Example: 90% protection" },
      { shortForm: "PDI", term: "Put Down-and-In", meaning: "Put option that activates if barrier breached", notes: "Creates downside exposure" },
      { shortForm: "Buffer", term: "Buffer/Cushion", meaning: "Distance between current price and barrier", notes: "Safety margin percentage" },
      { shortForm: "Cont", term: "Continuous Observation", meaning: "Barrier monitored at all times", notes: "Intraday barrier checks" },
      { shortForm: "EOD", term: "End-of-Day Observation", meaning: "Barrier only checked at daily close", notes: "Less risky than continuous" },
    ],
  },
  {
    id: "payoff-coupon",
    title: "Payoff & Coupon Terms",
    icon: "💰",
    description: "Terms related to product payoffs, coupons, and returns",
    terms: [
      { shortForm: "Cpn", term: "Coupon", meaning: "Periodic interest payment", notes: "Usually expressed as % p.a.", phases: [4, 5], complexity: "Beginner" },
      { shortForm: "Cond Cpn", term: "Conditional Coupon", meaning: "Coupon paid only if condition is met", notes: "Based on observation" },
      { shortForm: "Fix Cpn", term: "Fixed Coupon", meaning: "Coupon always paid regardless of conditions", notes: "Guaranteed payment" },
      { shortForm: "Mem Cpn", term: "Memory Coupon", meaning: "Missed coupons accumulate for later payment", notes: "Enhances investor return" },
      { shortForm: "Part", term: "Participation", meaning: "Percentage exposure to underlying gains", notes: "Example: 100% participation" },
      { shortForm: "Bonus", term: "Bonus Level", meaning: "Extra payoff if condition holds at maturity", notes: "In bonus certificates" },
      { shortForm: "Disc", term: "Discount", meaning: "Purchase below spot price", notes: "In discount certificates" },
      { shortForm: "Cap", term: "Cap", meaning: "Maximum payoff limit", notes: "Limits upside potential" },
      { shortForm: "Floor", term: "Floor", meaning: "Minimum payoff guarantee", notes: "Limits downside risk" },
      { shortForm: "Strike", term: "Strike Price", meaning: "Reference price for option/product payoff", notes: "Usually initial underlying price" },
      { shortForm: "Prem", term: "Premium", meaning: "Price paid for option/product", notes: "Cost of the position" },
    ],
  },
  {
    id: "basket-observation",
    title: "Basket & Observation Logic",
    icon: "📦",
    description: "Terms for multi-asset products and observation mechanics",
    terms: [
      { shortForm: "Basket", term: "Basket", meaning: "Product based on multiple underlyings", notes: "Combined exposure" },
      { shortForm: "WO", term: "Worst-of", meaning: "Payoff based on lowest-performing underlying", notes: "min() across basket", phases: [3, 4, 6], complexity: "Advanced", devHint: "In code: use Math.min over array of performances." },
      { shortForm: "BO", term: "Best-of", meaning: "Payoff based on highest-performing underlying", notes: "max() across basket" },
      { shortForm: "Avg", term: "Averaging", meaning: "Mean of prices over a period", notes: "Reduces timing risk" },
      { shortForm: "Asian", term: "Asian Option", meaning: "Payoff based on average price", notes: "Path-dependent" },
      { shortForm: "Rainbow", term: "Rainbow Option", meaning: "Payoff depends on ranking of underlyings", notes: "Complex multi-asset", complexity: "Advanced", isOptional: true },
      { shortForm: "Corr", term: "Correlation", meaning: "Statistical relationship between underlyings", notes: "Key for worst-of pricing" },
      { shortForm: "Perf", term: "Performance", meaning: "Return of underlying from initial level", notes: "Current / Initial - 1" },
    ],
  },
  {
    id: "pricing-valuation",
    title: "Pricing & Valuation",
    icon: "💹",
    description: "Terms related to product pricing, valuation, and fair value",
    terms: [
      { shortForm: "FV", term: "Fair Value", meaning: "Theoretical product value from models", notes: "Basis for trading decisions", phases: [5, 6], complexity: "Intermediate", devHint: "Pure function of model inputs (spot, vol, rate, time)." },
      { shortForm: "MtM", term: "Mark-to-Market", meaning: "Current market valuation", notes: "Daily P&L calculation", phases: [5], complexity: "Intermediate", devHint: "Batch job recomputing value with latest market data." },
      { shortForm: "IV", term: "Intrinsic Value", meaning: "Immediate exercise value", notes: "In-the-money amount" },
      { shortForm: "TV", term: "Time Value", meaning: "Option premium beyond intrinsic value", notes: "Decays over time" },
      { shortForm: "Vol", term: "Volatility", meaning: "Price variability measure", notes: "Annualized standard deviation" },
      { shortForm: "ImpVol", term: "Implied Volatility", meaning: "Volatility derived from market prices", notes: "Forward-looking estimate" },
      { shortForm: "HV", term: "Historical Volatility", meaning: "Volatility from past price data", notes: "Backward-looking measure" },
      { shortForm: "FC", term: "Funding Cost", meaning: "Cost of financing the product", notes: "Built into leverage products" },
      { shortForm: "BS", term: "Black-Scholes", meaning: "Standard option pricing model", notes: "Closed-form solution" },
      { shortForm: "MC", term: "Monte Carlo", meaning: "Simulation-based pricing method", notes: "For complex payoffs" },
      { shortForm: "PDE", term: "Partial Differential Equation", meaning: "Mathematical approach to pricing", notes: "Finite difference methods" },
    ],
  },
  {
    id: "market-trading",
    title: "Market & Trading",
    icon: "📈",
    description: "Terms related to markets, trading, and execution",
    terms: [
      { shortForm: "Bid", term: "Bid Price", meaning: "Price at which market maker buys", notes: "Your sell price" },
      { shortForm: "Ask", term: "Ask Price", meaning: "Price at which market maker sells", notes: "Your buy price" },
      { shortForm: "Spread", term: "Bid-Ask Spread", meaning: "Difference between bid and ask", notes: "Trading cost indicator" },
      { shortForm: "Liq", term: "Liquidity", meaning: "Ease of trading without price impact", notes: "Higher = better" },
      { shortForm: "MM", term: "Market Maker", meaning: "Firm providing continuous bid/ask prices", notes: "Provides liquidity" },
      { shortForm: "OTC", term: "Over-the-Counter", meaning: "Direct trading, not on exchange", notes: "Customized products" },
      { shortForm: "Xetra", term: "Xetra", meaning: "German electronic trading platform", notes: "Deutsche Börse system" },
      { shortForm: "SIX", term: "SIX Swiss Exchange", meaning: "Swiss stock exchange", notes: "Major structured products venue" },
      { shortForm: "EUWAX", term: "European Warrant Exchange", meaning: "Börse Stuttgart warrants segment", notes: "Retail derivatives" },
      { shortForm: "RFQ", term: "Request for Quote", meaning: "Client asks for prices from dealers", notes: "OTC trading flow" },
      { shortForm: "ECN", term: "Electronic Communication Network", meaning: "Automated order matching system", notes: "Alternative trading venue" },
    ],
  },
  {
    id: "regulation-compliance",
    title: "Regulation & Compliance (EU)",
    icon: "⚖️",
    description: "European regulatory terms and compliance requirements",
    terms: [
      { shortForm: "MiFID", term: "Markets in Financial Instruments Directive", meaning: "EU financial markets regulation", notes: "MiFID II since 2018", region: "EU", phases: [7], complexity: "Intermediate" },
      { shortForm: "MiFIR", term: "Markets in Financial Instruments Regulation", meaning: "Directly applicable EU trading rules", notes: "Transparency requirements" },
      { shortForm: "PRIIPs", term: "Packaged Retail Investment Products", meaning: "EU retail product disclosure regulation", notes: "Requires KID", region: "EU", phases: [7], complexity: "Intermediate" },
      { shortForm: "KID", term: "Key Information Document", meaning: "Standardized 3-page product disclosure", notes: "Required for retail" },
      { shortForm: "SRI", term: "Summary Risk Indicator", meaning: "1-7 scale risk rating in KID", notes: "1=low, 7=high" },
      { shortForm: "RHP", term: "Recommended Holding Period", meaning: "Suggested minimum investment horizon", notes: "In KID" },
      { shortForm: "RIY", term: "Reduction in Yield", meaning: "Total cost impact as annual percentage", notes: "Cost disclosure" },
      { shortForm: "Best Ex", term: "Best Execution", meaning: "Obligation to achieve best result for client", notes: "MiFID requirement" },
      { shortForm: "Suit", term: "Suitability", meaning: "Product fits client's needs and risk profile", notes: "Advisory services" },
      { shortForm: "Approp", term: "Appropriateness", meaning: "Client understands product risks", notes: "Execution-only services" },
      { shortForm: "TM", term: "Target Market", meaning: "Defined suitable investor profile", notes: "Product governance" },
      { shortForm: "EMIR", term: "European Market Infrastructure Regulation", meaning: "OTC derivatives regulation", notes: "Clearing and reporting" },
      { shortForm: "BaFin", term: "Bundesanstalt für Finanzdienstleistungsaufsicht", meaning: "German financial regulator", notes: "National competent authority" },
      { shortForm: "FINMA", term: "Swiss Financial Market Supervisory Authority", meaning: "Swiss financial regulator", notes: "Not EU but important" },
    ],
  },
  {
    id: "product-types",
    title: "Common Product Abbreviations",
    icon: "📋",
    description: "Short forms for common structured and leverage products",
    terms: [
      { shortForm: "RC", term: "Reverse Convertible", meaning: "High coupon product with downside risk", notes: "Short put + bond", phases: [4], topics: ["reverse-convertibles"], complexity: "Intermediate" },
      { shortForm: "AC", term: "Autocallable", meaning: "Product with early redemption feature", notes: "Most popular structure", phases: [4], topics: ["autocallables"], aliases: ["Express", "Phoenix", "Athena"], complexity: "Advanced" },
      { shortForm: "DC", term: "Discount Certificate", meaning: "Buy at discount, capped upside", notes: "Short call strategy" },
      { shortForm: "BC", term: "Bonus Certificate", meaning: "Bonus if barrier not breached", notes: "Conditional return" },
      { shortForm: "KO", term: "Knock-Out Product", meaning: "Leverage product with termination barrier", notes: "Turbos, mini-futures" },
      { shortForm: "MF", term: "Mini-Future", meaning: "Leverage product without expiry", notes: "Adjustable barrier" },
      { shortForm: "CPN", term: "Capital Protection Note", meaning: "Principal protected product", notes: "Bond + call structure" },
      { shortForm: "Turbo", term: "Turbo Certificate", meaning: "Knock-out leverage product", notes: "Bull/Bear variants" },
      { shortForm: "Warrant", term: "Warrant", meaning: "Long-dated option issued by bank", notes: "Call/Put variants" },
      { shortForm: "Express", term: "Express Certificate", meaning: "Autocallable with step-down", notes: "German term", phases: [4], topics: ["autocallables"], isOptional: true },
      { shortForm: "Phoenix", term: "Phoenix Note", meaning: "Autocallable with periodic coupons", notes: "US term", phases: [4], topics: ["autocallables"], isOptional: true },
      { shortForm: "Athena", term: "Athena Note", meaning: "Autocallable with memory coupon", notes: "Marketing name", phases: [4], topics: ["autocallables"], isOptional: true },
    ],
  },
  {
    id: "developer-mapping",
    title: "Developer Mental Model",
    icon: "👨‍💻",
    description: "Mapping financial concepts to software engineering patterns",
    terms: [
      { shortForm: "Barrier", term: "Barrier → Event Trigger", meaning: "Price crossing triggers state change", notes: "Event-driven architecture", phases: [3, 4, 5], complexity: "Intermediate" },
      { shortForm: "Obs Date", term: "Observation Date → Scheduled Job", meaning: "Time-based condition evaluation", notes: "Cron job / scheduler" },
      { shortForm: "Fixing", term: "Fixing → Immutable Snapshot", meaning: "Point-in-time market data capture", notes: "Event sourcing pattern" },
      { shortForm: "WO", term: "Worst-of → min() Function", meaning: "Select minimum performer from array", notes: "Array.reduce()" },
      { shortForm: "BO", term: "Best-of → max() Function", meaning: "Select maximum performer from array", notes: "Array.reduce()" },
      { shortForm: "AC", term: "Autocall → Conditional Termination", meaning: "If-then early exit logic", notes: "State machine transition" },
      { shortForm: "Payoff", term: "Payoff → Pure Function", meaning: "Deterministic calculation from inputs", notes: "No side effects" },
      { shortForm: "Greeks", term: "Greeks → Partial Derivatives", meaning: "Sensitivity calculations", notes: "Numerical differentiation" },
      { shortForm: "State", term: "Product State → State Machine", meaning: "Active, Called, Matured, etc.", notes: "Finite state automaton" },
      { shortForm: "Event", term: "Lifecycle Event → Domain Event", meaning: "Coupon payment, barrier breach, etc.", notes: "Event-driven design" },
    ],
  },
];

// Helper function to get all terms flattened
export function getAllTerms(): (DictionaryTerm & { category: string })[] {
  return dictionaryData.flatMap(category => 
    category.terms.map(term => ({ ...term, category: category.title }))
  );
}

// Helper function to search terms
export function searchTerms(query: string): (DictionaryTerm & { category: string })[] {
  const lowerQuery = query.toLowerCase();
  return getAllTerms().filter(term => 
    term.shortForm.toLowerCase().includes(lowerQuery) ||
    term.term.toLowerCase().includes(lowerQuery) ||
    term.meaning.toLowerCase().includes(lowerQuery) ||
    (term.notes?.toLowerCase().includes(lowerQuery) ?? false) ||
    (term.devHint?.toLowerCase().includes(lowerQuery) ?? false) ||
    (term.aliases?.some(a => a.toLowerCase().includes(lowerQuery)) ?? false) ||
    (term.topics?.some(t => t.toLowerCase().includes(lowerQuery)) ?? false)
  );
}

