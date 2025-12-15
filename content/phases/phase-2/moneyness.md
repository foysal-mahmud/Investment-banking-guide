---
id: moneyness
title: Moneyness & Time Value
phase: 2
order: 5
difficulty: Intermediate
---

# Moneyness & Time Value

## Overview

**Moneyness** describes the relationship between an option's strike price and the current underlying price. **Time value** is the portion of an option's premium attributable to time remaining until expiration.

These concepts are essential for understanding option pricing and how structured products behave.

## What is Moneyness?

Moneyness tells you whether exercising an option right now would be profitable.

### For Call Options

| Moneyness | Condition | Example (Strike = €100) |
|-----------|-----------|-------------------------|
| **In-the-Money (ITM)** | Spot > Strike | Spot = €110 ✓ |
| **At-the-Money (ATM)** | Spot ≈ Strike | Spot = €100 |
| **Out-of-the-Money (OTM)** | Spot < Strike | Spot = €90 ✗ |

### For Put Options

| Moneyness | Condition | Example (Strike = €100) |
|-----------|-----------|-------------------------|
| **In-the-Money (ITM)** | Spot < Strike | Spot = €90 ✓ |
| **At-the-Money (ATM)** | Spot ≈ Strike | Spot = €100 |
| **Out-of-the-Money (OTM)** | Spot > Strike | Spot = €110 ✗ |

### Visual Representation

```
          OTM     ATM     ITM
          CALL    CALL    CALL
           ↓       ↓       ↓
    ←──────|───────|───────|──────→ Spot Price
    €80   €90    €100    €110    €120

          ITM     ATM     OTM
          PUT     PUT     PUT
```

## Why Moneyness Matters

### 1. Intrinsic Value

**Intrinsic value** is what the option is worth if exercised immediately.

| Option | Intrinsic Value |
|--------|-----------------|
| ITM Call | Spot - Strike |
| ITM Put | Strike - Spot |
| ATM | ≈ 0 |
| OTM | 0 |

> **📘 Example:** 
> - Call option, Strike = €100, Spot = €115
> - Intrinsic value = €115 - €100 = **€15**

### 2. Probability of Profit

| Moneyness | Exercise Probability |
|-----------|---------------------|
| Deep ITM | Very high (>90%) |
| ATM | ~50% |
| Deep OTM | Very low (<10%) |

### 3. Option Behavior

| Moneyness | Delta (Call) | Characteristics |
|-----------|--------------|-----------------|
| Deep ITM | ~1.0 | Moves like underlying |
| ATM | ~0.5 | Half the underlying's move |
| Deep OTM | ~0.0 | Little movement |

## Time Value

### Definition

**Time value** (also called **extrinsic value**) is the portion of an option's premium above its intrinsic value.

```
Time Value = Option Premium - Intrinsic Value
```

### Why Does Time Value Exist?

Time value represents the **possibility** that the option could become more valuable before expiration.

> **📘 Example:**
> - Spot = €100, Strike = €105 (OTM call)
> - Intrinsic value = €0 (can't exercise profitably now)
> - Premium = €3
> - Time value = €3 (the option has value because it might become ITM)

### Time Value Components

Time value is influenced by:

1. **Time to expiration** - More time = More chance to move favorably
2. **Volatility** - Higher volatility = More chance of big move
3. **Interest rates** - Affects cost of carry
4. **Dividends** - Expected dividends reduce call value

## Time Value Decay (Theta)

### The Decay Curve

Time value doesn't decay linearly - it accelerates as expiration approaches.

```
Time Value
    |
    |\
    | \
    |  \
    |   \
    |    \
    |     \______
    +---------------→ Time
   Today    Expiry
```

**Rule of thumb**: An ATM option loses about **half its time value** in the last month before expiration.

### Theta

**Theta (Θ)** measures daily time value decay.

| Days to Expiry | Typical Daily Theta (ATM) |
|----------------|---------------------------|
| 365 days | Low (~€0.02) |
| 90 days | Moderate (~€0.05) |
| 30 days | High (~€0.10) |
| 7 days | Very high (~€0.20) |
| 1 day | Extreme (~€0.50) |

> **📘 Example:** 
> - ATM call premium = €10
> - 30 days to expiry, Theta = -€0.15/day
> - After 10 days (no spot move): Premium ≈ €10 - (10 × €0.15) = **€8.50**

### Time Decay by Moneyness

| Moneyness | Time Decay |
|-----------|------------|
| ATM | Highest (most time value to lose) |
| Slightly OTM | High |
| Deep ITM | Lower (mostly intrinsic value) |
| Deep OTM | Lower (less time value) |

## Intrinsic vs Time Value Examples

### Example 1: ITM Call

| Parameter | Value |
|-----------|-------|
| Spot | €110 |
| Strike | €100 |
| Premium | €14 |

**Breakdown:**
- Intrinsic: €110 - €100 = €10
- Time value: €14 - €10 = **€4**

### Example 2: ATM Call

| Parameter | Value |
|-----------|-------|
| Spot | €100 |
| Strike | €100 |
| Premium | €5 |

**Breakdown:**
- Intrinsic: €0 (spot = strike)
- Time value: €5 - €0 = **€5** (all time value)

### Example 3: OTM Call

| Parameter | Value |
|-----------|-------|
| Spot | €90 |
| Strike | €100 |
| Premium | €2 |

**Breakdown:**
- Intrinsic: €0 (OTM, no exercise value)
- Time value: €2 - €0 = **€2** (all time value)

## Moneyness in Structured Products

### Barrier Products

Barriers are often defined relative to moneyness:

> **📘 Example:** Bonus Certificate with 70% barrier
> - Initial spot: €100
> - Barrier: €70 (30% OTM)
> - As long as spot never touches €70, bonus is paid

### Autocallables

Autocall triggers are typically ATM or slightly ITM:

> **📘 Example:** Autocallable with 100% trigger
> - Initial spot: €100
> - Autocall trigger: €100 (ATM)
> - If spot ≥ €100 on observation date, product redeems early

### Strike Selection

| Strike Position | Product Characteristic |
|-----------------|----------------------|
| ATM strikes | Maximum gamma/sensitivity |
| OTM barriers | Cheaper protection |
| ITM triggers | Higher autocall probability |

## Volatility and Time Value

### Higher Volatility = Higher Time Value

More volatility means larger potential price swings, increasing the chance OTM options become ITM.

> **📘 Example:** Same ATM call, different volatilities:
> 
> | Volatility | Time Value | Total Premium |
> |------------|------------|---------------|
> | 15% | €3 | €3 |
> | 25% | €5 | €5 |
> | 35% | €7 | €7 |

### Vega (ν)

**Vega** measures sensitivity to volatility changes.

```
Vega = Change in premium per 1% change in volatility
```

> **📘 Example:** Option with Vega = €0.30
> - If volatility rises from 20% to 22%
> - Premium increases by: 2 × €0.30 = **€0.60**

**Vega is highest for ATM options** and decreases for deep ITM/OTM.

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Moneyness and time value are fundamental to:

1. **Pricing Systems**
   - Black-Scholes inputs include moneyness
   - Time to expiry in year fractions
   - Proper handling of expiry edge cases

2. **Greeks Calculations**
   ```python
   intrinsic = max(0, spot - strike)  # for call
   time_value = premium - intrinsic
   
   # Theta calculation (simplified)
   theta = -time_value / days_to_expiry
   ```

3. **Risk Management**
   - ATM options need more hedging (high gamma)
   - Theta exposure as positions age
   - Volatility exposure (vega)

4. **Product Lifecycle**
   - Tracking moneyness vs barriers
   - Time decay P&L attribution
   - Early redemption calculations

## Common Misconceptions

> **⚠️ Misconception:** "OTM options are worthless"
> **Reality:** OTM options have time value. They might become ITM before expiry.

> **⚠️ Misconception:** "ITM options are always better"
> **Reality:** ITM options cost more. For the same investment, OTM options offer more leverage (and more risk).

> **⚠️ Misconception:** "Time decay is constant"
> **Reality:** Theta accelerates dramatically in the last weeks before expiry. The last 30 days account for ~50% of time value loss.

> **⚠️ Misconception:** "Exercise ITM options immediately"
> **Reality:** Early exercise forfeits remaining time value. Usually better to sell the option.

## Glossary

- **ITM (In-the-Money)**: Option has intrinsic value
- **ATM (At-the-Money)**: Strike equals current price
- **OTM (Out-of-the-Money)**: Option has no intrinsic value
- **Intrinsic Value**: Value if exercised now
- **Time Value (Extrinsic)**: Premium minus intrinsic value
- **Theta (Θ)**: Daily time decay
- **Vega (ν)**: Sensitivity to volatility
- **Delta (Δ)**: Sensitivity to underlying price
- **Gamma (Γ)**: Rate of change of delta
- **Moneyness**: Relationship of spot to strike

