---
id: corporate-actions
title: Corporate Actions
phase: 5
order: 3
difficulty: Intermediate
---

# Corporate Actions

## Overview

**Corporate actions** are events initiated by a company that affect its securities. For structured products, these events require adjustments to maintain the economic equivalence of the product before and after the event.

Handling corporate actions correctly is critical - errors can result in significant financial losses and client complaints.

## Types of Corporate Actions

### Dividends

**Cash dividends** reduce the stock price by the dividend amount on the ex-date.

> **📘 Example:** Siemens dividend
> - Dividend: €4.25 per share
> - Ex-date: February 1
> - Stock price February 1: Falls by ~€4.25

**Impact on structured products:**
- Forward prices already incorporate expected dividends
- Unexpected dividend changes require adjustment
- Barrier levels may need adjustment

### Stock Splits

**Splits** divide existing shares into multiple shares.

> **📘 Example:** 2-for-1 split
> - Before: 100 shares at €200 = €20,000
> - After: 200 shares at €100 = €20,000

**Product adjustments:**
| Parameter | Before Split | After 2:1 Split |
|-----------|--------------|-----------------|
| Strike | €180 | €90 |
| Barrier | €120 | €60 |
| Ratio | 0.01 | 0.02 |
| Number of shares | 100 | 200 |

### Reverse Splits

**Consolidate** multiple shares into fewer shares.

> **📘 Example:** 1-for-10 reverse split
> - Before: 1,000 shares at €1 = €1,000
> - After: 100 shares at €10 = €1,000

### Rights Issues

Company offers existing shareholders the right to buy new shares at a discount.

**Adjustment required:**
- Calculate the theoretical ex-rights price
- Adjust strikes/barriers proportionally

> **📘 Example:** Rights issue adjustment
> - Price before: €100
> - Rights price: €80
> - Rights ratio: 1:4 (1 new for every 4 held)
> - Theoretical ex-rights price: (4×100 + 80) / 5 = €96
> - Adjustment factor: 100/96 = 1.0417

### Mergers & Acquisitions

**M&A events** can fundamentally change the underlying.

| Scenario | Impact |
|----------|--------|
| Cash acquisition | Underlying replaced with cash |
| Stock acquisition | Underlying replaced with acquirer stock |
| Mixed | Combination of cash and stock |

### Spin-offs

Company separates a division into a new independent company.

> **📘 Example:** Siemens spins off Siemens Energy
> - Original product on Siemens AG
> - After spin-off: Product on Siemens AG + Siemens Energy basket

### Capital Returns

Special dividends or share buybacks.

## The Corporate Action Process

### Detection

```
Sources:
┌─────────────────┐
│ Bloomberg       │───┐
│ Reuters         │   │
│ Exchange feeds  │───┼──► Corporate Action
│ Issuer website  │   │    Database
│ Depository      │───┘
└─────────────────┘
```

### Notification Timeline

| Day | Activity |
|-----|----------|
| T-30 to T-7 | Announcement |
| T-5 | Product team notified |
| T-3 | Adjustment calculated |
| T-1 | Client notification |
| T (Ex-date) | Adjustments applied |

### Calculation

**Adjustment factor (R):**
```
R = Price before / Price after (theoretical)
```

**Apply to product parameters:**
```
New Strike = Old Strike / R
New Barrier = Old Barrier / R
New Ratio = Old Ratio × R
```

### Verification

- Independent recalculation
- Four-eyes principle
- Comparison with market practice
- Issuer confirmation

## Adjustment Methods

### Standard (Ratio) Method

Most common for splits, rights issues.

| Parameter | Adjustment |
|-----------|------------|
| Strike | Divide by R |
| Barrier | Divide by R |
| Ratio | Multiply by R |
| Number of shares | Multiply by R |

### Replacement Method

For M&A, spin-offs - underlying changes completely.

| Before | After |
|--------|-------|
| Stock A | Stock B (acquirer) |
| Strike €100 | Strike converted using exchange ratio |

### Cash Settlement

If underlying ceases to exist (cash acquisition).

| Scenario | Settlement |
|----------|-----------|
| Above strike | Cash value of ITM amount |
| Below strike | Zero value |

## Index Corporate Actions

### Index Changes

DAX components change quarterly:
- Additions
- Deletions
- Weight changes

**Impact on products:**
- Index-linked products: No adjustment (index methodology handles it)
- Basket products: May require rebalancing

### Index Calculation Changes

Rare but significant:
- DAX expanded from 30 to 40 stocks (2021)
- Required communication to clients
- Historical comparisons affected

## Challenges

### Timing

| Challenge | Risk |
|-----------|------|
| Late detection | Missed adjustment window |
| Market closure | Can't adjust prices |
| Multiple time zones | Coordination complexity |

### Interpretation

| Challenge | Risk |
|-----------|------|
| Ambiguous terms | Different calculations possible |
| Multiple events | Sequence matters |
| Tax implications | Gross vs net dividends |

### System Integration

| Challenge | Risk |
|-----------|------|
| Master data update | Downstream systems out of sync |
| Historical data | Charts/analytics incorrect |
| Position reconciliation | Breaks after adjustment |

## Real-World Example: Complex Event

**Scenario: Spin-off + Special Dividend**

> **📘 Example:** Company A spins off Division B and pays €5 special dividend
> 
> **Before:**
> - Company A price: €100
> - Product strike: €90
> 
> **Spin-off adjustment:**
> - Division B value: €20
> - Company A ex-spinoff: €80
> - Adjustment factor: 100/80 = 1.25
> 
> **Special dividend adjustment:**
> - Company A after dividend: €75
> - Additional factor: 80/75 = 1.067
> 
> **Combined factor:** 1.25 × 1.067 = 1.333
> **New strike:** 90 / 1.333 = **€67.50**

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Corporate action systems require:

1. **Event Detection**
   - Multiple source integration
   - Deduplication
   - Validation

2. **Calculation Engine**
   - Flexible for different event types
   - Auditabile calculation steps
   - Exception handling

3. **Mass Update**
   - Apply to thousands of products
   - Atomic transactions
   - Rollback capability

4. **Notification**
   - Client communication
   - Regulatory reporting
   - Internal alerts

## System Design

### Event Processor Architecture

```
┌─────────────────────────────────────────┐
│         CORPORATE ACTION SYSTEM         │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────┐    ┌──────────────┐      │
│  │  Event   │───►│ Calculation  │      │
│  │  Input   │    │    Engine    │      │
│  └──────────┘    └──────┬───────┘      │
│                         │              │
│                         ▼              │
│  ┌──────────┐    ┌──────────────┐      │
│  │ Product  │◄───│  Adjustment  │      │
│  │ Master   │    │   Service    │      │
│  └──────────┘    └──────┬───────┘      │
│                         │              │
│                         ▼              │
│                  ┌──────────────┐      │
│                  │ Notification │      │
│                  │   Service    │      │
│                  └──────────────┘      │
└─────────────────────────────────────────┘
```

## Glossary

- **Ex-Date**: Date after which buyers don't receive the corporate action benefit
- **Record Date**: Date determining who is entitled to the corporate action
- **Pay Date**: Date when cash/shares are distributed
- **Adjustment Factor**: Multiplier used to modify product parameters
- **Spin-off**: Separation of company division into new entity
- **Rights Issue**: Offer to buy new shares at discount
- **Dilution**: Reduction in existing shareholder percentage ownership
- **Theoretical Price**: Calculated fair value after corporate action

