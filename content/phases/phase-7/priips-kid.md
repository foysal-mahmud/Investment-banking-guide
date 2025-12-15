---
id: priips-kid
title: PRIIPs & KID
phase: 7
order: 2
difficulty: Intermediate
---

# PRIIPs & KID

## Overview

**PRIIPs** (Packaged Retail Investment and Insurance Products) regulation requires that retail investors receive a standardized **Key Information Document (KID)** before purchasing structured products. This 3-page document provides comparable information across all products.

For software engineers, PRIIPs requires sophisticated calculation engines and document generation systems.

## What is PRIIPs?

### Scope

PRIIPs applies to products where:
- Returns depend on underlying asset performance
- Sold to **retail investors**
- Packaged (not direct investment)

**Includes:**
- Structured products
- Structured deposits
- Investment funds (UCITS, AIFs)
- Certain insurance products

### The KID Requirement

A **Key Information Document** must be:
- Provided **before** purchase
- Maximum **3 pages**
- Written in **plain language**
- **Standardized format** for comparability

## KID Contents

### Section 1: Product Identification

```
┌─────────────────────────────────────────┐
│  KEY INFORMATION DOCUMENT              │
├─────────────────────────────────────────┤
│  Product: Autocallable Note on DAX     │
│  ISIN: DE000TB12345                    │
│  Manufacturer: Sample Bank AG          │
│  Website: www.samplebank.de/kid        │
│  Date: 15 January 2024                 │
└─────────────────────────────────────────┘
```

### Section 2: What is This Product?

| Element | Content |
|---------|---------|
| Type | Structured debt instrument |
| Objectives | Participation in DAX with capital at risk |
| Term | 3 years |
| Intended investor | Retail seeking growth |

### Section 3: Risk Indicator (SRI)

**Summary Risk Indicator**: 1 (lowest) to 7 (highest)

```
Risk Indicator Scale:
┌─────────────────────────────────────┐
│ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │
│   │   │   │ ■ │   │   │   │
└─────────────────────────────────────┘
       Lower risk ◄────► Higher risk
```

### SRI Calculation

```
SRI = Market Risk Measure (MRM) + Credit Risk Adjustment (CRM)
```

| MRM Class | VaR Range | Products |
|-----------|-----------|----------|
| 1 | < 0.5% | Money market |
| 2 | 0.5-5% | Low volatility |
| 3 | 5-12% | Moderate |
| 4 | 12-20% | Higher risk |
| 5 | 20-30% | High risk |
| 6 | 30-80% | Very high |
| 7 | > 80% | Extreme |

### Section 4: Performance Scenarios

**Four mandatory scenarios:**

| Scenario | Definition |
|----------|------------|
| **Stress** | Extreme negative conditions |
| **Unfavourable** | 10th percentile |
| **Moderate** | 50th percentile (median) |
| **Favourable** | 90th percentile |

**Example presentation:**

| Scenario | 1 Year | 3 Years (RHP) |
|----------|--------|---------------|
| Stress | -40% | -60% |
| Unfavourable | -15% | -5% |
| Moderate | +3% | +12% |
| Favourable | +18% | +35% |

*RHP = Recommended Holding Period*

### Section 5: Costs

**Cost disclosure format:**

| Time Period | Total Costs | Impact on Return |
|-------------|-------------|------------------|
| If exit after 1 year | €250 | 2.5% |
| If exit at RHP (3 years) | €350 | 1.2% p.a. |

**Cost breakdown:**

| Cost Type | One-off | Ongoing |
|-----------|---------|---------|
| Entry costs | 1.5% | - |
| Exit costs | 0% | - |
| Portfolio transaction | - | 0.3% |
| Other ongoing | - | 0.5% |
| Performance fees | - | 0% |
| Carried interest | - | 0% |

## PRIIPs Calculations

### Performance Scenario Methodology

**For Category 2 products (structured products):**

1. Collect 5 years of daily returns
2. Bootstrap returns to simulate paths
3. Calculate 10th, 50th, 90th percentiles
4. Add stress scenario based on tail risk

```python
def calculate_scenarios(returns, holding_period):
    simulated_values = bootstrap_simulation(returns, n_paths=10000)
    
    return {
        'stress': calculate_stress_scenario(returns),
        'unfavourable': np.percentile(simulated_values, 10),
        'moderate': np.percentile(simulated_values, 50),
        'favourable': np.percentile(simulated_values, 90)
    }
```

### Reduction in Yield (RIY)

Measures total cost impact on return:

```
RIY = IRR(Gross Performance) - IRR(Net Performance After Costs)
```

### Market Risk Measure (MRM)

Based on VaR at 97.5% confidence over RHP:

```python
def calculate_mrm(returns, holding_period):
    var_97_5 = calculate_var(returns, confidence=0.975, horizon=holding_period)
    
    if var_97_5 < 0.005:
        return 1
    elif var_97_5 < 0.05:
        return 2
    # ... etc
```

## Document Generation

### System Architecture

```
┌─────────────────────────────────────────────────────┐
│                   KID GENERATOR                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌───────────┐    ┌──────────────┐    ┌─────────┐ │
│  │  Product  │───►│ Calculation  │───►│  PDF    │ │
│  │   Data    │    │    Engine    │    │Generator│ │
│  └───────────┘    └──────────────┘    └─────────┘ │
│        │                 │                  │      │
│        ▼                 ▼                  ▼      │
│  ┌───────────┐    ┌──────────────┐    ┌─────────┐ │
│  │  Market   │    │   Scenario   │    │  Legal  │ │
│  │   Data    │    │   Results    │    │  Text   │ │
│  └───────────┘    └──────────────┘    └─────────┘ │
└─────────────────────────────────────────────────────┘
```

### Template Requirements

| Element | Requirement |
|---------|-------------|
| Format | PDF, max 3 pages |
| Language | Local language of distribution |
| Layout | Prescribed by regulation |
| Accessibility | Machine readable elements |

## Updates and Amendments

### When to Update

- Material change in product
- Significant market move affecting scenarios
- At least **annually**

### Version Control

```
kid_versions/
├── DE000TB12345_v1_20240115.pdf
├── DE000TB12345_v2_20240415.pdf  # Updated scenarios
├── DE000TB12345_v3_20240815.pdf  # Annual review
```

## Why Software Engineers Should Understand This

> **💡 Key Insight:** PRIIPs systems require:

1. **Calculation Engine**
   - Performance scenarios
   - Risk indicators
   - Cost calculations
   - Regular recalculation

2. **Document Generation**
   - PDF creation
   - Template management
   - Multi-language support
   - Version control

3. **Data Management**
   - Historical returns
   - Product parameters
   - Cost data aggregation

4. **Distribution**
   - Website publication
   - Client delivery
   - Regulatory submission

## Common Misconceptions

> **⚠️ Misconception:** "KID scenarios predict future performance"
> **Reality:** Scenarios are statistical illustrations, not forecasts. The disclaimer must be clear.

> **⚠️ Misconception:** "PRIIPs only applies to complex products"
> **Reality:** Even simple structured deposits may require KIDs if returns vary with market.

> **⚠️ Misconception:** "The KID replaces other disclosures"
> **Reality:** KID is additional to prospectus and other documents, not a replacement.

## Glossary

- **PRIIPs**: Packaged Retail Investment and Insurance Products
- **KID**: Key Information Document
- **RHP**: Recommended Holding Period
- **SRI**: Summary Risk Indicator (1-7 scale)
- **MRM**: Market Risk Measure
- **CRM**: Credit Risk Measure
- **RIY**: Reduction in Yield (cost measure)
- **Stress Scenario**: Extreme negative outcome
- **Manufacturer**: Issuer of the product

