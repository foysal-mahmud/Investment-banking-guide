---
id: fair-value
title: Fair Value & Pricing Models
phase: 6
order: 1
difficulty: Intermediate
---

# Fair Value & Pricing Models

## Overview

**Fair value** is the theoretical price of a financial instrument based on a mathematical model. It represents what the product "should" be worth given current market conditions and assumptions.

Understanding fair value is essential for trading, risk management, and building pricing systems.

## What is Fair Value?

### Definition

**Fair value** = The price at which an instrument would trade between willing buyers and sellers in an orderly market.

For structured products, fair value is calculated using **pricing models** because:
- Products are too complex for simple formulas
- No active two-way market for most products
- Need to price before launch (no market price exists)

### Fair Value vs Market Price

| Price Type | Source | Use |
|------------|--------|-----|
| Fair value | Model calculation | Theoretical reference |
| Bid price | Market maker quote | What you can sell for |
| Ask price | Market maker quote | What you can buy for |
| Mid price | (Bid + Ask) / 2 | Approximate fair value |

> **💡 Note:** Fair value typically sits between bid and ask. The difference represents market maker profit and hedging costs.

## Pricing Model Inputs

### 1. Spot Price (S)

Current price of the underlying asset.

| Source | Underlying |
|--------|-----------|
| Xetra | DAX, German stocks |
| Reuters | FX rates |
| Bloomberg | Commodities |
| Exchange close | Official fixings |

### 2. Strike Price (K)

Fixed in the product terms.

### 3. Time to Expiry (T)

```
T = Days to expiry / 365 (or 252 for trading days)
```

### 4. Volatility (σ)

The most important and complex input. See next topic.

### 5. Risk-Free Rate (r)

Usually the overnight index swap (OIS) rate for the currency.

| Currency | Benchmark |
|----------|-----------|
| EUR | €STR (Euro Short-Term Rate) |
| USD | SOFR (Secured Overnight Financing Rate) |
| CHF | SARON |

### 6. Dividend Yield (q)

Expected dividends, typically annualized as a yield.

| Approach | Description |
|----------|-------------|
| Continuous | q = Annual dividends / Spot price |
| Discrete | Individual dividend amounts and dates |

## The Black-Scholes Model

### The Famous Formula

For a European call option:

```
C = S × e^(-qT) × N(d₁) - K × e^(-rT) × N(d₂)

where:
d₁ = [ln(S/K) + (r - q + σ²/2)T] / (σ√T)
d₂ = d₁ - σ√T
N(x) = Cumulative normal distribution
```

### Assumptions (and Limitations)

| Assumption | Reality |
|------------|---------|
| Constant volatility | Volatility changes constantly |
| No jumps | Markets can gap |
| Continuous trading | Markets close |
| No transaction costs | Costs exist |
| Log-normal returns | Fat tails exist |

> **⚠️ Warning:** Black-Scholes is a starting point, not the final answer. More complex models address these limitations.

## Monte Carlo Simulation

### Why Monte Carlo?

For path-dependent products (autocallables, barriers), Black-Scholes doesn't work directly. Monte Carlo simulates many possible price paths.

### The Process

```
1. Set initial price S₀
2. For each time step:
   - Generate random price change
   - Apply to current price
   - Check for events (barriers, autocalls)
3. Calculate payoff at end
4. Repeat 10,000-1,000,000 times
5. Average all payoffs
6. Discount to today
```

### Example: Barrier Option

```python
def price_barrier_option(spot, barrier, strike, vol, rate, time, n_sims):
    payoffs = []
    
    for _ in range(n_sims):
        path = simulate_path(spot, vol, rate, time)
        
        # Check if barrier was ever touched
        if min(path) < barrier:
            payoff = 0  # Knocked out
        else:
            payoff = max(0, path[-1] - strike)
        
        payoffs.append(payoff)
    
    return np.mean(payoffs) * np.exp(-rate * time)
```

### Variance Reduction

Raw Monte Carlo can be slow. Techniques to improve:
- **Antithetic variates**: Use pairs of opposite random numbers
- **Control variates**: Adjust using known analytical solutions
- **Importance sampling**: Focus on relevant scenarios

## Finite Difference Methods

### Solving the PDE

Instead of simulating paths, solve the pricing equation numerically on a grid.

```
Price grid (example):
           Time →
         0    0.25   0.5   0.75   1.0
    120  [  ]  [  ]  [  ]  [  ]  [20]
Spot 100 [  ]  [  ]  [  ]  [  ]  [ 0]
     80  [  ]  [  ]  [  ]  [  ]  [ 0]

Work backwards from expiry to today
```

### When to Use

- American options (early exercise)
- Low dimensional problems (1-2 underlyings)
- Need for high accuracy

## Model Hierarchy

| Product Complexity | Model |
|-------------------|-------|
| Vanilla options | Black-Scholes |
| Barriers, digitals | Black-Scholes with adjustments |
| Path-dependent | Monte Carlo |
| American | Finite difference |
| Multi-underlying | Monte Carlo |
| Complex exotics | Monte Carlo with advanced dynamics |

## Fair Value in Practice

### End-of-Day Valuation

```
For each product:
  1. Load current market data
  2. Get model parameters
  3. Run pricing model
  4. Apply adjustments (CVA, etc.)
  5. Store fair value
  6. Calculate P&L vs yesterday
```

### Bid-Ask from Fair Value

```
Bid = Fair Value - Half Spread - Adjustments
Ask = Fair Value + Half Spread + Adjustments

Spread depends on:
- Product complexity
- Hedging difficulty
- Market conditions
- Competition
```

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Pricing systems require:

1. **Numerical Libraries**
   - Linear algebra
   - Random number generation
   - Optimization

2. **Performance Optimization**
   - Parallelization
   - GPU computing
   - Caching strategies

3. **Data Management**
   - Market data integration
   - Model parameter storage
   - Result persistence

4. **Validation**
   - Regression testing
   - Benchmarking
   - Anomaly detection

## Common Misconceptions

> **⚠️ Misconception:** "Fair value is the 'correct' price"
> **Reality:** Fair value is model-dependent. Different models give different values.

> **⚠️ Misconception:** "More simulations always give better results"
> **Reality:** Convergence has diminishing returns. 1M simulations isn't 10x better than 100K.

> **⚠️ Misconception:** "The model handles everything"
> **Reality:** Models miss liquidity effects, market microstructure, and regime changes.

## Glossary

- **Fair Value**: Model-calculated theoretical price
- **Black-Scholes**: Classic option pricing formula
- **Monte Carlo**: Random simulation pricing method
- **Finite Difference**: Grid-based numerical pricing
- **Volatility Surface**: Matrix of implied volatilities
- **Discount Factor**: Present value multiplier
- **Risk-Free Rate**: Theoretical no-risk interest rate
- **Path-Dependent**: Payoff depends on price history

