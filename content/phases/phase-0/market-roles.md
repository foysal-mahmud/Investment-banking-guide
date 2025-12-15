---
id: market-roles
title: Market Participants & Roles
phase: 0
order: 3
difficulty: Beginner
---

# Market Participants & Roles

## Overview

Financial markets are ecosystems with many different players, each serving specific functions. Understanding who does what is crucial when building banking software, as your systems will interact with multiple participant types.

## Key Participants

### 1. Issuers

**Who they are:** Companies, governments, and banks that create and sell securities to raise capital.

**Examples:**
- **Volkswagen AG** issues corporate bonds
- **Federal Republic of Germany** issues Bunds (government bonds)
- **Deutsche Bank** issues structured products
- **Siemens AG** issues equity (shares)

**What they do:**
- Raise capital for operations, projects, or debt refinancing
- Determine terms of securities (coupon, maturity, features)
- Hire underwriters to manage the issuance process
- Maintain relationships with investors

### 2. Investors

The people and institutions that buy securities to earn returns.

#### Retail Investors
- **Who:** Individual people investing personal money
- **Size:** €1,000 to €1 million typically
- **Access:** Via online brokers (Trade Republic, Scalable Capital)
- **Products:** Stocks, ETFs, structured products, warrants
- **Motivation:** Wealth building, retirement savings

#### Institutional Investors
- **Who:** Organizations managing large pools of capital
- **Size:** €100 million to €100+ billion
- **Types:**
  - Pension funds (Allianz, BVV)
  - Insurance companies
  - Asset managers (DWS, Union Investment)
  - Hedge funds
  - Sovereign wealth funds

### 3. Exchanges

**Definition:** Organized markets providing a platform for trading securities.

#### Major German/European Exchanges

**Deutsche Börse (Frankfurt)**
- **Products:** Stocks, bonds, ETFs
- **Platform:** Xetra (electronic trading)
- **Members:** Banks and brokers
- **Hours:** 9:00-17:30 CET
- **Role:** Match buyers and sellers, ensure fair pricing

**EUREX**
- **Products:** Derivatives (futures, options)
- **Underlyings:** DAX, EURO STOXX 50, German Bunds
- **Function:** Risk management and speculation
- **Participants:** Institutional traders, market makers

**Börse Stuttgart**
- **Specialty:** Structured products, bonds
- **Unique:** Retail-focused, extended hours (8:00-22:00)
- **Volume:** Over 2 million tradable securities

**Functions of Exchanges:**
1. Provide centralized trading venue
2. Ensure price transparency
3. Guarantee settlement via clearinghouse
4. Enforce trading rules and regulations
5. Publish market data

### 4. Market Makers

**Definition:** Firms that continuously quote both buy (bid) and sell (ask) prices, providing liquidity.

**How it works:**
```
Market Maker quotes:
Bid: €99.50 (willing to buy)
Ask: €100.00 (willing to sell)
Spread: €0.50 (their profit)
```

**Examples in Germany:**
- Banks like Deutsche Bank, Commerzbank act as market makers
- Designated sponsors on Xetra for smaller stocks
- Structured product issuers (bank quotes prices for their own products)

**Why they matter:**
- Enable immediate execution of trades
- Reduce price volatility
- Earn spread as compensation for risk
- Critical for illiquid securities

### 5. Buy-Side vs Sell-Side

This is a fundamental distinction in investment banking.

#### Sell-Side

**Who:** Investment banks, broker-dealers

**What they do:**
- **Create** securities (underwriting)
- **Sell** securities to investors
- **Trade** on behalf of clients
- **Provide research** and analysis
- **Market making**

**Examples:**
- Deutsche Bank Markets division
- Goldman Sachs
- JPMorgan Securities

**Revenue:**
- Underwriting fees
- Trading commissions
- Bid-ask spreads
- Advisory fees

#### Buy-Side

**Who:** Asset managers, hedge funds, pension funds, insurance companies

**What they do:**
- **Buy** securities for investment
- **Manage** portfolios
- **Analyze** investments
- Earn returns for end clients

**Examples:**
- DWS (Deutsche Bank's asset manager)
- BlackRock
- Allianz Global Investors
- Union Investment

**Revenue:**
- Management fees (% of assets)
- Performance fees
- Not from trading spreads

### 6. Brokers

**Definition:** Intermediaries that execute trades on behalf of clients.

#### Full-Service Brokers
- Provide advice and research
- Higher fees
- Personal relationship
- Example: Private banking divisions

#### Discount/Online Brokers
- Execution-only service
- Low fees (often €0-€1 per trade)
- Self-directed investing
- Examples: Trade Republic, Scalable Capital, Flatex

**Function:**
- Route client orders to exchanges
- Don't take risk (unlike market makers)
- Earn commissions or payment for order flow

### 7. Clearinghouses

**Definition:** Entities that guarantee trade settlement and manage counterparty risk.

**Major European Clearinghouse:**
- **Eurex Clearing** (part of Deutsche Börse Group)
- Clears derivatives and repo transactions
- Acts as central counterparty (CCP)

**How it works:**
```
Without clearinghouse:
Buyer ←→ Seller (counterparty risk)

With clearinghouse:
Buyer ←→ Clearinghouse ←→ Seller
(clearinghouse takes on both sides)
```

**Functions:**
1. **Novation:** Becomes buyer to every seller, seller to every buyer
2. **Margin management:** Collects initial and variation margin
3. **Netting:** Reduces number of settlements
4. **Default management:** Steps in if a member fails

### 8. Regulators

Entities ensuring market integrity and investor protection.

#### BaFin (Bundesanstalt für Finanzdienstleistungsaufsicht)
- **Role:** German financial regulator
- **Scope:** Banks, insurance, securities markets
- **Powers:** Licensing, supervision, enforcement
- **Focus:** Market abuse prevention, investor protection

#### ESMA (European Securities and Markets Authority)
- **Role:** EU-level coordination
- **Scope:** Harmonizing regulations across EU
- **Key regulations:** MiFID II, PRIIPs, EMIR

#### Deutsche Bundesbank
- **Role:** Germany's central bank
- **Functions:** Monetary policy, banking supervision
- **Interaction:** Works with ECB and BaFin

## Real-World Example: Trade Flow

Let's follow a trade through the ecosystem:

### Scenario: Retail investor buys 100 Siemens shares

1. **Investor (You):** Decides to buy 100 Siemens shares
2. **Broker (Trade Republic):** Receives your order
3. **Exchange (Xetra):** Order routed to Xetra order book
4. **Market Maker:** Might provide liquidity if no natural seller
5. **Matching:** Your buy order matches another investor's sell order
6. **Clearinghouse (Eurex Clearing):** Guarantees settlement
7. **Settlement (T+2):** Two days later:
   - Shares transferred to your custody account
   - Money transferred from your cash account to seller
8. **Custodian:** Holds your shares electronically

### Parties involved:
- **You** (retail investor)
- **Trade Republic** (broker)
- **Deutsche Börse/Xetra** (exchange)
- **Clearstream** (securities depository)
- **Eurex Clearing** (clearinghouse)
- **Market maker** (possibly)
- **BaFin** (oversight)

## Structured Product Ecosystem

For a structured product on Börse Stuttgart:

### Issuance Phase
1. **Issuer (Deutsche Bank):** Creates autocallable on DAX
2. **Structuring team:** Designs product terms
3. **Compliance:** Approves internally
4. **BaFin:** Reviews prospectus
5. **Börse Stuttgart:** Lists product
6. **Distribution:** Sold via advisor network

### Secondary Trading
1. **Investor:** Wants to buy/sell
2. **Broker:** Routes to Börse Stuttgart or directly to issuer
3. **Deutsche Bank (Market Maker):** Quotes bid/ask prices
4. **Trade execution:** Investor trades with bank
5. **Settlement:** T+2 settlement cycle

## Software Engineering Perspective

When building banking systems, you're creating software for these participants:

### Sell-Side Systems (Investment Banks)
- **Trading platforms:** For traders to make markets
- **Pricing engines:** Calculate fair values in real-time
- **Risk management:** Monitor exposures
- **Client portals:** Show positions and prices
- **Order management:** Route and execute orders

### Buy-Side Systems (Asset Managers)
- **Portfolio management:** Track holdings
- **Order management systems (OMS):** Generate orders
- **Execution management (EMS):** Route to best venue
- **Performance tracking:** Calculate returns
- **Compliance:** Ensure regulatory adherence

### Exchange Systems
- **Matching engines:** Pair buyers and sellers (ultra-low latency)
- **Market data:** Publish prices and volumes
- **Surveillance:** Detect market manipulation
- **Settlement:** Coordinate clearing

### Your Code Interacts With:
- **Market data feeds:** From exchanges (FIX protocol)
- **Order routing:** To exchanges and market makers
- **Pricing models:** For structured products
- **Regulatory reporting:** To BaFin (transaction reporting)
- **Client APIs:** For retail/institutional clients

## Key Concepts

### Principal vs Agency

**Principal trading:**
- Bank trades using its own capital
- Takes risk on positions
- Example: Market maker inventory

**Agency trading:**
- Bank acts on behalf of client
- No risk (earns commission)
- Example: Broker executing client order

### Liquidity Providers

Essential for market functioning:
- Market makers
- High-frequency traders
- Large institutional investors
- Banks' trading desks

Without liquidity providers, markets would have:
- Wide bid-ask spreads
- Price slippage on large orders
- Difficulty entering/exiting positions

### Conflicts of Interest

**Example:** Investment bank serving multiple roles:
- Advising company on IPO (advisory)
- Underwriting the IPO (principal)
- Analyzing the stock (research)
- Market making post-IPO (trading)

**Regulations address this:**
- Chinese walls between divisions
- Disclosure requirements
- MiFID II unbundling research from execution

## Common Misconceptions

### ❌ "Market makers always make money on the spread"

**Reality:** Market makers take risk. If they buy at €100 and the market crashes to €95 before they can sell, they lose money. The spread compensates for this risk.

### ❌ "Exchanges trade securities"

**Reality:** Exchanges **provide platforms** for trading. The actual buying/selling is between market participants (investors, market makers). The exchange is the intermediary venue.

### ❌ "All banks are the same"

**Reality:**
- **Commercial banks:** Deposits, loans (Sparkasse, local banks)
- **Investment banks:** Capital markets, trading, M&A (Deutsche Bank Markets, Goldman Sachs)
- **Universal banks:** Both commercial and investment banking (Deutsche Bank AG combines both)

## Next Steps

Now that you understand the players and their roles, the final topic in this phase covers **Investment Banking vs Commercial Banking** - clarifying the fundamental difference between these two types of financial institutions.

## Glossary

- **Underwriter:** Investment bank that manages new securities issuance, often buying securities from issuer to resell
- **Principal:** Trading firm's own capital (as opposed to client's)
- **Agency:** Acting on behalf of another party for a fee
- **Bid:** Price a buyer offers
- **Ask/Offer:** Price a seller demands
- **Spread:** Difference between bid and ask
- **T+2:** Trade date plus 2 business days (standard settlement in Europe)
- **Custodian:** Entity that holds securities on behalf of investors
- **CCP (Central Counterparty):** Clearinghouse that interposes itself between trading parties

