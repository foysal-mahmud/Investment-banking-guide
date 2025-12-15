---
id: reverse-convertibles
title: Reverse Convertibles
phase: 4
order: 4
difficulty: Intermediate
---

# Reverse Convertibles

## Overview

**Reverse Convertibles** (also called Aktienanleihen or Equity-Linked Notes) offer investors an above-market fixed coupon, but in exchange, the issuer has the right to repay the principal in depreciated shares instead of cash if the underlying falls below a certain level.

They are high-yield products with significant downside risk - the investor sells a put option.

## How Reverse Convertibles Work

### The Basic Structure

A reverse convertible combines:
1. **Bond component**: Pays fixed coupon
2. **Short put option**: Risk of receiving shares

```
Reverse Convertible = Bond + Short Put
```

### The "Reverse" Explained

In a normal convertible bond, the **investor** can convert to shares (beneficial if shares rise).

In a **reverse** convertible, the **issuer** decides whether to deliver shares (they choose to deliver depreciated shares).

> **📘 Example:**
> - You invest €10,000
> - Coupon: 10% (€1,000)
> - Strike: €100 per share (100 shares deliverable)
> 
> **At maturity:**
> - If stock at €110: Issuer repays €10,000 cash ✓
> - If stock at €80: Issuer delivers 100 shares worth €8,000 ✗
> - Either way, you receive €1,000 coupon

### Payoff Diagram

```
Total Return
   |
+10%|--------\
   |         \
 0 |----------\--------→ Stock Price
   |           \
-20%|           \
   |            \
      80%  100%  110%
```

## Key Terms

### Strike Price (Basispreis)

Price at which issuer can deliver shares instead of cash.
- Usually at or near spot at issue
- Determines conversion ratio

### Conversion Ratio

Number of shares deliverable per note.

```
Conversion Ratio = Nominal / Strike Price
```

> **📘 Example:** €1,000 nominal, €100 strike = 10 shares deliverable

### Coupon

Fixed interest payment, regardless of stock performance.
- Typically 5-15% above market rates
- Paid even if stock falls
- Compensation for put risk

### Barrier (Optional)

Some products have a barrier:
- If never touched: Always cash repayment
- If touched: Issuer can deliver shares

## Product Example

### Basic Reverse Convertible

| Specification | Value |
|--------------|-------|
| Underlying | BMW AG |
| Nominal | €10,000 |
| Strike | €90 |
| Coupon | 8% p.a. |
| Term | 12 months |
| BMW at issue | €92 |

**Conversion ratio:** €10,000 / €90 = 111.11 shares

### Scenarios at Maturity

| BMW Price | Repayment | Coupon | Total Value | Return |
|-----------|-----------|--------|-------------|--------|
| €100 | €10,000 cash | €800 | €10,800 | +8% |
| €90 | €10,000 cash | €800 | €10,800 | +8% |
| €80 | 111 shares (€8,889) | €800 | €9,689 | -3.1% |
| €70 | 111 shares (€7,778) | €800 | €8,578 | -14.2% |
| €60 | 111 shares (€6,667) | €800 | €7,467 | -25.3% |

> **⚠️ Warning:** Despite the attractive 8% coupon, a 35% stock decline results in a 25% total loss!

## Barrier Reverse Convertible

### Added Protection

A barrier provides conditional protection:
- Barrier level below strike
- If barrier never touched: Always cash repayment
- If barrier touched: Revert to standard reverse convertible

> **📘 Example:** Barrier at €72 (20% buffer)
> - BMW stays above €72 → Receive €10,000 + €800 coupon
> - BMW touches €72 once → May receive shares if below €90 at expiry

### Payoff Diagram (Barrier)

```
Return
   |
+8%|--------\           (Barrier intact)
   |         \
 0 |----------\--------→ Stock Price
   |           \
   |            \       (Barrier breached)
   |             \
      72   90    100
   Barrier Strike
```

## Why the High Coupon?

The coupon is financed by:
1. **Put option premium**: You sold a put option to the issuer
2. **Dividend retention**: Issuer keeps underlying dividends
3. **Issuer margin**: Built into the structure

> **📘 Example:** Coupon decomposition
> - Market interest rate: 3%
> - Put option premium: 4%
> - Dividend yield: 2%
> - Issuer margin: -1%
> - Total coupon: **8%**

## Comparison: Reverse Convertible vs Discount Certificate

| Feature | Reverse Convertible | Discount Certificate |
|---------|--------------------|--------------------|
| Coupon | Fixed, paid always | None |
| Upside | Capped at coupon | Capped at cap level |
| Downside | Share delivery | Price decline |
| Break-even | Lower (coupon cushion) | Lower (discount cushion) |
| Complexity | Medium | Lower |

## Multi-Underlying (Worst-of)

### Higher Yields, Higher Risk

**Worst-of Reverse Convertibles** are linked to multiple stocks:
- Coupon based on worst performer
- Share delivery based on worst performer
- Much higher coupons (15-20%+)
- Much higher risk

> **📘 Example:** Worst-of on BMW, Mercedes, VW
> - At maturity, only worst performer matters
> - If BMW: +10%, Mercedes: +5%, VW: -25%
> - Receive VW shares at loss, despite other stocks being positive!

### Correlation Effect

Lower correlation = Higher coupon (more risk)
- If stocks move together, worst-of is like single stock
- If stocks move independently, higher chance one underperforms significantly

## Risks

### 1. Unlimited Downside

You participate fully in stock decline (minus coupon):
- Stock falls 50% = You lose ~42% (after coupon)
- No capital protection

### 2. Opportunity Cost

If stock rallies:
- You only receive coupon
- Miss out on capital gains
- Direct investment would have been better

### 3. Dividend Loss

Structured products typically don't pass through dividends:
- For high-dividend stocks, this is significant
- Reduces effective return

### 4. Share Delivery Complexity

If shares delivered:
- Must decide: Hold or sell?
- Transaction costs to sell
- Tax implications differ by jurisdiction

## Why Software Engineers Should Understand This

> **💡 Key Insight:** Reverse convertible systems require:

1. **Pricing Engine**
   - Put option valuation
   - Dividend estimation
   - Coupon calculation

2. **Settlement Logic**
   - Cash vs physical delivery decision
   - Share quantity calculation
   - Fractional share handling

3. **Corporate Actions**
   - Stock splits affect conversion ratio
   - Dividends affect pricing
   - M&A events require adjustments

4. **Client Reporting**
   - Mark-to-market valuation
   - Scenario analysis
   - Risk disclosure

## Common Misconceptions

> **⚠️ Misconception:** "The high coupon makes up for the risk"
> **Reality:** The coupon is fair compensation for put risk. Statistically, you're not getting "extra" return.

> **⚠️ Misconception:** "I can just hold the delivered shares until they recover"
> **Reality:** Shares were delivered because they fell. Recovery is not guaranteed, and you might wait years.

> **⚠️ Misconception:** "Barrier products are much safer"
> **Reality:** Barriers provide partial protection, but barrier breach can still result in significant losses.

> **⚠️ Misconception:** "Worst-of is fine if I like all the stocks"
> **Reality:** You only get the WORST outcome, not the average. One bad stock ruins the entire position.

## Glossary

- **Reverse Convertible (Aktienanleihe)**: High coupon product with share delivery risk
- **Strike (Basispreis)**: Level below which shares are delivered
- **Conversion Ratio**: Number of shares deliverable
- **Barrier (Barriere)**: Protection level for conditional products
- **Worst-of**: Product linked to worst performer in a basket
- **Physical Settlement**: Delivery of actual shares
- **Cash Settlement**: Payment of cash difference
- **Coupon**: Fixed interest payment

