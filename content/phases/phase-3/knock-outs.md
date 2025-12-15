---
id: knock-outs
title: Knock-Out Certificates (Turbos)
phase: 3
order: 2
difficulty: Intermediate
---

# Knock-Out Certificates (Turbos)

## Overview

**Knock-out certificates** (also called Turbos, Turbo Warrants, or KO certificates) are leverage products with a **barrier feature**. If the underlying touches the barrier during the product's lifetime, the certificate is immediately terminated (knocked out) and the investor loses most or all of their investment.

This knock-out feature allows for very high leverage with a defined maximum loss.

## How Knock-Outs Work

### Basic Structure

A knock-out certificate gives you leveraged exposure to an underlying, but with a critical condition: if the underlying ever touches the **knock-out barrier**, the product immediately terminates.

### Long Knock-Out (Turbo Long/Bull)

For **bullish** views:

| Component | Description |
|-----------|-------------|
| Barrier | Below current price |
| Profit if | Underlying rises |
| Knockout if | Underlying falls to barrier |
| Max loss | Initial investment |

> **📘 Example:** DAX Turbo Long
> - Current DAX: 16,000
> - Strike/Barrier: 15,000
> - Price: €10.00 (approx. 16,000 - 15,000 = 1,000, × 0.01 ratio)
> 
> **If DAX rises to 16,500:**
> - Certificate value: (16,500 - 15,000) × 0.01 = €15.00
> - Profit: 50%
> 
> **If DAX falls to 15,000:**
> - **KNOCKOUT!** Certificate worthless (or small residual value)
> - Loss: 100%

### Short Knock-Out (Turbo Short/Bear)

For **bearish** views:

| Component | Description |
|-----------|-------------|
| Barrier | Above current price |
| Profit if | Underlying falls |
| Knockout if | Underlying rises to barrier |
| Max loss | Initial investment |

> **📘 Example:** DAX Turbo Short
> - Current DAX: 16,000
> - Strike/Barrier: 17,000
> - Price: €10.00 (approx. 17,000 - 16,000 = 1,000, × 0.01 ratio)
> 
> **If DAX falls to 15,500:**
> - Certificate value: (17,000 - 15,500) × 0.01 = €15.00
> - Profit: 50%
> 
> **If DAX rises to 17,000:**
> - **KNOCKOUT!** Certificate worthless
> - Loss: 100%

## Types of Knock-Outs

### Classic Knock-Out (Strike = Barrier)

The strike price equals the knock-out barrier.

- Higher leverage (closer to underlying)
- Total loss at knockout (no residual value)
- Simplest structure

### Stop-Loss Knock-Out (Strike ≠ Barrier)

The barrier is set away from the strike, providing a small buffer.

| Component | Classic KO | Stop-Loss KO |
|-----------|-----------|--------------|
| Strike | 15,000 | 15,000 |
| Barrier | 15,000 | 15,200 |
| Knockout payout | €0 | ~€2.00 (strike - barrier) |

> **💡 Note:** Stop-loss KOs are slightly more expensive but return some value at knockout instead of total loss.

## Pricing

### Intrinsic Value

For a Long KO (ignoring costs):
```
Price ≈ (Underlying - Strike) × Ratio
```

> **📘 Example:**
> - DAX = 16,000
> - Strike = 15,000
> - Ratio = 0.01
> - Price ≈ (16,000 - 15,000) × 0.01 = **€10.00**

### Financing Cost (Agio)

Knock-outs include a small **financing cost** that increases over time:
- Compensates issuer for capital tied up
- Usually 2-5% annually
- Charged daily and built into the price

> **📘 Example:** Holding cost
> - Certificate price: €10.00
> - Annual financing cost: 3%
> - Daily cost: €10.00 × 3% / 365 = **€0.0008/day**

### Why No Time Value?

Unlike warrants, knock-outs have minimal time value because:
- The barrier eliminates the chance of recovery after a bad move
- Option value is replaced by finite loss at barrier

## Leverage Calculation

### Formula

```
Leverage = Underlying / (Price / Ratio)
```

Or simplified:
```
Leverage ≈ Underlying / (Underlying - Strike)
```

### Examples by Barrier Distance

| DAX Level | Strike | Buffer | Leverage |
|-----------|--------|--------|----------|
| 16,000 | 15,000 | 1,000 (6.25%) | 16x |
| 16,000 | 15,500 | 500 (3.1%) | 32x |
| 16,000 | 15,800 | 200 (1.25%) | 80x |
| 16,000 | 15,900 | 100 (0.6%) | 160x |

> **⚠️ Warning:** Higher leverage = Higher risk of knockout. A 160x leverage KO can be knocked out by a 0.6% move!

## The Knock-Out Event

### What Triggers Knockout?

The barrier is typically monitored **continuously** during trading hours.

> **📘 Example:** Barrier monitoring
> - Barrier: 15,000
> - DAX touches 14,999 for even 1 second during trading
> - **KNOCKED OUT!**

### Intraday Knockouts

Many knockouts happen intraday during volatile periods:
- Market open (highest volatility)
- News releases
- Trading errors ("fat finger")

### Overnight Gaps

> **⚠️ Warning:** Gaps can cause knockouts at market open!

> **📘 Example:** 
> - Friday close: DAX 16,000, Barrier 15,500
> - Weekend: Bad news
> - Monday open: DAX gaps to 15,200
> - Certificate knocked out at opening price, not barrier
> - Possible loss greater than expected!

### Residual Value

Some products pay a residual value after knockout:
- **Classic KO**: €0 or tiny residual
- **Stop-loss KO**: Strike - knockout price (can be significant)

## Real Product Example

**Turbo Bull Certificate on DAX**

| Specification | Value |
|--------------|-------|
| ISIN | DE000TT12345 |
| Underlying | DAX |
| Type | Turbo Long |
| Strike | 15,000 |
| Knock-out barrier | 15,000 |
| Ratio | 0.01 |
| Current price | €10.50 |
| Leverage | ~15x |
| Financing | 2.5% p.a. |
| Expiry | Open-ended |

**Scenarios at DAX 16,000:**

| DAX Move | Certificate Price | Return |
|----------|------------------|--------|
| +2% (16,320) | €13.20 | +26% |
| +1% (16,160) | €11.60 | +10% |
| Unchanged | €10.50 | 0% |
| -1% (15,840) | €8.40 | -20% |
| -6.25% (15,000) | **€0** (KO) | **-100%** |

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Knock-out systems require:

1. **Real-Time Barrier Monitoring**
   - Tick-by-tick price checking
   - Sub-second latency requirements
   - Handling multiple products simultaneously

2. **Knockout Event Processing**
   - Immediate position termination
   - Residual value calculation
   - Client notification
   - Trade reporting

3. **Gap Handling**
   - Opening price vs barrier
   - After-hours event processing
   - Corporate action impacts

4. **Risk Management**
   - Concentration risk near barriers
   - Hedging adjustments
   - Scenario analysis

## Common Misconceptions

> **⚠️ Misconception:** "I can set a stop-loss to protect myself"
> **Reality:** The barrier IS the stop-loss, and it's immediate and mandatory. Your own stop-loss order may not execute fast enough during rapid moves.

> **⚠️ Misconception:** "Knockouts only happen at market close"
> **Reality:** Barrier monitoring is continuous during trading hours. Intraday knockouts are very common.

> **⚠️ Misconception:** "High leverage is worth the risk"
> **Reality:** With 100x leverage, even normal market volatility can cause knockout. The probability of success decreases dramatically with leverage.

> **⚠️ Misconception:** "I can recover if the market bounces back"
> **Reality:** Once knocked out, the product is dead. Even if the underlying immediately bounces back, you've lost.

## Glossary

- **Knock-Out (KO)**: Barrier that terminates the product
- **Turbo**: Common name for knock-out certificates
- **Barrier (Knock-Out-Schwelle)**: Price level that triggers termination
- **Strike (Basispreis)**: Reference price for value calculation
- **Leverage (Hebel)**: Multiplication factor for returns
- **Agio**: Financing cost built into price
- **Gap**: Price jump between trading sessions
- **Residual Value (Restwert)**: Amount paid at knockout (if any)
- **Stop-Loss KO**: Type where barrier ≠ strike
- **Continuous Monitoring**: Barrier checked tick-by-tick

