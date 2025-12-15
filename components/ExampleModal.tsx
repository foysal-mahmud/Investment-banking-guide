"use client"

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Info } from "lucide-react";

interface Example {
  title: string;
  description: string;
  details: {
    label: string;
    value: string;
  }[];
}

interface ExampleModalProps {
  example: Example;
  trigger?: React.ReactNode;
}

export function ExampleModal({ example, trigger }: ExampleModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm">
            <Info className="mr-2 h-4 w-4" />
            View Example
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{example.title}</DialogTitle>
          <DialogDescription className="text-base">
            {example.description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div className="grid gap-3">
            {example.details.map((detail, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 py-2 border-b last:border-0"
              >
                <div className="font-semibold text-sm">{detail.label}</div>
                <div className="col-span-2 text-sm text-muted-foreground">
                  {detail.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Predefined real-world examples
export const realExamples: Record<string, Example[]> = {
  "financial-markets": [
    {
      title: "Apple Stock Price Discovery",
      description: "Real-time price discovery in action on NASDAQ",
      details: [
        { label: "Company", value: "Apple Inc. (AAPL)" },
        { label: "Event", value: "Q4 2023 Earnings Beat Expectations" },
        { label: "Before Announcement", value: "$175.50" },
        { label: "After Announcement", value: "$185.20" },
        { label: "Price Change", value: "+$9.70 (+5.5%)" },
        { label: "Volume", value: "125 million shares traded" },
        { label: "Mechanism", value: "Increased demand from buyers drove price up as market participants repriced stock based on new information" },
      ],
    },
    {
      title: "DAX Liquidity Example",
      description: "High liquidity in German blue-chip index",
      details: [
        { label: "Index", value: "DAX 40" },
        { label: "Daily Trading Volume", value: "€6-8 billion" },
        { label: "Bid-Ask Spread", value: "1-2 points (0.01%)" },
        { label: "Order Execution", value: "Milliseconds" },
        { label: "Large Order Impact", value: "€10M order moves price <0.05%" },
        { label: "Trading Hours", value: "9:00-17:30 CET on Xetra" },
        { label: "Why Liquid", value: "40 largest German companies, heavily traded by institutions worldwide" },
      ],
    },
    {
      title: "Volkswagen Bond Issuance",
      description: "Capital allocation for EV development",
      details: [
        { label: "Issuer", value: "Volkswagen AG" },
        { label: "Issue Date", value: "March 2023" },
        { label: "Amount Raised", value: "€5 billion" },
        { label: "Bond Type", value: "Senior Unsecured Notes" },
        { label: "Maturity", value: "7 years (2030)" },
        { label: "Coupon Rate", value: "4.25% annual" },
        { label: "Purpose", value: "Finance transition to electric vehicles and build new battery factories" },
        { label: "Buyers", value: "European pension funds, insurance companies, asset managers" },
        { label: "Process", value: "Capital flowed from institutional investors to VW to fund strategic initiatives" },
      ],
    },
  ],
  "primary-secondary": [
    {
      title: "Porsche AG IPO (September 2022)",
      description: "One of Europe's largest IPOs in recent years",
      details: [
        { label: "Company", value: "Porsche AG" },
        { label: "Parent Company", value: "Volkswagen Group" },
        { label: "Market", value: "Primary Market (IPO)" },
        { label: "Exchange", value: "Frankfurt Stock Exchange (Xetra)" },
        { label: "IPO Date", value: "September 29, 2022" },
        { label: "Shares Offered", value: "911 million preferred shares (symbolic number)" },
        { label: "IPO Price", value: "€82.50 per share" },
        { label: "Capital Raised", value: "€9.4 billion" },
        { label: "Underwriters", value: "Goldman Sachs, JPMorgan, BofA Securities, Citigroup" },
        { label: "Who Got Money", value: "Porsche AG (for business operations)" },
        { label: "First Day Close", value: "€84.00 (+1.8%)" },
        { label: "Valuation", value: "€75 billion total company value" },
      ],
    },
    {
      title: "Siemens Stock Trading Today",
      description: "Secondary market trading of established stock",
      details: [
        { label: "Company", value: "Siemens AG" },
        { label: "Ticker", value: "SIE (Xetra)" },
        { label: "Market", value: "Secondary Market" },
        { label: "Original IPO", value: "1899 (one of Germany's oldest listed companies)" },
        { label: "Current Price", value: "~€170 per share (varies daily)" },
        { label: "Daily Volume", value: "2-3 million shares" },
        { label: "Market Cap", value: "~€135 billion" },
        { label: "Transaction Type", value: "Investor A sells to Investor B" },
        { label: "Who Gets Money", value: "The selling investor (NOT Siemens)" },
        { label: "Siemens' Role", value: "None - company doesn't participate in daily trading" },
        { label: "Purpose", value: "Provides liquidity for investors to enter/exit positions" },
      ],
    },
    {
      title: "Deutsche Bank Autocallable Issuance",
      description: "Structured product primary market",
      details: [
        { label: "Issuer", value: "Deutsche Bank AG" },
        { label: "Product Type", value: "Autocallable Certificate" },
        { label: "Market", value: "Primary Market (New Issuance)" },
        { label: "Underlying", value: "DAX Index" },
        { label: "Issue Size", value: "€50 million" },
        { label: "Issue Price", value: "€100 per certificate" },
        { label: "Maturity", value: "2 years" },
        { label: "Autocall Level", value: "100% of initial DAX level" },
        { label: "Coupon", value: "8% p.a. if not autocalled" },
        { label: "Distribution", value: "Via private banks to retail clients and independent wealth managers" },
        { label: "Secondary Trading", value: "Available on Börse Stuttgart and directly with Deutsche Bank" },
        { label: "Bank's Use of Funds", value: "Hedges risk by trading DAX futures and options on EUREX" },
      ],
    },
  ],
};

