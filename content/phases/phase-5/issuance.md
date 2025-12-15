---
id: issuance
title: Product Issuance
phase: 5
order: 1
difficulty: Intermediate
---

# Product Issuance

## Overview

**Product issuance** is the process of creating and launching a new structured product. It involves legal documentation, regulatory approval, exchange listing, and initial hedging.

Understanding issuance helps software engineers design systems that capture all necessary data from the start.

## The Issuance Process

### Step 1: Product Design

**Who**: Structuring team, Sales
**What**: Define product parameters based on market demand

| Parameter | Decision |
|-----------|----------|
| Underlying | Which asset(s) |
| Structure | Autocallable, discount, bonus, etc. |
| Term | 6 months, 1 year, 3 years |
| Barriers/Triggers | Protection levels |
| Coupons | Rates, conditions |

### Step 2: Pricing & Approval

**Who**: Quants, Risk, Legal
**What**: Calculate fair value, margins, and risk limits

| Check | Description |
|-------|-------------|
| Fair value | Model-based valuation |
| Margin | Embedded issuer profit |
| Hedging cost | Delta, gamma, vega exposure |
| Risk limits | Concentration, credit, market |
| Legal review | Documentation accuracy |

### Step 3: Documentation

**Who**: Legal, Operations
**What**: Create required documents

| Document | Purpose |
|----------|---------|
| Term Sheet | Summary of key terms |
| Final Terms | Legal binding terms |
| Prospectus | Full disclosure document |
| KID (PRIIPs) | Retail investor summary |
| ISIN Request | Security identifier |

### Step 4: Regulatory Submission

**Who**: Compliance
**What**: Submit for approval (if required)

- **BaFin** (Germany): Prospectus approval
- **Exchange**: Listing application
- **PRIIPs**: KID document requirements

### Step 5: ISIN Assignment

**Who**: Central depository (Clearstream, SIX SIS)
**What**: Assign unique identifier

> **📘 Example:** DE000TB12345
> - DE: Country (Germany)
> - 000: Issuer code
> - TB: Internal code
> - 12345: Serial number

### Step 6: Exchange Listing

**Who**: Exchange (Börse Stuttgart, Frankfurt)
**What**: Make product tradeable

| Information | Provided |
|-------------|----------|
| Product details | Terms, strikes, barriers |
| Market maker | Who provides liquidity |
| Trading hours | When product can trade |
| Tick size | Minimum price increment |

### Step 7: Initial Hedging

**Who**: Trading desk
**What**: Establish risk-neutral position

> **📘 Example:** Autocallable on DAX
> - Sell options to offset product exposure
> - Buy underlying for delta hedge
> - Manage gamma/vega with additional options

### Step 8: Launch

**Who**: Sales, Marketing
**What**: Product available for purchase

## Product Master Data

### What Gets Stored

Every system needs comprehensive product data:

```json
{
  "isin": "DE000TB12345",
  "productType": "AUTOCALLABLE",
  "issueDate": "2024-01-15",
  "maturityDate": "2027-01-15",
  "underlying": {
    "type": "INDEX",
    "isin": "DE0008469008",
    "name": "DAX",
    "initialLevel": 16500.00
  },
  "barrier": {
    "type": "CONTINUOUS",
    "level": 60,
    "levelAbsolute": 9900.00
  },
  "autocall": {
    "trigger": 100,
    "observationDates": ["2025-01-15", "2026-01-15", "2027-01-15"]
  },
  "coupon": {
    "rate": 8.0,
    "trigger": 100,
    "memory": true
  }
}
```

### Data Quality Requirements

| Requirement | Why It Matters |
|-------------|----------------|
| Accuracy | Wrong data = wrong calculations |
| Completeness | Missing fields break processing |
| Timeliness | Products must be active on issue date |
| Consistency | Data must match across systems |

## Issuance Volumes

### Daily Activity

German banks issue **thousands** of products daily:

| Type | Daily Volume (approx) |
|------|----------------------|
| Warrants | 500-1,000 |
| Knock-outs | 500-1,000 |
| Discount certificates | 200-500 |
| Bonus certificates | 100-300 |
| Autocallables | 50-200 |

### System Implications

- **Batch processing**: Bulk issuance overnight
- **Automation**: No manual intervention for standard products
- **Templates**: Pre-defined structures for common products
- **Validation**: Automated checks before approval

## Software Architecture

### Product Master System

```
┌─────────────────────────────────────────┐
│           PRODUCT MASTER                │
├─────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│ │ Static  │ │ Terms   │ │Schedule │   │
│ │ Data    │ │ Sheet   │ │ Events  │   │
│ └────┬────┘ └────┬────┘ └────┬────┘   │
│      │           │           │         │
│      └───────────┼───────────┘         │
│                  ▼                     │
│         ┌───────────────┐              │
│         │   Validation   │              │
│         └───────────────┘              │
└─────────────────────────────────────────┘
          │
          ▼
   Downstream Systems:
   - Pricing Engine
   - Risk Systems
   - Settlement
   - Reporting
```

### API Design Considerations

```python
# Product creation endpoint
POST /api/products
{
  "template": "AUTOCALLABLE_DAX",
  "parameters": {
    "initialLevel": 16500,
    "barrier": 60,
    "coupon": 8.0,
    "term": 36  # months
  }
}

# Response
{
  "isin": "DE000TB12345",
  "status": "PENDING_APPROVAL",
  "estimatedLaunchDate": "2024-01-15"
}
```

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Issuance systems are the foundation:

1. **Data Model Design**
   - Flexible enough for product variations
   - Strict enough to ensure completeness
   - Versioned for amendments

2. **Workflow Management**
   - Approval chains
   - State transitions
   - Audit trails

3. **Integration Points**
   - Upstream: Trading, Structuring
   - Downstream: Pricing, Risk, Settlement
   - External: Exchanges, Depositories

4. **Performance**
   - Batch processing for bulk issuance
   - Low latency for custom products
   - Scalability for peak volumes

## Common Issues

### Data Quality Problems

| Issue | Impact |
|-------|--------|
| Missing observation dates | Event processing fails |
| Wrong barrier level | Incorrect knockout determination |
| Incorrect ratio | Wrong settlement amounts |
| Bad underlying reference | Pricing failures |

### Timing Issues

| Issue | Impact |
|-------|--------|
| Late issuance | Product not tradeable on launch day |
| Wrong business day | Events on holidays |
| Timezone errors | Wrong fixing times |

## Glossary

- **Issuance**: Process of creating and launching a product
- **Term Sheet**: Summary of product terms
- **Final Terms**: Legal binding document
- **KID**: Key Information Document (PRIIPs requirement)
- **ISIN**: International Securities Identification Number
- **Prospectus**: Full legal disclosure document
- **Primary Market**: Initial sale from issuer
- **Secondary Market**: Trading between investors
- **Product Master**: System storing product reference data

