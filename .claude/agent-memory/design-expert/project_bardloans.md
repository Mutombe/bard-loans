---
name: Bard Loans Project Context
description: South African lending company landing page - React + Tailwind + Framer Motion stack, premium fintech aesthetic with African warmth
type: project
---

Bard Loans is a South African lending company based in Sandton (11 Alice Lane). Building a React landing page with Tailwind CSS (v4, CSS-native config in index.css), Framer Motion, Sonner toasts, and Phosphor Icons. Using Unsplash images.

**Why:** The design must communicate trust and accessibility to South African audiences who are often underserved by traditional banks. Mobile-first is critical (80%+ mobile web traffic in SA). WhatsApp is the primary communication channel.

**How to apply:** Design decisions should prioritize the "Warm Authority" philosophy -- premium fintech quality with community warmth. Full design system documented in DESIGN-SYSTEM.md at project root.

**Actual implemented colors (index.css @theme):**
- Navy: #312F4D (primary dark)
- Navy-light: #272540 (dark mode alternate bg)
- Navy-card: #3A3858 (card surfaces in dark mode)
- Navy-deep: #1E1C33 (darkest background)
- Navy-mid: #4A4768
- Orange: #EE7D36 (primary accent)
- Orange-dark: #D46A28
- Orange-light: #F49A5C
- Pearl: #F8F9FC (light alternate bg)
- Mist: #EEF1F6 (borders, subtle bg)
- Emerald: #10B981 (success)
- Slate: #64748B (secondary text)

**Section flow with bg colors:**
1. Hero: bg-navy (dark, carousel images + gradient overlay)
2. TrustBar: floating white card overlapping hero (-mt-16)
3. About: bg-white / dark:bg-navy
4. Offerings: bg-pearl / dark:bg-navy-light
5. LoanCalculator: bg-white / dark:bg-navy
6. Requirements: bg-pearl/90 over Unsplash image / dark:bg-navy-light/93
7. FAQ: bg-white / dark:bg-navy
8. CTA: bg-navy (always dark)
9. Footer: bg-navy-light (always dark)

**Font families:** Plus Jakarta Sans (headings), Inter (body), DM Mono (financial numbers)
**No tailwind.config.js** -- uses Tailwind v4 CSS-native @theme in index.css

**Brand patterns from manual (page 8):**
1. Diamond/chevron geometric pattern from logo mark outlines (navy blue lines)
2. Repeating grid of "BL" logo symbol (orange outlines)
