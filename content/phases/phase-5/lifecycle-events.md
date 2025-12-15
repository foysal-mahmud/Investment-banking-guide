---
id: lifecycle-events
title: Lifecycle Events
phase: 5
order: 4
difficulty: Intermediate
---

# Lifecycle Events

## Overview

**Lifecycle events** are predefined occurrences during a structured product's life that trigger specific actions. These include coupon fixings, barrier observations, autocall checks, and maturity processing.

Processing lifecycle events correctly and on time is critical for maintaining client trust and regulatory compliance.

## Types of Lifecycle Events

### 1. Coupon Fixing

Determines if coupon is paid and at what rate.

> **📘 Example:** Autocallable coupon fixing
> - Observation date: March 15, 2025
> - Fixing time: Xetra close
> - DAX level: 16,800
> - Coupon trigger: 16,500 (100%)
> - **Result**: Coupon triggered (16,800 > 16,500)
> - Coupon: 8% × €10,000 = €800

### 2. Barrier Observation

Checks if barrier has been breached.

| Type | Frequency | Impact |
|------|-----------|--------|
| Continuous | Every tick | Immediate termination/loss of protection |
| Daily close | Once per day | Less stringent |
| At expiry | Once | No path dependency |

> **📘 Example:** Continuous barrier monitoring
> - Barrier: 12,000
> - Intraday low: 11,950
> - **Result**: Barrier breached permanently

### 3. Autocall Observation

Determines if product redeems early.

> **📘 Example:** Annual autocall check
> - Observation date: January 15
> - Fixing: DAX closing level
> - Autocall trigger: 100% (16,500)
> - Observed level: 16,800
> - **Result**: Autocall triggered, product terminates

### 4. Maturity/Final Settlement

End of product life with final payoff calculation.

**Process:**
1. Final fixing observation
2. Payoff calculation
3. Settlement amount determination
4. Cash/share delivery

### 5. Knock-Out Event

Immediate termination when barrier touched.

**Processing:**
1. Detect breach (real-time)
2. Record breach price and time
3. Calculate residual value (if any)
4. Terminate product
5. Process settlement
6. Notify clients

## The Event Processing Pipeline

```
Event Schedule
      │
      ▼
┌──────────────┐
│  Event Due   │
│   Check      │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Market      │
│  Data Fetch  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Condition   │
│  Evaluation  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Action      │
│  Execution   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Settlement  │
│  Processing  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Notification │
└──────────────┘
```

## Event Timing

### Observation Date vs. Payment Date

| Event | Observation | Payment |
|-------|-------------|---------|
| Coupon | March 15 | March 20 (T+5) |
| Autocall | March 15 | March 22 (T+7) |
| Maturity | March 15 | March 20 (T+5) |

> **💡 Note:** The lag between observation and payment allows for:
> - Verification of fixing
> - Settlement processing
> - Client notification
> - Banking system cutoffs

### Time Zone Handling

| Underlying | Fixing Time | Time Zone |
|------------|-------------|-----------|
| DAX | 17:30 | CET |
| EURO STOXX 50 | 18:00 | CET |
| S&P 500 | 16:00 | EST |
| Nikkei | 15:00 | JST |

**Challenge:** Multi-underlying products may have fixings at different times.

## Coupon Memory Feature

### How Memory Works

If coupon is missed, it accumulates and pays when conditions are met.

> **📘 Example:** Memory coupon accumulation
> 
> | Year | DAX Level | Coupon Due | Paid | Memory |
> |------|-----------|------------|------|--------|
> | 1 | 95% | 8% | No | 8% |
> | 2 | 92% | 8% | No | 16% |
> | 3 | 105% | 8% | Yes | 0% |
> 
> **Year 3 payout**: 8% (Y3) + 16% (memory) = **24%**

### Memory Logic

```python
def calculate_coupon(observation, trigger, coupon_rate, memory_balance):
    if observation >= trigger:
        payout = coupon_rate + memory_balance
        new_memory = 0
    else:
        payout = 0
        new_memory = memory_balance + coupon_rate
    return payout, new_memory
```

## Barrier Monitoring

### Continuous Monitoring System

```
Market Data Feed
       │
       ▼
┌──────────────┐
│  Filter by   │
│  Products    │
└──────┬───────┘
       │ (relevant ticks only)
       ▼
┌──────────────┐
│  Compare to  │
│  Barrier     │
└──────┬───────┘
       │
       ├──── Not breached → Continue monitoring
       │
       ▼
┌──────────────┐
│  BREACH!     │
│  Record      │
│  timestamp   │
└──────┬───────┘
       │
       ▼
  Trigger knockout processing
```

### Near-Barrier Alerts

Products approaching barriers need attention:

| Distance to Barrier | Alert Level |
|---------------------|-------------|
| > 10% | Normal |
| 5-10% | Elevated |
| 2-5% | High |
| < 2% | Critical |

## Maturity Processing

### Final Payoff Scenarios

**Autocallable at maturity:**

| Scenario | Condition | Payoff |
|----------|-----------|--------|
| Above trigger | Final ≥ 100% | 100% + coupon |
| Between trigger and barrier | 60% ≤ Final < 100% | 100% (principal only) |
| Below barrier (breached) | Final < 60% | Final level % |

### Settlement Calculation

```python
def calculate_maturity_payoff(final_level, initial_level, barrier, 
                               trigger, coupon, barrier_breached):
    percentage = final_level / initial_level
    
    if percentage >= trigger:
        return 1.0 + coupon  # 100% + coupon
    elif not barrier_breached:
        return 1.0  # Principal protected
    else:
        return percentage  # Loss if barrier breached
```

## Error Handling

### Common Issues

| Issue | Cause | Mitigation |
|-------|-------|------------|
| Missing market data | Feed failure | Multiple sources, fallback |
| Incorrect fixing | Data error | Verification process |
| Missed event | System failure | Catch-up processing |
| Duplicate processing | Race condition | Idempotency checks |

### Event Reconciliation

Daily reconciliation checks:
1. All due events processed?
2. Market data matches external sources?
3. Calculations verified?
4. Settlements initiated?

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Event processing requires:

1. **Scheduling**
   - Complex date logic (business days, holidays)
   - Time zone handling
   - Event dependencies

2. **Real-Time Processing**
   - Barrier monitoring (millisecond latency)
   - Market data integration
   - Alert mechanisms

3. **State Management**
   - Product state transitions
   - Event history
   - Audit trails

4. **Reliability**
   - No missed events
   - Idempotency
   - Disaster recovery

## System Design Patterns

### Event Sourcing

Store all events as immutable facts:

```
ProductCreated(ISIN, terms...)
BarrierBreached(ISIN, timestamp, level)
CouponFixed(ISIN, date, rate)
Autocalled(ISIN, date, payout)
```

### State Machine

Model product lifecycle as states:

```
         ┌──────────────────────────────┐
         │                              │
         ▼                              │
     ┌───────┐    ┌────────┐    ┌──────────┐
     │ ISSUED│───►│ ACTIVE │───►│ MATURED  │
     └───────┘    └────┬───┘    └──────────┘
                       │              ▲
                       │              │
                       ▼              │
                 ┌──────────┐        │
                 │AUTOCALLED├────────┘
                 └──────────┘
```

## Glossary

- **Fixing**: Official price observation for event evaluation
- **Observation Date**: Date when conditions are checked
- **Payment Date**: Date when cash/shares are delivered
- **Memory Coupon**: Missed coupons that accumulate
- **Barrier Breach**: Underlying touching barrier level
- **Autocall**: Early redemption when trigger is hit
- **Final Settlement**: End-of-life payoff calculation
- **Idempotency**: Processing same event twice gives same result
- **State Machine**: Model defining valid state transitions

