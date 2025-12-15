---
id: payoff-diagrams
title: Payoff Diagrams
phase: 2
order: 4
difficulty: Intermediate
---

# Payoff Diagrams

## Overview

**Payoff diagrams** are visual representations of how much money you make or lose at different underlying prices at expiration. They are essential tools for understanding options and structured products.

Once you can read payoff diagrams, you can understand almost any financial product at a glance.

## How to Read Payoff Diagrams

### Axes

```
    Profit/Loss (€)
         ↑
         |
         |
    -----+------------------→ Underlying Price
         |
         |
```

- **X-axis**: Underlying price at expiration
- **Y-axis**: Profit or loss
- **Zero line**: Break-even (no profit, no loss)
- **Above zero**: Profit
- **Below zero**: Loss

### Key Points to Identify

1. **Break-even point(s)**: Where the line crosses zero
2. **Maximum profit**: Highest point on the diagram
3. **Maximum loss**: Lowest point on the diagram
4. **Slope**: How quickly profit/loss changes

## Basic Payoff Diagrams

### 1. Long Call

**View**: Bullish (expect price to rise)

```
P&L
   |            /
   |           /
   |          /
   |         /
 0 +--------+---------→ Price
   |        K
 -P|--------
```

- **K** = Strike price
- **P** = Premium paid
- **Break-even** = K + P
- **Max loss** = P (premium)
- **Max profit** = Unlimited

> **📘 Example:** Buy call with strike €100, premium €5
> - If price = €90: Loss = €5 (max loss)
> - If price = €100: Loss = €5
> - If price = €105: Break-even (€0)
> - If price = €120: Profit = €15

### 2. Short Call

**View**: Bearish/Neutral (expect price to stay below strike)

```
P&L
   |
 +P|--------
   |        \
 0 +--------+---------→ Price
   |         \
   |          \
   |           \
```

- **Max profit** = P (premium received)
- **Max loss** = Unlimited
- **Break-even** = K + P

> **⚠️ Warning:** Short call has unlimited loss potential!

### 3. Long Put

**View**: Bearish (expect price to fall)

```
P&L
   |
   |\
   | \
   |  \
 0 +---+-------------→ Price
   |    K
 -P|---------------
```

- **Break-even** = K - P
- **Max loss** = P (premium)
- **Max profit** = K - P (if price goes to 0)

> **📘 Example:** Buy put with strike €100, premium €4
> - If price = €110: Loss = €4 (max loss)
> - If price = €100: Loss = €4
> - If price = €96: Break-even (€0)
> - If price = €80: Profit = €16

### 4. Short Put

**View**: Bullish/Neutral (expect price to stay above strike)

```
P&L
   |
 +P|---------------
   |    /
 0 +---+--------------→ Price
   |  /K
   | /
   |/
```

- **Max profit** = P (premium received)
- **Max loss** = K - P (if price goes to 0)
- **Break-even** = K - P

## Summary Table

| Position | View | Max Profit | Max Loss | Break-even |
|----------|------|------------|----------|------------|
| Long Call | Bullish | Unlimited | Premium | Strike + Premium |
| Short Call | Bearish | Premium | Unlimited | Strike + Premium |
| Long Put | Bearish | Strike - Premium | Premium | Strike - Premium |
| Short Put | Bullish | Premium | Strike - Premium | Strike - Premium |

## Combining Payoff Diagrams

Complex positions are built by **adding** simple payoff diagrams.

### Example: Bull Call Spread

**Components:**
- Long call at strike K₁ (lower)
- Short call at strike K₂ (higher)

**Individual diagrams:**
```
Long Call (K₁)        Short Call (K₂)
     |      /              |
     |     /             P +------\
     |    /              0 +------+\----
   0 +---/----            |       K₂
   -P|---                 |         \
```

**Combined (add vertically):**
```
P&L
   |        _____
   |       /
 0 +------/-----------→ Price
   |     K₁    K₂
  -P|----
```

- **Max profit** = K₂ - K₁ - Net premium
- **Max loss** = Net premium paid
- **Use case**: Moderately bullish, limited risk

### Example: Straddle

**Components:**
- Long call at strike K
- Long put at same strike K

```
P&L
   |
   |\    /
   | \  /
   |  \/
 0 +--+--+-------------→ Price
   |    K
   |
-2P|
```

- **Max loss** = Total premium (2P)
- **Max profit** = Unlimited in either direction
- **Break-even** = K ± 2P
- **Use case**: Expect big move, unsure of direction

## Structured Product Payoff Diagrams

### Capital Protection Note

**Components:**
- Zero-coupon bond (guarantees principal)
- Long call option (provides upside)

```
P&L
   |              /
   |             /
   |            /
 0 +------+---/---------→ Price
   |      K  /
   |      | /
   |      |/
-5%+------+
```

- Principal protected at maturity (small loss possible due to costs)
- Participation in upside (often less than 100%)

### Discount Certificate

**Components:**
- Long underlying
- Short call (creates the cap)

```
P&L
   |      _____
   |     /
   |    /
   |   /
 0 +--/-----------------→ Price
   | /
   |/
```

- **Discount**: Buy below current price
- **Cap**: Maximum return capped

### Reverse Convertible

**Components:**
- Bond (pays coupon)
- Short put (risk of receiving depreciated shares)

```
P&L
   |
+C +------------------
   |         /
 0 +---------+---------→ Price
   |        /K
   |       /
   |      /
```

- **+C** = Coupon received
- Below strike, losses start
- Risk of receiving shares worth less than investment

### Bonus Certificate

**Components:**
- Long underlying
- Long down-and-out put (barrier protection)

```
P&L (if barrier NOT breached)
   |              /
   |             /
 +B+-----------/
   |         /
 0 +--------K----------→ Price
```

```
P&L (if barrier IS breached)
   |              /
   |             /
   |            /
   |           /
 0 +---------/----------→ Price
   |        /
   |       /
```

- If barrier not breached: Receive at least bonus level
- If barrier breached: Behaves like direct stock investment

## Reading Complex Diagrams

### Step-by-Step Approach

1. **Identify the kinks** - Points where slope changes (usually strikes)
2. **Check the maximum** - Is it capped?
3. **Check the minimum** - Is capital protected?
4. **Find break-even** - Where does it cross zero?
5. **Note any conditions** - Barriers, observations, etc.

> **📘 Example:** Analyzing an unknown product:
> 
> You see this payoff:
> ```
> P&L
>    |      ___
>    |     /
>    |    /
>  0 +---/-------→ Price
>    |  /
>    | /
>    |/
> ```
> 
> **Analysis:**
> - Has a cap (flat top) → Short call component
> - Linear below cap → Long underlying or call
> - No floor → Not capital protected
> - **Conclusion**: Discount Certificate or Capped Call

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Payoff diagrams translate directly to code:

1. **Payoff Functions**
   ```python
   def call_payoff(spot, strike, premium):
       return max(0, spot - strike) - premium
   
   def put_payoff(spot, strike, premium):
       return max(0, strike - spot) - premium
   ```

2. **Scenario Analysis**
   - Generate payoffs across price range
   - Identify key levels (barriers, strikes)
   - Calculate break-evens

3. **Product Validation**
   - Verify payoff logic matches term sheet
   - Test boundary conditions
   - Catch implementation errors

4. **Client Tools**
   - Interactive payoff calculators
   - Risk visualization
   - What-if scenarios

## Common Misconceptions

> **⚠️ Misconception:** "Payoff diagrams show P&L at any time"
> **Reality:** Standard payoff diagrams show P&L **at expiration only**. Before expiry, actual P&L depends on time value and other factors.

> **⚠️ Misconception:** "The highest point is always the best outcome"
> **Reality:** You need to consider probability. A strategy with high max profit but low probability may be worse than moderate, likely profits.

> **⚠️ Misconception:** "You can combine any payoffs"
> **Reality:** Some combinations create arbitrage or are economically impossible. The math must work out correctly.

## Glossary

- **Payoff**: Profit or loss at expiration
- **Strike (K)**: Price at which option can be exercised
- **Premium (P)**: Price paid for option
- **Break-even**: Price where payoff = 0
- **Cap**: Maximum possible profit
- **Floor**: Minimum payoff (capital protection)
- **Kink**: Point where payoff slope changes
- **Spread**: Strategy using multiple options at different strikes
- **Straddle**: Long call and put at same strike

