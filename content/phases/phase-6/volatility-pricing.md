---
id: volatility-pricing
title: Volatility in Pricing
phase: 6
order: 2
difficulty: Intermediate
---

# Volatility in Pricing

## Overview

**Volatility** is the single most important and most complex input to pricing models. Unlike spot prices (observable) or interest rates (quoted), volatility must be estimated or implied from market prices.

Understanding volatility is essential for structured product pricing and risk management.

## Historical vs Implied Volatility

### Historical Volatility (Realized)

**What happened** - calculated from past price data.

```
Daily returns: rₜ = ln(Sₜ / Sₜ₋₁)
HV = Standard deviation of returns × √252
```

| Window | Use Case |
|--------|----------|
| 20-day | Short-term view |
| 60-day | Medium-term |
| 252-day | Long-term (1 year) |

### Implied Volatility (Market's Expectation)

**What the market expects** - extracted from option prices.

```
Given: Option market price
Find: Volatility that makes Black-Scholes = Market price
```

### HV vs IV Relationship

| Scenario | Interpretation |
|----------|---------------|
| IV > HV | Market expects more volatility than recent past |
| IV < HV | Market expects less volatility than recent past |
| IV ≈ HV | Market aligned with recent experience |

> **📘 Example:** DAX historical 20-day volatility: 15%
> DAX ATM 1-month implied volatility: 18%
> - Market expects ~20% more volatility than recently realized
> - Options are "expensive" relative to recent history

## The Volatility Surface

### Two Dimensions

Implied volatility varies by:
1. **Strike** (moneyness)
2. **Expiry** (time)

### Volatility Smile/Skew

Plotting IV against strike at a single expiry:

```
IV
 |     \        
 |      \      
 |       \___  
 |          \_
 |            \
 +---------------→ Strike
   OTM Put  ATM  OTM Call
```

**Why the skew?**
- Downside protection demand (puts more expensive)
- Crash risk premium (left tail fear)
- Supply/demand imbalances

### Term Structure

Plotting IV against expiry at ATM:

```
IV
 |  \
 |   \____
 |        \_____
 |              \___
 +--------------------→ Expiry
   1M   3M   6M   1Y   2Y
```

**Patterns:**
- Contango: Longer expiry = Higher IV (normal)
- Backwardation: Shorter expiry = Higher IV (crisis)

## Reading the Surface

### 3D Representation

```
         Expiry (T)
         1M   3M   6M   12M
    120% [22] [21] [20] [19]
Strike 
    100% [18] [18] [18] [18]  ← ATM
    
    80%  [25] [24] [23] [22]
```

### Key Points

| Point | Description |
|-------|-------------|
| ATM forward | Volatility at forward price |
| 25-delta put | Typical downside reference |
| 25-delta call | Typical upside reference |
| Skew | 25Δ put IV - 25Δ call IV |

## Volatility Impact on Products

### Higher Volatility = Higher Option Prices

Both calls and puts become more valuable with higher volatility.

> **📘 Example:** DAX ATM 1-year call
> - Vol 15%: €350
> - Vol 20%: €460
> - Vol 25%: €570

### Impact on Structured Products

| Product | High Volatility Effect |
|---------|----------------------|
| Discount cert | More discount (sold call is worth more) |
| Bonus cert | Cheaper (barrier more likely hit) |
| Autocallable | Higher coupon (more risk priced in) |
| Capital protection | Lower participation (calls more expensive) |

## Volatility Smile Dynamics

### Sticky Strike

Smile stays fixed at absolute strike levels.
- If spot moves, ATM vol changes
- Used for short-dated options

### Sticky Delta

Smile stays fixed relative to moneyness.
- If spot moves up 5%, smile shifts up 5%
- Used for longer-dated options

### Which to Use?

```python
def get_vol(spot, strike, expiry, model='sticky_delta'):
    if model == 'sticky_strike':
        return surface.get_vol(strike, expiry)
    else:  # sticky_delta
        moneyness = strike / forward(spot, expiry)
        return surface.get_vol_by_moneyness(moneyness, expiry)
```

## Volatility for Multi-Asset Products

### Correlation

For worst-of products, correlation between underlyings matters:

| Correlation | Worst-of Risk | Coupon |
|-------------|---------------|--------|
| High (+0.8) | Lower (move together) | Lower |
| Low (+0.3) | Higher (divergence likely) | Higher |
| Negative (-0.2) | Very high | Very high |

### Correlation Surface

Like volatility, correlation also varies:
- By maturity
- By market conditions (increases in stress)

## Calibrating Volatility

### Market Data Sources

| Source | Products |
|--------|----------|
| Exchange options | Listed strikes/expiries |
| OTC broker quotes | Exotic parameters |
| Variance swaps | Vol term structure |

### Interpolation

Between observed points, interpolate:
- Linear (simple but can create arbitrage)
- Cubic spline (smoother)
- SABR model (theoretically consistent)

### Extrapolation

Beyond observed points:
- Flat extrapolation (simple)
- Linear decay (more realistic)
- Model-based (most sophisticated)

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Volatility systems require:

1. **Surface Management**
   - Efficient storage (large grids)
   - Fast interpolation
   - Real-time updates

2. **Calibration**
   - Optimization algorithms
   - Market data parsing
   - Quality checks

3. **Multi-Asset**
   - Correlation matrices
   - Positive semi-definite checks
   - Dimension handling

4. **Historical Data**
   - Time series storage
   - Rolling window calculations
   - Regime detection

## Common Misconceptions

> **⚠️ Misconception:** "Use yesterday's volatility for today's pricing"
> **Reality:** Volatility changes constantly. Use current implied volatility.

> **⚠️ Misconception:** "The volatility surface is stable"
> **Reality:** The entire surface moves with market conditions, not just ATM level.

> **⚠️ Misconception:** "Higher volatility is always bad for structured products"
> **Reality:** Depends on the product. Discount certificates benefit from higher vol (larger discounts).

## Glossary

- **Implied Volatility (IV)**: Vol derived from option prices
- **Historical Volatility (HV)**: Vol calculated from past prices
- **Volatility Surface**: 2D grid of IV by strike and expiry
- **Smile**: IV curve across strikes
- **Skew**: Asymmetry of smile (puts vs calls)
- **Term Structure**: IV pattern across expiries
- **ATM**: At-the-money (strike = forward)
- **Sticky Strike**: Smile anchored to absolute strikes
- **Sticky Delta**: Smile anchored to moneyness
- **SABR**: Popular volatility smile model

