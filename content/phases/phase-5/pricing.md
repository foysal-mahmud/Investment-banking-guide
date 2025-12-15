---
id: pricing
title: Daily Pricing & Valuation
phase: 5
order: 2
difficulty: Intermediate
---

# Daily Pricing & Valuation

## Overview

**Daily pricing** is the process of calculating the current value of structured products throughout their lifecycle. This is critical for trading, risk management, client reporting, and regulatory compliance.

Pricing systems are among the most computationally intensive in investment banking.

## Why Pricing Matters

### Multiple Stakeholders

| Stakeholder | Needs Pricing For |
|-------------|------------------|
| Traders | Making markets, hedging |
| Risk managers | Exposure calculations |
| Clients | Portfolio valuation |
| Regulators | Transparency, reporting |
| Operations | Settlement, P&L |

### Pricing Frequency

| Type | Frequency | Use Case |
|------|-----------|----------|
| Real-time | Tick-by-tick | Market making, trading |
| Intraday | Minutes | Risk monitoring |
| End-of-day | Once daily | Official valuations |
| Month-end | Monthly | Reporting |

## Fair Value Calculation

### Components of Fair Value

```
Fair Value = Theoretical Value + Adjustments
```

**Theoretical Value**: Model-based calculation
**Adjustments**: Market realities not in model

### Adjustments (XVAs)

| Adjustment | Purpose |
|------------|---------|
| CVA (Credit) | Counterparty default risk |
| DVA (Debit) | Own default risk |
| FVA (Funding) | Cost of funding |
| KVA (Capital) | Regulatory capital cost |

## Pricing Models

### Black-Scholes Model

For vanilla options and simple products:

**Inputs:**
- Spot price (S)
- Strike price (K)
- Time to expiry (T)
- Volatility (σ)
- Risk-free rate (r)
- Dividend yield (q)

**Formula (call option):**
```
C = S × e^(-qT) × N(d₁) - K × e^(-rT) × N(d₂)
```

### Monte Carlo Simulation

For path-dependent products (autocallables, barriers):

```
For each simulation:
  1. Generate random price path
  2. Check events (barriers, autocalls)
  3. Calculate payoff
Average all payoffs → Fair value
```

> **📘 Example:** Autocallable pricing
> - Simulate 100,000 paths
> - For each path, check autocall on each observation date
> - If autocalled, record coupon + principal
> - If not autocalled, check final payoff
> - Average all outcomes, discount to today

### Finite Difference Methods

Solve partial differential equations numerically:
- More stable than Monte Carlo for some products
- Good for American-style options
- Memory intensive

## Market Data Requirements

### Spot Prices

| Source | Use |
|--------|-----|
| Exchange feeds | Listed underlyings |
| OTC quotes | FX, rates |
| Composite | Best bid/offer |

### Volatility Surfaces

| Dimension | Description |
|-----------|-------------|
| Strike | Different moneyness levels |
| Expiry | Different time horizons |
| Underlying | Each asset |

> **📘 Example:** DAX volatility surface
> - 50 strike levels (60% to 140%)
> - 20 expiries (1 week to 5 years)
> - 1,000 data points
> - Updated multiple times daily

### Interest Rates

| Curve | Use |
|-------|-----|
| EUR OIS | Discounting |
| EURIBOR | Forward rates |
| Government | Benchmark spreads |

### Dividends

| Type | Impact |
|------|--------|
| Announced | Known, specific dates |
| Expected | Forecast, affects forwards |

## Bid-Ask Spreads

### Why Spreads Exist

Market makers quote bid and ask prices:

```
Mid Price = (Bid + Ask) / 2
Spread = Ask - Bid
```

### Spread Components

| Component | Cause |
|-----------|-------|
| Hedging cost | Greeks exposure |
| Inventory risk | Position holding |
| Competition | Market conditions |
| Complexity | Exotic features |

### Dynamic Spreads

Spreads widen when:
- Volatility increases
- Liquidity decreases
- Near barriers/triggers
- Outside trading hours

## Intraday Pricing

### Real-Time Updates

```
Market Data Feed
       │
       ▼
  ┌──────────┐
  │ Pricing  │
  │ Engine   │
  └────┬─────┘
       │
       ▼
  Distribute to:
  - Trading screens
  - Risk systems
  - Exchange quotes
  - Client portals
```

### Performance Requirements

| Metric | Target |
|--------|--------|
| Latency | < 100ms for updates |
| Throughput | 10,000+ products/second |
| Availability | 99.9%+ uptime |

## End-of-Day Pricing

### The EOD Process

1. **Cutoff time**: Usually 5-6 PM local time
2. **Official fixings**: Closing prices recorded
3. **Batch valuation**: All products repriced
4. **Validation**: Check for anomalies
5. **Distribution**: Send to downstream systems

### Quality Checks

| Check | Purpose |
|-------|---------|
| Stale price | Detect missing updates |
| Large move | Flag unusual changes |
| Negative value | Catch calculation errors |
| Breach comparison | Verify barrier logic |

## Settlement Pricing

### Final Fixing

At maturity or autocall, the **final fixing** determines payoff:

> **📘 Example:** DAX Autocallable final fixing
> - Observation date: January 15, 2025
> - Fixing time: Xetra closing auction (~5:30 PM)
> - Fixing level: 16,789.23
> - Trigger: 16,500 (100% of initial)
> - Result: **Autocall triggered** (16,789 > 16,500)

### Fixing Sources

| Underlying | Source |
|------------|--------|
| DAX | Xetra closing auction |
| EURO STOXX 50 | STOXX calculation |
| Single stocks | Exchange closing price |
| Commodities | Exchange settlement |

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Pricing systems require:

1. **High Performance Computing**
   - Parallel Monte Carlo
   - GPU acceleration
   - Distributed calculation

2. **Data Management**
   - Market data caching
   - Volatility surface storage
   - Historical data retrieval

3. **Real-Time Integration**
   - Low latency feeds
   - Event-driven updates
   - Load balancing

4. **Accuracy & Validation**
   - Model validation
   - Reconciliation
   - Error handling

## Common Pricing Challenges

### Convergence Issues

Monte Carlo simulations may not converge:
- Increase number of paths
- Use variance reduction techniques
- Check random number quality

### Smile Interpolation

Volatility not available at exact strike:
- Interpolate smile carefully
- Avoid arbitrage conditions
- Handle extreme strikes

### Corporate Action Adjustments

Dividends, splits require model adjustments:
- Forward price calculation
- Barrier level adjustment
- Historical data correction

## Glossary

- **Fair Value**: Theoretical price based on model
- **Mark-to-Market**: Valuation at current prices
- **Bid-Ask Spread**: Difference between buy and sell prices
- **Monte Carlo**: Random simulation for pricing
- **Volatility Surface**: 2D grid of implied volatilities
- **EOD**: End of Day
- **Final Fixing**: Price observation for settlement
- **Greeks**: Price sensitivities (Delta, Gamma, etc.)
- **XVA**: Valuation adjustments (CVA, DVA, FVA, KVA)

