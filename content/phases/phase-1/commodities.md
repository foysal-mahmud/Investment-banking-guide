---
id: commodities
title: Commodities
phase: 1
order: 4
difficulty: Beginner
---

# Commodities

## Overview

**Commodities** are physical goods that are traded on exchanges or OTC markets. Unlike stocks and bonds (financial assets), commodities are **tangible assets** - you can touch them, store them, and use them.

Commodities serve as underlyings for many structured products, particularly those offering exposure to inflation protection or diversification.

## Types of Commodities

### Precious Metals

**Gold (XAU)**
- Traditional store of value
- Safe haven during market stress
- Used in jewelry and electronics
- Traded in USD per troy ounce

> **📘 Example:** Gold at $2,000/oz. To buy 10 oz: 10 × $2,000 = $20,000

**Silver (XAG)**
- Industrial and precious metal hybrid
- More volatile than gold
- Used in electronics, solar panels, jewelry

**Platinum & Palladium**
- Industrial uses (catalytic converters)
- Much smaller markets than gold

### Energy

**Crude Oil**
| Benchmark | Region | Characteristics |
|-----------|--------|-----------------|
| Brent | North Sea | Global benchmark, seaborne |
| WTI | US | American benchmark, landlocked |

> **📘 Example:** Brent crude at $85/barrel. A futures contract is typically 1,000 barrels = $85,000 notional.

**Natural Gas**
- Regional pricing (US Henry Hub, European TTF)
- Highly seasonal (heating in winter)
- Infrastructure-dependent (pipelines, LNG)

### Agricultural

| Category | Examples |
|----------|----------|
| Grains | Wheat, Corn, Soybeans |
| Softs | Coffee, Sugar, Cocoa, Cotton |
| Livestock | Live Cattle, Lean Hogs |

> **💡 Note:** Agricultural commodities are heavily influenced by weather, seasons, and geopolitics.

### Industrial Metals

| Metal | Primary Use |
|-------|-------------|
| Copper | Construction, electronics |
| Aluminum | Transportation, packaging |
| Zinc | Galvanizing steel |
| Nickel | Stainless steel, batteries |

## Commodity Trading

### Spot Market

Physical delivery at current prices.

> **📘 Example:** Refinery buys 100,000 barrels of Brent crude for immediate delivery at spot price of $85/barrel.

### Futures Market

Standardized contracts for future delivery.

**Why use futures instead of spot?**
- No storage costs
- No physical handling
- Leverage (margin requirements ~5-10%)
- Easy to go long or short

**Major Commodity Exchanges:**
| Exchange | Location | Products |
|----------|----------|----------|
| CME/NYMEX | Chicago/NYC | Oil, Gold, Grains |
| ICE | London/NYC | Brent Oil, Softs |
| LME | London | Industrial metals |
| EUREX | Frankfurt | Limited commodities |

### Futures Contract Specifications

Example: CME Gold Futures

| Specification | Value |
|--------------|-------|
| Contract Size | 100 troy ounces |
| Quote | USD per ounce |
| Tick Size | $0.10 = $10 per contract |
| Delivery Months | Feb, Apr, Jun, Aug, Oct, Dec |
| Settlement | Physical delivery or cash |

> **📘 Example:** Buy 1 gold futures at $2,000/oz
> - Contract value: 100 oz × $2,000 = $200,000
> - Initial margin: ~$10,000 (5%)
> - If gold rises to $2,050: Profit = 100 × $50 = **$5,000** (50% return on margin!)

## Contango and Backwardation

### Futures Curve

Shows prices for different delivery months.

### Contango

**Shape**: Futures price > Spot price (upward sloping curve)

```
Price
  |           ___________
  |        __/
  |     __/
  |  __/
  | /
  |/
  +----------------------→ Delivery Month
    Spot  1M   3M   6M   12M
```

**Why contango occurs:**
- Storage costs (warehousing, insurance)
- Financing costs (cost of capital tied up)
- Normal market condition for storable commodities

> **📘 Example:** Oil spot at $80, 6-month futures at $83. The $3 difference reflects storage and financing costs.

### Backwardation

**Shape**: Futures price < Spot price (downward sloping curve)

```
Price
  |\
  | \__
  |    \__
  |       \__________
  |
  +----------------------→ Delivery Month
    Spot  1M   3M   6M   12M
```

**Why backwardation occurs:**
- Immediate supply shortage
- High convenience yield (benefit of holding physical)
- Often signals supply concerns

> **📘 Example:** During oil supply disruption, spot at $90, 6-month futures at $82. Market expects supply to normalize.

### Roll Yield

When rolling futures contracts:
- **Contango**: Negative roll yield (sell cheap, buy expensive)
- **Backwardation**: Positive roll yield (sell expensive, buy cheap)

> **⚠️ Warning:** Commodity ETFs in contango markets suffer continuous losses from rolling - they may underperform spot significantly over time.

## Commodities in Structured Products

### Gold-Linked Products

Most common commodity in structured products due to:
- High liquidity
- Low storage complexity (paper gold)
- Safe haven appeal to investors

> **📘 Example:** Capital Protected Note on Gold
> - 100% capital protection
> - 80% participation in gold upside
> - 3-year term
> - Investor wins if gold rises, protected if gold falls

### Oil-Linked Products

Less common due to:
- Contango drag reduces returns
- High volatility
- More complex for retail investors

> **📘 Example:** Oil Range Accrual
> - Pays 6% coupon if Brent stays in $70-$100 range
> - No coupon for days outside range

### Commodity Baskets

Diversified exposure across multiple commodities.

> **📘 Example:** Commodity Basket Certificate
> - 40% Gold
> - 30% Oil
> - 20% Copper
> - 10% Wheat
> - Diversification reduces single-commodity risk

## Commodity Indices

### Bloomberg Commodity Index (BCOM)

Diversified commodity benchmark.

| Sector | Weight |
|--------|--------|
| Energy | ~30% |
| Agriculture | ~30% |
| Precious Metals | ~15% |
| Industrial Metals | ~15% |
| Livestock | ~10% |

### S&P GSCI

Goldman Sachs Commodity Index - heavily weighted toward energy.

### Key Index Characteristics

| Index | Energy Weight | Rolling | Diversification |
|-------|--------------|---------|-----------------|
| BCOM | ~30% | Monthly | High |
| S&P GSCI | ~60% | Monthly | Lower |

## German/European Context

### Physical Trading Hubs

| Commodity | European Hub |
|-----------|-------------|
| Natural Gas | TTF (Netherlands) |
| Power | EEX (Leipzig) |
| Emissions | EEX (CO2 allowances) |

### EEX (European Energy Exchange)

Leipzig-based exchange for:
- Power futures
- Natural gas
- Emissions allowances (EU ETS)
- Agricultural products

> **📘 Example:** German utility hedging 2024 power prices on EEX power futures to lock in costs.

### Carbon Credits (EU ETS)

**EU Emissions Trading System** - cap-and-trade for CO2

> **💡 Note:** Carbon credits have become an investable asset class. Prices rose from €25 to €100+ per tonne between 2020-2023.

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Commodity systems present unique challenges:

1. **Futures Roll Management**
   - Automatic contract rolling before expiry
   - Roll optimization (timing, contracts)
   - Index roll methodology implementation

2. **Physical vs Financial**
   - Different settlement procedures
   - Delivery location specifications
   - Quality grades and adjustments

3. **Curve Building**
   - Constructing forward curves from sparse data
   - Interpolation between delivery months
   - Seasonal adjustments

4. **Special Data Handling**
   - Contract month naming conventions (F=Jan, G=Feb, H=Mar...)
   - Multiple price sources
   - Settlement price calculations

## Common Misconceptions

> **⚠️ Misconception:** "Buying a commodity ETF is like owning the physical commodity"
> **Reality:** Commodity ETFs hold futures, not physical goods. Contango can cause significant performance drag vs spot prices.

> **⚠️ Misconception:** "Gold always goes up in crises"
> **Reality:** In 2008, gold initially fell with everything else before rallying. It's not a perfect hedge.

> **⚠️ Misconception:** "Oil prices are manipulated by OPEC"
> **Reality:** While OPEC influences supply, prices ultimately reflect global supply/demand. OPEC's market share has declined significantly.

## Glossary

- **Spot Price**: Current price for immediate delivery
- **Futures Price**: Price for delivery at a future date
- **Contango**: Futures > Spot (upward sloping curve)
- **Backwardation**: Futures < Spot (downward sloping curve)
- **Roll Yield**: Return from rolling expiring contracts
- **Convenience Yield**: Benefit of holding physical commodity
- **Troy Ounce**: Unit for precious metals (31.1 grams)
- **Barrel**: Unit for oil (159 liters)
- **TTF**: Title Transfer Facility - European gas benchmark

