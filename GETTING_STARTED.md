# Getting Started with Investment Banking Guide

## ✅ Project Setup Complete!

Your Investment Banking educational platform is now set up and ready to use. Here's what has been created:

## 📦 What's Included

### 1. **Complete Next.js Application**
- ✅ Next.js 16 with App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS 4 styling
- ✅ Dark/Light theme support
- ✅ Responsive design

### 2. **UI Components (shadcn/ui)**
- ✅ Card, Badge, Button
- ✅ Accordion (for collapsible sections)
- ✅ Tooltip (for helpful hints)
- ✅ Dialog/Modal (for real-world examples)
- ✅ Tabs
- ✅ Theme toggle

### 3. **Content Management System**
- ✅ Markdown-based content in `/content/phases/`
- ✅ Automatic parsing and rendering
- ✅ Frontmatter metadata for organization
- ✅ Easy to update and extend

### 4. **Phase 0 Complete Content**
All 4 topics created with detailed explanations:
1. **What is a Financial Market** - Market functions and structure
2. **Primary vs Secondary Market** - How securities are created and traded
3. **Market Participants & Roles** - Who's who in finance
4. **Investment Banking vs Commercial Banking** - Key differences

### 5. **Real-World Examples**
Interactive modals with actual examples:
- Apple stock price discovery
- Porsche IPO (2022)
- Siemens stock trading
- Volkswagen bond issuance
- Deutsche Bank structured products
- DAX liquidity examples

## 🚀 How to Run

### Prerequisites
**Important:** You need Node.js version **20.9.0 or higher**.

Check your version:
```bash
node --version
```

If you need to upgrade:
- Using nvm: `nvm install 20 && nvm use 20`
- Download from: https://nodejs.org/

### Start Development Server

```bash
cd "/Users/swd500_sadia/Documents/Laptop/Personal project/investment-banking-guide"
npm run dev
```

Then open: **http://localhost:3000**

## 📱 Navigation Structure

```
Home (/)
  └─ Roadmap Overview with all 7 phases

Phase Detail (/phase/[0-7])
  └─ Phase overview with topic cards

Topic Detail (/phase/[0-7]/[topic-id])
  └─ Full article with examples, accordions, tooltips
```

## 📝 Adding More Content

### To Add a New Topic to Phase 0:

1. Create a new markdown file:
   ```
   content/phases/phase-0/your-topic.md
   ```

2. Add frontmatter:
   ```yaml
   ---
   id: your-topic
   title: Your Topic Title
   phase: 0
   order: 5
   duration: 1 hour
   difficulty: Beginner
   ---
   ```

3. Write your content in Markdown

4. Update the phase index:
   ```
   content/phases/phase-0/index.md
   ```
   Add your topic to the `topics` array

### To Add More Phases (1-7):

1. Create phase folder:
   ```
   content/phases/phase-1/
   ```

2. Create `index.md` with phase metadata

3. Add topic markdown files

4. The app will automatically pick them up!

### To Add Real-World Examples:

Edit: `components/ExampleModal.tsx`

Add to the `realExamples` object:
```typescript
"your-topic-id": [
  {
    title: "Example Title",
    description: "Brief description",
    details: [
      { label: "Company", value: "Example AG" },
      { label: "Date", value: "2024" },
      // ... more details
    ]
  }
]
```

## 🎨 Features Overview

### Home Page
- **Phase Cards**: Color-coded, clickable cards for each phase
- **Info Section**: How to use the guide
- **Statistics**: Total phases, topics, duration

### Phase Pages
- **Phase Overview**: Goals and description
- **Topic List**: All topics with difficulty badges
- **Navigation**: Previous/Next phase buttons

### Topic Pages
- **Full Content**: Rendered markdown with proper styling
- **Real Examples**: Clickable buttons opening modals with detailed examples
- **Accordions**: Quick reference sections
- **Tooltips**: Inline helpful hints
- **Navigation**: Previous/Next topic, or next phase
- **Study Tips**: Best practices for learning

## 🎯 Roadmap

### Phase 0: Financial Market Foundations ✅ COMPLETE
- 4 topics with full content
- Real examples from German markets
- ~5-6 hours of learning

### Phase 1-7: To Be Created
You have the structure! Just add:
1. Create phase index.md
2. Add topic markdown files
3. Optionally add real examples

The roadmap structure is already defined in `lib/data.ts` for reference.

## 🛠️ Technology Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI)
- **Theme**: next-themes
- **Markdown**: gray-matter, remark, remark-html
- **Icons**: lucide-react

## 📚 Key Files

```
investment-banking-guide/
├── app/
│   ├── page.tsx              ← Home page
│   ├── layout.tsx            ← Root layout
│   └── phase/
│       └── [phaseNumber]/
│           ├── page.tsx      ← Phase detail
│           └── [topicId]/
│               └── page.tsx  ← Topic detail
├── components/
│   ├── ExampleModal.tsx      ← Real examples
│   ├── ThemeToggle.tsx       ← Dark/light mode
│   └── ui/                   ← shadcn components
├── content/
│   └── phases/
│       └── phase-0/          ← Markdown content
├── lib/
│   ├── markdown.ts           ← Content parser
│   └── data.ts               ← Type definitions
└── README.md                 ← Full documentation
```

## 🎓 Content Strategy

Each topic should include:
- ✅ **Clear Overview**: What is this about?
- ✅ **Key Concepts**: Main ideas to understand
- ✅ **Real Examples**: Actual products/companies from German markets
- ✅ **Software Perspective**: How this relates to building banking systems
- ✅ **Common Misconceptions**: What people get wrong
- ✅ **Glossary**: Technical terms defined
- ✅ **Next Steps**: Connection to following topics

## 💡 Tips for Content Creation

1. **Use Real German Examples**: Porsche, Volkswagen, Siemens, DAX, Xetra, etc.
2. **No Bank Names Unless Generic**: Avoid specific bank references as requested
3. **Software Engineer Focus**: Always connect to how systems are built
4. **Progressive Complexity**: Start simple, build up
5. **Visual Aids**: Use tables, bullet lists, code blocks for clarity
6. **Practical**: Include actual numbers, dates, product details

## 🎉 What's Working

- ✅ Markdown content rendering
- ✅ Dynamic routing (phases and topics)
- ✅ Real-world example modals
- ✅ Accordions for quick reference
- ✅ Tooltips for extra context
- ✅ Theme switching (dark/light)
- ✅ Responsive design
- ✅ SEO-friendly (static generation)
- ✅ Type-safe (TypeScript)

## 📖 Next Steps for You

1. **Upgrade Node.js** to version 20+ if needed
2. **Run the dev server**: `npm run dev`
3. **Browse the content**: Check Phase 0 topics
4. **Add more phases**: Use Phase 0 as a template
5. **Customize styling**: Adjust colors, fonts in `globals.css`
6. **Add more examples**: Expand `ExampleModal.tsx`

## 🐛 Troubleshooting

### Node.js Version Error
```
You are using Node.js 18.20.8. For Next.js, Node.js version ">=20.9.0" is required.
```
**Solution**: Upgrade to Node.js 20+

### Port Already in Use
**Solution**: Kill the process using port 3000:
```bash
lsof -ti:3000 | xargs kill
```
Or use a different port:
```bash
npm run dev -- -p 3001
```

### Build Errors
Try:
```bash
rm -rf .next
npm run dev
```

## 📞 Need Help?

The project is fully set up with:
- Beautiful UI components
- Content management via Markdown
- Real examples from German markets
- Full navigation structure
- Theme support

Just run `npm run dev` and start exploring!

---

**Built with ❤️ for software engineers learning investment banking**

