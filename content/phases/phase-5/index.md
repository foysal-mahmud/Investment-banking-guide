---
phaseNumber: 5
title: Product Lifecycle & Payoff Modeling
subtitle: Connect finance to software
goal: Understand the complete lifecycle of structured products from issuance to maturity.
color: cyan
topics:
  - issuance
  - pricing
  - corporate-actions
  - lifecycle-events
  - event-driven-architecture
---

# Phase 5: Product Lifecycle & Payoff Modeling

This phase connects the financial concepts you've learned to the **software systems** that manage structured products. Understanding the lifecycle is essential for building correct, maintainable banking systems.

## Why This Phase Matters for Software Engineers

As a software engineer, you'll implement systems that:
- Track products from birth to death
- Calculate values in real-time
- Process lifecycle events automatically
- Handle edge cases and exceptions
- Integrate with multiple upstream/downstream systems

## Learning Objectives

By the end of this phase, you will understand:
- How products are created and issued
- Daily pricing and valuation processes
- Corporate action handling
- Lifecycle events (coupons, barriers, autocalls, maturity)
- Event-driven architecture patterns for product management

## Topics Covered

1. **Product Issuance** - Creation and launch of new products
2. **Daily Pricing & Valuation** - Real-time and end-of-day pricing
3. **Corporate Actions** - Handling events affecting underlyings
4. **Lifecycle Events** - Processing product-specific events
5. **Event-Driven Architecture** - System design for lifecycle management

## The Product Lifecycle Overview

```
  ┌──────────────────────────────────────────────────────────┐
  │                    PRODUCT LIFECYCLE                      │
  └──────────────────────────────────────────────────────────┘
  
  Design → Issuance → Active Trading → Lifecycle Events → Settlement
    │         │             │                │               │
    ▼         ▼             ▼                ▼               ▼
  Term    Primary      Secondary        Coupons          Final
  Sheet   Market       Market           Barriers         Payoff
  PRIIPs  Launch       Pricing          Autocalls        Settlement
```

## Key Systems Involved

| System | Function |
|--------|----------|
| **Product Master** | Static data, term sheets |
| **Pricing Engine** | Real-time valuations |
| **Market Data** | Price feeds, volatilities |
| **Event Processor** | Lifecycle event handling |
| **Settlement** | Cash/share movement |
| **Risk** | Greeks, VaR, scenarios |
| **Reporting** | Client statements, regulatory |

## The Importance of State Management

Every product has a **state** that changes over its lifetime:

```
States: Draft → Issued → Active → (Autocalled | Matured | Terminated)
```

State transitions trigger:
- Downstream notifications
- Settlement calculations
- P&L recognition
- Client communications
- Regulatory reporting

Understanding state management is critical for building reliable systems.
