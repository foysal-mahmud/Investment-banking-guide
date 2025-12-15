---
id: transparency
title: Transparency Requirements
phase: 7
order: 4
difficulty: Intermediate
---

# Transparency Requirements

## Overview

**Transparency** in financial markets means making information about prices, trades, and costs visible to market participants and regulators. EU regulations require extensive disclosure to ensure fair, efficient markets.

For software engineers, transparency requirements drive significant reporting infrastructure.

## Types of Transparency

### Pre-Trade Transparency

Information available **before** trading:
- Bid/ask prices
- Order depth
- Indicative prices

### Post-Trade Transparency

Information published **after** trading:
- Executed prices
- Trade sizes
- Counterparty types (anonymized)

## MiFID II/MiFIR Transparency

### Trading Venue Requirements

| Venue Type | Pre-Trade | Post-Trade |
|------------|-----------|------------|
| Regulated Market | Yes | Yes |
| MTF | Yes | Yes |
| OTF | Varies | Yes |
| Systematic Internaliser | Yes (for liquid) | Yes |

### What Must Be Published

**Pre-trade (order book):**
```
Instrument: DAX Discount Certificate
─────────────────────────────────
Bid          │         Ask
─────────────│─────────────────
€152.00 (50) │ €152.20 (100)
€151.95 (100)│ €152.25 (200)
€151.90 (75) │ €152.30 (150)
```

**Post-trade (executed):**
```
Time: 14:32:45
Instrument: DE000TB12345
Price: €152.15
Size: 75
Venue: XETR
```

## Transaction Reporting

### MiFIR Article 26

All transactions must be reported to NCAs (National Competent Authorities):

| Field | Description |
|-------|-------------|
| LEI | Legal Entity Identifier |
| ISIN | Instrument identifier |
| Price | Execution price |
| Quantity | Trade size |
| Date/Time | Precise timestamp |
| Venue | Execution venue MIC |
| Buyer/Seller | Client identifiers |
| Decision maker | Who decided to trade |
| Algo indicator | If algorithm involved |

### Reporting Timeline

**T+1**: Report by end of next working day

### Report Submission

```
Bank Systems
     │
     ▼
┌──────────────┐
│   Internal   │
│   Capture    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│     ARM      │ (Approved Reporting Mechanism)
│   (e.g.,     │
│   Unavista)  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│     NCA      │ (e.g., BaFin)
│              │
└──────────────┘
```

## Best Execution Reporting

### RTS 28 Reports

Annual disclosure of top 5 execution venues by asset class:

| Asset Class | Venue 1 | Venue 2 | Venue 3 |
|-------------|---------|---------|---------|
| Equities | XETR 45% | XLON 25% | XPAR 15% |
| ETPs | XSTU 50% | XETR 30% | XFRA 10% |
| Structured | XSTU 60% | Internal 25% | XETR 15% |

### Information to Publish

For each venue:
- Percentage of volume
- Percentage of orders
- Close links (if any)
- Conflicts of interest (if any)
- Payment for order flow

## Cost Disclosure

### Ex-Ante (Before Transaction)

Before a client trades, disclose:

```
Cost Disclosure
─────────────────────────────────────────
Investment Amount:              €10,000
─────────────────────────────────────────
Service Costs:
  Execution:                      €20.00
  Advisory (if applicable):       €50.00
  
Product Costs:
  Entry cost:                    €150.00
  Ongoing cost (annual):          €80.00
  Exit cost:                       €0.00
  
Third-party Payments:              €5.00
─────────────────────────────────────────
Total First Year:                €305.00
Impact on Return:                  3.05%
```

### Ex-Post (Annual Statement)

After year-end, report actual costs:

| Category | Disclosed | Actual |
|----------|-----------|--------|
| Entry cost | €150 | €150 |
| Ongoing | €80 | €82 |
| Transaction | €10 | €15 |
| Exit | €0 | €0 |
| **Total** | **€240** | **€247** |

## PRIIPs Cost Disclosure

### Categories

| Category | What It Includes |
|----------|-----------------|
| One-off entry | Structuring fees, distribution costs |
| One-off exit | Exit fees, redemption charges |
| Ongoing | Management, administration, custody |
| Transaction | Hedging, underlying trading |
| Performance | Performance fees (if any) |
| Carried interest | Profit share (if any) |

### Reduction in Yield (RIY)

Total cost impact expressed as annual percentage:

```
RIY = Total costs annualized / Average investment
```

## Public Registers

### Exchange Disclosure

Products listed on exchanges have public information:
- Term sheets
- Final terms
- Pricing data
- Corporate actions

### KID Publication

KIDs must be published on manufacturer website:
- Free access
- Downloadable
- Kept up to date

### Prospectus Registry

National registries of approved prospectuses:
- BaFin (Germany)
- FCA (UK - was EU)
- AMF (France)

## System Requirements

### Data Capture

```python
@dataclass
class TradeReport:
    trade_id: str
    timestamp: datetime
    isin: str
    price: Decimal
    quantity: int
    buyer_lei: str
    seller_lei: str
    venue_mic: str
    algo_indicator: bool
    waiver_flag: Optional[str]
```

### Reporting Pipeline

```
Trade Execution
      │
      ▼
┌──────────────┐
│   Enrich     │ (add LEIs, ISINs)
│   Data       │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Validate   │ (check completeness)
│              │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Format     │ (XML/JSON schema)
│              │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Submit     │ (to ARM)
│              │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Track      │ (ACK/NACK handling)
│   Status     │
└──────────────┘
```

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Transparency systems require:

1. **Real-Time Capture**
   - Trade event logging
   - Timestamping
   - Data enrichment

2. **Report Generation**
   - Regulatory formats
   - Validation rules
   - Error handling

3. **Distribution**
   - ARM connectivity
   - Retry logic
   - Status tracking

4. **Archival**
   - Long-term storage
   - Retrieval capability
   - Audit support

## Common Misconceptions

> **⚠️ Misconception:** "Transparency only means publishing prices"
> **Reality:** It includes costs, venue choices, conflicts of interest, and detailed trade reporting.

> **⚠️ Misconception:** "Reports are only for regulators"
> **Reality:** Clients receive cost reports, best execution summaries, and other disclosures.

> **⚠️ Misconception:** "Small trades don't need reporting"
> **Reality:** Nearly all trades in MiFID instruments require reporting, regardless of size.

## Glossary

- **Pre-Trade Transparency**: Price/order information before trading
- **Post-Trade Transparency**: Trade information after execution
- **ARM**: Approved Reporting Mechanism
- **MIC**: Market Identifier Code (venue identification)
- **LEI**: Legal Entity Identifier
- **RTS 28**: Regulatory Technical Standard on best execution reporting
- **NCA**: National Competent Authority
- **RIY**: Reduction in Yield (cost measure)
- **Waiver**: Exception from transparency obligation

