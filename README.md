> [!WARNING]
> This website is made by AI help and for personal use only

# Investment Banking Guide

A comprehensive educational platform for learning investment banking concepts, structured products, and derivatives with a focus on the German market.

## 🎯 Project Overview

This is a Next.js-based learning platform designed for software engineers working in investment banking. It provides:

- **8 Learning Phases** (Phase 0-7) covering fundamentals to advanced topics
- **History & Lifecycle Overview** - comprehensive guide to investment banking operations and product lifecycle
- **Investment Banking Dictionary** - searchable dictionary with 100+ terms, abbreviations, and definitions
- **Self-Paced Learning** - go at your own speed
- **Detailed Topics** with real-world examples from German markets
- **Interactive Components**: Accordions, tooltips, modals for better UX
- **Markdown-based Content** for easy content management
- **Dark/Light Theme** support
- **Responsive Design** optimized for all devices

## 📋 Prerequisites

- **Node.js**: Version 20.9.0 or higher
- **npm**: Version 10 or higher

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
investment-banking-guide/
├── app/                          # Next.js app router
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Home page (roadmap overview)
│   ├── phase/
│   │   └── [phaseNumber]/
│   │       ├── page.tsx         # Phase detail page
│   │       └── [topicId]/
│   │           └── page.tsx     # Topic detail page
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   ├── ThemeProvider.tsx        # Theme context provider
│   ├── ThemeToggle.tsx          # Dark/light mode toggle
│   └── ExampleModal.tsx         # Real-world example modals
├── content/                      # Markdown content
│   └── phases/
│       ├── phase-0/
│       │   ├── index.md         # Phase overview
│       │   ├── financial-markets.md
│       │   └── primary-secondary.md
│       ├── phase-1/
│       └── ...
├── lib/                          # Utilities
│   ├── markdown.ts              # Markdown parser & reader
│   ├── data.ts                  # TypeScript data structures
│   └── utils.ts                 # Helper functions
└── public/                       # Static assets
```

## 📝 Content Management

All educational content is stored in Markdown files under `/content/phases/`. Each phase has:

- `index.md` - Phase overview with metadata
- Individual topic files (e.g., `financial-markets.md`)

### Markdown Frontmatter Structure

**Phase Index (`index.md`):**
```yaml
---
phaseNumber: 0
title: Financial Market Foundations
subtitle: Understanding the basics
goal: Understand what trades, where, and who is involved.
color: emerald
topics:
  - financial-markets
  - primary-secondary
---
```

**Topic File:**
```yaml
---
id: financial-markets
title: What is a Financial Market
phase: 0
order: 1
difficulty: Beginner
---
```

## 🎨 Features

### 1. Home Page & Roadmap Overview
- Visual cards for each learning phase (8 phases total)
- Color-coded by phase
- Time estimates and topic counts
- Direct navigation to phases
- Quick access to History overview and Dictionary

### 2. History & Lifecycle Overview
- Comprehensive guide to investment banking operations
- Explanation of bank types (universal banks, wealth managers, exchanges)
- Product lifecycle from design to trading
- Real-world workflow documentation
- Regulatory and documentation requirements

### 3. Investment Banking Dictionary
- Searchable dictionary with 100+ terms
- Categorized by topic (Derivatives, Structured Products, Regulation, etc.)
- Abbreviations and definitions
- Quick reference for technical terms
- Expandable/collapsible categories

### 4. Phase Pages
- Detailed phase descriptions
- List of all topics in the phase
- Difficulty badges
- Sequential navigation

### 5. Topic Pages
- Full markdown content rendered as HTML
- **Real-world examples** in modal dialogs
- **Accordion sections** for quick reference
- **Tooltips** for additional context (terms automatically highlighted)
- **Navigation** to previous/next topics
- Study tips and best practices

### 6. Real-World Examples
Clickable modals showing actual products from German markets:
- Porsche IPO details
- DAX trading examples
- Volkswagen bond issuances
- Deutsche Bank structured products

### 7. Theme Support
- Light and dark modes
- Automatic system preference detection
- Smooth transitions

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Theme**: next-themes
- **Markdown**: gray-matter, remark, remark-html
- **Icons**: lucide-react

## 📚 Learning Roadmap (Self-Paced)

### Phase 0: Financial Market Foundations
- What is a Financial Market
- Primary vs Secondary Market
- Market Participants & Roles
- Investment Banking vs Commercial Banking

### Phase 1: Asset Classes & Underlyings
- Equities (Stocks & Indices)
- Fixed Income (Bonds)
- Foreign Exchange (FX)
- Commodities
- Volatility & Correlation

### Phase 2: Derivatives Basics ⚠️ CRITICAL
- What is a Derivative
- Forwards & Futures
- Options: Call & Put
- Payoff Diagrams
- Moneyness & Time Value

### Phase 3: Leverage Products
- Warrants
- Knock-Out Certificates (Turbos)
- Mini-Futures
- Leverage & Margin Mechanics

### Phase 4: Structured Products
- Capital Protection Notes
- Discount Certificates
- Bonus Certificates
- Reverse Convertibles
- Autocallables (Very Important)

### Phase 5: Product Lifecycle & Payoff Modeling
- Product Issuance
- Daily Pricing & Valuation
- Corporate Actions
- Lifecycle Events
- Event-Driven Architecture

### Phase 6: Pricing & Risk (High Level)
- Fair Value & Pricing Models
- Volatility in Pricing
- The Greeks
- Sensitivity Analysis

### Phase 7: Regulation & EU Reality
- MiFID II
- PRIIPs & KID
- Suitability & Appropriateness
- Transparency Requirements

## 📖 Additional Resources

### History & Lifecycle Overview
A dedicated page explaining:
- Types of banks involved (universal banks, wealth managers, exchanges)
- Market organization and structure
- Complete product lifecycle from design to trading
- Key documents and regulatory steps
- Real-world workflows in German banking

### Investment Banking Dictionary
A comprehensive searchable dictionary featuring:
- 100+ terms and definitions
- Abbreviations commonly used in banking systems
- Categorized by topic for easy navigation
- Quick reference for technical terminology

## 🎓 Target Audience

This guide is specifically designed for:
- Software engineers working on investment banking systems
- Developers building trading platforms
- Engineers in fintech companies
- Anyone working with structured products in Germany/EU

## 🔧 Development

### Adding New Content

1. Create a new phase folder: `/content/phases/phase-X/`
2. Add `index.md` with phase metadata
3. Create topic markdown files
4. Real examples in `/components/ExampleModal.tsx`

### Styling

- Global styles: `app/globals.css`
- Component styles: Tailwind CSS classes
- Theme variables: CSS variables in `globals.css`

## 📄 License

This project is for educational purposes.

---

**Note**: This platform is educational and does not provide investment advice. All examples are for learning purposes only.
