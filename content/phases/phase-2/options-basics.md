---
id: options-basics
title: "Options: Call & Put"
phase: 2
order: 3
difficulty: Intermediate
---

# Options: Call & Put

## Overview

**Options** are the most important derivative type for understanding structured products. An option gives the buyer the **right, but not the obligation**, to buy or sell an underlying asset at a specified price.

This asymmetry - the ability to walk away if unfavorable - is what makes options valuable and what gives structured products their unique payoff profiles.

## Call Options

### Definition

A **call option** gives the holder the right to **BUY** an underlying asset at a specified price (strike) within a specified time period.

### Why Buy a Call?

You expect the underlying price to **rise**.

> **📘 Example:** DAX Call Option
> 
> **Setup:**
> - Current DAX: 16,000
> - Strike price: 16,500
> - Premium paid: €500
> - Expiry: 3 months
> 
> **At Expiry:**
> - If DAX = 17,500: Exercise call, buy at 16,500, sell at 17,500
>   - Profit: (17,500 - 16,500) - 500 = **€500**
> - If DAX = 16,000: Don't exercise (would pay 16,500 for something worth 16,000)
>   - Loss: Premium only = **-€500**

### Call Option Payoff

```
Payoff
   |           /
   |          /
   |         /
   |        /
---+-------/----------→ Spot Price
   |      Strike
   |
 -Premium
```

**Formula:**
```
Call Payoff = MAX(0, Spot - Strike) - Premium
```

## Put Options

### Definition

A **put option** gives the holder the right to **SELL** an underlying asset at a specified price (strike) within a specified time period.

### Why Buy a Put?

You expect the underlying price to **fall** (or want protection against a fall).

> **📘 Example:** DAX Put Option
> 
> **Setup:**
> - Current DAX: 16,000
> - Strike price: 15,500
> - Premium paid: €400
> - Expiry: 3 months
> 
> **At Expiry:**
> - If DAX = 14,500: Exercise put, sell at 15,500 something worth 14,500
>   - Profit: (15,500 - 14,500) - 400 = **€600**
> - If DAX = 16,500: Don't exercise (would sell at 15,500 something worth 16,500)
>   - Loss: Premium only = **-€400**

### Put Option Payoff

```
Payoff
   |
   |\
   | \
   |  \
   |   \
---+----\-------------→ Spot Price
   |     Strike
   |
 -Premium
```

**Formula:**
```
Put Payoff = MAX(0, Strike - Spot) - Premium
```

## Option Terminology

### Key Terms

| Term | Definition |
|------|------------|
| **Premium** | Price paid to buy the option |
| **Strike (Exercise) Price** | Price at which underlying can be bought/sold |
| **Expiry (Maturity)** | Date when option expires |
| **Underlying** | Asset the option is based on |
| **Exercise** | Using the right to buy/sell |

### Position Types

| Position | View | Risk | Reward |
|----------|------|------|--------|
| **Long Call** | Bullish | Limited (premium) | Unlimited |
| **Short Call** | Bearish/Neutral | Unlimited | Limited (premium) |
| **Long Put** | Bearish | Limited (premium) | Large (to zero) |
| **Short Put** | Bullish/Neutral | Large (to zero) | Limited (premium) |

## Long vs Short Positions

### Long (Buying Options)

**Long Call:** Right to buy
- Pay premium upfront
- Profit if underlying rises above strike + premium
- Maximum loss: Premium paid

**Long Put:** Right to sell
- Pay premium upfront
- Profit if underlying falls below strike - premium
- Maximum loss: Premium paid

### Short (Selling/Writing Options)

**Short Call:** Obligation to sell if exercised
- Receive premium upfront
- Profit if underlying stays below strike
- Maximum loss: **Unlimited** (underlying can rise infinitely)

**Short Put:** Obligation to buy if exercised
- Receive premium upfront
- Profit if underlying stays above strike
- Maximum loss: Strike price × quantity (if underlying goes to zero)

> **⚠️ Warning:** Selling (writing) options has potentially unlimited losses. This is why it requires margin and is not suitable for all investors.

## European vs American Options

### European Options

Can **only** be exercised at expiry.

> **📘 Example:** EURO STOXX 50 options on EUREX are European-style. You can only exercise on the expiration date.

### American Options

Can be exercised **any time** before expiry.

> **📘 Example:** Most US stock options are American-style. You can exercise early if beneficial.

### Which is More Valuable?

American options ≥ European options (more flexibility)

But the difference is often small because:
- Early exercise usually not optimal (lose time value)
- For index options, European is standard
- Structured products typically use European-style

> **💡 Note:** Almost all structured products use European-style options, so we'll focus on those.

## Option Premium Components

The premium you pay for an option consists of:

```
Option Premium = Intrinsic Value + Time Value
```

### Intrinsic Value

Value if exercised immediately.

| Option | Intrinsic Value |
|--------|-----------------|
| Call | MAX(0, Spot - Strike) |
| Put | MAX(0, Strike - Spot) |

### Time Value

Additional value from time remaining until expiry.

- More time = More chance underlying moves favorably
- Time value decays as expiry approaches (theta decay)
- At expiry, time value = 0

> **📘 Example:**
> - DAX: 16,000
> - Call Strike: 15,500
> - Premium: €700
> 
> **Breakdown:**
> - Intrinsic Value: 16,000 - 15,500 = €500
> - Time Value: 700 - 500 = **€200**

## Factors Affecting Option Prices

| Factor | Call Price | Put Price |
|--------|-----------|-----------|
| Underlying price ↑ | ↑ | ↓ |
| Strike price ↑ | ↓ | ↑ |
| Time to expiry ↑ | ↑ | ↑ |
| Volatility ↑ | ↑ | ↑ |
| Interest rate ↑ | ↑ | ↓ |
| Dividends ↑ | ↓ | ↑ |

> **💡 Note:** Volatility is the most important factor for structured product pricing. Higher volatility = more expensive options = different product terms.

## Options in Structured Products

### Building Blocks

Options are the fundamental building blocks of structured products:

| Product | Option Components |
|---------|------------------|
| Capital Protection | Zero-coupon bond + Long call |
| Discount Certificate | Underlying + Short call |
| Bonus Certificate | Underlying + Down-and-out put |
| Reverse Convertible | Bond + Short put |

### Why This Matters

Understanding options tells you:
- What market conditions favor the product
- What the risks are
- How the product is hedged
- Why certain terms are offered

> **📘 Example:** Why does a Discount Certificate have a cap?
> 
> Because the bank **sells a call option** at the cap level. The premium received from selling the call is what creates the discount. Without the cap, no discount!

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Options are everywhere in banking software:

1. **Pricing Models**
   - Black-Scholes implementation
   - Monte Carlo simulation
   - Binomial trees

2. **Greeks Calculations**
   - Delta, Gamma, Theta, Vega, Rho
   - Required for risk management
   - Essential for hedging

3. **Product Decomposition**
   - Breaking structured products into option components
   - Understanding payoff profiles
   - Replication strategies

4. **Risk Systems**
   - Option portfolio aggregation
   - Scenario analysis
   - Stress testing

## Common Misconceptions

> **⚠️ Misconception:** "Buying options is safe because losses are limited"
> **Reality:** While losses are capped at premium, options frequently expire worthless. You can lose 100% of your investment quickly.

> **⚠️ Misconception:** "Options are too complicated for regular investors"
> **Reality:** Basic call and put concepts are straightforward. Complexity comes from exotic options and combinations.

> **⚠️ Misconception:** "I should always exercise an in-the-money option"
> **Reality:** You usually get more by selling the option (capturing remaining time value) than exercising.

> **⚠️ Misconception:** "American options are always better than European"
> **Reality:** Early exercise forfeits time value. For non-dividend paying stocks, early exercise is rarely optimal.

## Glossary

- **Call Option**: Right to buy at strike price
- **Put Option**: Right to sell at strike price
- **Premium**: Price paid for option
- **Strike Price**: Exercise price
- **Expiry**: When option expires
- **Exercise**: Using the right to buy/sell
- **Long**: Buying an option (holding rights)
- **Short**: Selling/writing an option (holding obligations)
- **European Style**: Exercise only at expiry
- **American Style**: Exercise any time before expiry
- **Intrinsic Value**: Value if exercised now
- **Time Value**: Value from time remaining

