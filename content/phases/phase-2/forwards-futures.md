---
id: forwards-futures
title: Forwards & Futures
phase: 2
order: 2
difficulty: Beginner
---

# Forwards & Futures

## Overview

**Forwards** and **futures** are contracts that obligate the buyer to purchase, and the seller to sell, an underlying asset at a predetermined future date and price.

Unlike options (which give a *right*), forwards and futures create an *obligation*. Both parties must fulfill the contract.

## Forward Contracts

### Definition

A **forward contract** is a customized, private agreement between two parties to buy/sell an asset at a specified future date at a price agreed today.

### Key Characteristics

| Feature | Description |
|---------|-------------|
| **Trading venue** | OTC (over-the-counter) |
| **Customization** | Fully customizable |
| **Counterparty** | Direct exposure to other party |
| **Settlement** | Usually at maturity |
| **Liquidity** | Limited (no secondary market) |

### How Forwards Work

> **📘 Example:** FX Forward
> 
> **Scenario:** German exporter expects $1 million payment in 6 months
> 
> **Problem:** If EUR/USD moves from 1.08 to 1.15, they receive €870K instead of €926K
> 
> **Solution:** Enter 6-month EUR/USD forward at 1.0850
> 
> **Result:** Guaranteed to receive $1M ÷ 1.0850 = **€921,659** regardless of market rate

### Forward Price Calculation

For a non-dividend paying asset:

```
Forward Price = Spot Price × (1 + Risk-free Rate × Time)
```

For currencies:

```
Forward Rate = Spot Rate × (1 + Quote Currency Rate × T) / (1 + Base Currency Rate × T)
```

> **📘 Example:** 
> - Spot EUR/USD: 1.0800
> - USD rate: 5%, EUR rate: 3.5%
> - 1-year forward: 1.0800 × (1.05)/(1.035) = **1.0957**

### Forward Payoff

**Long forward (buyer):**
```
Payoff = Spot Price at Expiry - Forward Price
```

**Short forward (seller):**
```
Payoff = Forward Price - Spot Price at Expiry
```

> **📘 Example:** Agreed to buy DAX at 16,000 (forward price)
> - If DAX at expiry = 17,000: Long gains €1,000, Short loses €1,000
> - If DAX at expiry = 15,000: Long loses €1,000, Short gains €1,000

## Futures Contracts

### Definition

A **futures contract** is a standardized agreement traded on an exchange to buy/sell an asset at a specified future date at a price agreed today.

### Key Characteristics

| Feature | Description |
|---------|-------------|
| **Trading venue** | Exchange (EUREX, CME) |
| **Standardization** | Fixed sizes, dates, terms |
| **Counterparty** | Clearinghouse (no credit risk) |
| **Settlement** | Daily mark-to-market |
| **Liquidity** | High (secondary market) |

### Forwards vs Futures Comparison

| Aspect | Forwards | Futures |
|--------|----------|---------|
| Trading | OTC | Exchange |
| Customization | Yes | No |
| Counterparty risk | Yes | No (clearinghouse) |
| Liquidity | Low | High |
| Settlement | At maturity | Daily |
| Margin | Negotiated | Standardized |
| Regulation | Less | More |

## Major Futures Contracts

### Equity Index Futures

| Contract | Exchange | Underlying | Contract Size |
|----------|----------|-----------|---------------|
| DAX Future | EUREX | DAX Index | €25 × Index |
| EURO STOXX 50 Future | EUREX | EURO STOXX 50 | €10 × Index |
| S&P 500 E-mini | CME | S&P 500 | $50 × Index |

> **📘 Example:** DAX at 16,000
> - Contract value: €25 × 16,000 = **€400,000**
> - If DAX moves 100 points: ±€2,500

### Interest Rate Futures

| Contract | Exchange | Underlying |
|----------|----------|-----------|
| Euro-Bund Future | EUREX | 10-year German Bund |
| Euro-Bobl Future | EUREX | 5-year German bond |
| Euro-Schatz Future | EUREX | 2-year German bond |

### Commodity Futures

| Contract | Exchange | Contract Size |
|----------|----------|---------------|
| Gold | CME | 100 troy ounces |
| Crude Oil (WTI) | NYMEX | 1,000 barrels |
| Brent Oil | ICE | 1,000 barrels |

## Margin System

### Why Margin Exists

Futures use a **margin system** to manage counterparty risk. Instead of paying full contract value, traders deposit a small percentage.

### Types of Margin

| Type | Description |
|------|-------------|
| **Initial Margin** | Deposit required to open position |
| **Maintenance Margin** | Minimum balance required to keep position |
| **Variation Margin** | Daily settlement of gains/losses |

### How It Works

> **📘 Example:** Trading DAX Futures
> 
> **Day 0:**
> - Buy 1 DAX future at 16,000 (contract value: €400,000)
> - Initial margin required: €20,000 (5%)
> - Deposit €20,000 in margin account
> 
> **Day 1:**
> - DAX closes at 16,100 (+100 points)
> - Profit: €2,500 (100 × €25)
> - Margin account: €22,500
> 
> **Day 2:**
> - DAX closes at 15,800 (-300 points from Day 1)
> - Loss: €7,500 (300 × €25)
> - Margin account: €15,000
> 
> **Margin Call!**
> - If maintenance margin is €15,000 and balance hits €15,000
> - Must deposit more to return to initial margin level

### Mark-to-Market

Futures positions are **marked-to-market daily**:
- Gains credited to margin account
- Losses debited from margin account
- This happens every day until position is closed

> **💡 Note:** This daily settlement is a key difference from forwards, where gains/losses only realize at maturity.

## Settlement Methods

### Physical Settlement

Actual delivery of the underlying asset.

> **📘 Example:** Gold futures - At expiry, short delivers 100 oz of gold, long pays cash.

### Cash Settlement

Payment of cash difference between contract and spot price.

> **📘 Example:** DAX futures - At expiry, difference between contract price and DAX level is settled in cash. No shares change hands.

Most index futures are cash-settled (how would you "deliver" an index?).

## Using Futures

### Hedging

> **📘 Example:** Portfolio Hedge
> 
> Fund manager has €10 million in German stocks, worried about short-term decline.
> 
> **Hedge:** Sell 25 DAX futures (€10M ÷ €400,000)
> 
> - If DAX falls 5%: Portfolio loses €500K, futures gain ~€500K
> - Net position: Approximately flat
> - Can close hedge when concern passes

### Speculation

> **📘 Example:** Directional Bet
> 
> Trader expects DAX to rise.
> 
> **Trade:** Buy 5 DAX futures
> - Capital required: 5 × €20,000 = €100,000 (margin)
> - Exposure: 5 × €400,000 = €2,000,000
> - Leverage: 20x
> 
> If DAX rises 2%:
> - Gain: €2,000,000 × 2% = €40,000
> - Return on margin: 40%!

### Arbitrage

> **📘 Example:** Cash-and-Carry Arbitrage
> 
> If futures price > theoretical fair value:
> 1. Buy underlying in spot market
> 2. Sell futures
> 3. Hold until expiry
> 4. Deliver underlying, collect futures price
> 5. Lock in risk-free profit

## Basis and Convergence

### Basis

**Basis** = Futures Price - Spot Price

Basis can be positive (contango) or negative (backwardation).

### Convergence

As expiry approaches, futures price converges to spot price.

```
Basis
  |
  |  \
  |   \
  |    \
  |     \______
  |              
  +---------------→ Time
  Issue        Expiry
```

> **💡 Note:** At expiry, basis must be zero (or near zero) because futures and spot are equivalent.

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Futures systems require:

1. **Margin Management**
   - Real-time margin calculations
   - Margin call automation
   - Collateral tracking

2. **Daily Settlement**
   - Mark-to-market calculations
   - Cash flow processing
   - Account balance updates

3. **Contract Roll**
   - Managing expiring contracts
   - Rolling to next contract month
   - Tracking roll costs

4. **Position Tracking**
   - Long/short position netting
   - Exposure calculations
   - P&L attribution

## Common Misconceptions

> **⚠️ Misconception:** "Futures and forwards are identical"
> **Reality:** Daily settlement, standardization, and clearinghouse guarantee make futures fundamentally different in practice.

> **⚠️ Misconception:** "You need the full contract value to trade futures"
> **Reality:** Margin allows trading with 5-10% of contract value - this is both opportunity and risk.

> **⚠️ Misconception:** "Futures always predict future prices"
> **Reality:** Futures prices reflect cost-of-carry and supply/demand, not forecasts. They're often wrong about future spot prices.

## Glossary

- **Forward**: OTC contract for future delivery at fixed price
- **Futures**: Exchange-traded standardized forward contract
- **Initial Margin**: Deposit required to open futures position
- **Variation Margin**: Daily settlement of gains/losses
- **Mark-to-Market**: Daily revaluation at closing prices
- **Basis**: Difference between futures and spot price
- **Contango**: Futures price > Spot price
- **Backwardation**: Futures price < Spot price
- **Roll**: Moving from expiring contract to next month
- **Clearinghouse**: Entity guaranteeing futures settlement

