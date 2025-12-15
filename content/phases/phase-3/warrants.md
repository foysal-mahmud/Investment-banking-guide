---
id: warrants
title: Warrants
phase: 3
order: 1
difficulty: Intermediate
---

# Warrants

## Overview

**Warrants** are option-like securities issued by banks that give the holder the right to buy (call warrant) or sell (put warrant) an underlying asset at a specified price. They are essentially long-dated options packaged for retail investors.

Warrants are one of the most popular leverage products in Germany, offering a way to speculate on market movements with limited capital.

## What is a Warrant?

A warrant is:
- An **option** issued by a bank (not an exchange)
- Usually **long-dated** (months to years)
- Traded on exchanges or OTC
- **Securitized** (has an ISIN, tradeable like a stock)

### Key Difference from Exchange Options

| Aspect | Exchange Options | Warrants |
|--------|------------------|----------|
| Issuer | Clearinghouse | Bank |
| Counterparty | Exchange | Issuing bank |
| Settlement | T+1 | T+2 |
| Exercise | You decide | Automatic at expiry |
| Customization | Standard strikes/dates | Many variations |
| Margin | Required for short | Not applicable (can't short) |

## Warrant Specifications

### Example: DAX Call Warrant

| Specification | Value |
|--------------|-------|
| **ISIN** | DE000TB12345 |
| **Underlying** | DAX Index |
| **Type** | Call |
| **Strike** | 16,000 |
| **Expiry** | December 2024 |
| **Ratio** | 0.01 (100 warrants = 1 DAX) |
| **Exercise style** | European |
| **Bid/Ask** | €2.45 / €2.50 |

### The Ratio

Warrants often have a **ratio** less than 1, meaning you need multiple warrants to represent one unit of the underlying.

```
Number of warrants needed = 1 / Ratio
```

> **📘 Example:** Ratio = 0.01
> - 1 warrant controls 0.01 units of DAX
> - 100 warrants control 1 unit of DAX
> - If DAX rises €1, 100 warrants gain €1

## Warrant Pricing

### Price Components

```
Warrant Price = (Intrinsic Value + Time Value) × Ratio
```

### Intrinsic Value

**Call warrant:** MAX(0, Underlying - Strike)
**Put warrant:** MAX(0, Strike - Underlying)

> **📘 Example:** Call warrant, Strike = €100, Spot = €110
> - Intrinsic value = €110 - €100 = €10
> - If Ratio = 0.1, intrinsic per warrant = €10 × 0.1 = **€1.00**

### Time Value

Premium above intrinsic value, representing:
- Time remaining to expiry
- Underlying volatility
- Interest rates
- Dividends

## Leverage Effect

### How Leverage Works

Small movements in the underlying cause larger percentage movements in the warrant.

> **📘 Example:**
> - DAX = 16,000
> - Call warrant price = €3.00 (strike 15,500, ratio 0.01)
> 
> **If DAX rises 1% (160 points):**
> - New DAX = 16,160
> - New warrant ≈ €3.66 (intrinsic + some time value)
> - Warrant return = 22%
> 
> **Leverage = 22% / 1% = 22x**

### Leverage Formula

```
Leverage ≈ (Underlying Price × Delta × Ratio) / Warrant Price
```

**Simple approximation:**
```
Leverage ≈ Underlying Price / (Warrant Price / Ratio)
```

### Leverage Changes

Leverage is NOT constant:
- Higher when warrant is OTM (higher risk)
- Lower when warrant is ITM (lower risk)
- Changes as underlying moves

| Warrant Status | Typical Leverage |
|---------------|------------------|
| Deep ITM | 2x - 5x |
| ATM | 5x - 15x |
| OTM | 10x - 30x+ |

## Time Decay (Theta)

### The Enemy of Warrant Holders

Time value erodes every day, especially as expiry approaches.

```
Daily Loss from Theta
     |
     |        |\
     |        | \
     |        |  \
     |________|   \_____
     +------------------→ Time
    Today            Expiry
```

> **📘 Example:** ATM warrant with €0.50 time value, 30 days to expiry
> - Daily theta ≈ €0.02-0.03
> - If underlying doesn't move, warrant loses €0.02/day
> - Over 30 days: Can lose most time value!

### Minimizing Time Decay Impact

1. **Longer expiry**: More time = slower decay
2. **ITM warrants**: More intrinsic value, less time value at risk
3. **Shorter holding period**: Don't hold to expiry
4. **Higher volatility**: Time value decays slower relative to potential gain

## Common Warrant Types

### Plain Vanilla

Standard call/put warrants with single strike and expiry.

### Capped Warrants (Discount Warrants)

- Have a cap on maximum payout
- Cheaper than plain warrants (you sold the upside)
- Lower leverage but lower cost

> **📘 Example:** Capped call, Strike €100, Cap €120
> - Max payout = €20 (instead of unlimited)
> - Cheaper premium than uncapped

### Turbo Warrants

- Have a knock-out barrier (see next topic)
- Higher leverage
- Risk of total loss if barrier hit

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Warrant systems require:

1. **Pricing Engine**
   - Black-Scholes or binomial model
   - Handling ratios and multipliers
   - Real-time Greeks calculation

2. **Product Reference Data**
   - Strike, expiry, ratio
   - Issuer information
   - Trading calendar

3. **Market Making Systems**
   - Bid-ask spread calculation
   - Hedging requirements
   - Inventory management

4. **Lifecycle Management**
   - Exercise at expiry
   - Cash settlement
   - Corporate action adjustments

## Practical Trading Considerations

### Bid-Ask Spread

Market makers quote bid/ask prices:
- **Bid**: Price you sell at
- **Ask**: Price you buy at
- **Spread**: Your immediate loss on entry

> **📘 Example:** Bid €2.45, Ask €2.50
> - Spread = €0.05 (2%)
> - If you buy at €2.50, immediately worth €2.45

### Liquidity

- Major underlyings (DAX, major stocks): Tight spreads
- Minor underlyings: Wider spreads
- Check issuer website for real-time quotes

### Selecting a Warrant

| Factor | Consideration |
|--------|--------------|
| Leverage | Higher = more risk/reward |
| Time to expiry | Longer = less time decay |
| Moneyness | OTM = cheaper, higher risk |
| Issuer | Reputation, spread quality |
| Ratio | Affects minimum investment |

## Common Misconceptions

> **⚠️ Misconception:** "Warrants are the same as options"
> **Reality:** While similar, warrants have issuer risk, different settlement, and no ability to sell short.

> **⚠️ Misconception:** "Higher leverage is always better"
> **Reality:** Higher leverage means larger losses too. A 30x leveraged OTM warrant can go to zero quickly.

> **⚠️ Misconception:** "Hold until expiry for maximum gain"
> **Reality:** Time decay accelerates near expiry. Often better to sell before expiry to capture remaining time value.

> **⚠️ Misconception:** "Market makers always offer fair prices"
> **Reality:** Spreads widen during volatility and outside regular hours. Always check current bid/ask.

## Glossary

- **Warrant**: Bank-issued option-like security
- **Strike Price (Basispreis)**: Exercise price
- **Ratio (Bezugsverhältnis)**: Units of underlying per warrant
- **Expiry (Laufzeitende)**: Date warrant expires
- **Intrinsic Value (Innerer Wert)**: Value if exercised now
- **Time Value (Zeitwert)**: Premium above intrinsic
- **Leverage (Hebel)**: Multiplier effect on returns
- **Theta**: Daily time decay
- **Delta**: Sensitivity to underlying price
- **Issuer (Emittent)**: Bank that created the warrant

