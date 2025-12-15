---
phaseNumber: 2
title: Derivatives Basics (CRITICAL)
subtitle: Foundation for structured products
goal: Master derivative instruments - essential for understanding structured and leverage products.
color: violet
topics:
  - derivatives-intro
  - forwards-futures
  - options-basics
  - payoff-diagrams
  - moneyness
---

# Phase 2: Derivatives Basics (CRITICAL)

**This is the most important phase.** Structured products and leverage products are impossible to understand without a solid grasp of derivatives.

A **derivative** is a financial instrument whose value is *derived* from an underlying asset. Every structured product, every warrant, every knock-out certificate is built from derivative building blocks.

## Why This Phase is Critical

> **⚠️ Warning:** Skipping or rushing this phase will make everything that follows incomprehensible. Take your time here.

Derivatives are the Lego bricks of financial engineering:
- **Capital protection** = Zero-coupon bond + Call option
- **Discount certificate** = Stock - Call option (short)
- **Knock-out certificate** = Barrier option + Financing
- **Autocallable** = Multiple barrier options + Coupons

## Learning Objectives

By the end of this phase, you will understand:
- The definition and purpose of derivatives
- Forward and futures contracts
- Call and put options (the fundamental building blocks)
- How to read payoff diagrams
- Moneyness and time value concepts

## Topics Covered

1. **What is a Derivative** - Definition, purpose, and types
2. **Forwards & Futures** - Obligations to buy/sell at future dates
3. **Options: Call & Put** - Rights (not obligations) to buy/sell
4. **Payoff Diagrams** - Visual representation of profit/loss
5. **Moneyness & Time Value** - Intrinsic vs time value

## The Derivative Family Tree

```
                    DERIVATIVES
                        │
         ┌──────────────┼──────────────┐
         │              │              │
     FORWARDS       OPTIONS        SWAPS
     /FUTURES       /      \         │
         │        CALL    PUT    Interest Rate
         │         │       │     Currency
    Obligation   Right   Right   Equity
    to buy/sell  to buy  to sell
```

## Why Software Engineers Need This

As a software engineer working on banking systems, you'll implement:
- **Pricing models** (Black-Scholes, Monte Carlo)
- **Greeks calculations** (Delta, Gamma, Vega, Theta)
- **Payoff engines** calculating product values at different scenarios
- **Risk systems** measuring portfolio sensitivities

Understanding the math and logic of derivatives is essential for building correct, efficient financial software.
