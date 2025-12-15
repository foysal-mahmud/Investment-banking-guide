---
id: fx
title: Foreign Exchange (FX)
phase: 1
order: 3
difficulty: Beginner
---

# Foreign Exchange (FX)

## Overview

**Foreign Exchange (FX or Forex)** is the global market for trading currencies. It's the largest and most liquid financial market in the world, with daily trading volume exceeding **$7.5 trillion**.

FX is a critical underlying for structured products, especially for international investors and companies with foreign currency exposure.

## The FX Market

### Market Structure

Unlike stocks, FX trades **over-the-counter (OTC)** without a central exchange.

| Characteristic | Description |
|---------------|-------------|
| **Market Hours** | 24 hours, 5 days a week (Sunday 5pm NYC to Friday 5pm NYC) |
| **Volume** | $7.5+ trillion daily |
| **Main Centers** | London (largest), New York, Tokyo, Singapore, Hong Kong |
| **Participants** | Banks, corporations, central banks, hedge funds, retail traders |

> **💡 Note:** FX never sleeps during the week. Trading follows the sun: Tokyo → London → New York → Sydney → Tokyo

### Major Currency Pairs

**Major pairs** involve the USD and account for ~85% of trading:

| Pair | Name | Daily Volume |
|------|------|--------------|
| EUR/USD | Euro-Dollar | ~$1.1 trillion |
| USD/JPY | Dollar-Yen | ~$900 billion |
| GBP/USD | Cable | ~$600 billion |
| USD/CHF | Swissy | ~$200 billion |

**Cross pairs** (no USD):

| Pair | Name |
|------|------|
| EUR/GBP | Euro-Pound |
| EUR/CHF | Euro-Swiss |
| EUR/JPY | Euro-Yen |

## Currency Pair Notation

### Reading Currency Pairs

Currency pairs show how much of the **quote currency** (second) is needed to buy one unit of the **base currency** (first).

```
EUR/USD = 1.0850
```

**Meaning**: 1 EUR costs 1.0850 USD

| Component | Role | Example |
|-----------|------|---------|
| Base Currency | What you're buying | EUR |
| Quote Currency | What you're paying with | USD |
| Exchange Rate | Price of base in quote terms | 1.0850 |

> **📘 Example:** If EUR/USD = 1.0850:
> - Buying €10,000 costs $10,850
> - Selling €10,000 gives you $10,850

### Bid-Ask Spread

FX quotes always have two prices:

```
EUR/USD: 1.0848 / 1.0852
         (Bid)   (Ask)
```

| Price | Meaning |
|-------|---------|
| **Bid** (1.0848) | Price at which dealer buys EUR (you sell) |
| **Ask** (1.0852) | Price at which dealer sells EUR (you buy) |
| **Spread** (4 pips) | Dealer's profit margin |

> **💡 Note:** Major pairs have tight spreads (2-5 pips). Exotic pairs (USD/TRY, EUR/PLN) have wider spreads (20-100 pips).

### Pips

A **pip** is the smallest standard price movement in FX (usually 0.0001).

| Pair | Pip Size | Example |
|------|----------|---------|
| EUR/USD | 0.0001 | 1.0850 → 1.0851 = +1 pip |
| USD/JPY | 0.01 | 150.50 → 150.51 = +1 pip |

> **📘 Example:** You buy €100,000 EUR/USD at 1.0850. Rate moves to 1.0900.
> - Movement: 50 pips
> - Profit: €100,000 × 0.0050 = **$500**

## Spot vs Forward

### Spot Transactions

**Spot** = immediate exchange (settlement in T+2 business days).

> **📘 Example:** Company needs $1 million today. Buys spot USD/EUR at current market rate. Settles in 2 days.

### Forward Contracts

**Forward** = agreement to exchange at a future date at a rate fixed today.

**Forward Rate Calculation:**
```
Forward Rate = Spot Rate × (1 + Quote Currency Rate × Time) / (1 + Base Currency Rate × Time)
```

> **📘 Example:** 
> - Spot EUR/USD: 1.0850
> - EUR interest rate: 3.5%
> - USD interest rate: 5.0%
> - 1-year forward: 1.0850 × (1.05)/(1.035) = **1.1007**

**Why forwards differ from spot:**
- If USD rates are higher than EUR rates, forward EUR/USD will be higher (USD at forward discount)
- This reflects the cost of carry between currencies

### FX Swaps

Combination of spot and forward transactions:
- Buy EUR spot
- Simultaneously sell EUR forward
- Used for funding and hedging

## Currency Risk

### Transaction Exposure

Risk from future foreign currency receipts/payments.

> **📘 Example:** German exporter sells machinery to US customer for $10 million, payment in 6 months.
> - Today: EUR/USD = 1.10 → Expected €9.09 million
> - In 6 months: EUR/USD = 1.20 → Actual €8.33 million
> - **Loss: €760,000** from EUR strengthening

**Hedging solution**: Buy EUR/USD forward at 1.10 to lock in €9.09 million

### Translation Exposure

Risk from converting foreign subsidiary financials to home currency.

### Economic Exposure

Long-term competitive impact of currency movements on business.

## FX in Structured Products

### Quanto Products

Products that eliminate currency risk for foreign underlyings.

> **📘 Example:** German investor wants S&P 500 exposure but no USD risk.
> - **Standard product**: Returns in USD, then converted to EUR at maturity
> - **Quanto product**: S&P 500 return paid directly in EUR at 1:1 ratio

**Quanto adjustment**: Product is more expensive because issuer hedges currency risk

### Dual Currency Notes

Products paying in different currencies based on FX movement.

> **📘 Example:** Dual Currency Note EUR/USD:
> - If EUR/USD > 1.10 at maturity: Paid in EUR
> - If EUR/USD ≤ 1.10 at maturity: Paid in USD (at fixed rate)
> - Risk: Receive USD when it's worth less in EUR terms

### FX-Linked Structured Products

Products whose payoff depends on FX movements.

> **📘 Example:** EUR/USD Range Accrual:
> - Pays 5% coupon for each day EUR/USD is within 1.05-1.15 range
> - If EUR/USD outside range, no coupon accrues
> - At maturity: (Days in range / Total days) × 5%

## German/European FX Context

### Euro (EUR)

Second most traded currency globally (after USD).

**Key EUR pairs for German banks:**
- EUR/USD - Most liquid
- EUR/CHF - Important for Swiss business
- EUR/GBP - UK trade
- EUR/JPY - Japanese investors in European assets

### Swiss Franc (CHF)

Safe haven currency, important for German/Swiss cross-border business.

> **💡 Note:** In January 2015, Swiss National Bank abandoned EUR/CHF floor of 1.20, causing CHF to spike 30% in minutes. Many structured products knocked out immediately.

### Currency Correlations

| Pair 1 | Pair 2 | Typical Correlation |
|--------|--------|---------------------|
| EUR/USD | GBP/USD | High positive (both vs USD) |
| EUR/USD | USD/CHF | High negative (USD on opposite side) |
| EUR/USD | USD/JPY | Variable (risk sentiment dependent) |

## Why Software Engineers Should Understand This

> **💡 Key Insight:** FX systems require:

1. **Real-Time Data Processing**
   - Prices update multiple times per second
   - Multiple data sources (Reuters, Bloomberg, banks)
   - Handling quote staleness and outliers

2. **Settlement Date Calculations**
   - T+2 spot settlement
   - Holiday calendars for both currencies
   - Value date conventions

3. **Rate Conversions**
   - Converting between direct and indirect quotes
   - Cross-rate calculations
   - Pip value calculations

4. **Hedging Systems**
   - Forward rate calculations
   - Roll-over processing
   - Margin calculations

## Common Misconceptions

> **⚠️ Misconception:** "Strong currency is always good"
> **Reality:** A strong EUR hurts German exporters (products more expensive for foreign buyers) but helps importers and travelers.

> **⚠️ Misconception:** "FX rates are set by governments"
> **Reality:** Major currency rates are market-determined. Central banks can intervene but rarely control long-term trends.

> **⚠️ Misconception:** "Forward rates predict future spot rates"
> **Reality:** Forward rates reflect interest rate differentials, not predictions. They're often wrong about future spot direction.

## Glossary

- **Pip**: Smallest price increment (0.0001 for most pairs)
- **Spot**: Current market rate for immediate exchange (T+2)
- **Forward**: Rate for future exchange, fixed today
- **Cable**: GBP/USD (named after transatlantic cable)
- **Carry Trade**: Borrowing low-rate currency to invest in high-rate currency
- **Safe Haven**: Currency that appreciates during market stress (CHF, JPY, USD)
- **Quanto**: Structure eliminating currency risk on foreign underlying

