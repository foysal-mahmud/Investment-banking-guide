---
id: bonus-certificates
title: Bonus Certificates
phase: 4
order: 3
difficulty: Intermediate
---

# Bonus Certificates

## Overview

**Bonus Certificates** guarantee a minimum payment (the "bonus") at maturity, as long as the underlying never touches a predefined barrier during the product's life. They are designed for investors who expect sideways to moderately positive markets but want protection against moderate declines.

If the barrier is breached, the bonus is lost and the product behaves like a direct investment.

## How Bonus Certificates Work

### The Basic Structure

A bonus certificate combines:
1. **Long underlying** (or synthetic position)
2. **Long down-and-out put option** (barrier protection)

```
Bonus Certificate = Underlying + Down-and-Out Put at Barrier
```

### The Protection Mechanism

The down-and-out put provides a floor at the bonus level, BUT only if the barrier is never touched.

> **📘 Example:**
> - DAX: 16,000
> - Barrier: 12,000 (25% below)
> - Bonus level: 17,600 (10% above)
> 
> **If barrier never touched:**
> - Minimum payout: 17,600 (even if DAX ends at 15,000)
> 
> **If barrier touched (even once):**
> - No bonus, receive DAX level at expiry

### Payoff Diagram

**Barrier NOT breached:**
```
Payout
   |          /
   |         /
   | Bonus--+------
   |       /
   +------/-----------→ Underlying
        Barrier
```

**Barrier breached:**
```
Payout
   |          /
   |         /
   |        /
   |       /
   +------/-----------→ Underlying
        Barrier
```

## Key Terms

### Barrier (Barriere)

Price level that, if touched, removes the bonus protection.
- Typically 15-40% below starting level
- Monitored continuously during trading hours
- One touch = game over

### Bonus Level (Bonuslevel)

Minimum payout if barrier is not breached.
- Usually 5-15% above starting level
- Guaranteed payout at maturity (if barrier holds)

### Buffer

The distance between current price and barrier.

```
Buffer = (Current Price - Barrier) / Current Price × 100%
```

### Bonus Return

Return if barrier holds and underlying ends below bonus level.

```
Bonus Return = (Bonus Level - Purchase Price) / Purchase Price × 100%
```

## Product Example

### DAX Bonus Certificate

| Specification | Value |
|--------------|-------|
| Underlying | DAX |
| Current DAX | 16,000 |
| Barrier | 12,800 (20% buffer) |
| Bonus Level | 17,600 |
| Certificate Price | €163.00 |
| Ratio | 0.01 |
| Term | 18 months |

**Calculations:**
- DAX equivalent: 16,000 × 0.01 = €160
- Premium paid: €163 - €160 = €3 (for bonus protection)
- Bonus payout: 17,600 × 0.01 = €176
- Bonus return: (176-163)/163 = **8.0%**
- Buffer: 20%

### Scenarios at Maturity

| DAX Path | DAX at Expiry | Payout | Return |
|----------|--------------|--------|--------|
| Never below 12,800 | 18,000 | €180 | +10.4% |
| Never below 12,800 | 17,000 | €176 (bonus) | +8.0% |
| Never below 12,800 | 14,000 | €176 (bonus) | +8.0% |
| Never below 12,800 | 13,000 | €176 (bonus) | +8.0% |
| Touched 12,800 once | 18,000 | €180 | +10.4% |
| Touched 12,800 once | 16,000 | €160 | -1.8% |
| Touched 12,800 once | 13,000 | €130 | -20.2% |

> **💡 Key insight:** The bonus only matters when DAX ends **below** 17,600. Above that, barrier breach is irrelevant.

## Barrier Types

### Continuous Observation (European Style)

- Barrier monitored throughout the entire term
- One intraday touch = breach
- Most common type

### Close-Only (American Style)

- Only daily closing prices count
- Intraday touches don't breach
- Less common, more expensive

### Expiry-Only (European)

- Only final price matters
- No path dependency
- Essentially a different product structure

## The Path Dependency Problem

### Why Path Matters

> **📘 Example:** Same ending, different outcomes
> 
> **Investor A:**
> - DAX: 16,000 → 13,000 → 15,000 → 16,000
> - Never touched 12,800 barrier
> - Receives bonus: €176
> 
> **Investor B:**
> - DAX: 16,000 → 12,700 → 15,000 → 16,000
> - Touched 12,700 < 12,800 barrier
> - Receives DAX level: €160
> - **Lost €16 despite same ending!**

### Volatility Impact

High volatility increases barrier breach probability:
- More price swings = more chances to touch barrier
- Even if long-term trend is sideways
- Products cheaper in high volatility (barrier risk higher)

## Capped vs Uncapped Bonus

### Uncapped Bonus

- Participate fully in upside above bonus level
- Higher premium
- Better if very bullish

### Capped Bonus

- Maximum return capped above bonus level
- Lower cost
- Better if moderately bullish

> **📘 Example:** Capped bonus with €180 cap
> - If DAX at 20,000: Receive €180 (not €200)
> - Cap provides additional cushion for bonus financing

## When to Use Bonus Certificates

### Ideal Market Conditions

1. **Sideways market**: Bonus return without needing rally
2. **Moderate volatility**: Lower breach probability
3. **Mild bullish**: Benefit from upside participation
4. **No crash expected**: Barrier breach is total loss of bonus

### Less Ideal Conditions

1. **High volatility**: Too risky, barrier likely to be touched
2. **Strong trend (either direction)**: Direct investment or discount cert better
3. **Near important support levels**: Barrier might be tested

## Risks

### 1. Barrier Breach

- Loses ALL bonus protection instantly
- No partial protection
- Even momentary touch counts (continuous)

### 2. Gap Risk

- Market can gap through barrier overnight
- No time to react
- Barrier breached at worse price than barrier

### 3. Dividend Risk

- Dividends reduce underlying value
- Increases breach probability
- Barrier may need to be higher for dividend stocks

### 4. Premium Loss

- If barrier breached, you paid premium for nothing
- Underperforms direct investment

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Bonus certificate systems require:

1. **Continuous Barrier Monitoring**
   - Tick-by-tick price checking
   - Real-time breach detection
   - Alert mechanisms

2. **Path-Dependent Pricing**
   - Monte Carlo simulation
   - Barrier option models
   - Volatility surface integration

3. **Event Processing**
   - Breach notification
   - Product state updates
   - Client communication

4. **Risk Management**
   - Gamma/vega exposure near barrier
   - Scenario analysis
   - Hedge adjustments

## Common Misconceptions

> **⚠️ Misconception:** "The barrier is like a stop-loss"
> **Reality:** A stop-loss exits the position. Barrier breach just removes bonus protection - you still hold the position.

> **⚠️ Misconception:** "If barrier is never touched, I get the bonus level"
> **Reality:** You get the HIGHER of bonus level or underlying level. If underlying exceeds bonus, you get underlying.

> **⚠️ Misconception:** "Close-to-barrier products offer higher returns"
> **Reality:** Higher bonus return, yes, but MUCH higher probability of breach. Risk-adjusted return may be worse.

> **⚠️ Misconception:** "Barrier breach is recoverable"
> **Reality:** Once breached, bonus is permanently lost. Even if underlying recovers, you only get underlying level.

## Glossary

- **Bonus Level (Bonuslevel)**: Minimum guaranteed payout if barrier not breached
- **Barrier (Barriere)**: Price level that terminates bonus protection
- **Buffer (Puffer)**: Distance between spot and barrier as percentage
- **Down-and-Out Put**: Put option that becomes worthless if barrier touched
- **Path Dependent**: Outcome depends on entire price path, not just final level
- **Continuous Observation**: Barrier checked at every tick
- **Close-Only**: Barrier only checked at daily close
- **Capped Bonus**: Maximum return limited above bonus level

