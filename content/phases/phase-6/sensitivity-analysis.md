---
id: sensitivity-analysis
title: Sensitivity Analysis
phase: 6
order: 4
difficulty: Intermediate
---

# Sensitivity Analysis

## Overview

**Sensitivity analysis** examines how product values and portfolio risks change under different market scenarios. It's essential for understanding potential outcomes, stress testing, and risk management.

While Greeks show local sensitivities, sensitivity analysis shows the full picture.

## Types of Sensitivity Analysis

### 1. Scenario Analysis

Examine specific "what if" scenarios:

> **📘 Example:** What if DAX drops 20%?
> - Current DAX: 16,000
> - Scenario DAX: 12,800
> - Calculate product values under scenario
> - Assess portfolio impact

### 2. Stress Testing

Extreme scenarios based on historical events or hypothetical extremes:

| Stress Scenario | Assumptions |
|-----------------|-------------|
| 2008 Financial Crisis | Equity -50%, Vol +150%, Rates -200bp |
| 2020 COVID Crash | Equity -35%, Vol +300% |
| Rates Shock | Rates +300bp, Equity -15% |
| Vol Explosion | Vol doubles, Equity -10% |

### 3. Historical Simulation

Apply actual historical market moves:

```
For each historical date:
  1. Get actual market changes from that day
  2. Apply to current portfolio
  3. Calculate P&L impact
  4. Build distribution of outcomes
```

## Sensitivity Matrices

### Spot vs Volatility Matrix

How product value changes across spot and vol combinations:

```
                    Volatility
              15%    20%    25%    30%
        110%  €12.5  €12.0  €11.5  €11.0
Spot    100%  €10.0  €10.0  €10.0  €10.0
         90%  €7.5   €8.0   €8.5   €9.0
         80%  €4.5   €5.5   €6.5   €7.5
```

**Reading the matrix:**
- Value at current levels (100%, 20%): €10.0
- Value if spot drops 20%: €4.5-7.5 depending on vol
- Higher vol helps when spot is down (more chance of recovery)

### Time vs Spot Matrix

How value evolves over time at different spot levels:

```
                    Time to Expiry
              12m    6m     3m     0
        110%  €12.5  €11.5  €10.5  €10.0
Spot    100%  €10.0  €9.5   €8.0   €0.0
         90%  €7.5   €6.0   €3.0   €0.0
```

## Break-Even Analysis

### Finding Key Levels

**Break-even spot**: Price at which investment returns zero.

> **📘 Example:** Discount certificate
> - Purchase price: €90
> - Cap: €100
> - Break-even: €90 (below this = loss)
> - Maximum profit: €10 (at or above €100)

**Break-even volatility**: Vol level at which hedging costs equal premium.

### Barrier Distance Analysis

How close is the barrier to being triggered?

```
Barrier buffer analysis:
- Current: 20% buffer (safe)
- If vol doubles: Effective buffer reduces
- Historical: Has barrier ever been touched at this buffer?
```

## Scenario Construction

### Single-Factor Scenarios

Change one variable at a time:

| Factor | Range |
|--------|-------|
| Spot | ±30% in 5% increments |
| Volatility | ±50% in 10% increments |
| Interest rates | ±200bp in 50bp increments |
| Time | 0 to expiry in monthly steps |

### Multi-Factor Scenarios

Change multiple variables together (more realistic):

| Scenario | Spot | Vol | Rates |
|----------|------|-----|-------|
| Risk-off | -20% | +50% | -100bp |
| Risk-on | +15% | -30% | +50bp |
| Stagflation | -10% | +20% | +200bp |
| Soft landing | +5% | -10% | 0bp |

## Autocallable Sensitivity

### Scenario Table

For autocallable on DAX, initial 16,000, barrier 60%, 8% annual coupon:

| DAX at Obs 1 | Outcome |
|--------------|---------|
| ≥ 16,000 | Autocall: 100% + 8% |
| 14,000-15,999 | Continue, no coupon |
| 9,600-13,999 | Continue, barrier intact |
| < 9,600 | Barrier breached |

### Path Scenarios

| Path | Year 1 | Year 2 | Year 3 | Result |
|------|--------|--------|--------|--------|
| A | 95% | 105% | - | Autocall Y2: 108% |
| B | 90% | 95% | 102% | Autocall Y3: 108% |
| C | 80% | 90% | 95% | Maturity: 100% (barrier intact) |
| D | 55%↓ | 80% | 95% | Maturity: 95% (barrier breached) |

## Risk Metrics

### Value at Risk (VaR)

Maximum expected loss at a confidence level over a time horizon.

```
VaR(95%, 1-day) = €50,000
Interpretation: 95% confident loss won't exceed €50,000 in one day
```

### Expected Shortfall (CVaR)

Average loss beyond VaR (worse than worst 5%):

```
ES(95%) = €75,000
Interpretation: If loss exceeds VaR, expect average €75,000 loss
```

### Greeks-Based Risk

```
Risk = Σ |Greek × Scenario Move|

Example:
- Delta risk: |5,000 × 10%| = €500
- Vega risk: |30,000 × 5%| = €1,500
- Total parametric risk ≈ €2,000
```

## Visualization

### Heat Maps

Color-coded matrices showing risk intensity:

```
High risk: RED
Medium:    YELLOW
Low risk:  GREEN
```

### P&L Distributions

Histogram of potential outcomes:

```
Frequency
    │    ▄▄
    │   ▄██▄
    │  ▄████▄
    │ ▄██████▄
    │▄████████▄
    └───────────────→ P&L
   -€100k   0   +€50k
```

### Scenario Trees

For path-dependent products:

```
                    ┌→ Autocall (40%)
        ┌→ Up (55%) ─┤
Start ──┤            └→ Continue (15%)
        │
        └→ Down (45%) ─┬→ Barrier breach (10%)
                       └→ Continue (35%)
```

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Sensitivity systems require:

1. **Grid Computing**
   - Thousands of scenarios
   - Parallel calculation
   - Result aggregation

2. **Data Visualization**
   - Interactive charts
   - Heat maps
   - Real-time updates

3. **Scenario Management**
   - Scenario definition
   - Historical data
   - Stress library

4. **Reporting**
   - Regulatory reports
   - Management dashboards
   - Client disclosures

## Common Misconceptions

> **⚠️ Misconception:** "VaR tells you maximum loss"
> **Reality:** VaR is a threshold, not a cap. Losses can and do exceed VaR.

> **⚠️ Misconception:** "Historical scenarios predict future scenarios"
> **Reality:** Future crises may be different. Use historical data as one input, not the only input.

> **⚠️ Misconception:** "More scenarios are always better"
> **Reality:** Focus on meaningful scenarios. 1,000 irrelevant scenarios add noise, not insight.

## Glossary

- **Scenario Analysis**: Examining specific what-if conditions
- **Stress Test**: Extreme scenario examination
- **VaR**: Value at Risk - loss threshold at confidence level
- **CVaR/ES**: Expected Shortfall - average loss beyond VaR
- **Break-even**: Level where P&L equals zero
- **Sensitivity Matrix**: Grid of values across parameter combinations
- **Historical Simulation**: Applying past market moves
- **Parametric Risk**: Risk calculated from Greeks and factor moves

