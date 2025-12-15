export interface Topic {
  id: string;
  title: string;
  description: string;
  duration: string;
  concepts?: string[];
  products?: string[];
  youtubeLinks?: {
    title: string;
    url: string;
  }[];
}

export interface Phase {
  id: string;
  phaseNumber: number;
  title: string;
  subtitle: string;
  goal: string;
  color: string;
  topics: Topic[];
}

export const roadmapData: Phase[] = [
  {
    id: "phase-0",
    phaseNumber: 0,
    title: "Financial Market Foundations",
    subtitle: "Understanding the basics",
    goal: "Understand what trades, where, and who is involved.",
    color: "emerald",
    topics: [
      {
        id: "financial-markets",
        title: "What is a Financial Market",
        description: "A financial market is a marketplace where buyers and sellers trade financial assets such as stocks, bonds, currencies, and derivatives. It facilitates the flow of capital between investors and entities that need funding.",
        duration: "1 hour",
        concepts: [
          "Market definition and purpose",
          "Price discovery mechanism",
          "Liquidity provision",
          "Risk transfer",
        ],
      },
      {
        id: "primary-secondary",
        title: "Primary vs Secondary Market",
        description: "The primary market is where new securities are issued and sold for the first time (IPOs), while the secondary market is where existing securities are traded between investors.",
        duration: "1 hour",
        concepts: [
          "Primary market: New issuance",
          "Secondary market: Trading existing securities",
          "IPO process",
          "Underwriting",
        ],
      },
      {
        id: "market-roles",
        title: "Market Participants & Roles",
        description: "Understanding the key players in financial markets and their functions.",
        duration: "2 hours",
        concepts: [
          "Issuer (bank): Creates and sells securities",
          "Investor: Buys securities to earn returns",
          "Exchange (Xetra, SIX, Börse Stuttgart): Provides trading platform",
          "Market maker: Provides liquidity by quoting buy/sell prices",
          "Buy-side: Asset managers, hedge funds, pension funds",
          "Sell-side: Investment banks, broker-dealers",
        ],
      },
      {
        id: "investment-vs-commercial",
        title: "Investment Banking vs Commercial Banking",
        description: "Key differences between investment and commercial banking operations.",
        duration: "1.5 hours",
        concepts: [
          "Commercial Banking: Deposits, loans, retail services",
          "Investment Banking: Capital raising, M&A advisory, trading",
          "Regulatory differences",
          "Revenue models",
        ],
      },
    ],
  },
  {
    id: "phase-1",
    phaseNumber: 1,
    title: "Asset Classes & Underlyings",
    subtitle: "Know what products are built on",
    goal: "Understand the fundamental asset classes that form the basis of all financial products.",
    color: "blue",
    topics: [
      {
        id: "equities",
        title: "Equities (Stocks & Indices)",
        description: "Ownership shares in companies and baskets of stocks tracked by indices.",
        duration: "1.5 hours",
        concepts: [
          "Common vs Preferred stock",
          "Dividends and dividend yield",
          "Market capitalization",
          "Major indices: DAX, EURO STOXX 50, SMI",
        ],
      },
      {
        id: "fixed-income",
        title: "Fixed Income (Bonds)",
        description: "Debt securities that pay regular interest to investors.",
        duration: "2 hours",
        concepts: [
          "Bond structure: Principal, coupon, maturity",
          "Yield to maturity",
          "Yield curve",
          "Credit ratings",
          "Government vs Corporate bonds",
        ],
      },
      {
        id: "fx",
        title: "Foreign Exchange (FX)",
        description: "Currency trading and exchange rates.",
        duration: "1 hour",
        concepts: [
          "Currency pairs (EUR/USD, EUR/CHF)",
          "Spot vs Forward rates",
          "Exchange rate determination",
          "Currency risk",
        ],
      },
      {
        id: "commodities",
        title: "Commodities",
        description: "Physical goods traded on exchanges.",
        duration: "1 hour",
        concepts: [
          "Precious metals: Gold, Silver",
          "Energy: Oil, Natural Gas",
          "Agricultural commodities",
          "Commodity futures",
        ],
      },
      {
        id: "volatility",
        title: "Volatility & Correlation",
        description: "Measuring market risk and relationship between assets.",
        duration: "1.5 hours",
        concepts: [
          "Historical vs Implied volatility",
          "VIX index (fear gauge)",
          "Correlation coefficient",
          "Diversification benefits",
        ],
      },
    ],
  },
  {
    id: "phase-2",
    phaseNumber: 2,
    title: "Derivatives Basics (CRITICAL)",
    subtitle: "Foundation for structured products",
    goal: "Master derivative instruments - essential for understanding structured and leverage products.",
    color: "violet",
    topics: [
      {
        id: "derivatives-intro",
        title: "What is a Derivative",
        description: "A financial instrument whose value is derived from an underlying asset.",
        duration: "1 hour",
        concepts: [
          "Definition and purpose",
          "Hedging vs Speculation",
          "Leverage effect",
          "Counterparty risk",
        ],
      },
      {
        id: "forwards-futures",
        title: "Forwards & Futures",
        description: "Contracts to buy/sell an asset at a future date for a predetermined price.",
        duration: "2 hours",
        concepts: [
          "Forward contracts: OTC, customized",
          "Futures contracts: Exchange-traded, standardized",
          "Margin requirements",
          "Mark-to-market",
        ],
      },
      {
        id: "options-basics",
        title: "Options: Call & Put",
        description: "The right (not obligation) to buy (call) or sell (put) an asset.",
        duration: "3 hours",
        concepts: [
          "Call option: Right to buy",
          "Put option: Right to sell",
          "Premium, strike price, expiry",
          "Long vs Short positions",
          "European vs American options",
        ],
      },
      {
        id: "payoff-diagrams",
        title: "Payoff Diagrams",
        description: "Visual representation of option profit/loss at expiration.",
        duration: "2 hours",
        concepts: [
          "Long call payoff",
          "Long put payoff",
          "Short call payoff",
          "Short put payoff",
          "Breakeven points",
        ],
      },
      {
        id: "moneyness",
        title: "Moneyness & Time Value",
        description: "Understanding option value components.",
        duration: "2 hours",
        concepts: [
          "In-the-money (ITM)",
          "At-the-money (ATM)",
          "Out-of-the-money (OTM)",
          "Intrinsic value",
          "Time value decay",
        ],
      },
    ],
  },
  {
    id: "phase-3",
    phaseNumber: 3,
    title: "Leverage Products",
    subtitle: "High-risk, high-reward instruments",
    goal: "Understand products retail traders use heavily in Germany.",
    color: "orange",
    topics: [
      {
        id: "warrants",
        title: "Warrants",
        description: "Long-term options issued by banks, popular in German markets.",
        duration: "2 hours",
        concepts: [
          "Call warrants vs Put warrants",
          "Leverage mechanism",
          "Time decay",
          "Issuer risk",
        ],
      },
      {
        id: "knock-outs",
        title: "Knock-Out Certificates (Turbos)",
        description: "Leveraged products with a knock-out barrier that terminates the product.",
        duration: "2 hours",
        concepts: [
          "Knock-out barrier",
          "Leverage ratio",
          "Long vs Short knock-outs",
          "Financing costs",
        ],
        products: [
          "Turbo Bull Certificate on DAX",
          "Turbo Bear Certificate on EUR/USD",
        ],
      },
      {
        id: "mini-futures",
        title: "Mini-Futures",
        description: "Leveraged products with adjustable knock-out barriers and unlimited lifetime.",
        duration: "1.5 hours",
        concepts: [
          "Adjustable barriers",
          "Overnight financing",
          "No fixed maturity",
          "Stop-loss vs knock-out",
        ],
      },
      {
        id: "leverage-mechanics",
        title: "Leverage & Margin Mechanics",
        description: "How leverage amplifies gains and losses.",
        duration: "1.5 hours",
        concepts: [
          "Leverage ratio calculation",
          "Delta ≠ leverage",
          "Path dependency",
          "Total loss risk",
        ],
      },
    ],
  },
  {
    id: "phase-4",
    phaseNumber: 4,
    title: "Structured Products",
    subtitle: "Bank-issued investment solutions",
    goal: "Understand what German banks issue at scale.",
    color: "pink",
    topics: [
      {
        id: "capital-protection",
        title: "Capital Protection Notes",
        description: "Products that guarantee return of principal at maturity.",
        duration: "2 hours",
        concepts: [
          "Capital protection level (100%, 90%)",
          "Participation rate",
          "Cap on returns",
          "Zero-coupon bond + call option structure",
        ],
        products: [
          "Capital Protection on DAX index",
        ],
      },
      {
        id: "discount-certificates",
        title: "Discount Certificates",
        description: "Buy the underlying at a discount in exchange for capped upside.",
        duration: "2 hours",
        concepts: [
          "Discount to spot price",
          "Cap level",
          "Maximum return",
          "Short call strategy",
        ],
      },
      {
        id: "bonus-certificates",
        title: "Bonus Certificates",
        description: "Receive a bonus payment if barrier is not breached.",
        duration: "2 hours",
        concepts: [
          "Bonus level",
          "Barrier level",
          "Sideways market strategy",
          "Barrier breach consequences",
        ],
      },
      {
        id: "reverse-convertibles",
        title: "Reverse Convertibles",
        description: "High coupon products with risk of receiving depreciated underlying.",
        duration: "2 hours",
        concepts: [
          "High fixed coupon",
          "Barrier observation",
          "Physical delivery risk",
          "Short put strategy",
        ],
      },
      {
        id: "autocallables",
        title: "Autocallables (Very Important)",
        description: "Products that automatically redeem early if certain conditions are met.",
        duration: "3 hours",
        concepts: [
          "Autocall trigger level",
          "Observation dates",
          "Coupon structure",
          "Memory coupons",
          "Barrier protection",
          "Worst-of baskets",
        ],
        products: [
          "Autocallable on DAX, EURO STOXX 50",
          "Worst-of Autocallable on tech basket",
        ],
      },
    ],
  },
  {
    id: "phase-5",
    phaseNumber: 5,
    title: "Product Lifecycle & Payoff Modeling",
    subtitle: "Connect finance to software",
    goal: "Understand the complete lifecycle of structured products from issuance to maturity.",
    color: "cyan",
    topics: [
      {
        id: "issuance",
        title: "Product Issuance",
        description: "How banks create and launch structured products.",
        duration: "1.5 hours",
        concepts: [
          "Term sheet creation",
          "Regulatory approval",
          "ISIN assignment",
          "Initial hedging",
        ],
      },
      {
        id: "pricing",
        title: "Daily Pricing & Valuation",
        description: "How products are valued each day.",
        duration: "2 hours",
        concepts: [
          "Fair value calculation",
          "Bid-ask spread",
          "Market data feeds",
          "Valuation adjustments",
        ],
      },
      {
        id: "corporate-actions",
        title: "Corporate Actions",
        description: "How events affecting underlying assets impact products.",
        duration: "1.5 hours",
        concepts: [
          "Dividends",
          "Stock splits",
          "Mergers & acquisitions",
          "Adjustment calculations",
        ],
      },
      {
        id: "lifecycle-events",
        title: "Lifecycle Events",
        description: "Key events during product lifetime.",
        duration: "2 hours",
        concepts: [
          "Coupon fixing",
          "Barrier monitoring",
          "Early redemption",
          "Maturity payoff calculation",
          "Settlement process",
        ],
      },
      {
        id: "event-driven-architecture",
        title: "Event-Driven Architecture",
        description: "Software design patterns for product lifecycle management.",
        duration: "2 hours",
        concepts: [
          "State machines",
          "Event sourcing",
          "Timeline-based payoff logic",
          "Automated workflows",
        ],
      },
    ],
  },
  {
    id: "phase-6",
    phaseNumber: 6,
    title: "Pricing & Risk (High Level)",
    subtitle: "Understanding valuation and risk metrics",
    goal: "Understand inputs and outputs of pricing models without being a quant.",
    color: "amber",
    topics: [
      {
        id: "fair-value",
        title: "Fair Value & Pricing Models",
        description: "How structured products are priced.",
        duration: "2 hours",
        concepts: [
          "Black-Scholes model",
          "Monte Carlo simulation",
          "Closed-form solutions",
          "Model inputs: spot, volatility, rate, time",
        ],
      },
      {
        id: "volatility",
        title: "Volatility in Pricing",
        description: "The impact of volatility on product values.",
        duration: "1.5 hours",
        concepts: [
          "Historical volatility",
          "Implied volatility",
          "Volatility smile",
          "Impact on option value",
        ],
      },
      {
        id: "greeks",
        title: "The Greeks",
        description: "Risk sensitivities of derivatives.",
        duration: "3 hours",
        concepts: [
          "Delta: Sensitivity to underlying price",
          "Gamma: Rate of delta change",
          "Vega: Sensitivity to volatility",
          "Theta: Time decay",
          "Rho: Sensitivity to interest rates",
        ],
      },
      {
        id: "sensitivity-analysis",
        title: "Sensitivity Analysis",
        description: "Understanding how product values change with market conditions.",
        duration: "2 hours",
        concepts: [
          "Scenario analysis",
          "Stress testing",
          "Break-even analysis",
          "Risk-reward profiles",
        ],
      },
    ],
  },
  {
    id: "phase-7",
    phaseNumber: 7,
    title: "Regulation & EU Reality",
    subtitle: "Why software is complex",
    goal: "Understand regulatory requirements affecting product design and systems.",
    color: "red",
    topics: [
      {
        id: "mifid-ii",
        title: "MiFID II",
        description: "Markets in Financial Instruments Directive - EU regulation for investment services.",
        duration: "2 hours",
        concepts: [
          "Transaction reporting",
          "Client classification",
          "Best execution",
          "Product governance",
        ],
      },
      {
        id: "priips-kid",
        title: "PRIIPs & KID",
        description: "Packaged Retail Investment and Insurance Products regulation and Key Information Document.",
        duration: "2 hours",
        concepts: [
          "KID requirements",
          "Performance scenarios",
          "Cost disclosure",
          "Risk indicators",
        ],
      },
      {
        id: "suitability",
        title: "Suitability & Appropriateness",
        description: "Ensuring products match investor profiles.",
        duration: "1.5 hours",
        concepts: [
          "Investor risk profile",
          "Knowledge assessment",
          "Product complexity classification",
          "Target market definition",
        ],
      },
      {
        id: "transparency",
        title: "Transparency Requirements",
        description: "Disclosure and reporting obligations.",
        duration: "1.5 hours",
        concepts: [
          "Pre-trade transparency",
          "Post-trade reporting",
          "Price publication",
          "Trade repositories",
        ],
      },
    ],
  },
];

