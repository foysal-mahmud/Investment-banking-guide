---
id: discount-certificates
title: Discount Certificates
phase: 4
order: 2
difficulty: Intermediate
---

# Discount Certificates

## Overview

**Discount Certificates** allow investors to buy exposure to an underlying asset at a discount to the current market price, in exchange for capping the maximum possible return. They are popular in sideways or slightly bullish markets.

They are the most widely traded structured product category in Germany.

## How Discount Certificates Work

### The Basic Structure

A discount certificate combines:
1. **Long underlying** (or zero-coupon bond + call)
2. **Short call option** at the cap level

```
Discount Certificate = Underlying - Short Call at Cap
```

### The "Discount" Explained

You pay less than the underlying's current price because you've sold a call option.

> **📘 Example:**
> - DAX at 16,000
> - You sell a call with strike 17,000
> - Call premium: €800
> - Your net cost: 16,000 - 800 = **€15,200** (5% discount)
> - BUT: Your profit is capped at 17,000

### Payoff Diagram

```
Payoff
   |      _______Cap
   |     /
   |    /
   |   /
 0 +--/---------------→ Underlying Price
   | /
   |/ 
-Disc  
```

## Key Terms

### Cap (Höchstbetrag)

The maximum price the certificate can reach.

```
Maximum Return = (Cap - Purchase Price) / Purchase Price
```

### Discount

The difference between underlying price and certificate price.

```
Discount = Underlying Price - Certificate Price
Discount % = Discount / Underlying Price × 100
```

### Maximum Return

```
Max Return = (Cap - Entry Price) / Entry Price × 100%
```

> **📘 Example:**
> - Underlying: €100
> - Certificate price: €90 (10% discount)
> - Cap: €100
> - Max return: (100-90)/90 = **11.1%**

## Product Example

### DAX Discount Certificate

| Specification | Value |
|--------------|-------|
| Underlying | DAX |
| Current DAX | 16,000 |
| Cap | 16,500 |
| Certificate Price | €152.00 |
| Ratio | 0.01 |
| Expiry | 12 months |

**Calculations:**
- Underlying equivalent: 16,000 × 0.01 = €160
- Discount: €160 - €152 = €8 (5%)
- Max payout: 16,500 × 0.01 = €165
- Max return: (165-152)/152 = **8.6%**

### Scenarios at Expiry

| DAX at Expiry | Payout | Return |
|---------------|--------|--------|
| 17,000 | €165 (capped) | +8.6% |
| 16,500 | €165 (capped) | +8.6% |
| 16,000 | €160 | +5.3% |
| 15,500 | €155 | +2.0% |
| 15,200 | €152 | 0% (breakeven) |
| 14,500 | €145 | -4.6% |
| 14,000 | €140 | -7.9% |

### Comparison: Direct Investment vs Discount Certificate

| DAX Performance | Direct Investment | Discount Cert |
|-----------------|-------------------|---------------|
| +10% | +10% | +8.6% (capped) |
| +5% | +5% | +5.3% |
| Unchanged | 0% | +5.3% |
| -5% | -5% | 0% |
| -10% | -10% | -4.6% |

> **💡 Note:** Discount certificates outperform in flat/down markets, underperform in strong rallies.

## Choosing the Right Cap Level

### Aggressive (High Cap)

- Small discount
- High maximum return
- Better if bullish

### Defensive (Low Cap)

- Large discount
- Lower maximum return
- Better if cautious

### Cap Selection Table

| Cap vs Spot | Discount | Max Return | Best Market View |
|-------------|----------|------------|------------------|
| +15% above | 3% | 18% | Strong bullish |
| +5% above | 8% | 14% | Moderately bullish |
| At spot | 12% | 14% | Sideways |
| -5% below | 18% | 14% | Slightly bearish |

## Time to Expiry Effect

### Longer Expiry

- Higher discount (option premium higher)
- More time for cap to be reached
- Higher maximum return potential

### Shorter Expiry

- Lower discount
- Lower risk of missing cap
- More predictable outcome

> **💡 Note:** Most discount certificates have 6-18 month terms. Shorter terms offer tighter scenarios; longer terms offer higher potential but more uncertainty.

## Risks

### 1. Full Downside Participation

Below the entry price, you participate fully in losses:
- If underlying falls 30%, you lose ~25% (reduced by discount)
- No capital protection!

### 2. Capped Upside

If market rallies strongly:
- You miss out on gains above the cap
- Opportunity cost can be significant

### 3. Early Exit

Selling before expiry:
- Won't get cap even if underlying is above it
- Subject to mark-to-market pricing

### 4. Dividends

Most certificates don't pass through dividends:
- For dividend-paying underlyings, certificate underperforms
- This is how issuer funds the structure

## Why Banks Like Discount Certificates

From the issuer perspective:

1. **Hedge with the market**: Sell call options that investors implicitly provide
2. **Dividend retention**: Keep dividends from underlying position
3. **Fee income**: Spread between fair value and issue price
4. **Volume**: High turnover = more opportunities

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Discount certificate systems need:

1. **Pricing Engine**
   - Black-Scholes for short call
   - Dividend estimation
   - Forward price calculation

2. **Cap Selection Tools**
   - Scenario analysis
   - Return optimization
   - Break-even calculations

3. **Lifecycle Events**
   - Cap monitoring
   - Expiry processing
   - Settlement

4. **Risk Management**
   - Delta hedging
   - Gamma exposure
   - Vega risk

## Trading Strategies

### Rolling Strategy

When certificate approaches cap:
1. Sell current certificate (near max value)
2. Buy new certificate with higher cap
3. Maintain upside potential

### Defensive Positioning

In uncertain markets:
1. Choose deep-discount certificates (low cap)
2. Maximize buffer against losses
3. Accept lower maximum return

## Common Misconceptions

> **⚠️ Misconception:** "Discount means free money"
> **Reality:** The discount is payment for giving up upside. If the market rallies, you underperform.

> **⚠️ Misconception:** "I should always choose the highest cap"
> **Reality:** Higher caps have smaller discounts. Deep discounts offer more protection in flat/down markets.

> **⚠️ Misconception:** "The cap level doesn't matter much"
> **Reality:** Cap selection is the most important decision. Wrong cap = wrong product.

> **⚠️ Misconception:** "I can hold until underlying reaches cap"
> **Reality:** Time value means certificate price won't equal cap until expiry, even if underlying exceeds cap.

## Glossary

- **Discount (Abgeld)**: Amount below underlying price
- **Cap (Höchstbetrag)**: Maximum payout level
- **Ratio (Bezugsverhältnis)**: Units of underlying per certificate
- **Break-even**: Underlying level where you have no profit/loss
- **Maximum Return**: Highest possible percentage gain
- **Short Call**: Sold call option that creates the cap
- **Dividend Yield**: Annual dividends / Price (affects pricing)
- **Outperformance Point**: Below this, certificate beats direct investment

