---
phaseNumber: 7
title: Regulation & EU Reality
subtitle: Why software is complex
goal: Understand regulatory requirements affecting product design and systems.
color: red
topics:
  - mifid-ii
  - priips-kid
  - suitability
  - transparency
---

# Phase 7: Regulation & EU Reality

Financial regulation is often seen as a burden, but it's the reason investment banking software is so complex. Understanding regulations helps you build compliant systems and understand why certain features exist.

> **⚠️ This phase explains why banking software is complex.** Regulations drive many non-obvious requirements.

## Why Regulations Matter for Software Engineers

Every regulation translates to:
- **Data requirements**: What to collect and store
- **Calculation rules**: How to compute specific values
- **Reporting obligations**: What to send to regulators/clients
- **Audit trails**: What to log and retain
- **System constraints**: What cannot be done

## Learning Objectives

By the end of this phase, you will understand:
- MiFID II and its impact on trading systems
- PRIIPs KID requirements for retail products
- Suitability and appropriateness rules
- Transparency and reporting requirements

## Topics Covered

1. **MiFID II** - The overarching EU investment regulation
2. **PRIIPs & KID** - Retail product disclosure requirements
3. **Suitability & Appropriateness** - Investor protection rules
4. **Transparency Requirements** - Disclosure and reporting

## The Regulatory Landscape

### EU Financial Regulation Stack

```
┌─────────────────────────────────────────┐
│              EU TREATIES                │
└────────────────────┬────────────────────┘
                     │
┌────────────────────▼────────────────────┐
│            REGULATIONS                  │
│  (Directly applicable in all EU states) │
│  MiFIR, PRIIPs, EMIR, MAR               │
└────────────────────┬────────────────────┘
                     │
┌────────────────────▼────────────────────┐
│             DIRECTIVES                  │
│  (Transposed into national law)         │
│  MiFID II, PSD2, AIFMD                  │
└────────────────────┬────────────────────┘
                     │
┌────────────────────▼────────────────────┐
│         NATIONAL IMPLEMENTATION         │
│  BaFin (Germany), FCA (UK), FINMA (CH)  │
└─────────────────────────────────────────┘
```

### Key Regulators

| Regulator | Jurisdiction | Role |
|-----------|--------------|------|
| **ESMA** | EU | European Securities and Markets Authority |
| **BaFin** | Germany | Bundesanstalt für Finanzdienstleistungsaufsicht |
| **FINMA** | Switzerland | Swiss Financial Market Supervisory Authority |
| **FCA** | UK | Financial Conduct Authority |

## The Cost of Compliance

### Software Development Impact

| Regulation | Development Effort |
|------------|-------------------|
| MiFID II | 30-50% of IT budget for years |
| PRIIPs | Significant calculation engine changes |
| GDPR | Data handling redesign |
| EMIR | Trade reporting infrastructure |

### Ongoing Compliance

- Regular updates as regulations evolve
- Audit support
- Regulatory reporting
- Staff training

## Key Concept: Investor Protection

The core goal of EU financial regulation is **investor protection**:

1. **Information**: Investors get clear, comparable information
2. **Suitability**: Products match investor needs
3. **Transparency**: Markets and prices are visible
4. **Fair treatment**: No conflicts of interest

Understanding this goal helps interpret specific requirements.
