---
id: autocallables
title: Autocallables (Very Important)
phase: 4
order: 5
difficulty: Advanced
---

# Autocallables (Very Important)

## Overview

**Autocallables** (also called Phoenix Notes, Express Certificates, or Callable Yield Notes) are structured products that automatically redeem early if the underlying reaches a specified trigger level on observation dates. They pay periodic coupons and are among the most popular and complex structured products issued today.

> **⚠️ This is arguably the most important topic in structured products.** Autocallables represent a massive portion of bank issuance and require sophisticated systems to manage.

## How Autocallables Work

### The Basic Mechanism

1. **Observation dates**: Product is checked periodically (monthly, quarterly, annually)
2. **Autocall trigger**: If underlying ≥ trigger on observation date, product redeems early
3. **Coupon**: Paid if underlying meets coupon condition
4. **Barrier**: At maturity, protects principal if not breached

### Visual Timeline

```
Issue    Obs 1    Obs 2    Obs 3    Maturity
  │        │        │        │        │
  ▼        ▼        ▼        ▼        ▼
  ─────────┼────────┼────────┼────────┤
           Check    Check    Check    Final
           trigger  trigger  trigger  payoff
```

## Key Terms

### Autocall Trigger (Tilgungsschwelle)

Level above which product automatically redeems.
- Usually 100% of initial level
- Sometimes decreasing over time (step-down)

### Coupon Trigger (Kuponbarriere)

Level above which coupon is paid.
- Often same as autocall trigger
- Sometimes lower (pays coupon more easily)

### Barrier (Barriere)

Protection level for principal at maturity.
- Usually 50-70% of initial level
- Only matters if not autocalled

### Memory Coupon

If coupon missed, it's remembered and paid later when conditions are met.

## Product Example

### Standard Autocallable on DAX

| Specification | Value |
|--------------|-------|
| Underlying | DAX |
| Initial level | 16,000 |
| Term | 3 years |
| Autocall trigger | 100% |
| Coupon | 8% p.a. |
| Coupon trigger | 100% |
| Barrier | 60% (9,600) |
| Observation | Annual |

### Scenario Analysis

**Scenario 1: Early redemption Year 1**
- Observation 1: DAX at 16,500 (103% > 100%)
- **Product autocalls!**
- Receive: 100% + 8% coupon = **€10,800** on €10,000

**Scenario 2: Coupon but no autocall**
- Observation 1: DAX at 15,500 (97% < 100%)
- No autocall, no coupon (below 100%)
- Observation 2: DAX at 16,200 (101% > 100%)
- **Autocall Year 2!**
- Receive: 100% + Year 2 coupon (8%) = **€10,800**
- Note: Year 1 coupon lost (unless memory feature)

**Scenario 3: Runs to maturity, barrier intact**
- All observations: DAX below trigger
- Maturity: DAX at 12,000 (75% < 100%, but > 60% barrier)
- **Barrier NOT breached**
- Receive: 100% principal = **€10,000** (no coupon)

**Scenario 4: Barrier breach**
- DAX touches 9,500 during term (59% < 60%)
- **Barrier breached!**
- At maturity, DAX at 11,000 (69%)
- Receive: 69% × €10,000 = **€6,900** (31% loss)

## Memory Coupon Feature

### How Memory Works

Missed coupons accumulate and pay when conditions met later.

> **📘 Example:**
> - Year 1: DAX 95% → No coupon (8% missed, remembered)
> - Year 2: DAX 105% → Autocall!
> - Receive: 100% + Year 1 (8%) + Year 2 (8%) = **€11,600**

### Impact on Pricing

- Memory feature makes product more expensive (better for investor)
- Non-memory products trade at discount

## Step-Down Autocall

### Decreasing Triggers

Autocall trigger decreases over time:

| Year | Trigger |
|------|---------|
| 1 | 100% |
| 2 | 95% |
| 3 | 90% |

**Advantage**: Higher probability of autocall if market drifts lower

> **📘 Example:**
> - Year 1: DAX 98% → No autocall (< 100%)
> - Year 2: DAX 96% → Autocall! (≥ 95% trigger)

## Worst-of Autocallables

### Multiple Underlyings

Product is based on the **worst performer** in a basket.

> **📘 Example:** Worst-of on DAX, S&P 500, Nikkei
> - Autocall: ALL must be above trigger
> - Barrier: ANY one below barrier = breach
> - Coupon: Depends on worst performer

### Why Higher Coupons?

| Product Type | Typical Coupon |
|-------------|----------------|
| Single underlying | 6-8% |
| Worst-of 2 | 10-12% |
| Worst-of 3 | 14-18% |

**Risk**: One bad performer ruins entire investment

### Correlation Impact

- High correlation: Stocks move together, worst-of similar to single stock
- Low correlation: Stocks move independently, much higher risk one underperforms
- Lower correlation = Higher coupon (more risk)

## Phoenix Feature (Periodic Coupon)

### Regular Coupon Payments

Standard autocallables pay coupon only at autocall or maturity.
Phoenix autocallables pay coupon at each observation if coupon trigger met.

> **📘 Example:** Phoenix autocallable
> - Quarterly observations
> - Coupon trigger: 80%
> - Autocall trigger: 100%
> 
> Quarter 1: DAX 95% → Pay 2% coupon (no autocall)
> Quarter 2: DAX 85% → Pay 2% coupon (no autocall)
> Quarter 3: DAX 102% → **Autocall** + final 2% coupon

## Pricing Complexity

### What Drives Pricing?

| Factor | Impact on Coupon |
|--------|-----------------|
| Higher volatility | ↑ (more risk) |
| Lower barrier | ↓ (less protection) |
| Lower correlation (worst-of) | ↑ (more risk) |
| Step-down triggers | ↓ (easier autocall) |
| Memory coupon | ↓ (better for investor) |
| Higher dividends | ↑ (underlying falls ex-div) |

### Fair Value Gap

Banks typically embed 3-7% margin:
- Indicative price: €100
- Fair value: ~€95
- Issuer profit: ~€5

## Why Banks Love Autocallables

1. **High margin**: Complex products allow larger spreads
2. **Hedging synergies**: Options exposure can offset trading book
3. **Reinvestment**: When autocalled, investors often buy new products
4. **Scalability**: Standard structures, customized parameters

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Autocallable systems are among the most complex:

1. **Observation Date Processing**
   - Schedule management
   - Price fixing at observation
   - Trigger evaluation logic

2. **State Machine**
   ```
   Active → Coupon Paid? → Autocalled? → Barrier Breach?
   ```
   Each state requires different processing

3. **Payoff Calculation**
   - Conditional on path history
   - Memory coupon accumulation
   - Worst-of evaluation

4. **Risk Management**
   - Path-dependent Greeks
   - Correlation hedging
   - Barrier proximity monitoring

5. **Lifecycle Events**
   - Observation date processing
   - Coupon fixing and payment
   - Early redemption
   - Final settlement

## Common Misconceptions

> **⚠️ Misconception:** "Autocall is like a bond with higher yield"
> **Reality:** Unlike bonds, you can lose principal. The high coupon compensates for real risk.

> **⚠️ Misconception:** "If I like the stocks, worst-of is fine"
> **Reality:** You get the WORST outcome, not the average. Even great stocks sometimes underperform.

> **⚠️ Misconception:** "The barrier is very far, so it's safe"
> **Reality:** Markets can fall 40%+ in crisis (2008: -56%, 2020: -34%). Barriers get tested.

> **⚠️ Misconception:** "Autocalling early is always good"
> **Reality:** Early autocall means you got your money back plus coupon, but you also miss out on potentially higher returns from continued coupon payments.

> **⚠️ Misconception:** "Banks lose money when products autocall"
> **Reality:** Banks hedge dynamically. Autocall is factored into the pricing from day one.

## Glossary

- **Autocall (Tilgung)**: Automatic early redemption
- **Trigger (Schwelle)**: Level at which autocall occurs
- **Coupon Trigger (Kuponbarriere)**: Level above which coupon pays
- **Barrier (Barriere)**: Protection level for principal
- **Memory**: Feature where missed coupons accumulate
- **Step-Down**: Decreasing trigger levels over time
- **Worst-of**: Based on worst performing underlying
- **Phoenix**: Periodic coupon payments
- **Observation Date (Bewertungstag)**: Date when triggers are checked
- **Initial Level (Startlevel)**: Reference level at product start

