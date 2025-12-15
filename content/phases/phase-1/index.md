---
phaseNumber: 1
title: Asset Classes & Underlyings
subtitle: Know what products are built on
goal: Understand the fundamental asset classes that form the basis of all financial products.
color: blue
topics:
  - equities
  - fixed-income
  - fx
  - commodities
  - volatility
---

# Phase 1: Asset Classes & Underlyings

Before diving into derivatives and structured products, you must understand the **underlying assets** these products are built upon. Every derivative, every structured product, ultimately derives its value from one or more underlying assets.

## Learning Objectives

By the end of this phase, you will understand:
- The characteristics of major asset classes (equities, bonds, FX, commodities)
- How each asset class is valued and traded
- The role of indices as baskets of securities
- Volatility and correlation as meta-concepts affecting all assets

## Why This Matters for Software Engineers

When building investment banking systems, you'll need to:
- **Handle different data types**: Stocks have tickers and ISIN codes, FX has currency pairs, bonds have coupon schedules
- **Process market data feeds**: Each asset class has different data sources and formats
- **Calculate values**: Different pricing models for different asset types
- **Manage reference data**: Static data about securities (corporate actions, dividends, coupons)

## Topics Covered

1. **Equities (Stocks & Indices)** - Ownership in companies and index composition
2. **Fixed Income (Bonds)** - Debt instruments and yield calculations
3. **Foreign Exchange (FX)** - Currency pairs and exchange rates
4. **Commodities** - Physical goods traded on markets
5. **Volatility & Correlation** - Risk measures affecting all assets

## Key Concept: The Underlying

In structured products, the **underlying** is the asset whose performance determines the product's payoff.

> **📘 Example:** An Autocallable on DAX has the DAX index as its underlying. If DAX rises above 105% of its initial level, the product auto-redeems. The structured product's entire behavior depends on DAX's performance.

Understanding underlyings thoroughly is essential because:
- **Payoff calculation** depends on underlying price movements
- **Risk management** requires understanding underlying volatility and correlations
- **Corporate actions** on underlyings affect product terms
- **Hedging** involves trading the underlying or related derivatives
