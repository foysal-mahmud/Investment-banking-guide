---
id: equities
title: Equities (Stocks & Indices)
phase: 1
order: 1
difficulty: Beginner
---

# Equities (Stocks & Indices)

## Overview

**Equities** represent ownership shares in companies. When you buy a stock, you become a part-owner of that company, entitled to a share of its profits (dividends) and voting rights at shareholder meetings.

Equities are the most common underlying for structured products in Germany. Understanding how stocks work and how indices are constructed is fundamental to understanding products built on them.

## Types of Equity Securities

### Common Stock (Stammaktien)

The most basic form of equity ownership.

**Characteristics:**
- **Voting rights**: One share = one vote (typically)
- **Dividend rights**: Receive dividends when declared
- **Residual claim**: Last in line during liquidation (after bondholders)
- **Price appreciation**: Unlimited upside potential

> **📘 Example:** Siemens AG common stock (ISIN: DE0007236101) trades on Xetra. Owning 100 shares gives you voting rights at Siemens' annual shareholder meeting and entitles you to dividends.

### Preferred Stock (Vorzugsaktien)

A hybrid between stocks and bonds.

**Characteristics:**
- **No voting rights** (typically)
- **Fixed dividend**: Paid before common stockholders
- **Priority in liquidation**: Paid before common stockholders
- **Less price appreciation**: More stable but limited upside

> **📘 Example:** Volkswagen has both common stock (VOW3.DE) and preferred stock (VOW.DE). The preferred shares pay higher dividends but have no voting rights - the Porsche/Piëch families maintain control through common shares.

## Key Equity Metrics

### Market Capitalization

The total market value of a company's outstanding shares.

**Formula:**
```
Market Cap = Share Price × Number of Outstanding Shares
```

**Classification:**
| Category | Market Cap (Germany) |
|----------|---------------------|
| Large Cap | > €10 billion (DAX companies) |
| Mid Cap | €2-10 billion (MDAX companies) |
| Small Cap | < €2 billion (SDAX companies) |

> **📘 Example:** SAP SE with ~1.2 billion shares at €150/share = ~€180 billion market cap (Germany's largest company by market cap).

### Price-to-Earnings Ratio (P/E)

Measures how expensive a stock is relative to its earnings.

**Formula:**
```
P/E Ratio = Share Price ÷ Earnings Per Share (EPS)
```

**Interpretation:**
- **High P/E (>25)**: Investors expect high future growth
- **Average P/E (15-25)**: Normal valuation
- **Low P/E (<15)**: Undervalued or low growth expectations

> **📘 Example:** A tech company with P/E of 40 is expected to grow rapidly. A utility company with P/E of 12 is considered a stable, mature business.

### Dividend Yield

Annual dividend income as a percentage of stock price.

**Formula:**
```
Dividend Yield = Annual Dividend Per Share ÷ Share Price × 100
```

> **📘 Example:** Allianz pays €11.40 annual dividend with share price of €240. Dividend Yield = 11.40/240 × 100 = **4.75%**

## Stock Indices

An **index** is a basket of stocks designed to represent a market or sector. Indices are crucial because most structured products use indices (not individual stocks) as underlyings.

### DAX (Deutscher Aktienindex)

Germany's flagship index.

**Specifications:**
| Attribute | Value |
|-----------|-------|
| Components | 40 stocks (expanded from 30 in 2021) |
| Weighting | Free-float market cap weighted |
| Type | Performance index (includes dividends) |
| Base Value | 1,000 (Dec 30, 1987) |
| Currency | EUR |
| Trading Hours | 9:00-17:30 CET (Xetra) |

**Top 10 Components (example):**
1. SAP SE (Software)
2. Siemens AG (Industrial)
3. Allianz SE (Insurance)
4. Deutsche Telekom (Telecom)
5. Airbus SE (Aerospace)
6. BASF SE (Chemicals)
7. Mercedes-Benz Group (Automotive)
8. Munich Re (Reinsurance)
9. Deutsche Post (Logistics)
10. BMW AG (Automotive)

> **💡 Note:** DAX is a **performance index**, meaning dividends are reinvested. This is why DAX levels appear higher compared to price indices like the EURO STOXX 50.

### EURO STOXX 50

The eurozone's blue-chip index.

**Specifications:**
| Attribute | Value |
|-----------|-------|
| Components | 50 stocks |
| Countries | Eurozone countries |
| Weighting | Free-float market cap weighted |
| Type | Price index |
| Currency | EUR |

**Key difference from DAX**: EURO STOXX 50 is a **price index** - it doesn't include dividend reinvestment, so comparing DAX vs EURO STOXX 50 levels directly is misleading.

### Other Important Indices

| Index | Market | Components |
|-------|--------|------------|
| MDAX | Germany Mid-Cap | 50 stocks |
| SDAX | Germany Small-Cap | 70 stocks |
| TecDAX | Germany Technology | 30 stocks |
| SMI | Switzerland | 20 stocks |
| CAC 40 | France | 40 stocks |
| FTSE 100 | UK | 100 stocks |

## Index Calculation

### Free-Float Market Cap Weighting

Most modern indices use **free-float market cap weighting**, meaning each stock's weight depends on its publicly tradable shares.

**Formula:**
```
Index Level = (Σ Price_i × Free-Float Shares_i × Weight Factor_i) ÷ Divisor
```

> **📘 Example:** If SAP represents 10% of DAX, and SAP rises 5%, DAX rises approximately 0.5% (assuming other stocks unchanged).

### Index Rebalancing

Indices are periodically rebalanced to maintain accuracy:
- **DAX**: Quarterly review (March, June, September, December)
- **Additions/Removals**: Based on market cap and liquidity criteria
- **Weight caps**: Many indices cap single-stock weight (e.g., 10%)

> **⚠️ Warning:** Index rebalancing can cause significant price movements as index funds buy/sell to match new composition.

## Corporate Actions

Events that affect stock prices and require adjustments in products.

### Dividends

**Ex-Dividend Date**: The date after which buyers don't receive the dividend.

> **📘 Example:** Siemens announces €4.25 dividend with ex-date May 15. On May 15, Siemens stock price typically drops by approximately €4.25.

**Impact on Structured Products:**
- Products must account for expected dividends in pricing
- Barrier levels may be adjusted for dividends
- Autocall triggers consider ex-dividend drops

### Stock Splits

Company divides existing shares into multiple shares.

> **📘 Example:** NVIDIA 10-for-1 split: 1 share at $1,200 becomes 10 shares at $120 each. Total value unchanged.

**Impact on Products:**
- Strike prices adjusted proportionally
- Number of underlying shares multiplied
- Barrier levels adjusted

### Rights Issues

Company offers existing shareholders the right to buy new shares at a discount.

**Impact:**
- Dilutes existing shareholdings
- Structured products need ratio adjustments

## Why Software Engineers Should Understand This

> **💡 Key Insight:** When building equity-related systems, you handle:

1. **Reference Data Management**
   - ISIN/WKN codes, ticker symbols
   - Corporate action calendars
   - Dividend schedules

2. **Market Data Processing**
   - Real-time price feeds from exchanges
   - Historical data storage and retrieval
   - Index composition tracking

3. **Corporate Action Processing**
   - Adjusting product parameters for dividends/splits
   - Recalculating barriers and strikes
   - Notifying downstream systems

4. **Index Calculation**
   - Weighting methodologies
   - Rebalancing logic
   - Performance attribution

## Common Misconceptions

> **⚠️ Misconception:** "Higher stock price means better company"
> **Reality:** Price alone is meaningless without knowing shares outstanding. A €1,000 stock isn't "better" than a €10 stock - look at market cap, P/E, and fundamentals.

> **⚠️ Misconception:** "DAX and EURO STOXX 50 can be directly compared"
> **Reality:** DAX includes dividends (performance index), EURO STOXX 50 doesn't (price index). Comparing them directly is like comparing apples to oranges.

> **⚠️ Misconception:** "Index funds perfectly track indices"
> **Reality:** Tracking error exists due to fees, cash drag, and rebalancing timing.

## Glossary

- **ISIN**: International Securities Identification Number - 12-character unique identifier
- **WKN**: Wertpapierkennnummer - 6-character German security identifier
- **Free Float**: Shares available for public trading (excludes insider holdings)
- **Ex-Dividend**: Date after which new buyers don't receive declared dividend
- **Market Cap**: Total value of company's outstanding shares
- **Blue Chip**: Large, well-established, financially stable company

