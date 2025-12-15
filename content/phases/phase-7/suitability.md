---
id: suitability
title: Suitability & Appropriateness
phase: 7
order: 3
difficulty: Intermediate
---

# Suitability & Appropriateness

## Overview

**Suitability** and **appropriateness** are investor protection mechanisms that ensure financial products match investor profiles. Before selling a structured product, firms must assess whether it's suitable for the specific client.

These requirements drive significant system functionality in client onboarding and order execution.

## Suitability vs Appropriateness

### When Each Applies

| Service Type | Assessment Required |
|--------------|---------------------|
| **Investment advice** | Full suitability |
| **Portfolio management** | Full suitability |
| **Execution only (complex)** | Appropriateness |
| **Execution only (non-complex)** | None required |

### Key Difference

| Aspect | Suitability | Appropriateness |
|--------|-------------|-----------------|
| Scope | Full assessment | Limited assessment |
| Factors | Knowledge, experience, situation, objectives | Knowledge, experience only |
| Obligation | Must recommend suitable products | Must warn if inappropriate |
| Service | Advisory | Execution |

## Suitability Assessment

### Information to Collect

**1. Knowledge and Experience**

| Topic | Questions |
|-------|-----------|
| Investment types | Which products have you traded? |
| Frequency | How often do you trade? |
| Education | Relevant qualifications? |
| Profession | Financial sector experience? |

**2. Financial Situation**

| Topic | Questions |
|-------|-----------|
| Income | Regular income sources and amounts |
| Assets | Net worth and liquid assets |
| Liabilities | Debts and commitments |
| Investment capacity | What can you afford to lose? |

**3. Investment Objectives**

| Topic | Questions |
|-------|-----------|
| Purpose | Capital growth, income, preservation? |
| Time horizon | How long will you invest? |
| Risk tolerance | What losses can you accept? |
| Liquidity needs | When might you need the money? |

### Risk Tolerance Assessment

| Level | Description | Suitable Products |
|-------|-------------|-------------------|
| **1 - Conservative** | Cannot accept losses | Capital protection, deposits |
| **2 - Moderate** | Small losses acceptable | Discount certificates |
| **3 - Balanced** | Moderate losses for growth | Bonus certificates |
| **4 - Growth** | Significant losses acceptable | Autocallables |
| **5 - Aggressive** | Total loss possible | Leverage products |

### Suitability Matrix

```
                     Client Risk Tolerance
                1      2      3      4      5
           ┌──────────────────────────────────┐
High Risk  │  ✗      ✗      ✗      ✓      ✓  │
Product    │                                  │
Medium     │  ✗      ✗      ✓      ✓      ✓  │
Risk       │                                  │
Low Risk   │  ✓      ✓      ✓      ✓      ✓  │
           └──────────────────────────────────┘
```

## Appropriateness Assessment

### When Required

For execution-only services involving **complex products**:
- Structured products (most types)
- Derivatives
- Leveraged products
- Products with barriers

### Assessment Scope

Only knowledge and experience, not financial situation:

| Question Area | Purpose |
|---------------|---------|
| Product understanding | Can client understand the product? |
| Risk awareness | Does client understand the risks? |
| Trading experience | Has client traded similar products? |

### Outcomes

| Result | Action |
|--------|--------|
| Appropriate | Proceed with order |
| Not appropriate | Warn client, can still proceed if client insists |
| Insufficient info | Warn client, can still proceed |

## Target Market Matching

### Product Target Market

Every product has a defined target market (from product governance):

```json
{
  "product": "DAX Autocallable",
  "targetMarket": {
    "clientType": ["RETAIL", "PROFESSIONAL"],
    "knowledgeLevel": "INFORMED",
    "abilityBearLoss": "SOME_CAPITAL_LOSS",
    "riskTolerance": "MEDIUM_HIGH",
    "investmentHorizon": "MEDIUM_TERM",
    "objectives": ["GROWTH", "INCOME"]
  }
}
```

### Client Profile

```json
{
  "client": "John Smith",
  "profile": {
    "classification": "RETAIL",
    "knowledgeLevel": "BASIC",
    "abilityBearLoss": "LIMITED_LOSS",
    "riskTolerance": "MEDIUM",
    "investmentHorizon": "LONG_TERM",
    "objectives": ["GROWTH"]
  }
}
```

### Matching Algorithm

```python
def check_suitability(product, client):
    mismatches = []
    
    if client.risk_tolerance < product.min_risk_tolerance:
        mismatches.append("Risk tolerance too low")
    
    if client.knowledge_level < product.min_knowledge:
        mismatches.append("Insufficient knowledge")
    
    if client.horizon not in product.suitable_horizons:
        mismatches.append("Investment horizon mismatch")
    
    if mismatches:
        return SuitabilityResult.NOT_SUITABLE, mismatches
    return SuitabilityResult.SUITABLE, []
```

## System Requirements

### Questionnaire Management

```
┌─────────────────────────────────────────┐
│         SUITABILITY SYSTEM              │
├─────────────────────────────────────────┤
│                                         │
│  ┌───────────┐    ┌──────────────┐     │
│  │ Question  │───►│   Response   │     │
│  │   Bank    │    │   Capture    │     │
│  └───────────┘    └──────┬───────┘     │
│                          │             │
│                          ▼             │
│  ┌───────────┐    ┌──────────────┐     │
│  │  Profile  │◄───│   Scoring    │     │
│  │  Storage  │    │   Engine     │     │
│  └───────────┘    └──────────────┘     │
│                                         │
└─────────────────────────────────────────┘
```

### Order Execution Integration

```
Order Request
      │
      ▼
┌──────────────┐
│ Get Client   │
│  Profile     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Get Product  │
│ Target Market│
└──────┬───────┘
       │
       ▼
┌──────────────┐     Not Suitable
│   Match &    │────────────────► Block or Warn
│   Validate   │
└──────┬───────┘
       │ Suitable
       ▼
  Execute Order
```

## Record Keeping

### What to Store

| Record | Retention |
|--------|-----------|
| Questionnaire responses | 5 years |
| Risk profile calculation | 5 years |
| Suitability assessment | 5 years |
| Warning acknowledgments | 5 years |
| Profile changes | 5 years |

### Audit Trail

```sql
CREATE TABLE suitability_assessments (
    id UUID PRIMARY KEY,
    client_id VARCHAR NOT NULL,
    product_isin VARCHAR NOT NULL,
    assessment_date TIMESTAMP NOT NULL,
    result VARCHAR NOT NULL,  -- SUITABLE, NOT_SUITABLE
    reasons JSON,
    advisor_id VARCHAR,
    client_acknowledged BOOLEAN,
    created_at TIMESTAMP DEFAULT NOW()
);
```

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Suitability systems require:

1. **Questionnaire Engine**
   - Dynamic questions
   - Scoring logic
   - Profile calculation

2. **Matching Logic**
   - Product vs client comparison
   - Rule engine
   - Override handling

3. **Workflow Integration**
   - Order blocking
   - Warning generation
   - Acknowledgment capture

4. **Audit Trail**
   - Complete history
   - Immutable records
   - Retrievable on demand

## Common Misconceptions

> **⚠️ Misconception:** "Retail clients can't buy risky products"
> **Reality:** They can if suitable for their profile. A wealthy, experienced retail client may be suitable for aggressive products.

> **⚠️ Misconception:** "The client can just sign a waiver"
> **Reality:** Appropriateness warnings can be overridden, but suitability mismatches often cannot for advised sales.

> **⚠️ Misconception:** "One assessment lasts forever"
> **Reality:** Profiles should be updated regularly (at least annually) and when circumstances change.

## Glossary

- **Suitability**: Full assessment for advisory services
- **Appropriateness**: Limited assessment for execution services
- **Target Market**: Defined suitable investor profile for a product
- **Risk Tolerance**: Client's willingness to accept losses
- **Risk Capacity**: Client's financial ability to bear losses
- **Investment Horizon**: Expected holding period
- **Execution Only**: Client decides without advice
- **Complex Product**: Product requiring appropriateness test

