---
id: fixed-income
title: Fixed Income (Bonds)
phase: 1
order: 2
difficulty: Beginner
---

# Fixed Income (Bonds)

## Overview

**Fixed income** refers to debt securities that pay investors regular interest payments (coupons) and return the principal at maturity. Unlike equities where you own part of a company, bonds make you a **creditor** - you've lent money to the issuer.

Bonds are the second most important underlying for structured products, and interest rates derived from bond markets affect the pricing of virtually all financial products.

## Bond Basics

### Structure of a Bond

Every bond has these core components:

| Component | Description | Example |
|-----------|-------------|---------|
| **Principal (Face Value)** | Amount repaid at maturity | €1,000 |
| **Coupon Rate** | Annual interest rate | 3.5% |
| **Coupon Payment** | Periodic interest payment | €35/year |
| **Maturity Date** | When principal is repaid | March 15, 2030 |
| **Issue Price** | Price at initial sale | €100 (par) |

> **📘 Example:** A 10-year German government bond (Bund) with 2.5% coupon:
> - Face Value: €1,000
> - Coupon: €25 per year (paid annually)
> - At maturity: Receive final €25 coupon + €1,000 principal

### Bond Pricing

Bonds trade at prices expressed as a **percentage of face value**:

| Price | Term | Meaning |
|-------|------|---------|
| 100 | Par | Trading at face value |
| >100 | Premium | Trading above face value |
| <100 | Discount | Trading below face value |

> **📘 Example:** A bond priced at 98.50 with €1,000 face value costs €985 to buy.

**Why do bond prices change?**
- **Interest rates**: When rates rise, existing bond prices fall (inverse relationship)
- **Credit quality**: If issuer becomes riskier, price falls
- **Time to maturity**: Prices converge to par as maturity approaches

## Types of Bonds

### Government Bonds (Staatsanleihen)

Issued by national governments to finance public spending.

**German Government Bonds:**

| Type | Maturity | Description |
|------|----------|-------------|
| Schatz | 2 years | Short-term |
| Bobl | 5 years | Medium-term |
| Bund | 10 years | Long-term benchmark |
| Bund (30y) | 30 years | Very long-term |

> **💡 Note:** German Bunds are considered "risk-free" in EUR markets and serve as the benchmark for eurozone interest rates.

**Other Key Government Bonds:**
- **US Treasuries**: Global risk-free benchmark
- **UK Gilts**: British government bonds
- **French OATs**: French government bonds

### Corporate Bonds (Unternehmensanleihen)

Issued by companies to raise capital.

**Credit Ratings:**

| Rating (S&P) | Category | Example Issuer |
|--------------|----------|----------------|
| AAA | Highest quality | Microsoft, Johnson & Johnson |
| AA | Very high quality | Siemens, LVMH |
| A | Upper medium grade | BMW, Deutsche Telekom |
| BBB | Lower medium grade | Volkswagen, Deutsche Bank |
| BB and below | High yield ("junk") | Smaller/riskier companies |

> **📘 Example:** Volkswagen issues a 5-year bond at 4.0% coupon. Because VW is rated BBB (lower investment grade), it pays ~1.5% more than equivalent German Bunds.

### Other Bond Types

| Type | Description |
|------|-------------|
| **Covered Bonds (Pfandbriefe)** | German specialty - secured by mortgages or public sector loans |
| **Floating Rate Notes (FRN)** | Coupon adjusts with reference rate (EURIBOR + spread) |
| **Zero-Coupon Bonds** | No coupons; sold at discount, redeemed at par |
| **Inflation-Linked Bonds** | Principal/coupon adjusted for inflation |

## Yield Concepts

### Coupon Yield

Simply the coupon rate stated on the bond.

```
Coupon Yield = Annual Coupon ÷ Face Value
```

> **📘 Example:** €30 annual coupon on €1,000 face value = 3.0% coupon yield

### Current Yield

Yield based on current market price.

```
Current Yield = Annual Coupon ÷ Current Market Price
```

> **📘 Example:** Same bond trading at €950:
> Current Yield = €30 ÷ €950 = 3.16%

### Yield to Maturity (YTM)

The **most important yield measure** - total return if held to maturity, including:
- All coupon payments
- Capital gain/loss from price vs face value
- Reinvestment of coupons

> **💡 Note:** YTM is what traders quote when discussing bond yields. "The 10-year Bund yields 2.3%" means YTM is 2.3%.

## The Yield Curve

The **yield curve** shows yields for bonds of different maturities from the same issuer.

### Normal Yield Curve

**Shape**: Upward sloping (longer maturities = higher yields)

```
        Yield
          |      ___________
          |    _/
          |  _/
          | /
          |/
          +------------------→ Maturity
            2y  5y  10y  30y
```

**Interpretation**: Investors demand higher yields for locking money up longer.

### Inverted Yield Curve

**Shape**: Downward sloping (shorter maturities have higher yields)

```
        Yield
          |\
          | \_
          |   \_
          |     \___________
          |
          +------------------→ Maturity
            2y  5y  10y  30y
```

**Interpretation**: Often predicts recession - investors flee to long-term safety.

> **⚠️ Warning:** An inverted yield curve has historically preceded every US recession in the past 50 years.

### Flat Yield Curve

**Shape**: Horizontal (all maturities yield similar amounts)

**Interpretation**: Transition period, uncertainty about future rates.

## Interest Rate Risk

### Duration

**Duration** measures a bond's sensitivity to interest rate changes.

**Rule of thumb**: If rates rise 1%, a bond with duration of 5 years loses approximately 5% in value.

| Duration | Rate Sensitivity |
|----------|-----------------|
| Short (<3 years) | Low sensitivity |
| Medium (3-7 years) | Moderate sensitivity |
| Long (>7 years) | High sensitivity |

> **📘 Example:** You hold a 10-year Bund with duration of 8.5. If Bund yields rise from 2.0% to 2.5%, your bond loses approximately:
> 8.5 × 0.5% = **4.25%** in value

### Convexity

Duration is a linear approximation. **Convexity** captures the curvature:
- Positive convexity: Bond gains more from rate drops than it loses from rate rises
- Most regular bonds have positive convexity

## German Bond Market Specifics

### Pfandbriefe (Covered Bonds)

A German invention dating back 250 years - among the safest bonds after government debt.

**Characteristics:**
- Secured by high-quality assets (mortgages or public sector loans)
- Dual recourse: claim on issuer AND asset pool
- Very low credit risk
- Lower yields than unsecured corporate bonds

> **📘 Example:** Deutsche Pfandbriefbank issues a 5-year Pfandbrief secured by German residential mortgages. Yield is only 0.3% above Bunds (very tight spread = low risk).

### EUREX Bond Futures

Standardized futures contracts on German government bonds.

| Contract | Underlying |
|----------|-----------|
| Schatz Future | 2-year Bund |
| Bobl Future | 5-year Bund |
| Bund Future | 10-year Bund |
| Buxl Future | 30-year Bund |

> **💡 Note:** The Bund Future is one of the most liquid futures contracts globally, heavily used for hedging interest rate risk.

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Fixed income systems require handling:

1. **Complex Date Calculations**
   - Accrued interest (day count conventions: ACT/360, 30/360, ACT/ACT)
   - Coupon payment schedules
   - Settlement dates (T+2 typically)

2. **Yield Calculations**
   - YTM requires iterative solving (Newton-Raphson)
   - Multiple yield measures for same bond
   - Yield curve construction and interpolation

3. **Interest Rate Sensitivities**
   - Duration and convexity calculations
   - DV01 (dollar value of one basis point)
   - Key rate durations

4. **Reference Data**
   - Bond terms and conditions
   - Credit ratings updates
   - Corporate actions (calls, puts, sinking funds)

## Common Misconceptions

> **⚠️ Misconception:** "Bonds are always safe investments"
> **Reality:** Bonds can lose significant value if interest rates rise sharply. A 20-year bond can lose 20%+ in a year if rates spike.

> **⚠️ Misconception:** "Higher coupon = better bond"
> **Reality:** A high coupon bond trading at premium (>100) may have the same YTM as a low coupon bond at discount (<100).

> **⚠️ Misconception:** "Government bonds can't default"
> **Reality:** Greece restructured its debt in 2012, causing significant losses to bondholders. Sovereign defaults happen.

## Glossary

- **YTM**: Yield to Maturity - total return if held to maturity
- **Bund**: German 10-year government bond
- **Spread**: Yield difference vs benchmark (typically Bunds)
- **Duration**: Sensitivity to interest rate changes
- **Basis Point (bp)**: 0.01% (100 bp = 1%)
- **Par**: 100% of face value
- **Accrued Interest**: Interest accumulated since last coupon
- **EURIBOR**: Euro Interbank Offered Rate - benchmark floating rate

