---
id: derivatives-intro
title: What is a Derivative
phase: 2
order: 1
difficulty: Beginner
---

# What is a Derivative?

## Overview

A **derivative** is a financial contract whose value is **derived** from the performance of an underlying asset, index, or rate. The derivative itself has no inherent value - its worth comes entirely from the underlying.

Think of it like a bet on the future price of something, but formalized into a tradeable contract.

## Definition

> **Derivative**: A financial instrument whose value depends on (is derived from) the value of other, more basic, underlying variables.

**Key characteristics:**
- Value linked to an underlying (stock, index, commodity, rate)
- Can be used for hedging OR speculation
- Often involves leverage (small investment, large exposure)
- Has a defined expiration or settlement date

## Types of Underlyings

| Underlying Type | Examples | Common Derivatives |
|-----------------|----------|-------------------|
| **Equities** | Stocks, indices (DAX, S&P 500) | Options, futures, warrants |
| **Fixed Income** | Bonds, interest rates | Interest rate swaps, bond futures |
| **FX** | Currency pairs (EUR/USD) | FX forwards, options |
| **Commodities** | Gold, oil, wheat | Futures, options |
| **Credit** | Default risk | Credit default swaps (CDS) |
| **Other derivatives** | Options on futures | Meta-derivatives |

## Main Derivative Types

### 1. Forwards and Futures

**Obligation** to buy or sell at a future date for a predetermined price.

> **📘 Example:** A farmer agrees to sell 1,000 bushels of wheat at €200/bushel in 6 months, regardless of market price at that time.

### 2. Options

**Right (not obligation)** to buy or sell at a future date for a predetermined price.

> **📘 Example:** An investor buys the right to purchase DAX at 16,000 in 3 months for a premium of €500. If DAX is at 17,000, they exercise and profit. If DAX is at 15,000, they don't exercise and only lose the €500 premium.

### 3. Swaps

**Exchange** of cash flows between two parties.

> **📘 Example:** Company A pays fixed 3% rate, Company B pays floating EURIBOR. They swap these payments to manage interest rate exposure.

## Why Derivatives Exist

### 1. Hedging (Risk Management)

**Purpose**: Reduce or eliminate risk from price movements.

> **📘 Example:** German car manufacturer exports to US. If EUR strengthens vs USD, their US revenue is worth less in EUR. They buy EUR/USD forward to lock in the exchange rate.

**Key point**: Hedgers are willing to pay to remove uncertainty.

### 2. Speculation

**Purpose**: Profit from expected price movements.

> **📘 Example:** Trader believes DAX will rise. Instead of buying €100,000 of DAX ETF, they buy call options for €5,000 that give similar exposure. If right, much higher return. If wrong, limited loss.

**Key point**: Speculators provide liquidity and take on risk from hedgers.

### 3. Arbitrage

**Purpose**: Profit from price discrepancies without risk.

> **📘 Example:** Same stock trades at €100 on Frankfurt and €100.05 on Paris. Arbitrageur buys in Frankfurt, sells in Paris, pockets €0.05 risk-free (minus costs).

**Key point**: Arbitrage keeps markets efficient and prices aligned.

## Leverage in Derivatives

One of the most important (and dangerous) characteristics of derivatives is **leverage**.

### How Leverage Works

Instead of buying the underlying directly, derivatives require only a fraction of the value.

> **📘 Example:** 
> **Without leverage (buy stock):**
> - Buy €10,000 of DAX ETF
> - DAX rises 5%: Profit = €500 (5% return)
> 
> **With leverage (buy call option):**
> - Buy call option for €500 (controls €10,000 exposure)
> - DAX rises 5%: Profit = €500 (100% return!)
> - DAX falls 5%: Loss = €500 (100% loss!)

### Leverage Ratios

| Derivative | Typical Leverage |
|------------|------------------|
| Futures (equities) | 5x - 20x |
| Options | 5x - 50x+ |
| Knock-out certificates | 3x - 100x+ |
| Warrants | 3x - 20x |

> **⚠️ Warning:** Leverage amplifies both gains AND losses. You can lose more than your initial investment with some derivatives.

## Exchange-Traded vs OTC

### Exchange-Traded Derivatives

Traded on organized exchanges with standardized contracts.

| Aspect | Description |
|--------|-------------|
| **Examples** | Futures, listed options |
| **Exchanges** | EUREX, CME, ICE |
| **Standardization** | Fixed contract sizes, dates |
| **Counterparty** | Central clearinghouse |
| **Transparency** | Public prices |

### Over-the-Counter (OTC) Derivatives

Traded directly between parties with customized terms.

| Aspect | Description |
|--------|-------------|
| **Examples** | Forwards, swaps, exotic options |
| **Trading** | Dealer networks |
| **Customization** | Tailored to needs |
| **Counterparty** | Direct exposure to other party |
| **Transparency** | Private transactions |

> **💡 Note:** Structured products are typically OTC instruments issued by banks, but often traded on exchanges (Börse Stuttgart, Xetra).

## Counterparty Risk

### What is Counterparty Risk?

The risk that the other party to a derivative contract defaults on their obligation.

**Exchange-traded:** Minimal - clearinghouse guarantees settlement
**OTC:** Significant - depends on counterparty creditworthiness

> **📘 Example:** You hold a structured product issued by Bank X. If Bank X goes bankrupt, you may lose your investment even if the underlying performed well. This happened with Lehman Brothers certificates in 2008.

### Mitigation

- **Collateral/margin requirements**
- **Central clearing** (post-2008 regulations)
- **Netting agreements**
- **Credit support annexes (CSA)**

## Derivative Valuation Basics

### Mark-to-Market

Derivatives are valued at current market prices, not original cost.

**Daily P&L** = Today's value - Yesterday's value

> **📘 Example:** You bought a call option for €500. Today it's worth €700. Your unrealized P&L is +€200.

### Fair Value Components

For options:
- **Intrinsic value**: Value if exercised now
- **Time value**: Additional value from time remaining

We'll explore these in detail in the Moneyness & Time Value topic.

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Understanding derivatives is essential for:

1. **Pricing Systems**
   - Implementing valuation models
   - Handling different product types
   - Real-time pricing updates

2. **Risk Systems**
   - Calculating exposures
   - Aggregating risks across portfolios
   - Stress testing and scenarios

3. **Trade Lifecycle**
   - Trade capture and validation
   - Settlement processing
   - Corporate action handling

4. **Data Management**
   - Market data requirements (volatility surfaces)
   - Reference data (contract specifications)
   - Historical data (for backtesting)

## Common Misconceptions

> **⚠️ Misconception:** "Derivatives are just gambling"
> **Reality:** Derivatives serve essential economic functions - hedging allows businesses to manage risk and plan ahead. Airlines hedge fuel costs, farmers hedge crop prices, companies hedge FX exposure.

> **⚠️ Misconception:** "Derivatives caused the 2008 crisis"
> **Reality:** Misuse and misunderstanding of derivatives (especially mortgage-backed CDOs and CDS) contributed, but derivatives themselves are neutral tools. A hammer can build or destroy.

> **⚠️ Misconception:** "Derivatives are always high risk"
> **Reality:** A simple forward contract to lock in an exchange rate is lower risk than having no hedge at all.

## Glossary

- **Underlying**: Asset from which derivative derives its value
- **Notional**: Face value of derivative contract (often much larger than market value)
- **Premium**: Price paid for an option
- **Strike Price**: Predetermined price in option/forward contract
- **Expiration**: Date when derivative contract ends
- **Settlement**: Physical delivery vs cash settlement
- **Long Position**: Buyer of derivative (expects price rise)
- **Short Position**: Seller of derivative (expects price fall)
- **Mark-to-Market**: Valuing position at current market price

