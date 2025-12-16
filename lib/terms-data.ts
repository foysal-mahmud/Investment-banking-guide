export interface TermDefinition {
  term: string;
  explanation: string;
}

// Array of terms and their explanations
// Add more terms here as needed
export const TERMS_DEFINITIONS: TermDefinition[] = [
  {
    term: 'legal entity',
    explanation: 'A legal entity is a company, organization, or person that has legal rights and obligations, such as entering into contracts, owning property, and being sued. In banking, it refers to the specific corporate structure that issues financial products and is legally responsible for them.',
  },
  {
    term: 'commercial bank',
    explanation: 'A commercial bank is a financial institution that provides services like accepting deposits, making business loans, and offering basic investment products. They serve both individual consumers and businesses.',
  },
  {
    term: 'investment bank',
    explanation: 'An investment bank is a financial institution that assists corporations, governments, and other entities in raising capital through underwriting and securities issuance. They also provide advisory services for mergers, acquisitions, and other financial transactions.',
  },
  {
    term: 'universal bank',
    explanation: 'A universal bank is a financial institution that combines commercial banking and investment banking services under one legal entity. This model is common in Europe, allowing banks to offer both retail banking and capital markets services.',
  },
  {
    term: 'ISIN',
    explanation: 'ISIN (International Securities Identification Number) is a 12-character alphanumeric code that uniquely identifies a security. It is used globally to identify stocks, bonds, structured products, and other financial instruments.',
  },
  {
    term: 'primary market',
    explanation: 'The primary market is where new securities are issued and sold for the first time. Companies or banks issue new stocks, bonds, or structured products directly to investors, raising capital in the process.',
  },
  {
    term: 'secondary market',
    explanation: 'The secondary market is where previously issued securities are traded between investors. The issuing company or bank does not receive proceeds from these transactions, as trading occurs between investors.',
  },
  {
    term: 'OTC',
    explanation: 'OTC (Over-the-Counter) refers to trading that occurs directly between two parties without going through an exchange. OTC markets are decentralized and typically involve bilateral negotiations between dealers and clients.',
  },
  {
    term: 'structured product',
    explanation: 'A structured product is a pre-packaged investment that typically includes assets linked to interest plus one or more derivatives. These products are designed to facilitate highly customized risk-return objectives.',
  },
  {
    term: 'KID',
    explanation: 'KID (Key Information Document) is a standardized document required under PRIIPs regulation in Europe. It provides investors with essential information about a product, including risks, costs, and potential returns.',
  },
  {
    term: 'PRIIPs',
    explanation: 'PRIIPs (Packaged Retail and Insurance-based Investment Products) is a European Union regulation that requires manufacturers of investment products to provide standardized information to retail investors through Key Information Documents (KIDs).',
  },
  {
    term: 'MiFID',
    explanation: 'MiFID (Markets in Financial Instruments Directive) is a European Union law that provides harmonized regulation for investment services across member states. It aims to increase transparency and protect investors.',
  },
  {
    term: 'term sheet',
    explanation: 'A term sheet is a non-binding document that outlines the basic terms and conditions of an investment or financial product. It serves as a template for the final legal documents.',
  },
  {
    term: 'prospectus',
    explanation: 'A prospectus is a formal legal document that provides details about an investment offering to the public. It includes information about the issuer, the securities being offered, and associated risks.',
  },
  {
    term: 'market maker',
    explanation: 'A market maker is a firm or individual that provides liquidity to markets by quoting both buy and sell prices for a security. They profit from the spread between the bid and ask prices.',
  },
  {
    term: 'underlying',
    explanation: 'An underlying asset is the financial instrument (stock, index, commodity, currency, etc.) on which a derivative or structured product is based. The value of the derivative depends on the performance of the underlying.',
  },
  {
    term: 'barrier',
    explanation: 'A barrier is a predetermined price level in structured products that, when breached, triggers a specific event such as early redemption, loss of capital protection, or change in payoff structure.',
  },
  {
    term: 'strike',
    explanation: 'A strike price (or strike level) is the predetermined price at which an option or structured product can be exercised. It is the price at which the holder can buy or sell the underlying asset.',
  },
  {
    term: 'coupon',
    explanation: 'A coupon is a periodic interest payment made to the holder of a bond or structured product. The coupon rate is the annual interest rate paid on the face value of the security.',
  },
  {
    term: 'maturity',
    explanation: 'Maturity is the date on which a financial instrument expires or comes due. At maturity, the final payment is made to the holder, and the instrument ceases to exist.',
  },
  {
    term: 'fair value',
    explanation: 'Fair value is the estimated price at which an asset or liability would be exchanged between knowledgeable, willing parties in an arm\'s length transaction. It represents the current market value.',
  },
  // Phase 0: Financial Market Foundations
  {
    term: 'financial market',
    explanation: 'A financial market is a marketplace where buyers and sellers trade financial assets such as stocks, bonds, currencies, and derivatives. It facilitates the flow of capital between investors and entities that need funding.',
  },
  {
    term: 'liquidity',
    explanation: 'Liquidity refers to the ability to quickly convert assets to cash without significantly affecting the price. High liquidity means you can easily buy or sell large amounts of a security.',
  },
  {
    term: 'bid-ask spread',
    explanation: 'The bid-ask spread is the difference between the highest price a buyer is willing to pay (bid) and the lowest price a seller is willing to accept (ask). A narrow spread indicates high liquidity.',
  },
  {
    term: 'exchange',
    explanation: 'An exchange is an organized market providing a platform for trading securities. Examples include Xetra (Frankfurt), Börse Stuttgart, and SIX Swiss Exchange. Exchanges ensure price transparency and guarantee settlement.',
  },
  {
    term: 'broker',
    explanation: 'A broker is an intermediary that executes trades on behalf of clients. They route client orders to exchanges but don\'t take risk (unlike market makers). Examples include Trade Republic, Scalable Capital, and full-service private banks.',
  },
  {
    term: 'clearinghouse',
    explanation: 'A clearinghouse is an entity that guarantees trade settlement and manages counterparty risk. It acts as a central counterparty (CCP), becoming the buyer to every seller and seller to every buyer, reducing counterparty risk.',
  },
  {
    term: 'settlement',
    explanation: 'Settlement is the process of transferring securities and cash to complete a trade. In Europe, equity trades typically settle T+2 (trade date plus 2 business days).',
  },
  {
    term: 'issuer',
    explanation: 'An issuer is a company, government, or bank that creates and sells securities to raise capital. Examples include Volkswagen issuing bonds, Germany issuing Bunds, or Deutsche Bank issuing structured products.',
  },
  {
    term: 'retail investor',
    explanation: 'A retail investor is an individual person investing personal money, typically ranging from €1,000 to €1 million. They access markets via online brokers and invest in stocks, ETFs, structured products, and warrants.',
  },
  {
    term: 'institutional investor',
    explanation: 'An institutional investor is an organization managing large pools of capital (€100 million to €100+ billion). Types include pension funds, insurance companies, asset managers, hedge funds, and sovereign wealth funds.',
  },
  {
    term: 'sell-side',
    explanation: 'Sell-side refers to investment banks and broker-dealers that create securities (underwriting), sell securities to investors, trade on behalf of clients, provide research, and act as market makers. Examples include Deutsche Bank Markets and Goldman Sachs.',
  },
  {
    term: 'buy-side',
    explanation: 'Buy-side refers to asset managers, hedge funds, pension funds, and insurance companies that buy securities for investment and manage portfolios. They earn returns for end clients through management fees and performance fees.',
  },
  {
    term: 'IPO',
    explanation: 'IPO (Initial Public Offering) is the first time a company sells shares to the public. The company raises capital by issuing new shares, with investment banks acting as underwriters to facilitate the process.',
  },
  {
    term: 'underwriter',
    explanation: 'An underwriter is an investment bank that manages new securities issuance, often buying securities from the issuer to resell. They facilitate IPOs, bond issuances, and other primary market transactions.',
  },
  {
    term: 'roadshow',
    explanation: 'A roadshow is a marketing tour where company management pitches an investment opportunity (typically an IPO) to institutional investors across different cities to gauge interest and build an order book.',
  },
  {
    term: 'M&A',
    explanation: 'M&A (Mergers and Acquisitions) refers to investment banking advisory services helping companies combine or acquire each other. Investment banks earn fees (typically 1-3% of deal value) for providing strategic and financial advice.',
  },
  {
    term: 'proprietary trading',
    explanation: 'Proprietary trading is when a bank trades using its own capital (not client money) to generate profits. This differs from agency trading where the bank acts on behalf of clients for a commission.',
  },
  {
    term: 'custodian',
    explanation: 'A custodian is an entity that holds securities on behalf of investors. They provide safekeeping, settlement services, and corporate action processing. Examples include Clearstream and major banks\' custody divisions.',
  },
  {
    term: 'CCP',
    explanation: 'CCP (Central Counterparty) is a clearinghouse that interposes itself between trading parties, becoming the buyer to every seller and seller to every buyer. This reduces counterparty risk and enables netting of positions.',
  },
  {
    term: 'Basel III',
    explanation: 'Basel III is an international regulatory framework that sets bank capital requirements to ensure banks can absorb losses. It requires banks to maintain minimum capital ratios and includes stress testing requirements.',
  },
  {
    term: 'EMIR',
    explanation: 'EMIR (European Market Infrastructure Regulation) is an EU regulation governing derivatives trading. It requires reporting of all derivatives trades, central clearing for certain products, and risk mitigation techniques.',
  },
  {
    term: 'order book',
    explanation: 'An order book is an electronic list of buy and sell orders for a specific security, organized by price level. It shows market depth and helps determine the current market price based on supply and demand.',
  },
  {
    term: 'price discovery',
    explanation: 'Price discovery is the process by which markets determine fair prices through the interaction of supply and demand. When more people want to buy than sell, the price rises, revealing what the market believes an asset is worth.',
  },
  {
    term: 'capital allocation',
    explanation: 'Capital allocation refers to how markets channel funds from those who have excess capital (savers/investors) to those who need it (companies, governments). This is a key function of financial markets.',
  },
  {
    term: 'risk transfer',
    explanation: 'Risk transfer is the process by which markets allow participants to transfer risk to those willing to bear it, usually for a price. Examples include using FX forwards to hedge currency risk or options to hedge price risk.',
  },
  // Phase 2: Derivatives Basics
  {
    term: 'derivative',
    explanation: 'A derivative is a financial contract whose value is derived from the performance of an underlying asset, index, or rate. The derivative itself has no inherent value - its worth comes entirely from the underlying. Examples include options, futures, forwards, and swaps.',
  },
  {
    term: 'hedging',
    explanation: 'Hedging is the practice of using derivatives to reduce or eliminate risk from price movements. Hedgers are willing to pay to remove uncertainty. For example, a German exporter might buy EUR/USD forwards to lock in an exchange rate and protect against currency fluctuations.',
  },
  {
    term: 'speculation',
    explanation: 'Speculation is using derivatives to profit from expected price movements. Speculators provide liquidity and take on risk from hedgers. Instead of buying the underlying directly, they might use options or futures to gain leveraged exposure.',
  },
  {
    term: 'arbitrage',
    explanation: 'Arbitrage is the practice of profiting from price discrepancies between markets without taking risk. Arbitrageurs buy in the cheaper market and sell in the more expensive market, keeping prices aligned across markets.',
  },
  {
    term: 'leverage',
    explanation: 'Leverage in derivatives means controlling a large exposure with a small investment. Instead of buying the underlying directly, derivatives require only a fraction of the value. This amplifies both gains and losses - you can lose more than your initial investment with some derivatives.',
  },
  {
    term: 'counterparty risk',
    explanation: 'Counterparty risk is the risk that the other party to a derivative contract defaults on their obligation. Exchange-traded derivatives have minimal counterparty risk (clearinghouse guarantees), while OTC derivatives have significant counterparty risk depending on the other party\'s creditworthiness.',
  },
  {
    term: 'mark-to-market',
    explanation: 'Mark-to-market is the practice of valuing derivatives at current market prices, not original cost. Daily P&L equals today\'s value minus yesterday\'s value. Futures positions are marked-to-market daily, with gains credited and losses debited from margin accounts.',
  },
  {
    term: 'notional',
    explanation: 'Notional is the face value of a derivative contract, often much larger than the market value. For example, a futures contract might have a notional value of €400,000 but only require €20,000 in margin to trade.',
  },
  {
    term: 'premium',
    explanation: 'Premium is the price paid to buy an option. The premium consists of intrinsic value (if any) plus time value. Once paid, the premium is the maximum loss for the option buyer.',
  },
  {
    term: 'expiration',
    explanation: 'Expiration (also called expiry or maturity) is the date when a derivative contract ends. For European options, exercise can only occur at expiration. For American options, exercise can occur any time before expiration.',
  },
  {
    term: 'long position',
    explanation: 'A long position means buying a derivative (or underlying asset), expecting the price to rise. For options, being long means you hold the right to buy (call) or sell (put). Maximum loss for long option positions is limited to the premium paid.',
  },
  {
    term: 'short position',
    explanation: 'A short position means selling a derivative (or underlying asset), expecting the price to fall. For options, being short means you have the obligation to fulfill if exercised. Short positions can have unlimited loss potential (especially short calls).',
  },
  {
    term: 'forward',
    explanation: 'A forward contract is a customized, private OTC agreement between two parties to buy/sell an asset at a specified future date at a price agreed today. Forwards are fully customizable but have counterparty risk and limited liquidity.',
  },
  {
    term: 'futures',
    explanation: 'A futures contract is a standardized agreement traded on an exchange to buy/sell an asset at a specified future date at a price agreed today. Futures are standardized, have daily mark-to-market settlement, and are guaranteed by a clearinghouse, eliminating counterparty risk.',
  },
  {
    term: 'margin',
    explanation: 'Margin is the deposit required to trade futures contracts. Instead of paying full contract value, traders deposit a small percentage (initial margin). Maintenance margin is the minimum balance required, and variation margin is the daily settlement of gains/losses.',
  },
  {
    term: 'basis',
    explanation: 'Basis is the difference between the futures price and the spot price. Basis can be positive (contango) or negative (backwardation). As expiry approaches, futures price converges to spot price, and basis approaches zero.',
  },
  {
    term: 'contango',
    explanation: 'Contango is when the futures price is higher than the spot price (positive basis). This typically occurs when storage costs or interest rates make holding the asset until delivery more expensive than buying it now.',
  },
  {
    term: 'backwardation',
    explanation: 'Backwardation is when the futures price is lower than the spot price (negative basis). This can occur when there\'s high demand for immediate delivery or when the underlying pays dividends or has convenience yield.',
  },
  {
    term: 'physical settlement',
    explanation: 'Physical settlement means actual delivery of the underlying asset at contract expiration. For example, gold futures require delivery of physical gold, while most index futures are cash-settled (you can\'t deliver an index).',
  },
  {
    term: 'cash settlement',
    explanation: 'Cash settlement means payment of the cash difference between the contract price and spot price at expiration, rather than delivering the underlying asset. Most index futures and many derivatives are cash-settled.',
  },
  {
    term: 'call option',
    explanation: 'A call option gives the holder the right (but not the obligation) to buy an underlying asset at a specified strike price within a specified time period. You buy calls when you expect the underlying price to rise. Maximum loss is the premium paid.',
  },
  {
    term: 'put option',
    explanation: 'A put option gives the holder the right (but not the obligation) to sell an underlying asset at a specified strike price within a specified time period. You buy puts when you expect the underlying price to fall or want protection against a fall.',
  },
  {
    term: 'exercise',
    explanation: 'Exercise is using the right to buy (for calls) or sell (for puts) the underlying asset at the strike price. European options can only be exercised at expiration, while American options can be exercised any time before expiration.',
  },
  {
    term: 'European option',
    explanation: 'A European option can only be exercised at expiration. Most index options and structured products use European-style options. They are typically less valuable than American options but the difference is often small.',
  },
  {
    term: 'American option',
    explanation: 'An American option can be exercised any time before expiration. Most US stock options are American-style. Early exercise usually forfeits time value, so it\'s rarely optimal for non-dividend paying stocks.',
  },
  {
    term: 'intrinsic value',
    explanation: 'Intrinsic value is what an option is worth if exercised immediately. For calls: MAX(0, Spot - Strike). For puts: MAX(0, Strike - Spot). Only in-the-money options have intrinsic value.',
  },
  {
    term: 'time value',
    explanation: 'Time value (also called extrinsic value) is the portion of an option\'s premium above its intrinsic value. It represents the possibility that the option could become more valuable before expiration. Time value decays as expiry approaches, especially in the last month.',
  },
  {
    term: 'moneyness',
    explanation: 'Moneyness describes the relationship between an option\'s strike price and the current underlying price. Options can be in-the-money (ITM), at-the-money (ATM), or out-of-the-money (OTM). Moneyness determines intrinsic value and exercise probability.',
  },
  {
    term: 'ITM',
    explanation: 'ITM (In-the-Money) means an option has intrinsic value. For calls: spot price > strike price. For puts: spot price < strike price. ITM options are more likely to be exercised and move more like the underlying (high delta).',
  },
  {
    term: 'ATM',
    explanation: 'ATM (At-the-Money) means the strike price approximately equals the current spot price. ATM options have the highest time value, highest gamma (sensitivity to price changes), and highest vega (sensitivity to volatility changes).',
  },
  {
    term: 'OTM',
    explanation: 'OTM (Out-of-the-Money) means an option has no intrinsic value. For calls: spot price < strike price. For puts: spot price > strike price. OTM options are less likely to be exercised but offer more leverage for the same premium.',
  },
  {
    term: 'theta',
    explanation: 'Theta (Θ) measures the daily time value decay of an option. It represents how much an option\'s premium decreases per day due to time passing. Theta accelerates dramatically in the last weeks before expiration, with ATM options having the highest theta.',
  },
  {
    term: 'vega',
    explanation: 'Vega (ν) measures an option\'s sensitivity to volatility changes. It represents how much an option\'s premium changes per 1% change in volatility. Higher volatility means higher option premiums. Vega is highest for ATM options and decreases for deep ITM/OTM options.',
  },
  {
    term: 'delta',
    explanation: 'Delta (Δ) measures an option\'s sensitivity to underlying price changes. It represents how much an option\'s premium changes per €1 change in the underlying. Call deltas range from 0 to 1, put deltas range from -1 to 0. Deep ITM options have deltas near ±1, OTM options have deltas near 0.',
  },
  {
    term: 'gamma',
    explanation: 'Gamma (Γ) measures the rate of change of delta. It represents how much delta changes per €1 change in the underlying. High gamma means delta changes rapidly, requiring frequent hedging adjustments. Gamma is highest for ATM options.',
  },
  {
    term: 'payoff',
    explanation: 'Payoff is the profit or loss at expiration for a derivative position. Payoff diagrams visually represent how much money you make or lose at different underlying prices. Standard payoff diagrams show P&L at expiration only, not before expiry.',
  },
  {
    term: 'break-even',
    explanation: 'Break-even is the underlying price where the payoff equals zero (no profit, no loss). For long calls: break-even = strike + premium. For long puts: break-even = strike - premium. This is the price the underlying must reach for the position to be profitable.',
  },
  {
    term: 'cap',
    explanation: 'A cap is the maximum possible profit or return on a financial product. Products with caps typically involve selling options (like short calls) which limits upside potential. Discount certificates and capped calls have caps.',
  },
  {
    term: 'floor',
    explanation: 'A floor is the minimum payoff or capital protection level. Products with floors typically involve buying options (like long puts) or zero-coupon bonds. Capital protection notes have floors that protect principal at maturity.',
  },
  {
    term: 'spread',
    explanation: 'A spread is an options strategy using multiple options at different strikes. Examples include bull call spreads (long lower strike call + short higher strike call) and bear put spreads. Spreads limit both profit and loss potential.',
  },
  {
    term: 'straddle',
    explanation: 'A straddle is an options strategy involving a long call and long put at the same strike price. It profits from large moves in either direction but loses if the underlying stays near the strike. Maximum loss is the total premium paid for both options.',
  },
  // Phase 1: Asset Classes & Underlyings
  {
    term: 'equity',
    explanation: 'Equity represents ownership shares in companies. When you buy a stock, you become a part-owner entitled to dividends and voting rights. Equities are the most common underlying for structured products in Germany.',
  },
  {
    term: 'stock',
    explanation: 'A stock (also called share) represents ownership in a company. Common stock provides voting rights and dividend rights, while preferred stock typically has fixed dividends but no voting rights.',
  },
  {
    term: 'market capitalization',
    explanation: 'Market capitalization (market cap) is the total market value of a company\'s outstanding shares, calculated as share price × number of shares. Companies are classified as large cap (>€10B), mid cap (€2-10B), or small cap (<€2B).',
  },
  {
    term: 'P/E ratio',
    explanation: 'P/E ratio (Price-to-Earnings) measures how expensive a stock is relative to its earnings. Formula: Share Price ÷ Earnings Per Share. High P/E (>25) suggests growth expectations, low P/E (<15) suggests value or low growth.',
  },
  {
    term: 'dividend yield',
    explanation: 'Dividend yield is the annual dividend income as a percentage of stock price. Formula: Annual Dividend Per Share ÷ Share Price × 100. It shows the income return from owning the stock.',
  },
  {
    term: 'index',
    explanation: 'An index is a basket of stocks designed to represent a market or sector. Indices are crucial because most structured products use indices (not individual stocks) as underlyings. Examples include DAX, EURO STOXX 50, S&P 500.',
  },
  {
    term: 'DAX',
    explanation: 'DAX (Deutscher Aktienindex) is Germany\'s flagship stock index with 40 components, free-float market cap weighted. It\'s a performance index (includes dividends) with base value of 1,000 from December 1987.',
  },
  {
    term: 'free float',
    explanation: 'Free float refers to shares available for public trading, excluding insider holdings, strategic holdings, and government ownership. Most modern indices use free-float market cap weighting.',
  },
  {
    term: 'ex-dividend',
    explanation: 'Ex-dividend date is the date after which new buyers don\'t receive the declared dividend. On this date, the stock price typically drops by approximately the dividend amount.',
  },
  {
    term: 'blue chip',
    explanation: 'Blue chip refers to large, well-established, financially stable companies with reliable earnings and dividends. Examples include DAX components like SAP, Siemens, and Allianz.',
  },
  {
    term: 'ISIN',
    explanation: 'ISIN (International Securities Identification Number) is a 12-character alphanumeric code that uniquely identifies a security globally. It\'s used to identify stocks, bonds, structured products, and other financial instruments.',
  },
  {
    term: 'WKN',
    explanation: 'WKN (Wertpapierkennnummer) is a 6-character German security identifier. While ISIN is international, WKN is the traditional German identifier still widely used in German markets.',
  },
  {
    term: 'corporate action',
    explanation: 'Corporate actions are events that affect stock prices and require adjustments in products. Examples include dividends, stock splits, rights issues, mergers, and spin-offs. Products must adjust strikes, barriers, and other parameters accordingly.',
  },
  {
    term: 'dividend',
    explanation: 'A dividend is a distribution of company profits to shareholders, typically paid quarterly or annually. Dividends affect stock prices (ex-dividend drop) and must be accounted for in structured product pricing and barrier adjustments.',
  },
  {
    term: 'stock split',
    explanation: 'A stock split divides existing shares into multiple shares. For example, a 10-for-1 split means 1 share at €1,200 becomes 10 shares at €120. Total value is unchanged, but strike prices and barriers in products must be adjusted proportionally.',
  },
  {
    term: 'rights issue',
    explanation: 'A rights issue is when a company offers existing shareholders the right to buy new shares at a discount. This dilutes existing shareholdings and requires ratio adjustments in structured products.',
  },
  {
    term: 'fixed income',
    explanation: 'Fixed income refers to debt securities that pay investors regular interest payments (coupons) and return the principal at maturity. Unlike equities where you own part of a company, bonds make you a creditor who has lent money to the issuer.',
  },
  {
    term: 'bond',
    explanation: 'A bond is a debt security where the issuer borrows money from investors and promises to pay periodic interest (coupon) and return the principal at maturity. Bonds are the second most important underlying for structured products.',
  },
  {
    term: 'principal',
    explanation: 'Principal (also called face value or par value) is the amount repaid at bond maturity. For example, a €1,000 bond returns €1,000 at maturity, regardless of the price paid to buy it.',
  },
  {
    term: 'face value',
    explanation: 'Face value (also called principal or par value) is the nominal amount of a bond that will be repaid at maturity. Bonds are typically issued at par (100) but trade at premium (>100) or discount (<100) based on interest rates and credit quality.',
  },
  {
    term: 'par',
    explanation: 'Par means trading at 100% of face value. A bond trading at par costs exactly its face value. Bonds typically trade at premium (>100) when rates fall or discount (<100) when rates rise.',
  },
  {
    term: 'Bund',
    explanation: 'Bund is the German 10-year government bond, considered "risk-free" in EUR markets and serving as the benchmark for eurozone interest rates. Other German government bonds include Schatz (2-year) and Bobl (5-year).',
  },
  {
    term: 'corporate bond',
    explanation: 'A corporate bond is issued by companies to raise capital. They pay higher yields than government bonds due to credit risk. Credit ratings (AAA to D) indicate the issuer\'s ability to repay debt.',
  },
  {
    term: 'credit rating',
    explanation: 'Credit rating is an assessment of an issuer\'s ability to repay debt. Ratings range from AAA (highest quality) to D (default). Investment grade is BBB- and above, while BB+ and below are high yield ("junk") bonds.',
  },
  {
    term: 'YTM',
    explanation: 'YTM (Yield to Maturity) is the most important yield measure - the total return if a bond is held to maturity, including all coupon payments, capital gain/loss from price vs face value, and reinvestment of coupons.',
  },
  {
    term: 'yield curve',
    explanation: 'The yield curve shows yields for bonds of different maturities from the same issuer. Normal curves slope upward (longer = higher yield), inverted curves slope downward (often predicts recession), and flat curves indicate uncertainty.',
  },
  {
    term: 'duration',
    explanation: 'Duration measures a bond\'s sensitivity to interest rate changes. Rule of thumb: if rates rise 1%, a bond with duration of 5 years loses approximately 5% in value. Longer duration = higher interest rate risk.',
  },
  {
    term: 'convexity',
    explanation: 'Convexity captures the curvature in bond price changes beyond the linear approximation of duration. Positive convexity means bonds gain more from rate drops than they lose from rate rises. Most regular bonds have positive convexity.',
  },
  {
    term: 'Pfandbrief',
    explanation: 'Pfandbrief (covered bond) is a German specialty dating back 250 years - among the safest bonds after government debt. Secured by high-quality assets (mortgages or public sector loans) with dual recourse to issuer and asset pool.',
  },
  {
    term: 'EURIBOR',
    explanation: 'EURIBOR (Euro Interbank Offered Rate) is the benchmark floating rate for eurozone interbank lending. It\'s used as a reference rate for floating rate notes, swaps, and many structured products.',
  },
  {
    term: 'basis point',
    explanation: 'A basis point (bp) is 0.01% (100 bp = 1%). It\'s the standard unit for expressing small changes in interest rates, bond yields, and spreads. For example, a 25 bp rate hike means rates increased by 0.25%.',
  },
  {
    term: 'accrued interest',
    explanation: 'Accrued interest is interest accumulated since the last coupon payment. When buying a bond between coupon dates, you pay the seller accrued interest. Day count conventions (ACT/360, 30/360, ACT/ACT) determine the calculation.',
  },
  {
    term: 'commodity',
    explanation: 'Commodities are physical goods traded on exchanges or OTC markets. Unlike financial assets, commodities are tangible assets. Types include precious metals (gold, silver), energy (oil, gas), agricultural (wheat, coffee), and industrial metals (copper, aluminum).',
  },
  {
    term: 'spot price',
    explanation: 'Spot price is the current market price for immediate delivery of a commodity or asset. In FX, spot means exchange within T+2 business days. Spot prices are the reference point for futures and forward prices.',
  },
  {
    term: 'roll yield',
    explanation: 'Roll yield is the return from rolling expiring futures contracts to the next contract month. In contango markets, roll yield is negative (sell cheap, buy expensive). In backwardation, roll yield is positive (sell expensive, buy cheap).',
  },
  {
    term: 'convenience yield',
    explanation: 'Convenience yield is the benefit of holding a physical commodity rather than a futures contract. It reflects the value of having immediate access to the commodity, especially during supply shortages.',
  },
  {
    term: 'FX',
    explanation: 'FX (Foreign Exchange or Forex) is the global market for trading currencies. It\'s the largest and most liquid financial market with daily trading volume exceeding $7.5 trillion. FX trades 24 hours, 5 days a week over-the-counter.',
  },
  {
    term: 'currency pair',
    explanation: 'A currency pair shows how much of the quote currency (second) is needed to buy one unit of the base currency (first). For example, EUR/USD = 1.0850 means 1 EUR costs 1.0850 USD.',
  },
  {
    term: 'base currency',
    explanation: 'Base currency is the first currency in a currency pair - what you\'re buying. In EUR/USD, EUR is the base currency. The exchange rate shows how many units of the quote currency equal one unit of the base currency.',
  },
  {
    term: 'quote currency',
    explanation: 'Quote currency is the second currency in a currency pair - what you\'re paying with. In EUR/USD, USD is the quote currency. The exchange rate shows how many units of the quote currency equal one unit of the base currency.',
  },
  {
    term: 'pip',
    explanation: 'A pip is the smallest standard price movement in FX (usually 0.0001). For EUR/USD, 1.0850 → 1.0851 = +1 pip. For USD/JPY, a pip is 0.01. Major pairs have tight spreads (2-5 pips), exotic pairs have wider spreads (20-100 pips).',
  },
  {
    term: 'carry trade',
    explanation: 'A carry trade involves borrowing a low-rate currency to invest in a high-rate currency, profiting from the interest rate differential. It works when exchange rates remain stable, but can suffer large losses if the funding currency appreciates.',
  },
  {
    term: 'safe haven',
    explanation: 'A safe haven is a currency that appreciates during market stress and uncertainty. Examples include CHF (Swiss Franc), JPY (Japanese Yen), and USD (US Dollar) during global crises.',
  },
  {
    term: 'quanto',
    explanation: 'A quanto product eliminates currency risk for foreign underlyings. For example, a German investor wanting S&P 500 exposure without USD risk gets returns paid directly in EUR at 1:1 ratio, with the issuer hedging the currency risk.',
  },
  {
    term: 'volatility',
    explanation: 'Volatility measures how much an asset\'s price fluctuates over time, typically expressed as annualized standard deviation of returns. Higher volatility means larger price swings. It directly impacts option and structured product prices.',
  },
  {
    term: 'historical volatility',
    explanation: 'Historical volatility (HV) is backward-looking volatility calculated from past price data (typically 20, 60, or 252 days). It\'s used for risk measurement, performance analysis, and model backtesting.',
  },
  {
    term: 'implied volatility',
    explanation: 'Implied volatility (IV) is forward-looking volatility derived from current option prices. It represents the market\'s expectation of future volatility, extracted by solving option pricing models backward. IV is used for option pricing and as a sentiment indicator.',
  },
  {
    term: 'VIX',
    explanation: 'VIX (CBOE Volatility Index) measures expected 30-day volatility of the S&P 500, calculated from S&P 500 option prices. Known as the "Fear Index," VIX typically spikes during market falls and drops during rallies. Normal range is 12-20.',
  },
  {
    term: 'VSTOXX',
    explanation: 'VSTOXX is the European volatility index for EURO STOXX 50, equivalent to VIX for European markets. It measures expected 30-day volatility and serves as a European "fear gauge" for market sentiment.',
  },
  {
    term: 'volatility smile',
    explanation: 'Volatility smile is the pattern where options with different strike prices have different implied volatilities. OTM puts and OTM calls typically have higher IV than ATM options, reflecting market pricing of crash risk and demand for protection.',
  },
  {
    term: 'volatility surface',
    explanation: 'Volatility surface is a 3D representation showing how implied volatility varies by both strike price and maturity. It\'s critical for pricing structured products with barriers at different levels and different maturities.',
  },
  {
    term: 'correlation',
    explanation: 'Correlation measures how two assets move relative to each other, ranging from -1.0 (perfect negative) to +1.0 (perfect positive). Correlation determines diversification benefits and basket product behavior. Correlations typically increase during crises.',
  },
  // Phase 3: Leverage Products
  {
    term: 'leverage product',
    explanation: 'Leverage products are derivatives that allow investors to gain amplified exposure to underlying assets with a relatively small capital investment. Gains and losses are multiplied compared to direct investment. Examples include warrants, knock-out certificates, and mini-futures.',
  },
  {
    term: 'warrant',
    explanation: 'A warrant is a bank-issued option-like security that gives the holder the right to buy (call warrant) or sell (put warrant) an underlying asset at a specified price. Warrants are long-dated (months to years), securitized (have ISIN), and traded on exchanges. They offer leveraged exposure with limited capital.',
  },
  {
    term: 'call warrant',
    explanation: 'A call warrant gives the holder the right to buy an underlying asset at a specified strike price. You buy call warrants when you expect the underlying price to rise. They offer leveraged bullish exposure with maximum loss limited to the premium paid.',
  },
  {
    term: 'put warrant',
    explanation: 'A put warrant gives the holder the right to sell an underlying asset at a specified strike price. You buy put warrants when you expect the underlying price to fall or want protection. They offer leveraged bearish exposure with maximum loss limited to the premium paid.',
  },
  {
    term: 'ratio',
    explanation: 'Ratio (Bezugsverhältnis) is the number of units of underlying controlled by one warrant or certificate. A ratio of 0.01 means you need 100 warrants to control 1 unit of the underlying. Lower ratios mean higher leverage potential.',
  },
  {
    term: 'capped warrant',
    explanation: 'A capped warrant (also called discount warrant) has a cap on maximum payout, making it cheaper than plain warrants. You sacrifice unlimited upside for lower cost. The cap is typically set by selling an additional call option at a higher strike.',
  },
  {
    term: 'turbo warrant',
    explanation: 'A turbo warrant is a warrant with a knock-out barrier feature. It offers higher leverage than plain warrants but risks total loss if the barrier is hit. Turbo warrants combine option-like characteristics with barrier risk.',
  },
  {
    term: 'knock-out certificate',
    explanation: 'A knock-out certificate (also called Turbo or KO certificate) is a leverage product with a barrier feature. If the underlying touches the barrier during the product\'s lifetime, the certificate is immediately terminated and the investor loses most or all of their investment. This allows very high leverage with defined maximum loss.',
  },
  {
    term: 'turbo',
    explanation: 'Turbo is a common name for knock-out certificates, especially in Germany. Turbos can be Long (bullish) or Short (bearish) and offer high leverage with the risk of immediate termination if the barrier is touched.',
  },
  {
    term: 'knock-out barrier',
    explanation: 'A knock-out barrier is the price level that, if touched by the underlying during trading hours, immediately terminates the product. For Long products, the barrier is below the current price. For Short products, the barrier is above. Barrier monitoring is typically continuous during trading hours.',
  },
  {
    term: 'classic knock-out',
    explanation: 'A classic knock-out is where the strike price equals the knock-out barrier. This provides the highest leverage but results in total loss (no residual value) at knockout. It\'s the simplest knock-out structure.',
  },
  {
    term: 'stop-loss knock-out',
    explanation: 'A stop-loss knock-out (also called Stop-Loss KO) has a barrier set away from the strike, providing a small buffer. At knockout, it pays a residual value (strike - barrier) instead of total loss. These are slightly more expensive but offer some protection.',
  },
  {
    term: 'residual value',
    explanation: 'Residual value (Restwert) is the amount paid at knockout for stop-loss knock-outs. It equals strike price minus the knockout price. Classic knock-outs typically pay €0 or tiny residual, while stop-loss KOs can pay significant residual value.',
  },
  {
    term: 'intraday knockout',
    explanation: 'An intraday knockout occurs when the barrier is touched during regular trading hours, not just at market close. Many knockouts happen intraday during volatile periods, market opens, news releases, or trading errors. Continuous barrier monitoring makes this possible.',
  },
  {
    term: 'overnight gap',
    explanation: 'An overnight gap is a price jump between trading sessions (e.g., Friday close to Monday open). Gaps can cause knockouts at market open at prices worse than the barrier. If DAX gaps below the barrier, the certificate is knocked out at the opening price, potentially causing greater losses than expected.',
  },
  {
    term: 'continuous monitoring',
    explanation: 'Continuous monitoring means the knock-out barrier is checked tick-by-tick during trading hours, not just at market close. This allows immediate termination when the barrier is touched, even for a single second. It\'s a critical feature for knock-out products.',
  },
  {
    term: 'agio',
    explanation: 'Agio is the financing cost built into knock-out certificate prices. It compensates the issuer for capital tied up and typically ranges from 2-5% annually. Agio is charged daily and increases over time, eroding the certificate value even if the underlying doesn\'t move.',
  },
  {
    term: 'mini-future',
    explanation: 'A mini-future (also called Open-End Turbo or Unlimited Turbo) is a knock-out certificate without a fixed expiration date. The barrier level adjusts daily to account for financing costs, making them suitable for longer-term leveraged positions. Available as Long (bull) or Short (bear).',
  },
  {
    term: 'open-ended',
    explanation: 'Open-ended means a product has no fixed expiration date. Mini-futures are open-ended, allowing investors to hold indefinitely (though financing costs or barrier drift may eventually force exit). This contrasts with warrants and standard knock-outs which have fixed expiry dates.',
  },
  {
    term: 'financing level',
    explanation: 'Financing level is the strike price in a mini-future that adjusts daily based on interest rates. For Long mini-futures, the financing level increases daily (cost to holder). For Short mini-futures, it decreases daily (credit to holder). The barrier is set at a buffer distance from the financing level.',
  },
  {
    term: 'rolling barrier',
    explanation: 'A rolling barrier is a knock-out barrier that moves daily in mini-futures. Unlike fixed barriers in standard knock-outs, rolling barriers adjust each trading day based on the financing level and buffer. This allows the product to remain open-ended while accounting for financing costs.',
  },
  {
    term: 'buffer zone',
    explanation: 'Buffer zone is the distance between the financing level and knock-out barrier in mini-futures. It protects against knockout during normal intraday volatility. Typical buffers are 1-3% of the financing level. Larger buffers mean lower knockout risk but also lower leverage.',
  },
  {
    term: 'daily adjustment',
    explanation: 'Daily adjustment is the recalculation of the financing level and barrier each trading day in mini-futures. The new financing level equals the old level multiplied by (1 + daily interest rate). This accounts for financing costs and keeps the product economically consistent.',
  },
  {
    term: 'long mini-future',
    explanation: 'A long mini-future (also called Mini-Future Long or Bull) is for bullish views. The financing level and barrier are below the current price. The financing level increases daily (cost to holder), and the barrier drifts upward over time, eventually getting closer to the spot price.',
  },
  {
    term: 'short mini-future',
    explanation: 'A short mini-future (also called Mini-Future Short or Bear) is for bearish views. The financing level and barrier are above the current price. The financing level decreases daily (credit to holder in normal rate environments), and the barrier drifts downward over time.',
  },
  {
    term: 'bull',
    explanation: 'Bull (or bullish) refers to a positive view on an asset - expecting prices to rise. Bull products profit when the underlying increases. Examples include call warrants, long knock-outs, and long mini-futures.',
  },
  {
    term: 'bear',
    explanation: 'Bear (or bearish) refers to a negative view on an asset - expecting prices to fall. Bear products profit when the underlying decreases. Examples include put warrants, short knock-outs, and short mini-futures.',
  },
  {
    term: 'volatility drag',
    explanation: 'Volatility drag (also called beta slippage) is the loss from compounding in volatile markets with leveraged products. Over multiple periods, leveraged returns diverge from simple multiplication due to path dependency. Formula: Drag ≈ -0.5 × Leverage² × Volatility² × Time. High leverage in volatile markets creates massive drag.',
  },
  {
    term: 'beta slippage',
    explanation: 'Beta slippage is another term for volatility drag - the loss experienced by leveraged products over time due to compounding effects in volatile markets. Even if the underlying ends flat, a leveraged product can lose money due to the path it took.',
  },
  {
    term: 'position sizing',
    explanation: 'Position sizing is determining how much capital to invest in a leveraged position. Rule of thumb: Never bet more than you can afford to lose completely. Max position size = Capital at Risk / Worst Case Loss. Proper position sizing is critical for risk management.',
  },
  {
    term: 'concentration risk',
    explanation: 'Concentration risk is the risk from overexposure to a single position or correlated positions. Leverage amplifies concentration risk - putting all capital in one leveraged position can lead to total loss. Diversification across underlyings, directions, and time helps mitigate this.',
  },
  {
    term: 'margin call',
    explanation: 'A margin call occurs when a futures position\'s margin account falls below the maintenance margin requirement. The trader must deposit additional funds to restore the initial margin level or the position will be closed. Margin calls don\'t apply to fully-paid leverage certificates.',
  },
  {
    term: 'full payment',
    explanation: 'Full payment means paying the entire purchase price upfront for leverage certificates (warrants, knock-outs, mini-futures). This contrasts with margin-based futures where you only deposit a fraction. Maximum loss with full payment is limited to your investment.',
  },
  {
    term: 'path dependency',
    explanation: 'Path dependency means the final payoff depends not just on where the underlying ends up, but on the path it took to get there. Knock-out products are path dependent - if the barrier is touched at any point, the product terminates even if the underlying later recovers.',
  },
  // Phase 4: Structured Products
  {
    term: 'structured product',
    explanation: 'A structured product is a pre-packaged investment that combines derivatives with traditional assets to create customized risk-return profiles. They are issued by banks and designed to achieve specific payoff profiles. German banks are among the world\'s largest issuers, with thousands of new products issued daily.',
  },
  {
    term: 'issuer risk',
    explanation: 'Issuer risk is the credit risk of the bank that issued a structured product. Unlike exchange-traded options (cleared by clearinghouse), structured products expose investors to the credit risk of the issuer. If the bank defaults, investors can lose capital even when underlyings performed well (e.g., Lehman Brothers 2008).',
  },
  {
    term: 'zero-coupon bond',
    explanation: 'A zero-coupon bond is a bond without periodic coupon payments, sold at a discount to face value and redeemed at par at maturity. In structured products, zero-coupon bonds provide capital protection - the discount grows to guarantee principal repayment at maturity.',
  },
  {
    term: 'barrier option',
    explanation: 'A barrier option is an option that becomes active or inactive if the underlying touches a barrier level. Examples include down-and-out puts (become worthless if barrier touched) and up-and-out calls. Barrier options are key building blocks for bonus certificates and knock-out products.',
  },
  {
    term: 'digital option',
    explanation: 'A digital option (also called binary option) pays a fixed amount if a condition is met, otherwise pays nothing. In structured products, digital options create binary outcomes like coupon triggers - if underlying is above trigger, coupon is paid; otherwise, no coupon.',
  },
  {
    term: 'bail-in',
    explanation: 'Bail-in regulations allow authorities to write down or convert bank debt (including structured products) to equity during a bank resolution. This means investors can lose part or all of their investment even if the bank doesn\'t fully default, as part of regulatory resolution procedures.',
  },
  {
    term: 'discount certificate',
    explanation: 'A discount certificate allows investors to buy exposure to an underlying at a discount to current market price, in exchange for capping maximum possible return. Structure: Underlying - Short Call at Cap. They are popular in sideways or slightly bullish markets and are the most widely traded structured product category in Germany.',
  },
  {
    term: 'cap',
    explanation: 'A cap (Höchstbetrag) is the maximum payout level in a structured product. In discount certificates, the cap is created by selling a call option. Once the underlying exceeds the cap, the certificate value is capped and cannot increase further, limiting upside potential.',
  },
  {
    term: 'discount',
    explanation: 'Discount (Abgeld) is the difference between the underlying price and the certificate price. You pay less than the underlying\'s current price because you\'ve sold a call option. The discount provides a buffer against losses and is the payment for giving up unlimited upside.',
  },
  {
    term: 'maximum return',
    explanation: 'Maximum return is the highest possible percentage gain on a structured product. For discount certificates: Max Return = (Cap - Entry Price) / Entry Price × 100%. Once the cap is reached, no further gains are possible regardless of underlying performance.',
  },
  {
    term: 'break-even',
    explanation: 'Break-even is the underlying price level where the investor has no profit or loss. For discount certificates, break-even is typically below the purchase price due to the discount. Below break-even, losses begin; above break-even, profits accumulate up to the cap.',
  },
  {
    term: 'outperformance point',
    explanation: 'Outperformance point is the underlying price below which a discount certificate beats direct investment. Due to the discount, discount certificates outperform direct investment in flat or down markets, but underperform in strong rallies above the cap.',
  },
  {
    term: 'bonus certificate',
    explanation: 'A bonus certificate guarantees a minimum payment (the "bonus") at maturity, as long as the underlying never touches a predefined barrier during the product\'s life. Structure: Underlying + Down-and-Out Put at Barrier. If barrier is breached, bonus is lost and product behaves like direct investment.',
  },
  {
    term: 'bonus level',
    explanation: 'Bonus level (Bonuslevel) is the minimum guaranteed payout if the barrier is not breached. Usually 5-15% above starting level, the bonus level is paid at maturity even if the underlying ends below it, as long as the barrier was never touched during the product\'s lifetime.',
  },
  {
    term: 'down-and-out put',
    explanation: 'A down-and-out put is a barrier option that provides protection (put payoff) but becomes worthless if the underlying touches a barrier below the current price. In bonus certificates, this put creates the bonus floor, but only if the barrier is never breached.',
  },
  {
    term: 'continuous observation',
    explanation: 'Continuous observation means the barrier is monitored throughout the entire term at every price tick during trading hours. One intraday touch equals breach. This is the most common barrier observation style for bonus certificates and knock-out products.',
  },
  {
    term: 'close-only',
    explanation: 'Close-only (also called American-style barrier) means only daily closing prices count for barrier observation. Intraday touches don\'t breach the barrier. This is less common and more expensive than continuous observation, as it provides more protection to investors.',
  },
  {
    term: 'capped bonus',
    explanation: 'A capped bonus certificate has a maximum return limit above the bonus level. This lowers the cost compared to uncapped bonus certificates. If the underlying exceeds the cap, returns are limited, but the cap provides additional cushion for bonus financing.',
  },
  {
    term: 'uncapped bonus',
    explanation: 'An uncapped bonus certificate participates fully in upside above the bonus level. These have higher premiums than capped versions but offer better returns if the underlying rallies strongly. Better suited for very bullish market views.',
  },
  {
    term: 'capital protection note',
    explanation: 'A capital protection note (also called Principal Protected Note or Kapitalschutzprodukt) guarantees return of all or most invested capital at maturity while offering participation in potential upside. Structure: Zero-Coupon Bond + Call Option. They are the safest structured product category for conservative investors.',
  },
  {
    term: 'principal protected note',
    explanation: 'Principal protected note is another name for capital protection note - a structured product that guarantees return of principal at maturity. The protection is provided by a zero-coupon bond component, with remaining budget used for call options to provide upside participation.',
  },
  {
    term: 'protection level',
    explanation: 'Protection level is the percentage of principal guaranteed at maturity. 100% protection means full principal return, 90% means at least 90% return. Lower protection levels mean more budget for options, resulting in higher participation rates but less safety.',
  },
  {
    term: 'participation rate',
    explanation: 'Participation rate is the percentage of underlying gains that the investor receives. For example, 70% participation means if the underlying rises 50%, the investor gains 35% (50% × 70%). Higher participation rates require lower protection levels or higher interest rates to fund the option budget.',
  },
  {
    term: 'option budget',
    explanation: 'Option budget is the amount available to purchase options after setting aside funds for the zero-coupon bond that provides capital protection. Higher interest rates mean cheaper bonds, leaving more budget for options and resulting in higher participation rates or lower caps.',
  },
  {
    term: 'airbag structure',
    explanation: 'An airbag structure provides additional protection against moderate losses in capital protection notes. It creates a stepped payoff where protection kicks in at a certain level, providing partial protection before full capital protection at maturity.',
  },
  {
    term: 'twin-win',
    explanation: 'A twin-win structure is a capital protection variation that profits from both upward AND downward movements of the underlying (within limits). It provides returns in volatile markets regardless of direction, as long as movements stay within defined bounds.',
  },
  {
    term: 'nominal protection',
    explanation: 'Nominal protection means principal is protected in currency terms (e.g., €1,000), not inflation-adjusted. Over long terms, inflation erodes real purchasing power even if nominal principal is returned. This is a key limitation of capital protection products.',
  },
  {
    term: 'autocallable',
    explanation: 'An autocallable (also called Phoenix Note, Express Certificate, or Callable Yield Note) is a structured product that automatically redeems early if the underlying reaches a specified trigger level on observation dates. They pay periodic coupons and are among the most popular and complex structured products issued today.',
  },
  {
    term: 'autocall',
    explanation: 'Autocall (Tilgung) is the automatic early redemption of a structured product when the underlying reaches the autocall trigger on an observation date. When autocalled, investors receive principal plus accrued coupons, and the product terminates early.',
  },
  {
    term: 'autocall trigger',
    explanation: 'Autocall trigger (Tilgungsschwelle) is the level above which the product automatically redeems early. Usually 100% of initial level, sometimes decreasing over time (step-down). If underlying is at or above trigger on observation date, product autocalls immediately.',
  },
  {
    term: 'coupon trigger',
    explanation: 'Coupon trigger (Kuponbarriere) is the level above which coupon is paid. Often same as autocall trigger, sometimes lower (pays coupon more easily). If underlying is above coupon trigger on observation date, coupon is paid regardless of whether autocall occurs.',
  },
  {
    term: 'memory coupon',
    explanation: 'Memory coupon is a feature where missed coupons accumulate and are paid later when conditions are met. If coupon is not paid in one period, it\'s remembered and added to future coupon payments or paid at autocall/maturity. This feature makes products more expensive but better for investors.',
  },
  {
    term: 'step-down',
    explanation: 'Step-down means the autocall trigger decreases over time. For example, Year 1 trigger at 100%, Year 2 at 95%, Year 3 at 90%. This increases the probability of autocall if the market drifts lower, making it easier for the product to redeem early.',
  },
  {
    term: 'worst-of',
    explanation: 'Worst-of means the product is based on the worst performer in a basket of underlyings. For autocallables, all underlyings must be above trigger for autocall. For barriers, any one below barrier equals breach. Worst-of products offer higher coupons (15-20%+) but much higher risk.',
  },
  {
    term: 'phoenix',
    explanation: 'Phoenix is a feature in autocallables where coupon is paid at each observation if coupon trigger is met, not just at autocall or maturity. Phoenix autocallables provide regular income throughout the term, making them attractive for income-seeking investors.',
  },
  {
    term: 'observation date',
    explanation: 'Observation date (Bewertungstag) is the date when triggers are checked in autocallables. Products are observed periodically (monthly, quarterly, annually). On each observation date, the system checks if autocall trigger or coupon trigger is met and processes accordingly.',
  },
  {
    term: 'initial level',
    explanation: 'Initial level (Startlevel) is the reference level of the underlying at product start/issue. All triggers (autocall, coupon, barrier) are typically expressed as percentages of this initial level. For example, 100% trigger means underlying must reach initial level.',
  },
  {
    term: 'reverse convertible',
    explanation: 'A reverse convertible (also called Aktienanleihe or Equity-Linked Note) offers above-market fixed coupon, but the issuer has the right to repay principal in depreciated shares instead of cash if underlying falls below strike. Structure: Bond + Short Put. High yield with significant downside risk.',
  },
  {
    term: 'aktienanleihe',
    explanation: 'Aktienanleihe is the German term for reverse convertible - a high-coupon product where the issuer can deliver shares instead of cash if the underlying falls below the strike price. The investor effectively sells a put option to receive the enhanced coupon.',
  },
  {
    term: 'equity-linked note',
    explanation: 'Equity-linked note is another name for reverse convertible - a structured product linked to equity performance. It pays a fixed coupon but exposes investors to downside risk through potential share delivery if the underlying depreciates below the strike level.',
  },
  {
    term: 'conversion ratio',
    explanation: 'Conversion ratio is the number of shares deliverable per note in a reverse convertible. Formula: Conversion Ratio = Nominal / Strike Price. For example, €10,000 nominal with €100 strike = 100 shares deliverable if issuer chooses physical settlement.',
  },
  {
    term: 'physical settlement',
    explanation: 'Physical settlement means delivery of actual shares instead of cash. In reverse convertibles, if underlying falls below strike at maturity, issuer can deliver shares worth less than the nominal amount. Investor must then decide whether to hold or sell the delivered shares.',
  },
  {
    term: 'cash settlement',
    explanation: 'Cash settlement means payment of cash difference instead of delivering the underlying asset. In reverse convertibles, if underlying is above strike, issuer repays cash. Some products always use cash settlement, while others allow issuer choice between cash and physical.',
  },
  {
    term: 'barrier reverse convertible',
    explanation: 'A barrier reverse convertible has a barrier level below the strike. If barrier is never touched, issuer always repays cash (even if below strike). If barrier is touched, product reverts to standard reverse convertible behavior where issuer can deliver shares if below strike.',
  },
  // Phase 5: Product Lifecycle & Payoff Modeling
  {
    term: 'product lifecycle',
    explanation: 'Product lifecycle is the complete journey of a structured product from design and issuance through active trading, lifecycle events, to final settlement. Understanding the lifecycle is essential for building correct, maintainable banking systems that track products from birth to death.',
  },
  {
    term: 'product master',
    explanation: 'Product master is the system storing comprehensive product reference data including static data, term sheets, schedules, and all product parameters. It serves as the single source of truth for product information and feeds downstream systems like pricing engines, risk systems, and settlement.',
  },
  {
    term: 'product master data',
    explanation: 'Product master data includes all static and dynamic information about a structured product: ISIN, product type, underlying details, strikes, barriers, observation dates, coupons, and all terms. This data must be accurate, complete, timely, and consistent across all systems.',
  },
  {
    term: 'pricing engine',
    explanation: 'A pricing engine is a system that calculates the current value of structured products in real-time or end-of-day. It uses mathematical models (Black-Scholes, Monte Carlo, finite difference) and market data (prices, volatilities, rates) to determine fair value. Pricing engines are among the most computationally intensive systems in investment banking.',
  },
  {
    term: 'event processor',
    explanation: 'An event processor is a system that handles lifecycle events for structured products. It processes coupon fixings, barrier observations, autocall checks, maturity processing, and other predefined occurrences. Event processors must be reliable, handle timing correctly, and ensure no events are missed.',
  },
  {
    term: 'state management',
    explanation: 'State management tracks the current state of a product throughout its lifecycle. Every product has states like Draft → Issued → Active → (Autocalled | Matured | Terminated). State transitions trigger downstream notifications, settlement calculations, P&L recognition, and regulatory reporting.',
  },
  {
    term: 'state transition',
    explanation: 'A state transition is a change in a product\'s lifecycle state, such as from Active to Autocalled or from Active to Matured. State transitions must follow defined rules and trigger appropriate actions including notifications, settlements, and system updates.',
  },
  {
    term: 'issuance',
    explanation: 'Issuance is the process of creating and launching a new structured product. It involves product design, pricing and approval, documentation (term sheets, prospectus, KID), regulatory submission, ISIN assignment, exchange listing, initial hedging, and launch. German banks issue thousands of products daily.',
  },
  {
    term: 'term sheet',
    explanation: 'A term sheet is a summary document outlining the key terms of a structured product before final legal documentation. It includes underlying, structure type, term, barriers, triggers, coupons, and other essential parameters. Term sheets are used for approval and client communication.',
  },
  {
    term: 'final terms',
    explanation: 'Final terms is the legal binding document that defines all terms and conditions of a structured product. It is the definitive reference for product behavior, replacing the term sheet once the product is issued. Final terms must be accurate as they determine all product outcomes.',
  },
  {
    term: 'prospectus',
    explanation: 'A prospectus is a full legal disclosure document required for public offerings of securities. It provides comprehensive information about the issuer, the securities being offered, risks, and all material facts. In Germany, BaFin reviews and approves prospectuses before products can be issued.',
  },
  {
    term: 'valuation',
    explanation: 'Valuation is the process of determining the current value of a structured product. It involves calculating fair value using pricing models, applying adjustments (XVAs), and considering market conditions. Valuation is performed real-time for trading, intraday for risk monitoring, and end-of-day for official valuations.',
  },
  {
    term: 'daily pricing',
    explanation: 'Daily pricing is the process of calculating current values of structured products throughout their lifecycle. It\'s critical for trading, risk management, client reporting, and regulatory compliance. Pricing frequency ranges from real-time (tick-by-tick) to end-of-day (once daily) depending on use case.',
  },
  {
    term: 'Monte Carlo',
    explanation: 'Monte Carlo is a simulation method for pricing path-dependent products like autocallables and barrier products. It generates thousands of random price paths, checks events (barriers, autocalls) on each path, calculates payoffs, and averages all outcomes to determine fair value. More paths = better accuracy but slower computation.',
  },
  {
    term: 'Black-Scholes',
    explanation: 'Black-Scholes is a mathematical model for pricing vanilla options and simple structured products. It uses inputs like spot price, strike, time to expiry, volatility, risk-free rate, and dividend yield to calculate theoretical option value. It\'s the foundation for many pricing models but has limitations for exotic products.',
  },
  {
    term: 'finite difference',
    explanation: 'Finite difference methods solve partial differential equations numerically for option pricing. They\'re more stable than Monte Carlo for some products, good for American-style options, but memory intensive. They discretize time and price space to solve the Black-Scholes PDE.',
  },
  {
    term: 'EOD',
    explanation: 'EOD (End of Day) is the daily process of official product valuation. It includes cutoff time (usually 5-6 PM), official fixings (closing prices), batch valuation of all products, validation checks for anomalies, and distribution to downstream systems. EOD prices are used for official reporting and client statements.',
  },
  {
    term: 'final fixing',
    explanation: 'Final fixing is the official price observation used for settlement at maturity or autocall. It determines the payoff calculation. For example, DAX autocallable uses Xetra closing auction price on the observation date. The fixing level is compared to triggers and barriers to determine product outcome.',
  },
  {
    term: 'XVA',
    explanation: 'XVA (Valuation Adjustments) are adjustments to theoretical model prices to account for market realities. CVA (Credit Valuation Adjustment) accounts for counterparty default risk, DVA (Debit Valuation Adjustment) for own default risk, FVA (Funding Valuation Adjustment) for funding costs, and KVA (Capital Valuation Adjustment) for regulatory capital costs.',
  },
  {
    term: 'CVA',
    explanation: 'CVA (Credit Valuation Adjustment) is an adjustment to fair value accounting for the risk that the counterparty (issuer) may default. It reduces the product value to reflect credit risk. Higher credit risk = larger CVA deduction. CVA is critical for understanding true economic value.',
  },
  {
    term: 'FVA',
    explanation: 'FVA (Funding Valuation Adjustment) accounts for the cost of funding positions. When banks hedge structured products, they need to fund the hedge positions. FVA adjusts the fair value to reflect these funding costs, which can be significant in low-rate or high-spread environments.',
  },
  {
    term: 'lifecycle event',
    explanation: 'A lifecycle event is a predefined occurrence during a structured product\'s life that triggers specific actions. Examples include coupon fixings, barrier observations, autocall checks, maturity processing, and knock-out events. Processing lifecycle events correctly and on time is critical for client trust and regulatory compliance.',
  },
  {
    term: 'coupon fixing',
    explanation: 'Coupon fixing determines if a coupon is paid and at what rate. On observation dates, the underlying price is observed (fixed) and compared to the coupon trigger. If the trigger is met, coupon is paid; otherwise, it may be remembered (memory feature) or lost. Fixing time and source are contractually defined.',
  },
  {
    term: 'barrier observation',
    explanation: 'Barrier observation is the process of checking if a barrier has been breached. It can be continuous (every tick during trading hours), daily close (only closing prices), or at expiry (no path dependency). Continuous observation is most common and provides immediate termination when barrier is touched.',
  },
  {
    term: 'autocall observation',
    explanation: 'Autocall observation determines if a product redeems early. On observation dates, the underlying fixing level is compared to the autocall trigger. If the trigger is met, the product autocalls immediately, terminating early and paying principal plus accrued coupons. Observation timing and source are contractually defined.',
  },
  {
    term: 'maturity',
    explanation: 'Maturity is the end of a product\'s life with final payoff calculation. At maturity, the final fixing is observed, payoff is calculated based on product terms (barrier breach status, final level vs triggers), settlement amount is determined, and cash/shares are delivered. Maturity processing must be accurate as it determines final investor returns.',
  },
  {
    term: 'final settlement',
    explanation: 'Final settlement is the end-of-life payoff calculation and cash/share delivery process. It includes final fixing observation, payoff calculation based on product terms, determination of settlement amount (cash or physical), and actual delivery to investors. Settlement typically occurs T+2 to T+7 business days after maturity/autocall.',
  },
  {
    term: 'fixing',
    explanation: 'A fixing is an official price observation used for event evaluation. Fixings are taken at specific times (e.g., exchange closing auction) from specific sources (e.g., Xetra for DAX) and are contractually binding for determining if triggers are met, barriers breached, or final payoffs calculated. Fixing accuracy is critical.',
  },
  {
    term: 'payment date',
    explanation: 'Payment date is when cash or shares are actually delivered to investors, distinct from observation date. There\'s typically a lag (T+5 to T+7) between observation and payment to allow for verification, settlement processing, client notification, and banking system cutoffs. Payment dates are contractually defined.',
  },
  {
    term: 'barrier breach',
    explanation: 'Barrier breach occurs when the underlying touches the barrier level during the product\'s lifetime. For continuous barriers, even a single tick below the barrier triggers breach. Once breached, the barrier protection is permanently lost (for bonus certificates) or the product terminates (for knock-outs). Breach is path-dependent.',
  },
  {
    term: 'idempotency',
    explanation: 'Idempotency means processing the same event twice produces the same result. In event-driven systems, this is critical because events may be retried or duplicated. Idempotent operations ensure no double-counting of coupons, duplicate autocalls, or incorrect state transitions even if events are processed multiple times.',
  },
  {
    term: 'state machine',
    explanation: 'A state machine is a model defining valid states and transitions for a product lifecycle. States include CREATED, ACTIVE, AUTOCALLED, MATURED, KNOCKED_OUT, SETTLED. State machines enforce business rules (e.g., can\'t autocall a matured product) and ensure consistent state management across systems.',
  },
  {
    term: 'record date',
    explanation: 'Record date is the date that determines who is entitled to receive a corporate action benefit. For dividends, shareholders on record date receive the dividend even if they sell before ex-date. Record date is typically 2-3 business days before ex-date.',
  },
  {
    term: 'pay date',
    explanation: 'Pay date (in corporate actions context) is when cash or shares are distributed to entitled shareholders. For dividends, pay date is typically 1-2 weeks after ex-date. For structured products, pay date refers to when coupons or final settlement are paid to investors.',
  },
  {
    term: 'adjustment factor',
    explanation: 'Adjustment factor is a multiplier used to modify product parameters (strikes, barriers, ratios) when corporate actions occur. Formula: R = Price before / Price after (theoretical). New Strike = Old Strike / R, New Barrier = Old Barrier / R, New Ratio = Old Ratio × R. Ensures economic equivalence before and after the event.',
  },
  {
    term: 'spin-off',
    explanation: 'A spin-off is when a company separates a division into a new independent company. For structured products, this can change the underlying from a single stock to a basket (original stock + spun-off stock) or require replacement. Spin-offs require careful adjustment to maintain product economics.',
  },
  {
    term: 'dilution',
    explanation: 'Dilution is the reduction in existing shareholder percentage ownership when new shares are issued. In rights issues, existing shareholders can buy new shares at discount, but if they don\'t participate, their ownership percentage decreases. Structured products must adjust for dilution to maintain economic equivalence.',
  },
  {
    term: 'theoretical price',
    explanation: 'Theoretical price is the calculated fair value of a stock after a corporate action, used to determine adjustment factors. For rights issues: (Old shares × Old price + New shares × Rights price) / Total shares. This price is used to calculate how product parameters should be adjusted.',
  },
  {
    term: 'reverse split',
    explanation: 'A reverse split (also called consolidation) combines multiple shares into fewer shares. For example, 1-for-10 reverse split means 1,000 shares at €1 become 100 shares at €10. Total value unchanged, but strikes, barriers, and ratios must be adjusted proportionally (multiply by split ratio).',
  },
  {
    term: 'merger',
    explanation: 'A merger is when two companies combine into one. For structured products, this can fundamentally change the underlying. The product may need to be adjusted to reference the merged entity, replaced with cash (in cash mergers), or converted to a basket of the merged companies\' stocks.',
  },
  {
    term: 'acquisition',
    explanation: 'An acquisition is when one company buys another. For structured products on the acquired company, the underlying may be replaced with the acquirer\'s stock (stock acquisition), cash (cash acquisition), or a combination. Products must be adjusted or settled early depending on terms.',
  },
  {
    term: 'capital return',
    explanation: 'Capital return is a special distribution to shareholders, such as special dividends or share buybacks. These reduce the company\'s market cap and require adjustments to structured product parameters. Capital returns are treated similarly to dividends but may be larger and less predictable.',
  },
  {
    term: 'event-driven architecture',
    explanation: 'Event-driven architecture (EDA) is a software design pattern where program flow is determined by events. For structured products, this is essential because product behavior is fundamentally event-driven: prices change, barriers are checked, coupons are paid. EDA provides scalability, decoupling, real-time reactivity, and complete auditability.',
  },
  {
    term: 'event',
    explanation: 'An event is an immutable fact that something happened. In structured products, events include PriceUpdated, BarrierBreached, CouponFixed, Autocalled, CorporateActionDetected. Events are stored with timestamp and data, providing complete history and enabling event sourcing patterns.',
  },
  {
    term: 'event sourcing',
    explanation: 'Event sourcing stores the sequence of events that led to current state, instead of storing only current state. This provides complete audit trail, enables time travel (reconstruct state at any point), simplifies debugging (replay events), and provides rich historical data for analytics.',
  },
  {
    term: 'message queue',
    explanation: 'A message queue is an asynchronous event delivery system that decouples event producers from consumers. Examples include Kafka, RabbitMQ. Producers publish events to topics, consumers subscribe and process events. Queues provide reliability, scalability, and enable event-driven architectures.',
  },
  {
    term: 'CQRS',
    explanation: 'CQRS (Command Query Responsibility Segregation) separates read and write models. Write side handles state changes (commands like CreateProduct, RecordBarrierBreach). Read side provides optimized views for queries (CurrentProductState, ProductsByUnderlying). This allows independent scaling and optimization of reads and writes.',
  },
  {
    term: 'saga',
    explanation: 'A saga is a distributed transaction pattern for complex workflows spanning multiple services. For autocall settlement: AutocallDetected → CalculatePayout → CreateSettlement → SendPayment → NotifyClient. If any step fails, compensating transactions rollback previous steps. Sagas ensure eventual consistency in distributed systems.',
  },
  {
    term: 'projection',
    explanation: 'A projection is building a read model from events in event sourcing. Events are replayed to build current state views optimized for queries. For example, projecting all ProductCreated and Autocalled events to build a "CurrentProductStatus" view. Projections can be rebuilt from events, enabling flexible query models.',
  },
  {
    term: 'event producer',
    explanation: 'An event producer is a system or component that generates and publishes events. In structured products, producers include market data feeds (price updates), schedulers (observation dates), corporate action systems (dividend announcements), and lifecycle processors (barrier breaches, autocalls).',
  },
  {
    term: 'event consumer',
    explanation: 'An event consumer is a system or component that subscribes to and processes events. In structured products, consumers include pricing engines (react to price updates), risk systems (process barrier breaches), settlement systems (handle autocalls), and notification services (alert clients).',
  },
  {
    term: 'event bus',
    explanation: 'An event bus is the messaging infrastructure that routes events from producers to consumers. It provides topics/queues for different event types, handles routing, persistence, and delivery guarantees. Examples include Kafka, RabbitMQ, AWS EventBridge. The bus enables decoupled, scalable event-driven architectures.',
  },
  // Phase 6: Pricing & Risk (High Level)
  {
    term: 'pricing model',
    explanation: 'A pricing model is a mathematical framework used to calculate the theoretical value (fair value) of financial instruments. Models include Black-Scholes for vanilla options, Monte Carlo for path-dependent products, and finite difference methods. All models are approximations with limitations and assumptions.',
  },
  {
    term: 'model risk',
    explanation: 'Model risk is the risk that pricing models are wrong or misapplied. Sources include simplifying assumptions (constant volatility, no jumps), calibration errors, market regime changes, and liquidity effects not captured. Understanding model limitations is as important as understanding the models themselves.',
  },
  {
    term: 'P&L',
    explanation: 'P&L (Profit and Loss) is the change in value of a position or portfolio. Daily P&L = Today\'s value - Yesterday\'s value. P&L can be attributed to different factors: Delta P&L (from price moves), Gamma P&L (from large moves), Vega P&L (from volatility changes), Theta P&L (from time decay).',
  },
  {
    term: 'spot price',
    explanation: 'Spot price is the current market price of an underlying asset for immediate delivery. It\'s a key input to pricing models. Sources include exchanges (Xetra for DAX), Reuters/Bloomberg for FX and commodities, and exchange closing prices for official fixings.',
  },
  {
    term: 'time to expiry',
    explanation: 'Time to expiry (T) is the remaining time until a derivative or structured product expires, typically expressed in years. Formula: T = Days to expiry / 365 (or 252 for trading days). Time to expiry affects option pricing through time value decay and probability of favorable moves.',
  },
  {
    term: 'risk-free rate',
    explanation: 'Risk-free rate is the theoretical interest rate with no default risk, used for discounting in pricing models. Usually the overnight index swap (OIS) rate: €STR for EUR, SOFR for USD, SARON for CHF. The risk-free rate affects option pricing, especially for longer-dated products (Rho sensitivity).',
  },
  {
    term: 'discount factor',
    explanation: 'A discount factor is a multiplier that converts future cash flows to present value. Formula: DF = e^(-rT) or 1/(1+r)^T, where r is the risk-free rate and T is time. Discount factors are used to calculate present values of future payoffs in pricing models.',
  },
  {
    term: 'skew',
    explanation: 'Skew is the asymmetry in the volatility smile - the difference between put and call implied volatilities at the same moneyness. Typically, OTM puts have higher IV than OTM calls (negative skew), reflecting demand for downside protection and crash risk premium. Skew = 25Δ put IV - 25Δ call IV.',
  },
  {
    term: 'term structure',
    explanation: 'Term structure (of volatility) shows how implied volatility varies across different expiries. Normal pattern (contango): Longer expiry = Higher IV. Crisis pattern (backwardation): Shorter expiry = Higher IV. Term structure is one dimension of the volatility surface.',
  },
  {
    term: 'sticky strike',
    explanation: 'Sticky strike is a volatility smile model where the smile stays fixed at absolute strike levels. If spot moves, ATM volatility changes because the smile doesn\'t shift. This model is typically used for short-dated options where absolute strikes are more relevant.',
  },
  {
    term: 'sticky delta',
    explanation: 'Sticky delta is a volatility smile model where the smile stays fixed relative to moneyness (delta). If spot moves up 5%, the smile shifts up 5% to maintain the same moneyness relationship. This model is typically used for longer-dated options where relative positioning matters more.',
  },
  {
    term: 'SABR',
    explanation: 'SABR (Stochastic Alpha Beta Rho) is a popular volatility smile model that provides theoretically consistent interpolation and extrapolation. It models volatility as a stochastic process and is widely used in practice for constructing arbitrage-free volatility surfaces.',
  },
  {
    term: 'calibration',
    explanation: 'Calibration is the process of fitting a pricing model to market prices. For volatility surfaces, calibration involves finding implied volatilities from market option prices, then interpolating and extrapolating to create a complete surface. Calibration ensures models match observable market prices.',
  },
  {
    term: 'interpolation',
    explanation: 'Interpolation estimates values between observed data points. For volatility surfaces, interpolation fills gaps between market-observed strikes and expiries. Methods include linear (simple but can create arbitrage), cubic spline (smoother), and model-based (SABR, theoretically consistent).',
  },
  {
    term: 'extrapolation',
    explanation: 'Extrapolation estimates values beyond observed data points. For volatility surfaces, extrapolation extends the surface to strikes and expiries not traded in the market. Methods include flat (simple), linear decay (more realistic), and model-based (most sophisticated, maintains arbitrage-free conditions).',
  },
  {
    term: 'Greeks',
    explanation: 'The Greeks are measures of how option and structured product prices change when market conditions change. They\'re denoted by Greek letters: Delta (price sensitivity), Gamma (delta sensitivity), Vega (volatility sensitivity), Theta (time decay), and Rho (rate sensitivity). Greeks are essential for risk management and hedging.',
  },
  {
    term: 'Rho',
    explanation: 'Rho (ρ) measures sensitivity to interest rate changes. Long calls have positive rho (higher rates increase value), long puts have negative rho. Rho is typically less important for short-dated products but significant for multi-year structured products where discounting effects are larger.',
  },
  {
    term: 'delta neutral',
    explanation: 'Delta neutral means a portfolio has zero net delta exposure. To achieve delta neutrality, hedge positions are taken: if portfolio delta is +100, sell 100 units of underlying. Delta-neutral portfolios are insensitive to small underlying price moves, but still exposed to gamma, vega, and theta.',
  },
  {
    term: 'gamma scalping',
    explanation: 'Gamma scalping is a trading strategy to profit from gamma by rebalancing delta hedges. When underlying moves, delta changes, requiring hedge adjustment. By buying low and selling high during rebalancing, traders profit from realized volatility. This is how market makers monetize gamma exposure.',
  },
  {
    term: 'vega exposure',
    explanation: 'Vega exposure is the net sensitivity of a portfolio to volatility changes. Long vega means portfolio gains when volatility rises (long options). Short vega means portfolio loses when volatility rises (short options). Vega exposure must be monitored and hedged, especially for large portfolios.',
  },
  {
    term: 'P&L attribution',
    explanation: 'P&L attribution breaks down daily profit/loss into components: Delta P&L (from underlying price moves), Gamma P&L (from large moves benefiting gamma), Vega P&L (from volatility changes), Theta P&L (from time decay), and residual. Formula: P&L = Δ×ΔS + ½×Γ×ΔS² + ν×Δσ + Θ×Δt + Residual.',
  },
  {
    term: 'sensitivity analysis',
    explanation: 'Sensitivity analysis examines how product values and portfolio risks change under different market scenarios. It includes scenario analysis (specific what-if conditions), stress testing (extreme scenarios), and historical simulation (applying past market moves). While Greeks show local sensitivities, sensitivity analysis shows the full picture.',
  },
  {
    term: 'scenario analysis',
    explanation: 'Scenario analysis examines specific "what-if" conditions to understand potential outcomes. Examples: What if DAX drops 20%? What if volatility doubles? Scenarios can be single-factor (change one variable) or multi-factor (change multiple variables together for more realistic analysis).',
  },
  {
    term: 'stress test',
    explanation: 'A stress test examines extreme scenarios based on historical events or hypothetical extremes. Examples: 2008 Financial Crisis (equity -50%, vol +150%), 2020 COVID Crash (equity -35%, vol +300%), Rates Shock (rates +300bp). Stress tests reveal portfolio vulnerabilities under severe conditions.',
  },
  {
    term: 'VaR',
    explanation: 'VaR (Value at Risk) is the maximum expected loss at a confidence level over a time horizon. Example: VaR(95%, 1-day) = €50,000 means 95% confident loss won\'t exceed €50,000 in one day. VaR is a threshold, not a cap - losses can and do exceed VaR.',
  },
  {
    term: 'CVaR',
    explanation: 'CVaR (Conditional Value at Risk), also called ES (Expected Shortfall), is the average loss beyond VaR. Example: CVaR(95%) = €75,000 means if loss exceeds VaR, expect average €75,000 loss. CVaR captures tail risk better than VaR alone, showing what happens in the worst cases.',
  },
  {
    term: 'ES',
    explanation: 'ES (Expected Shortfall), also called CVaR (Conditional Value at Risk), is the average loss in the worst X% of scenarios. If VaR(95%) shows the 95th percentile loss, ES(95%) shows the average of all losses in the worst 5%. ES provides better tail risk measurement than VaR.',
  },
  {
    term: 'sensitivity matrix',
    explanation: 'A sensitivity matrix is a grid showing product values across different parameter combinations. For example, a spot vs volatility matrix shows values at different underlying prices and volatility levels. Matrices help visualize how sensitive products are to multiple factors simultaneously.',
  },
  {
    term: 'historical simulation',
    explanation: 'Historical simulation applies actual historical market moves to current portfolios to assess potential P&L impact. For each historical date, actual market changes are applied, P&L is calculated, and a distribution of outcomes is built. This provides realistic scenario testing based on past events.',
  },
  {
    term: 'parametric risk',
    explanation: 'Parametric risk is risk calculated from Greeks and factor moves using linear approximations. Formula: Risk = Σ |Greek × Scenario Move|. For example, Delta risk = |5,000 × 10%| = €500. Parametric risk is fast to calculate but less accurate for large moves (ignores gamma effects).',
  },
  // Phase 7: Regulation & EU Reality
  {
    term: 'regulation',
    explanation: 'Financial regulation is the body of rules governing financial markets and institutions. In the EU, regulations drive many system requirements including data collection, calculation rules, reporting obligations, audit trails, and system constraints. Understanding regulations helps build compliant systems.',
  },
  {
    term: 'ESMA',
    explanation: 'ESMA (European Securities and Markets Authority) is the EU regulator responsible for securities markets. It develops technical standards, coordinates national regulators, and ensures consistent application of EU financial regulations across member states.',
  },
  {
    term: 'BaFin',
    explanation: 'BaFin (Bundesanstalt für Finanzdienstleistungsaufsicht) is Germany\'s financial services supervisory authority. It regulates banks, insurance companies, and investment firms in Germany, approves prospectuses, and enforces EU regulations at the national level.',
  },
  {
    term: 'FINMA',
    explanation: 'FINMA (Swiss Financial Market Supervisory Authority) is Switzerland\'s financial regulator. It supervises banks, insurance companies, securities dealers, and other financial intermediaries, ensuring compliance with Swiss financial market laws.',
  },
  {
    term: 'FCA',
    explanation: 'FCA (Financial Conduct Authority) is the UK\'s financial services regulator. It regulates financial firms, protects consumers, maintains market integrity, and promotes competition. While the UK left the EU, FCA remains an important regulator for international finance.',
  },
  {
    term: 'investor protection',
    explanation: 'Investor protection is the core goal of EU financial regulation. It includes ensuring investors get clear information, products match investor needs (suitability), markets are transparent, and investors are treated fairly without conflicts of interest. All regulatory requirements stem from this principle.',
  },
  {
    term: 'MiFID II',
    explanation: 'MiFID II (Markets in Financial Instruments Directive II) is the cornerstone of EU investment regulation, effective January 2018. It covers investment firms, trading venues, and investment products. Key requirements include client classification, product governance, best execution, transaction reporting, cost disclosure, and record keeping.',
  },
  {
    term: 'MiFIR',
    explanation: 'MiFIR (Markets in Financial Instruments Regulation) is directly applicable EU law that works with MiFID II. Unlike directives (which need national transposition), regulations apply directly in all EU states. MiFIR covers transparency requirements, transaction reporting, and trading venue rules.',
  },
  {
    term: 'NCA',
    explanation: 'NCA (National Competent Authority) is the national regulator in each EU member state responsible for enforcing EU financial regulations. Examples include BaFin (Germany), AMF (France), CONSOB (Italy). NCAs receive transaction reports and supervise firms in their jurisdiction.',
  },
  {
    term: 'ARM',
    explanation: 'ARM (Approved Reporting Mechanism) is a service provider authorized to collect and submit transaction reports to NCAs on behalf of investment firms. ARMs validate, format, and submit reports in the required regulatory format, reducing complexity for reporting firms.',
  },
  {
    term: 'LEI',
    explanation: 'LEI (Legal Entity Identifier) is a 20-character code that uniquely identifies legal entities participating in financial transactions. LEIs are mandatory for transaction reporting under MiFID II and are used to identify buyers, sellers, and decision makers in regulatory reports.',
  },
  {
    term: 'best execution',
    explanation: 'Best execution is the obligation to take "all sufficient steps" to obtain the best possible result when executing client orders. It considers price, cost, speed, likelihood of execution, and size, weighted appropriately. Firms must document execution policies, monitor quality, and report to clients annually.',
  },
  {
    term: 'target market',
    explanation: 'Target market is the definition of suitable investor types for a product, required under MiFID II product governance. It specifies client type, knowledge level, risk tolerance, investment horizon, and objectives. Products must also define negative target market (who it\'s NOT suitable for).',
  },
  {
    term: 'ECP',
    explanation: 'ECP (Eligible Counterparty) is the lowest protection category under MiFID II client classification. ECPs include investment firms, credit institutions, insurance companies, and other regulated entities. They receive minimal protection as they are considered sophisticated enough to protect themselves.',
  },
  {
    term: 'retail client',
    explanation: 'Retail client is the highest protection category under MiFID II, receiving full disclosures, suitability assessments, and all investor protections. Most individual investors are retail clients. They cannot opt out of protections and must receive comprehensive information before investing.',
  },
  {
    term: 'professional client',
    explanation: 'Professional client is a medium protection category under MiFID II. To qualify, clients must meet at least 2 of: balance sheet ≥ €20M, net turnover ≥ €40M, or own funds ≥ €2M. Professional clients can opt out of some protections but still receive more protection than eligible counterparties.',
  },
  {
    term: 'eligible counterparty',
    explanation: 'Eligible counterparty is another term for ECP (Eligible Counterparty) - the lowest protection category under MiFID II. These are sophisticated institutional entities that receive minimal regulatory protection as they are capable of protecting their own interests.',
  },
  {
    term: 'transaction reporting',
    explanation: 'Transaction reporting is the obligation to report all transactions in financial instruments to NCAs under MiFID II. Reports must include LEI, ISIN, price, quantity, venue, timestamp, and client identifiers. Reports are due T+1 (by end of next working day) and submitted via ARMs.',
  },
  {
    term: 'cost disclosure',
    explanation: 'Cost disclosure is the requirement to inform clients about all costs and charges. Ex-ante (before transaction): disclose all costs and impact on return. Ex-post (annually): report actual costs incurred. Costs include entry, exit, ongoing, transaction, and third-party payments.',
  },
  {
    term: 'ex-ante',
    explanation: 'Ex-ante means "before the event" - in cost disclosure, it refers to providing cost information before a transaction occurs. Clients must see all costs, their impact on return, and cumulative effects before deciding to invest. This enables informed decision-making.',
  },
  {
    term: 'ex-post',
    explanation: 'Ex-post means "after the event" - in cost disclosure, it refers to reporting actual costs incurred after transactions have occurred. Annually, firms must report actual costs vs. disclosed costs, showing clients what they actually paid versus what was estimated.',
  },
  {
    term: 'record keeping',
    explanation: 'Record keeping is the obligation to retain records of client communications, orders, transactions, suitability assessments, complaints, and conflicts of interest. Minimum retention is 5 years (7 years on regulator request). Records must be retrievable promptly and cannot be altered.',
  },
  {
    term: 'RHP',
    explanation: 'RHP (Recommended Holding Period) is the suggested investment duration for a product, shown in PRIIPs KID performance scenarios. It represents the time horizon over which the product is designed to perform. Scenarios are shown for 1 year and RHP (e.g., 3 years).',
  },
  {
    term: 'SRI',
    explanation: 'SRI (Summary Risk Indicator) is a 1-7 scale risk rating shown in PRIIPs KID. SRI = Market Risk Measure (MRM) + Credit Risk Measure (CRM). Scale 1 = lowest risk, 7 = highest risk. The SRI helps retail investors quickly understand product risk level for comparison across products.',
  },
  {
    term: 'MRM',
    explanation: 'MRM (Market Risk Measure) is a component of the SRI calculation in PRIIPs KID. It\'s based on VaR at 97.5% confidence over the recommended holding period. MRM classes range from 1 (< 0.5% VaR) to 7 (> 80% VaR), categorizing products by market risk level.',
  },
  {
    term: 'CRM',
    explanation: 'CRM (Credit Risk Measure) is a component of the SRI calculation in PRIIPs KID. It adjusts the Market Risk Measure to account for issuer credit risk. Higher credit risk increases the SRI. CRM ensures products with higher default risk show appropriately higher overall risk ratings.',
  },
  {
    term: 'RIY',
    explanation: 'RIY (Reduction in Yield) measures the total cost impact on return, expressed as an annual percentage. Formula: RIY = IRR(Gross Performance) - IRR(Net Performance After Costs). RIY shows how much costs reduce the effective return, enabling cost comparison across products.',
  },
  {
    term: 'stress scenario',
    explanation: 'Stress scenario is one of four mandatory performance scenarios in PRIIPs KID, representing extreme negative conditions. It\'s based on tail risk analysis and shows potential losses in worst-case situations. The stress scenario helps investors understand maximum potential downside.',
  },
  {
    term: 'manufacturer',
    explanation: 'Manufacturer is the issuer of a PRIIPs product, responsible for creating and maintaining the KID. The manufacturer must publish KIDs on their website, keep them updated (at least annually), and ensure they\'re provided to investors before purchase. Manufacturer information appears in KID Section 1.',
  },
  {
    term: 'performance scenarios',
    explanation: 'Performance scenarios are four mandatory illustrations in PRIIPs KID showing potential outcomes: Stress (extreme negative), Unfavourable (10th percentile), Moderate (50th percentile/median), and Favourable (90th percentile). Scenarios are shown for 1 year and RHP, helping investors understand possible returns.',
  },
  {
    term: 'unfavourable scenario',
    explanation: 'Unfavourable scenario is one of four mandatory performance scenarios in PRIIPs KID, representing the 10th percentile outcome. It shows a below-average but not extreme result. This scenario helps investors understand potential losses in moderately bad market conditions.',
  },
  {
    term: 'moderate scenario',
    explanation: 'Moderate scenario is one of four mandatory performance scenarios in PRIIPs KID, representing the 50th percentile (median) outcome. It shows the most likely result based on statistical analysis. This scenario represents the expected performance in normal market conditions.',
  },
  {
    term: 'favourable scenario',
    explanation: 'Favourable scenario is one of four mandatory performance scenarios in PRIIPs KID, representing the 90th percentile outcome. It shows an above-average result. This scenario helps investors understand potential gains in good market conditions, but is not a guarantee.',
  },
  {
    term: 'suitability',
    explanation: 'Suitability is a full assessment required for investment advice and portfolio management services under MiFID II. It evaluates client knowledge, experience, financial situation, and investment objectives to ensure recommended products match the client profile. Unsuitable products should not be recommended.',
  },
  {
    term: 'appropriateness',
    explanation: 'Appropriateness is a limited assessment required for execution-only services involving complex products. It only evaluates client knowledge and experience (not financial situation). If inappropriate, clients must be warned but can still proceed if they acknowledge the warning.',
  },
  {
    term: 'risk tolerance',
    explanation: 'Risk tolerance is a client\'s willingness to accept losses in pursuit of returns. It\'s assessed on scales (e.g., 1-5: Conservative to Aggressive) and determines which products are suitable. Risk tolerance is subjective and based on client psychology, not just financial capacity.',
  },
  {
    term: 'risk capacity',
    explanation: 'Risk capacity is a client\'s financial ability to bear losses, distinct from risk tolerance (willingness). A client may be willing to take risk but lack the financial capacity. Risk capacity considers income, assets, liabilities, and investment capacity - what can they afford to lose?',
  },
  {
    term: 'investment horizon',
    explanation: 'Investment horizon is the expected holding period for an investment. It ranges from short-term (less than 1 year) to long-term (5+ years). Products must match client investment horizons - long-dated products are unsuitable for short-term investors, and vice versa.',
  },
  {
    term: 'execution only',
    explanation: 'Execution only is a service where the client decides what to trade without investment advice. For complex products, execution-only services require appropriateness assessment. For non-complex products, no assessment is required. The firm executes orders but doesn\'t provide recommendations.',
  },
  {
    term: 'complex product',
    explanation: 'Complex product is a product requiring appropriateness assessment for execution-only services. Most structured products, derivatives, and leveraged products are complex. Non-complex products (like simple shares or bonds) don\'t require appropriateness checks for execution-only services.',
  },
  {
    term: 'target market matching',
    explanation: 'Target market matching is the process of comparing a client profile to a product\'s target market definition to determine suitability. The system checks if client risk tolerance, knowledge level, investment horizon, and objectives align with the product\'s target market. Mismatches trigger warnings or block orders.',
  },
  {
    term: 'pre-trade transparency',
    explanation: 'Pre-trade transparency is the requirement to publish price and order information before trading occurs. For trading venues, this includes bid/ask prices, order depth, and indicative prices. Pre-trade transparency helps investors see available prices and make informed trading decisions.',
  },
  {
    term: 'post-trade transparency',
    explanation: 'Post-trade transparency is the requirement to publish trade information after execution. This includes executed prices, trade sizes, and venue information (counterparty types are anonymized). Post-trade transparency helps investors see recent trade prices and assess execution quality.',
  },
  {
    term: 'MIC',
    explanation: 'MIC (Market Identifier Code) is a 4-character code that uniquely identifies trading venues. Examples: XETR (Xetra), XSTU (Börse Stuttgart), XLON (London Stock Exchange). MICs are used in transaction reporting to identify where trades were executed.',
  },
  {
    term: 'RTS 28',
    explanation: 'RTS 28 (Regulatory Technical Standard 28) requires annual disclosure of top 5 execution venues by asset class. Firms must publish percentages of volume and orders executed at each venue, close links, conflicts of interest, and payment for order flow. This enables clients to assess execution quality.',
  },
  {
    term: 'waiver',
    explanation: 'A waiver is an exception from transparency obligations under MiFID II. Certain trades (e.g., large orders, illiquid instruments) may be exempt from pre-trade or post-trade transparency requirements. Waivers must be justified and reported. Waiver flags appear in transaction reports.',
  },
];

// Helper function to get term definition (case-insensitive)
export function getTermDefinition(term: string): TermDefinition | undefined {
  return TERMS_DEFINITIONS.find(
    (def) => def.term.toLowerCase() === term.toLowerCase()
  );
}

// Helper function to check if a term exists
export function hasTermDefinition(term: string): boolean {
  return TERMS_DEFINITIONS.some(
    (def) => def.term.toLowerCase() === term.toLowerCase()
  );
}

