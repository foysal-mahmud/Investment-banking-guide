---
id: volatility
title: Volatility & Correlation
phase: 1
order: 5
difficulty: Intermediate
---

# Volatility & Correlation

## Overview

**Volatility** and **correlation** are not traditional asset classes, but they are critical concepts that affect every financial product. Understanding them is essential because:

- Volatility directly impacts option and structured product prices
- Correlation determines diversification benefits and basket product behavior
- Both can be traded as underlyings themselves

## What is Volatility?

**Volatility** measures how much an asset's price fluctuates over time. Higher volatility means larger price swings (both up and down).

### Statistical Definition

Volatility is typically expressed as **annualized standard deviation of returns**.

```
Daily Volatility = Standard Deviation of Daily Returns
Annual Volatility = Daily Volatility × √252 (trading days)
```

> **📘 Example:** Stock with 2% daily standard deviation:
> Annual Volatility = 2% × √252 = 2% × 15.87 = **31.7%**

### Interpreting Volatility

| Volatility | Interpretation | Example Assets |
|------------|---------------|----------------|
| <15% | Low | Government bonds, utilities |
| 15-25% | Moderate | Large-cap indices (DAX, S&P 500) |
| 25-40% | High | Individual stocks, small-caps |
| >40% | Very High | Biotech, crypto, emerging markets |

> **📘 Example:** DAX with 20% volatility:
> - ~68% probability: Annual return between -20% and +20%
> - ~95% probability: Annual return between -40% and +40%

## Historical vs Implied Volatility

### Historical Volatility (HV)

**Backward-looking** - calculated from past price data.

```
HV = Standard deviation of past returns (typically 20, 60, or 252 days)
```

**Use cases:**
- Risk measurement
- Performance analysis
- Model backtesting

### Implied Volatility (IV)

**Forward-looking** - derived from current option prices.

The market's expectation of future volatility, extracted by solving option pricing models backward.

> **📘 Example:** DAX call option costs €150 in the market. Black-Scholes model says it should cost €150 when volatility = 18%. Therefore, implied volatility = 18%.

**Use cases:**
- Option pricing and trading
- Market sentiment indicator
- Structured product pricing

### HV vs IV Comparison

| Aspect | Historical Vol | Implied Vol |
|--------|---------------|-------------|
| Time orientation | Backward | Forward |
| Source | Price history | Option prices |
| Updates | As prices move | Real-time with options |
| Predictive power | Moderate | Market consensus |

> **💡 Note:** When IV > HV, options are "expensive" (market expects more volatility than recent past). When IV < HV, options are "cheap."

## VIX - The Fear Index

### What is VIX?

The **CBOE Volatility Index (VIX)** measures expected 30-day volatility of the S&P 500.

- Calculated from S&P 500 option prices
- Expressed as annualized percentage
- Known as the "Fear Index" or "Fear Gauge"

### VIX Levels

| VIX Level | Market State |
|-----------|-------------|
| <15 | Very calm, complacent |
| 15-20 | Normal |
| 20-30 | Elevated concern |
| 30-40 | High fear |
| >40 | Extreme fear/crisis |

**Historical spikes:**
- 2008 Financial Crisis: VIX hit 80+
- March 2020 COVID: VIX hit 82
- Normal range: 12-20

> **💡 Note:** VIX typically spikes during market falls (fear) and drops during rallies (complacency).

### European Equivalents

| Index | Underlying | Description |
|-------|-----------|-------------|
| VSTOXX | EURO STOXX 50 | European "VIX" |
| VDAX | DAX | German volatility index |

## Volatility Smile and Surface

### Volatility Smile

Options with different strike prices have different implied volatilities.

```
IV
 |      \         /
 |       \       /
 |        \_   _/
 |          \_/
 |
 +----------------------→ Strike Price
      OTM Put  ATM  OTM Call
```

**Why the smile exists:**
- Market prices in crash risk (left tail)
- Demand for protective puts
- Supply/demand imbalances

### Volatility Surface

3D representation: IV varies by **strike** AND **maturity**.

| | 1M | 3M | 6M | 12M |
|--|----|----|-----|-----|
| 90% Strike | 25% | 23% | 22% | 21% |
| 100% Strike | 18% | 18% | 18% | 18% |
| 110% Strike | 22% | 20% | 19% | 18% |

> **💡 Note:** Volatility surfaces are critical for pricing structured products with barriers at different levels.

## Correlation

### What is Correlation?

**Correlation** measures how two assets move relative to each other.

| Correlation | Meaning |
|-------------|---------|
| +1.0 | Perfect positive (move together) |
| 0 | No relationship |
| -1.0 | Perfect negative (move opposite) |

### Correlation Examples

| Asset Pair | Typical Correlation |
|------------|---------------------|
| S&P 500 vs DAX | +0.85 (high positive) |
| Stocks vs Bonds | -0.3 to +0.3 (variable) |
| Gold vs Stocks | -0.1 to +0.2 (low) |
| EUR/USD vs USD/CHF | -0.90 (high negative) |

### Correlation in Crisis

**Correlation increases during crises!**

> **⚠️ Warning:** Assets that seem uncorrelated in normal markets often become highly correlated during selloffs. "Diversification fails when you need it most."

> **📘 Example:** In March 2020:
> - Stocks, bonds, gold, and commodities all fell together initially
> - Correlations spiked toward 1.0
> - Only cash and short-term treasuries held up

## Volatility and Correlation in Structured Products

### Volatility Impact on Options

Higher volatility = Higher option prices (both calls and puts)

| Vol Change | Impact on Product |
|------------|-------------------|
| Vol ↑ | Options more expensive, barriers more likely to hit |
| Vol ↓ | Options cheaper, barriers less likely to hit |

> **📘 Example:** Autocallable pricing:
> - Low volatility: Lower coupon (safer for issuer)
> - High volatility: Higher coupon (riskier for issuer)

### Worst-of Products

Products based on the **worst performer** in a basket are cheaper because correlation affects pricing:

**Why worst-of is cheaper:**
- Lower correlation = Higher chance one stock underperforms significantly
- Higher correlation = Stocks move together, less dispersion

> **📘 Example:** Worst-of Autocallable on 3 tech stocks:
> - If stocks are 90% correlated: Similar to single-stock product
> - If stocks are 50% correlated: Much higher chance one triggers barrier
> - Lower correlation → Higher coupon (more risk)

### Correlation Swaps

Products that pay based on realized correlation vs expected correlation.

> **📘 Example:** Correlation swap on DAX constituents:
> - Receive: Realized correlation
> - Pay: Fixed correlation (e.g., 40%)
> - If stocks become more correlated than expected, swap pays out

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Volatility and correlation systems require:

1. **Volatility Surface Construction**
   - Interpolation between strikes and maturities
   - Arbitrage-free constraints
   - Real-time updates from option prices

2. **Historical Calculations**
   - Return calculations (log vs simple)
   - Rolling window implementations
   - Handling data gaps and outliers

3. **Correlation Matrices**
   - Matrix must be positive semi-definite
   - Handling missing data
   - Stressed correlations for risk scenarios

4. **Greeks Calculation**
   - Vega (volatility sensitivity)
   - Gamma (convexity)
   - Cross-Greeks for basket products

## Common Misconceptions

> **⚠️ Misconception:** "Low volatility means low risk"
> **Reality:** Low volatility can precede large moves. VIX at 12 in early 2020 didn't prevent the COVID crash.

> **⚠️ Misconception:** "Past correlation predicts future correlation"
> **Reality:** Correlations are unstable. What's uncorrelated in calm markets may become highly correlated in stress.

> **⚠️ Misconception:** "Implied volatility predicts actual volatility"
> **Reality:** IV reflects current supply/demand for options, not accurate predictions. IV often overestimates actual realized volatility.

> **⚠️ Misconception:** "Diversification always works"
> **Reality:** When markets crash, correlations spike and diversification benefits disappear exactly when you need them.

## Glossary

- **Volatility**: Measure of price fluctuation, expressed as annualized standard deviation
- **Historical Volatility (HV)**: Volatility calculated from past prices
- **Implied Volatility (IV)**: Volatility implied by option prices
- **VIX**: CBOE Volatility Index - S&P 500 expected 30-day volatility
- **VSTOXX**: European volatility index for EURO STOXX 50
- **Volatility Smile**: Pattern of IV varying by strike price
- **Volatility Surface**: 3D view of IV across strikes and maturities
- **Correlation**: Measure of co-movement (-1 to +1)
- **Vega**: Option sensitivity to volatility changes
- **Worst-of**: Product paying based on worst-performing underlying

