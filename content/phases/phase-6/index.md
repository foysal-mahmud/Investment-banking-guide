---
phaseNumber: 6
title: Pricing & Risk (High Level)
subtitle: Understanding valuation and risk metrics
goal: Understand inputs and outputs of pricing models without being a quant.
color: amber
topics:
  - fair-value
  - volatility-pricing
  - greeks
  - sensitivity-analysis
---

# Phase 6: Pricing & Risk (High Level)

You don't need to be a quantitative analyst to work on investment banking software, but you do need to understand the **inputs and outputs** of pricing models and risk calculations.

This phase gives you the knowledge to work with quants, interpret model outputs, and design systems that handle pricing and risk correctly.

## What You Need to Know (And What You Don't)

### You Should Understand

- What inputs go into pricing models
- What outputs come out and what they mean
- How Greeks measure risk sensitivities
- How to interpret scenario analysis

### You Don't Need To

- Derive Black-Scholes from first principles
- Implement Monte Carlo from scratch (use libraries)
- Understand stochastic calculus deeply
- Build pricing models (quants do this)

## Learning Objectives

By the end of this phase, you will understand:
- Fair value concepts and pricing model basics
- How volatility affects product prices
- The Greeks (Delta, Gamma, Vega, Theta, Rho)
- Sensitivity analysis and scenario testing

## Topics Covered

1. **Fair Value & Pricing Models** - How structured products are valued
2. **Volatility in Pricing** - The most important input
3. **The Greeks** - Risk sensitivities
4. **Sensitivity Analysis** - What-if scenarios

## The Pricing Ecosystem

```
         INPUTS                    MODEL                   OUTPUTS
    ┌──────────────┐          ┌──────────────┐       ┌──────────────┐
    │ Spot prices  │          │              │       │  Fair value  │
    │ Volatility   │─────────►│   PRICING    │──────►│  Greeks      │
    │ Interest     │          │   ENGINE     │       │  Scenarios   │
    │ Dividends    │          │              │       │  P&L         │
    │ Correlations │          └──────────────┘       └──────────────┘
    └──────────────┘
```

## Key Concept: Model Risk

All pricing models are approximations of reality.

> **⚠️ Warning:** "All models are wrong, but some are useful." - George Box

**Sources of model risk:**
- Simplifying assumptions (no jumps, constant volatility)
- Calibration errors
- Market regime changes
- Liquidity effects not captured

Understanding model limitations is as important as understanding the models themselves.
