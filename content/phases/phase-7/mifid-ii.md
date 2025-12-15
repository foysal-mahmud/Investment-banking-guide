---
id: mifid-ii
title: MiFID II
phase: 7
order: 1
difficulty: Intermediate
---

# MiFID II

## Overview

**MiFID II** (Markets in Financial Instruments Directive II) is the cornerstone of EU investment regulation. It came into effect in January 2018 and fundamentally changed how financial services operate in Europe.

For software engineers, MiFID II drives many system requirements from trade reporting to client classification.

## What is MiFID II?

### Scope

MiFID II applies to:
- Investment firms
- Trading venues
- Data reporting services
- Investment products (structured products included)

### Key Objectives

| Objective | Impact |
|-----------|--------|
| **Investor protection** | Suitability, disclosures |
| **Market transparency** | Pre/post-trade reporting |
| **Market structure** | Venue regulation |
| **Fair competition** | Best execution |

## Client Classification

### Three Categories

MiFID II classifies clients to determine protection level:

| Category | Protection Level | Requirements |
|----------|-----------------|--------------|
| **Retail** | Highest | Full disclosures, suitability |
| **Professional** | Medium | Can opt out of some protections |
| **Eligible Counterparty** | Lowest | Minimal protection |

### Classification Criteria

**Professional clients** must meet at least 2 of:
- Balance sheet ≥ €20 million
- Net turnover ≥ €40 million
- Own funds ≥ €2 million

### System Requirements

```python
class Client:
    classification: str  # RETAIL, PROFESSIONAL, ECP
    classification_date: date
    classification_basis: str  # per_se, elective
    opt_outs: list[str]  # specific protections waived
```

## Product Governance

### Target Market Definition

Issuers must define who the product is suitable for:

| Dimension | Example Values |
|-----------|---------------|
| Client type | Retail, Professional |
| Knowledge | Informed, Advanced |
| Risk tolerance | Conservative to Aggressive |
| Investment horizon | Short, Medium, Long |
| Objectives | Capital preservation, Growth |

### Negative Target Market

Who the product is NOT suitable for:
- Risk-averse investors (for leveraged products)
- Short-term investors (for long-dated products)
- Income-seeking investors (for capital protection notes)

### Software Implementation

```json
{
  "targetMarket": {
    "clientType": ["RETAIL", "PROFESSIONAL"],
    "knowledgeLevel": "INFORMED",
    "riskTolerance": "WILLING_TO_BEAR_LOSS",
    "investmentHorizon": "3_YEARS_PLUS",
    "objective": "GROWTH"
  },
  "negativeTargetMarket": {
    "excludedClients": ["CAPITAL_PRESERVATION_ONLY"],
    "excludedHorizons": ["LESS_THAN_1_YEAR"]
  }
}
```

## Best Execution

### Obligation

When executing client orders, firms must take "all sufficient steps" to obtain the best possible result.

### Execution Factors

| Factor | Weight (example) |
|--------|-----------------|
| Price | 60% |
| Cost | 15% |
| Speed | 10% |
| Likelihood of execution | 10% |
| Size | 5% |

### Best Execution Policy

Firms must:
1. Document their execution policy
2. Obtain client consent
3. Monitor execution quality
4. Report to clients annually

### System Requirements

```sql
-- Store execution quality data
CREATE TABLE execution_quality (
    order_id VARCHAR PRIMARY KEY,
    execution_venue VARCHAR,
    executed_price DECIMAL,
    benchmark_price DECIMAL,
    execution_time TIMESTAMP,
    latency_ms INTEGER
);
```

## Transaction Reporting

### What Must Be Reported

All transactions in financial instruments to national competent authority (NCA):

| Field | Description |
|-------|-------------|
| LEI | Legal Entity Identifier |
| ISIN | Instrument identifier |
| Price | Execution price |
| Quantity | Volume traded |
| Venue | Where executed |
| Timestamp | To the second |
| Client IDs | Buyer/seller identification |

### Reporting Timeline

T+1 (by end of next working day)

### Report Format

Reports submitted electronically via Approved Reporting Mechanisms (ARMs):
- Structured XML/JSON format
- Strict validation rules
- Rejection handling

## Cost Disclosure

### Ex-Ante (Before)

Before transaction, disclose:
- All costs and charges
- Impact on return
- Cumulative effect

### Ex-Post (After)

Annually, report actual costs incurred:
- Product costs
- Service costs
- Third-party payments
- Currency conversion costs

### Presentation Format

```
Cost Disclosure Example:
─────────────────────────────────────────
Entry costs:                     0.50%
Exit costs:                      0.25%
Ongoing costs (annual):          1.00%
Transaction costs:               0.30%
Incidental costs:               0.00%
─────────────────────────────────────────
TOTAL COSTS (1 year):           2.05%
Impact on return: €205 on €10,000
```

## Record Keeping

### What to Retain

- All client communications
- Orders and transactions
- Suitability assessments
- Complaints
- Conflicts of interest

### Retention Period

**Minimum 5 years** (7 years on regulator request)

### Format

- Retrievable promptly
- Cannot be altered
- Original medium or durable medium

## Why Software Engineers Should Understand This

> **💡 Key Insight:** MiFID II drives major system requirements:

1. **Client Data Management**
   - Classification logic
   - Opt-out tracking
   - Change history

2. **Order Management**
   - Execution venue selection
   - Quality monitoring
   - Audit trails

3. **Reporting Infrastructure**
   - Real-time data capture
   - Report generation
   - ARM connectivity

4. **Cost Calculation**
   - All-in cost aggregation
   - Scenario-based projections
   - Annual statements

## Common Misconceptions

> **⚠️ Misconception:** "MiFID II only applies to stocks and bonds"
> **Reality:** It covers all MiFID instruments including structured products, derivatives, and many others.

> **⚠️ Misconception:** "Best execution means best price"
> **Reality:** Best execution considers price, cost, speed, likelihood, and other factors weighted appropriately.

> **⚠️ Misconception:** "Professional clients don't need protection"
> **Reality:** They have reduced but not zero protection. Many rules still apply.

## Glossary

- **MiFID II**: Markets in Financial Instruments Directive II
- **MiFIR**: Markets in Financial Instruments Regulation (directly applicable)
- **NCA**: National Competent Authority (e.g., BaFin)
- **ARM**: Approved Reporting Mechanism
- **LEI**: Legal Entity Identifier (20-character code)
- **Best Execution**: Obligation to achieve best result for clients
- **Target Market**: Definition of suitable investor types
- **ECP**: Eligible Counterparty (lowest protection category)

