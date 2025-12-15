---
id: greeks
title: The Greeks
phase: 6
order: 3
difficulty: Intermediate
---

# The Greeks

## Overview

**The Greeks** are measures of how option and structured product prices change when market conditions change. They are called "Greeks" because they're denoted by Greek letters: Delta, Gamma, Vega, Theta, and Rho.

Understanding Greeks is essential for risk management and hedging.

## Why Greeks Matter

| Use Case | Relevance |
|----------|-----------|
| **Hedging** | How much underlying to hold |
| **Risk Management** | Portfolio exposure measurement |
| **P&L Attribution** | Why did value change? |
| **Trading** | Market making decisions |

## Delta (Δ)

### Definition

**Delta** measures how much the option price changes for a €1 change in the underlying.

```
Δ = ∂V / ∂S

Where:
V = Option/product value
S = Underlying price
```

### Interpretation

| Delta | Meaning |
|-------|---------|
| +0.50 | €0.50 gain per €1 underlying rise |
| -0.30 | €0.30 loss per €1 underlying rise |
| +1.00 | Moves exactly like underlying |
| 0 | Insensitive to underlying |

### Delta by Product

| Position | Delta Range |
|----------|-------------|
| Long call | 0 to +1 |
| Long put | -1 to 0 |
| Long stock | +1 (always) |
| Discount cert | 0 to +1 |
| Short knock-out | Varies |

### Delta Hedging

To be delta-neutral (no directional exposure):

```
Hedge = -Position Delta × Position Size

Example:
- Long 100 calls with Delta = 0.6
- Position delta = 100 × 0.6 = 60
- Hedge: Sell 60 shares of underlying
```

> **📘 Example:** Market maker hedging
> - Sells autocallable with delta = 0.7 per €1,000 notional
> - Notional sold: €10 million
> - Total delta: 0.7 × 10,000 = 7,000
> - Hedge: Buy €7 million of underlying

## Gamma (Γ)

### Definition

**Gamma** measures how much Delta changes for a €1 change in the underlying.

```
Γ = ∂²V / ∂S² = ∂Δ / ∂S
```

### Why Gamma Matters

- **Hedging frequency**: High gamma = need to rebalance more often
- **P&L variability**: High gamma = more unpredictable P&L
- **Barrier risk**: Gamma explodes near barriers

### Gamma Characteristics

| Product State | Gamma Level |
|---------------|-------------|
| ATM options | Highest |
| Deep ITM/OTM | Low |
| Near barriers | Very high |
| Long expiry | Lower |
| Short expiry | Higher |

> **📘 Example:** Gamma near barrier
> - Product barrier: 14,000
> - DAX at 14,100 (0.7% buffer)
> - Gamma is extremely high
> - Small moves cause large delta changes
> - Hedging is difficult and expensive

### Long vs Short Gamma

| Position | Gamma | Effect |
|----------|-------|--------|
| Long options | Positive | Benefits from realized volatility |
| Short options | Negative | Harmed by realized volatility |

## Vega (ν)

### Definition

**Vega** measures how much the option price changes for a 1% change in volatility.

```
ν = ∂V / ∂σ
```

### Vega Characteristics

| Factor | Vega Effect |
|--------|-------------|
| ATM options | Highest vega |
| Longer expiry | Higher vega |
| OTM options | Lower vega |
| High notional | Higher total vega |

> **📘 Example:** Vega impact
> - Autocallable vega: €50,000 per 1% vol
> - Volatility rises from 20% to 22%
> - Value change: €50,000 × 2 = **€100,000 loss** (for short vol product)

### Vega Hedging

Hedge with other options or variance swaps:

```
To reduce vega exposure:
- Buy options if short vega
- Sell options if long vega
- Trade variance swaps
```

## Theta (Θ)

### Definition

**Theta** measures how much the option price changes as time passes (usually per day).

```
Θ = ∂V / ∂t
```

### Theta Characteristics

Long options have **negative theta** (time decay):
- Value decreases as time passes
- Accelerates near expiry
- "Theta bleed"

Short options have **positive theta**:
- Value increases as time passes (for the short)
- Collect premium as time decays

### Time Decay by Moneyness

| Moneyness | Theta |
|-----------|-------|
| ATM | Highest (most time value) |
| ITM | Moderate |
| OTM | Lower |

> **📘 Example:** Theta decay
> - ATM warrant, 30 days to expiry
> - Theta: -€0.05 per day
> - After 10 days (no spot move): Lost €0.50 to time decay

## Rho (ρ)

### Definition

**Rho** measures sensitivity to interest rate changes.

```
ρ = ∂V / ∂r
```

### Rho Characteristics

| Position | Rho |
|----------|-----|
| Long call | Positive (higher rates increase value) |
| Long put | Negative (higher rates decrease value) |
| Long expiry | Higher rho |
| Short expiry | Lower rho |

> **💡 Note:** Rho is typically less important than other Greeks for short-dated products, but significant for multi-year structured products.

## Greeks Summary Table

| Greek | Measures | Typical Range |
|-------|----------|---------------|
| Delta (Δ) | Price sensitivity | -1 to +1 |
| Gamma (Γ) | Delta sensitivity | 0 to ∞ |
| Vega (ν) | Volatility sensitivity | 0 to ∞ |
| Theta (Θ) | Time decay | Negative for longs |
| Rho (ρ) | Rate sensitivity | Varies |

## Greeks for Structured Products

### Autocallable Greeks

| State | Delta | Gamma | Vega |
|-------|-------|-------|------|
| Far from trigger | Moderate | Low | Moderate |
| Near trigger | High | Very high | High |
| Near barrier | High | Extreme | Very high |

### Barrier Products

Near barriers, all Greeks become extreme:
- Delta approaches ±1
- Gamma explodes
- Hedging becomes very difficult

## P&L Attribution

### Decomposing Daily P&L

```
P&L = Delta × ΔS + ½ × Gamma × ΔS² + Vega × Δσ + Theta × Δt + Residual
```

> **📘 Example:** Daily P&L breakdown
> - Delta P&L: +€5,000 (underlying up)
> - Gamma P&L: +€500 (large move benefits)
> - Vega P&L: -€3,000 (vol down)
> - Theta P&L: -€200 (time decay)
> - **Total**: +€2,300

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Greeks systems require:

1. **Calculation**
   - Numerical differentiation
   - Analytical formulas
   - Finite differences

2. **Aggregation**
   - Portfolio-level Greeks
   - Netting across products
   - Multi-currency handling

3. **Real-Time**
   - Intraday updates
   - Limit monitoring
   - Alert generation

4. **Reporting**
   - P&L attribution
   - Risk reports
   - Regulatory disclosure

## Common Misconceptions

> **⚠️ Misconception:** "Delta tells you the probability of finishing ITM"
> **Reality:** Delta approximates this for simple options, but not exactly and not for complex products.

> **⚠️ Misconception:** "Greeks are constant"
> **Reality:** All Greeks change constantly as market conditions change.

> **⚠️ Misconception:** "Just hedge delta and you're safe"
> **Reality:** Gamma and vega can cause large losses even with delta-neutral positions.

## Glossary

- **Delta (Δ)**: Sensitivity to underlying price
- **Gamma (Γ)**: Sensitivity of delta to underlying price
- **Vega (ν)**: Sensitivity to volatility
- **Theta (Θ)**: Sensitivity to time (time decay)
- **Rho (ρ)**: Sensitivity to interest rates
- **Delta Neutral**: Portfolio with zero delta
- **Gamma Scalping**: Trading to profit from gamma
- **Vega Exposure**: Net sensitivity to volatility
- **P&L Attribution**: Breaking down profit sources

