---
id: primary-secondary
title: Primary vs Secondary Market
phase: 0
order: 2
difficulty: Beginner
---

# Primary vs Secondary Market

## Overview

Understanding the distinction between primary and secondary markets is fundamental to grasping how securities come into existence and how they're traded. These two market types serve different purposes and involve different participants.

## Primary Market

The **primary market** is where new securities are created and sold for the first time. This is where companies, governments, and other entities raise fresh capital.

### Key Characteristics

- **First-time issuance** of securities
- **Issuer receives proceeds** from the sale
- **Underwriters** facilitate the process
- **Price is set** by the issuer and underwriters
- **Limited trading** - typically one transaction per security

### How It Works

```
Company needs capital
    ↓
Hires investment bank (underwriter)
    ↓
Creates prospectus & sets price
    ↓
Sells securities to investors
    ↓
Company receives cash
```

## Real Example: Porsche IPO (2022)

**Primary Market Transaction:**

- **Issuer:** Porsche AG
- **Date:** September 2022
- **What:** Initial Public Offering (IPO)
- **Volume:** 911 million shares (symbolic number!)
- **Price:** €82.50 per share
- **Capital Raised:** €9.4 billion
- **Underwriters:** Goldman Sachs, JPMorgan, others
- **Exchange:** Frankfurt Stock Exchange

**Process:**
1. Porsche and VW decided to list Porsche separately
2. Investment banks prepared the IPO documentation
3. Roadshow to institutional investors
4. Price set at €82.50 based on demand
5. Shares sold to institutional and retail investors
6. **Porsche received the €9.4 billion** to use for business operations

## Secondary Market

The **secondary market** is where existing securities are traded between investors. No new capital goes to the original issuer.

### Key Characteristics

- **Trading of existing** securities
- **Issuer doesn't receive** proceeds
- **Liquidity** for investors
- **Price determined** by supply and demand
- **Continuous trading** during market hours

### How It Works

```
Investor A owns shares
    ↓
Wants to sell
    ↓
Places order on exchange (Xetra)
    ↓
Investor B buys the shares
    ↓
Money goes to Investor A (not the company)
```

## Real Example: Buying Siemens Stock Today

**Secondary Market Transaction:**

- **Stock:** Siemens AG
- **Exchange:** Xetra (Frankfurt)
- **Current Price:** ~€170 per share (hypothetical)
- **You buy:** 100 shares for €17,000
- **Seller:** Another investor (could be a pension fund, hedge fund, or individual)
- **Siemens receives:** Nothing - they already raised capital in the past

**Process:**
1. You place a buy order through your broker
2. Order goes to Xetra exchange
3. Matches with another investor's sell order
4. Trade executes at market price
5. **Money goes to the seller**, not Siemens

## Key Differences

| Aspect | Primary Market | Secondary Market |
|--------|---------------|------------------|
| **Purpose** | Raise new capital | Provide liquidity |
| **Participants** | Issuer ↔ Investors | Investor ↔ Investor |
| **Proceeds go to** | Issuer (company/government) | Selling investor |
| **Frequency** | One-time per security | Continuous |
| **Price setting** | Issuer + underwriter | Supply & demand |
| **Regulation** | Heavy (prospectus required) | Trading rules |
| **Examples** | IPO, bond issuance | Xetra, EUREX trading |

## Types of Primary Market Offerings

### Initial Public Offering (IPO)

First time a company sells shares to the public.

**Recent German Example:** Delivery Hero IPO (2017)
- Raised €1 billion
- Listed on Frankfurt Stock Exchange
- Company used funds for international expansion

### Follow-on Offering (FPO)

Existing public company issues additional shares.

**Example:** Deutsche Bank Rights Issue (2017)
- Already public company
- Issued new shares to existing shareholders
- Raised €8 billion to strengthen capital

### Bond Issuance

Companies or governments issue debt securities.

**Example:** Volkswagen Corporate Bond
- Issue: €2 billion, 5-year bond
- Coupon: 3.5% annual
- Purpose: Finance new EV factories
- Investors: Insurance companies, pension funds
- VW receives the €2 billion upfront

### Structured Products Issuance

Banks create and issue structured products.

**Example:** Deutsche Bank Autocallable
- Product: 2-year autocallable on DAX
- Issue size: €50 million
- Sold to: Retail and institutional clients
- Bank receives: Premium from investors
- Bank hedges: By trading derivatives on EUREX

## The IPO Process (Detailed)

### Step 1: Decision & Preparation (3-6 months)

- Company decides to go public
- Selects underwriters (investment banks)
- Due diligence on company finances
- Prepare prospectus (400+ page document)

### Step 2: Regulatory Filing (1-3 months)

- File with BaFin (German regulator)
- SEC if listing in US too
- Respond to regulatory comments
- Finalize prospectus

### Step 3: Marketing (2-4 weeks)

- **Roadshow:** Management presents to institutional investors across Europe/world
- Gauge interest and demand
- Build order book

### Step 4: Pricing (1 day)

- Based on demand, set final price
- Allocate shares to investors
- Usually done evening before listing

### Step 5: Trading Begins

- First day of secondary market trading
- Price can rise or fall from IPO price
- High volatility typical on day 1

## Secondary Market Structure in Germany

### Xetra (Frankfurt Stock Exchange)

- Electronic order book
- Most liquid German stocks
- Trading hours: 9:00-17:30 CET
- Continuous auction trading
- Market makers provide liquidity

### Börse Stuttgart

- Retail-focused exchange
- Specialist in structured products
- Long hours: 8:00-22:00 CET
- Over 2 million securities

### Tradegate Exchange

- Retail trading platform
- Very long hours: 8:00-22:00 CET
- Popular with online brokers
- Often tighter spreads for retail

## Why Both Markets Matter for Banking Software

### Primary Market Systems

When building systems for primary market, you handle:

- **Prospectus management:** Store and version documents
- **Allocation algorithms:** Distribute shares to investors fairly
- **Pricing models:** Calculate optimal offering price
- **Compliance tracking:** Ensure regulatory requirements met
- **Settlement:** Transfer shares and cash

### Secondary Market Systems

Secondary market systems need to:

- **Order management:** Route, execute, track orders
- **Market data:** Process real-time price feeds
- **Risk management:** Monitor positions and exposure
- **Trade reporting:** Comply with MiFID II requirements
- **Settlement:** T+2 settlement cycle management

## Common Misconceptions

### ❌ "Companies make money when their stock price rises"

**Reality:** After the IPO (primary market), the company doesn't receive any proceeds from secondary market trading. If Siemens stock goes from €170 to €180, Siemens doesn't get that €10 per share - existing shareholders do.

However, a higher stock price does help the company by:
- Making future capital raises easier and cheaper
- Using stock for acquisitions
- Employee stock compensation is more valuable
- Enhanced reputation

### ❌ "All new securities go through IPO"

**Reality:** IPO is only for companies going public for the first time. Bonds, structured products, and additional shares from existing public companies are primary market transactions but not IPOs.

### ❌ "Secondary market is less important"

**Reality:** The secondary market is crucial because it provides liquidity. Without it, nobody would buy in the primary market since they'd be locked in forever. A healthy secondary market makes primary market transactions possible.

## Structured Products: Both Markets

Structured products uniquely participate in both markets:

### Primary Market
- **Deutsche Bank issues** a 3-year autocallable on DAX
- €100 million total issuance
- Sells to clients at €100 per certificate
- Bank receives the capital

### Secondary Market
- Clients can trade the autocallable on Börse Stuttgart or directly with Deutsche Bank
- Price changes daily based on underlying (DAX) movement
- Bank acts as market maker, quoting bid/ask prices
- Other investors can buy from existing holders

## Next Steps

Now that you understand how securities come into existence (primary) and how they're traded (secondary), the next topic covers **Market Participants & Roles** - who these players are and what function each serves.

## Glossary

- **Underwriter:** Investment bank that manages the issuance process and often buys securities from issuer to resell
- **Prospectus:** Legal document disclosing all material information about a security offering
- **Roadshow:** Marketing tour where company management pitches the investment opportunity to institutional investors
- **Allocation:** Process of distributing securities among investors in oversubscribed offerings
- **Green Shoe Option:** Allows underwriters to sell additional shares (usually 15% more) if demand is high
- **Book Building:** Process of collecting investor demand to determine optimal IPO price

