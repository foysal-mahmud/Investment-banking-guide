import { GlossaryTerm } from '@/components/Glossary'

// Topic-specific glossary terms
export const topicGlossaryTerms: Record<string, GlossaryTerm[]> = {
  // Phase 0 - Financial Market Foundations
  "financial-markets": [
    { key: "FX", term: "Foreign Exchange", definition: "The market for trading currencies (e.g., EUR/USD)." },
    { key: "OTC", term: "Over-The-Counter", definition: "Trading done directly between parties, not on an exchange." },
    { key: "DAX", term: "Deutscher Aktienindex", definition: "German blue-chip stock market index of 40 major companies." },
    { key: "T+2", term: "Trade Plus Two Days", definition: "Standard settlement cycle where trades settle 2 business days after execution." },
    { key: "Bid", term: "Bid Price", definition: "The highest price a buyer is willing to pay for a security." },
    { key: "Ask", term: "Ask Price", definition: "The lowest price a seller is willing to accept for a security." },
  ],
  "primary-secondary": [
    { key: "IPO", term: "Initial Public Offering", definition: "The first time a company offers shares to the public on a stock exchange." },
    { key: "FPO", term: "Follow-on Public Offering", definition: "Additional shares issued by a company after the IPO." },
    { key: "OTC", term: "Over-The-Counter", definition: "Trading done directly between parties, not on an exchange." },
    { key: "T+2", term: "Trade Plus Two Days", definition: "Standard settlement cycle where trades settle 2 business days after execution." },
    { key: "ISIN", term: "International Securities Identification Number", definition: "A 12-character alphanumeric code that uniquely identifies a security." },
  ],
  "market-roles": [
    { key: "MM", term: "Market Maker", definition: "A firm that continuously quotes buy and sell prices, providing liquidity." },
    { key: "HFT", term: "High-Frequency Trading", definition: "Algorithmic trading with extremely fast execution speeds." },
    { key: "AUM", term: "Assets Under Management", definition: "Total market value of assets managed by an investment firm." },
    { key: "RFQ", term: "Request for Quote", definition: "A request to market makers to provide pricing for a specific trade." },
    { key: "ECN", term: "Electronic Communication Network", definition: "Automated system matching buy and sell orders." },
  ],
  "investment-vs-commercial": [
    { key: "IB", term: "Investment Banking", definition: "Financial services related to capital markets, M&A, and securities." },
    { key: "CB", term: "Commercial Banking", definition: "Traditional banking services like deposits, loans, and payments." },
    { key: "M&A", term: "Mergers & Acquisitions", definition: "Consolidation of companies through various financial transactions." },
    { key: "ECM", term: "Equity Capital Markets", definition: "Division handling equity issuance and related services." },
    { key: "DCM", term: "Debt Capital Markets", definition: "Division handling bond issuance and debt-related services." },
    { key: "S&T", term: "Sales & Trading", definition: "Division that executes trades for clients and the bank's own account." },
  ],

  // Phase 1 - Asset Classes & Underlyings
  "equities": [
    { key: "DAX", term: "Deutscher Aktienindex", definition: "German blue-chip stock market index of 40 major companies." },
    { key: "P/E", term: "Price-to-Earnings Ratio", definition: "Stock price divided by earnings per share." },
    { key: "EPS", term: "Earnings Per Share", definition: "Company's profit divided by outstanding shares." },
    { key: "Div", term: "Dividend", definition: "Portion of profits distributed to shareholders." },
    { key: "ISIN", term: "International Securities ID", definition: "12-character unique security identifier." },
    { key: "WKN", term: "Wertpapierkennnummer", definition: "German 6-character security identifier." },
  ],
  "fixed-income": [
    { key: "YTM", term: "Yield to Maturity", definition: "Total return expected if bond held until maturity." },
    { key: "Bund", term: "Bundesanleihe", definition: "German government bond." },
    { key: "Dur", term: "Duration", definition: "Measure of bond price sensitivity to interest rate changes." },
    { key: "bp", term: "Basis Point", definition: "0.01% - one hundredth of a percent." },
    { key: "Par", term: "Par Value", definition: "100% of face value - bond trading at face value." },
  ],
  "fx": [
    { key: "FX", term: "Foreign Exchange", definition: "The market for trading currencies." },
    { key: "Pip", term: "Percentage in Point", definition: "Smallest price move in FX (usually 0.0001)." },
    { key: "Spot", term: "Spot Rate", definition: "Current exchange rate for immediate delivery (T+2)." },
    { key: "Fwd", term: "Forward Rate", definition: "Exchange rate for future delivery, fixed today." },
    { key: "Quanto", term: "Quantity-Adjusting Option", definition: "Eliminates currency risk on foreign underlying." },
  ],
  "commodities": [
    { key: "XAU", term: "Gold (ISO code)", definition: "ISO 4217 currency code for gold." },
    { key: "WTI", term: "West Texas Intermediate", definition: "US oil price benchmark." },
    { key: "Brent", term: "Brent Crude", definition: "Global oil price benchmark from North Sea." },
    { key: "TTF", term: "Title Transfer Facility", definition: "European natural gas price benchmark." },
    { key: "Roll", term: "Roll Yield", definition: "Return from rolling expiring futures contracts." },
  ],
  "volatility": [
    { key: "HV", term: "Historical Volatility", definition: "Volatility calculated from past price data." },
    { key: "IV", term: "Implied Volatility", definition: "Volatility implied by current option prices." },
    { key: "VIX", term: "Volatility Index", definition: "S&P 500 expected 30-day volatility (Fear Index)." },
    { key: "VSTOXX", term: "Euro Volatility Index", definition: "EURO STOXX 50 expected volatility." },
    { key: "Corr", term: "Correlation", definition: "Measure of co-movement between assets (-1 to +1)." },
  ],

  // Phase 2 - Derivatives Basics
  "derivatives-intro": [
    { key: "Deriv", term: "Derivative", definition: "Financial instrument whose value derives from an underlying asset." },
    { key: "Notional", term: "Notional Value", definition: "The face value used to calculate payments in a derivative." },
    { key: "Hedge", term: "Hedging", definition: "Taking a position to offset potential losses in another position." },
    { key: "Spec", term: "Speculation", definition: "Taking risk in hope of profit from price movements." },
    { key: "Arb", term: "Arbitrage", definition: "Profiting from price differences in different markets." },
  ],
  "options-basics": [
    { key: "Call", term: "Call Option", definition: "Right to buy the underlying at the strike price." },
    { key: "Put", term: "Put Option", definition: "Right to sell the underlying at the strike price." },
    { key: "ATM", term: "At-The-Money", definition: "Strike price equals current market price." },
    { key: "ITM", term: "In-The-Money", definition: "Option would be profitable if exercised now." },
    { key: "OTM", term: "Out-of-The-Money", definition: "Option would not be profitable if exercised now." },
    { key: "Premium", term: "Option Premium", definition: "Price paid to buy an option." },
  ],
  "forwards-futures": [
    { key: "Fwd", term: "Forward Contract", definition: "OTC agreement to buy/sell at a future date at a set price." },
    { key: "Fut", term: "Futures Contract", definition: "Exchange-traded standardized forward contract." },
    { key: "Margin", term: "Margin", definition: "Collateral deposited to cover potential losses." },
    { key: "MTM", term: "Mark-to-Market", definition: "Daily settlement of gains/losses based on market price." },
    { key: "Roll", term: "Roll Over", definition: "Closing expiring contract and opening a new one." },
  ],
  "payoff-diagrams": [
    { key: "Strike", term: "Strike Price (K)", definition: "Price at which option can be exercised." },
    { key: "Premium", term: "Option Premium", definition: "Price paid to buy the option." },
    { key: "BE", term: "Break-even", definition: "Price where profit/loss equals zero." },
    { key: "Cap", term: "Cap Level", definition: "Maximum possible profit level." },
    { key: "Floor", term: "Floor Level", definition: "Minimum payoff level (capital protection)." },
  ],
  "moneyness": [
    { key: "ITM", term: "In-The-Money", definition: "Option has intrinsic value if exercised now." },
    { key: "ATM", term: "At-The-Money", definition: "Strike price equals current underlying price." },
    { key: "OTM", term: "Out-of-The-Money", definition: "Option has no intrinsic value currently." },
    { key: "IV", term: "Intrinsic Value", definition: "Value if the option were exercised immediately." },
    { key: "TV", term: "Time Value", definition: "Option premium minus intrinsic value." },
    { key: "Θ", term: "Theta", definition: "Daily time decay of option value." },
  ],

  // Phase 3 - Leverage Products
  "warrants": [
    { key: "Call", term: "Call Warrant", definition: "Warrant giving right to buy the underlying." },
    { key: "Put", term: "Put Warrant", definition: "Warrant giving right to sell the underlying." },
    { key: "Ratio", term: "Subscription Ratio", definition: "Number of warrants needed for one underlying unit." },
    { key: "Premium", term: "Warrant Premium", definition: "Amount paid above intrinsic value." },
    { key: "Lev", term: "Leverage", definition: "Multiplier effect of price movements." },
  ],
  "knock-outs": [
    { key: "KO", term: "Knock-Out", definition: "Barrier that terminates the product if touched." },
    { key: "SL", term: "Stop-Loss Level", definition: "Price level where the product is terminated." },
    { key: "Turbo", term: "Turbo Certificate", definition: "Leverage product with knock-out barrier." },
    { key: "Bear", term: "Bear/Short", definition: "Product that profits from price decreases." },
    { key: "Bull", term: "Bull/Long", definition: "Product that profits from price increases." },
  ],
  "mini-futures": [
    { key: "MF", term: "Mini-Future", definition: "Leverage product without expiry date." },
    { key: "Fin", term: "Financing Level", definition: "Adjusted strike price including financing costs." },
    { key: "SL", term: "Stop-Loss", definition: "Price level triggering termination with residual value." },
    { key: "Roll", term: "Roll-Over", definition: "Daily adjustment of financing level." },
    { key: "ON", term: "Overnight Cost", definition: "Daily financing charge for holding the position." },
  ],

  // Phase 4 - Structured Products
  "capital-protection": [
    { key: "CPN", term: "Capital Protection Note", definition: "Product guaranteeing return of principal at maturity." },
    { key: "Floor", term: "Protection Floor", definition: "Minimum guaranteed return percentage." },
    { key: "Part", term: "Participation Rate", definition: "Percentage of upside gain passed to investor." },
    { key: "Cap", term: "Cap Level", definition: "Maximum return limit on the product." },
    { key: "ZC", term: "Zero-Coupon Bond", definition: "Bond component providing capital protection." },
  ],
  "discount-certificates": [
    { key: "DC", term: "Discount Certificate", definition: "Product bought at discount with capped upside." },
    { key: "Cap", term: "Cap/Maximum Level", definition: "Maximum payout level at maturity." },
    { key: "Disc", term: "Discount", definition: "Amount below current spot price." },
    { key: "MR", term: "Maximum Return", definition: "Highest possible percentage return." },
    { key: "Side", term: "Sideways Yield", definition: "Return if price stays flat." },
  ],
  "bonus-certificates": [
    { key: "BC", term: "Bonus Certificate", definition: "Product paying bonus if barrier not breached." },
    { key: "Barrier", term: "Barrier Level", definition: "Price level that must not be touched." },
    { key: "Bonus", term: "Bonus Level", definition: "Guaranteed minimum payout if barrier intact." },
    { key: "Buffer", term: "Buffer/Cushion", definition: "Distance between current price and barrier." },
    { key: "Part", term: "Participation", definition: "Upside participation above bonus level." },
  ],
  "reverse-convertibles": [
    { key: "RC", term: "Reverse Convertible", definition: "High-coupon product with downside risk to underlying." },
    { key: "Cpn", term: "Coupon", definition: "Fixed interest payment regardless of outcome." },
    { key: "Strike", term: "Strike Price", definition: "Price determining physical vs cash settlement." },
    { key: "Phys", term: "Physical Delivery", definition: "Receiving shares instead of cash at maturity." },
    { key: "WO", term: "Worst-Of", definition: "Payoff based on worst-performing underlying." },
  ],
  "autocallables": [
    { key: "AC", term: "Autocallable", definition: "Product that can redeem early if conditions met." },
    { key: "AC Lvl", term: "Autocall Level", definition: "Price level triggering early redemption." },
    { key: "Obs", term: "Observation Date", definition: "Scheduled date when autocall condition is checked." },
    { key: "PDI", term: "Put Down-and-In", definition: "Barrier that activates downside risk if breached." },
    { key: "Cpn", term: "Coupon", definition: "Periodic or memory coupon payment." },
    { key: "WO", term: "Worst-Of", definition: "Product based on multiple underlyings, payoff tied to worst performer." },
  ],

  "leverage-mechanics": [
    { key: "Lev", term: "Leverage", definition: "Exposure divided by capital invested." },
    { key: "Vol Drag", term: "Volatility Drag", definition: "Loss from compounding in volatile markets." },
    { key: "Beta", term: "Beta Slippage", definition: "Performance gap vs target leverage over time." },
    { key: "Margin", term: "Margin", definition: "Collateral for futures positions." },
    { key: "MTM", term: "Mark-to-Market", definition: "Daily settlement of gains/losses." },
  ],

  // Phase 5 - Product Lifecycle
  "issuance": [
    { key: "ISIN", term: "International Securities ID", definition: "Unique 12-character security identifier." },
    { key: "WKN", term: "Wertpapierkennnummer", definition: "German 6-character security ID." },
    { key: "Term", term: "Term Sheet", definition: "Document defining product parameters." },
    { key: "KID", term: "Key Information Document", definition: "PRIIPs-required investor disclosure." },
    { key: "Issue", term: "Issue Date", definition: "Date when the product becomes tradeable." },
  ],
  "pricing": [
    { key: "FV", term: "Fair Value", definition: "Theoretical price based on model calculations." },
    { key: "Bid", term: "Bid Price", definition: "Price at which market maker buys." },
    { key: "Ask", term: "Ask Price", definition: "Price at which market maker sells." },
    { key: "Spread", term: "Bid-Ask Spread", definition: "Difference between bid and ask prices." },
    { key: "EOD", term: "End-of-Day", definition: "Official daily closing valuation." },
  ],
  "corporate-actions": [
    { key: "CA", term: "Corporate Action", definition: "Event affecting a security (dividend, split, etc.)." },
    { key: "Ex-Div", term: "Ex-Dividend Date", definition: "Date after which new buyers don't receive dividend." },
    { key: "Adj", term: "Adjustment Factor", definition: "Multiplier to modify product parameters." },
    { key: "Split", term: "Stock Split", definition: "Increasing shares while reducing price proportionally." },
    { key: "M&A", term: "Merger/Acquisition", definition: "Corporate combination requiring product adjustment." },
  ],
  "lifecycle-events": [
    { key: "Obs", term: "Observation Date", definition: "Scheduled date when conditions are checked." },
    { key: "Fix", term: "Fixing", definition: "Official price observation for settlement." },
    { key: "AC", term: "Autocall Event", definition: "Early redemption trigger." },
    { key: "Settle", term: "Settlement", definition: "Final exchange of cash/shares." },
    { key: "Memory", term: "Memory Coupon", definition: "Missed coupons that accumulate for later payment." },
  ],
  "event-driven-architecture": [
    { key: "EDA", term: "Event-Driven Architecture", definition: "System design where flow is determined by events." },
    { key: "ES", term: "Event Sourcing", definition: "Storing events instead of current state." },
    { key: "CQRS", term: "Command Query Separation", definition: "Separating read and write operations." },
    { key: "Saga", term: "Saga Pattern", definition: "Managing distributed transactions." },
    { key: "Idem", term: "Idempotency", definition: "Same operation produces same result." },
  ],
  "issuance-lifecycle": [
    { key: "ISIN", term: "International Securities Identification Number", definition: "Unique 12-character security identifier." },
    { key: "WKN", term: "Wertpapierkennnummer", definition: "German 6-character security ID." },
    { key: "Term", term: "Term Sheet", definition: "Document defining product parameters." },
    { key: "KID", term: "Key Information Document", definition: "PRIIPs-required investor disclosure." },
    { key: "Issue", term: "Issue Date", definition: "Date when the product becomes tradeable." },
  ],
  "pricing-valuation": [
    { key: "FV", term: "Fair Value", definition: "Theoretical price based on model calculations." },
    { key: "Bid", term: "Bid Price", definition: "Price at which market maker buys." },
    { key: "Ask", term: "Ask Price", definition: "Price at which market maker sells." },
    { key: "Spread", term: "Bid-Ask Spread", definition: "Difference between bid and ask prices." },
    { key: "Vol", term: "Volatility", definition: "Key input for option-based product pricing." },
  ],
  "barrier-monitoring": [
    { key: "KO", term: "Knock-Out", definition: "Barrier event terminating the product." },
    { key: "KI", term: "Knock-In", definition: "Barrier event activating a product feature." },
    { key: "Cont", term: "Continuous", definition: "Barrier monitored at all times during trading." },
    { key: "EOD", term: "End-of-Day", definition: "Barrier only checked at daily closing price." },
    { key: "Obs", term: "Observation", definition: "Barrier checked only on specific dates." },
  ],

  // Phase 6 - Pricing & Risk
  "fair-value": [
    { key: "FV", term: "Fair Value", definition: "Theoretical price based on model calculations." },
    { key: "BS", term: "Black-Scholes", definition: "Classic option pricing model." },
    { key: "MC", term: "Monte Carlo", definition: "Random simulation pricing method." },
    { key: "FD", term: "Finite Difference", definition: "Grid-based numerical pricing method." },
    { key: "PDE", term: "Partial Differential Equation", definition: "Mathematical equation solved for pricing." },
  ],
  "volatility-pricing": [
    { key: "HV", term: "Historical Volatility", definition: "Volatility calculated from past prices." },
    { key: "IV", term: "Implied Volatility", definition: "Volatility implied by option prices." },
    { key: "Smile", term: "Volatility Smile", definition: "IV pattern across different strikes." },
    { key: "Skew", term: "Volatility Skew", definition: "Asymmetry in the volatility smile." },
    { key: "SABR", term: "SABR Model", definition: "Popular volatility smile model." },
  ],
  "greeks": [
    { key: "Δ", term: "Delta", definition: "Price sensitivity to underlying price changes." },
    { key: "Γ", term: "Gamma", definition: "Rate of change of delta." },
    { key: "Θ", term: "Theta", definition: "Time decay - value lost per day." },
    { key: "V", term: "Vega", definition: "Sensitivity to volatility changes." },
    { key: "ρ", term: "Rho", definition: "Sensitivity to interest rate changes." },
  ],
  "sensitivity-analysis": [
    { key: "VaR", term: "Value at Risk", definition: "Maximum expected loss at confidence level." },
    { key: "ES", term: "Expected Shortfall", definition: "Average loss beyond VaR threshold." },
    { key: "Stress", term: "Stress Test", definition: "Analysis under extreme market conditions." },
    { key: "Scenario", term: "Scenario Analysis", definition: "Examining specific what-if conditions." },
    { key: "BE", term: "Break-even", definition: "Level where P&L equals zero." },
  ],

  // Phase 7 - Regulation
  "mifid-ii": [
    { key: "MiFID", term: "Markets in Financial Instruments Directive", definition: "EU regulation for investment services." },
    { key: "Best Ex", term: "Best Execution", definition: "Obligation to execute orders on best terms." },
    { key: "RTS", term: "Regulatory Technical Standards", definition: "Detailed implementation rules for MiFID II." },
    { key: "LEI", term: "Legal Entity Identifier", definition: "Unique identifier for legal entities in financial transactions." },
    { key: "SI", term: "Systematic Internaliser", definition: "Firm dealing on own account outside exchanges." },
  ],
  "priips-kid": [
    { key: "PRIIPs", term: "Packaged Retail Investment Products", definition: "EU regulation for retail investment disclosures." },
    { key: "KID", term: "Key Information Document", definition: "Standardized 3-page product disclosure." },
    { key: "SRI", term: "Summary Risk Indicator", definition: "1-7 scale showing product risk level." },
    { key: "RHP", term: "Recommended Holding Period", definition: "Suggested minimum investment timeframe." },
    { key: "RIY", term: "Reduction in Yield", definition: "Total cost impact expressed as annual percentage." },
  ],
  "suitability": [
    { key: "Suit", term: "Suitability", definition: "Full assessment required for advisory services." },
    { key: "Approp", term: "Appropriateness", definition: "Limited assessment for execution services." },
    { key: "TM", term: "Target Market", definition: "Defined suitable investor profile for a product." },
    { key: "RT", term: "Risk Tolerance", definition: "Client's willingness to accept losses." },
    { key: "Retail", term: "Retail Client", definition: "Non-professional investor with highest protection." },
  ],
  "transparency": [
    { key: "Pre-T", term: "Pre-Trade Transparency", definition: "Price/order information before trading." },
    { key: "Post-T", term: "Post-Trade Transparency", definition: "Trade information after execution." },
    { key: "ARM", term: "Approved Reporting Mechanism", definition: "Entity submitting transaction reports to regulators." },
    { key: "NCA", term: "National Competent Authority", definition: "National regulator (e.g., BaFin)." },
    { key: "RTS 28", term: "Regulatory Technical Standard 28", definition: "Best execution venue reporting requirement." },
  ],
}

// Default/fallback glossary terms used when topic has no specific terms
export const defaultGlossaryTerms: GlossaryTerm[] = [
  { key: "KO", term: "Knock-Out", definition: "A barrier event that terminates the product if the underlying reaches a certain price level." },
  { key: "KI", term: "Knock-In", definition: "A barrier event that activates certain product features if the underlying reaches a certain price level." },
  { key: "ATM", term: "At-The-Money", definition: "When the strike price equals the current market price of the underlying asset." },
  { key: "ITM", term: "In-The-Money", definition: "When exercising the option would result in a profit." },
  { key: "OTM", term: "Out-of-The-Money", definition: "When exercising the option would not result in a profit." },
  { key: "OTC", term: "Over-The-Counter", definition: "Trading done directly between parties, not on an exchange." },
  { key: "DAX", term: "Deutscher Aktienindex", definition: "German blue-chip stock market index of 40 major companies." },
  { key: "ISIN", term: "International Securities Identification Number", definition: "A 12-character alphanumeric code that uniquely identifies a security." },
]

// Get glossary terms for a specific topic
export function getGlossaryTermsForTopic(topicId: string): GlossaryTerm[] {
  return topicGlossaryTerms[topicId] || defaultGlossaryTerms
}

