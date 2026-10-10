# SITE CONTENT - SABRY

This file contains all editable content for the Sabry website. Changes here should be reflected in the code configuration files (src/data/siteContent.ts and src/data/projects.ts).

---

## A. BRAND INFORMATION

**Brand Name:** Sabry

**Tagline:** Premium landing page studio

**Hero Eyebrow:** INDEPENDENT DIGITAL STUDIO

**Hero Headline:** Digital experiences built to make your brand stand out.

**Hero Supporting Text:** We create distinctive landing pages with thoughtful design, purposeful motion, and carefully crafted interactions.

**Primary CTA Label:** Explore Our Work

**Secondary CTA Label:** Start a Project

**Studio Description:** A premium creative studio specializing in conversion-focused landing pages with optional custom motion and 3D experiences.

---

## B. NAVIGATION

Navigation items with their corresponding section IDs:

| Label | Section ID |
|-------|------------|
| Home | #hero |
| Work | #work |
| Services | #services |
| Pricing | #pricing |
| Templates | #templates |
| Process | #process |
| Contact | #contact |

---

## C. SERVICES

Services offered by Sabry:

### Landing Page Design & Development
A complete landing page tailored to a brand, campaign, product, or service.
- Included in: All base packages
- Add-on: Custom hero section

### UI/UX Design
Structured layouts, user journeys, visual hierarchy, and interface design.
- Included in: Professional and Premium packages
- Add-on: Mini brand identity

### Motion & Interaction
Purposeful animation, micro-interactions, and premium scroll experiences.
- Included in: Premium package
- Add-on: Advanced GSAP motion

### 3D Experiences
Custom or integrated 3D visuals when appropriate for the project.
- Add-on: Integration of existing 3D model (EGP 750)
- Add-on: Custom 3D development (starting at EGP 2,000)

### Visual Assets
Custom graphics and supporting visual elements.
- Add-on: 3-5 custom illustrations (EGP 500)
- Add-on: 3 social media graphics (EGP 400)

### Copywriting
Structured page messaging and conversion-oriented copy.
- Add-on: Copywriting (EGP 500)

---

## D. PRICING PACKAGES

All prices in EGP (Egyptian Pounds).

### Package 1: Starter
**Price:** EGP 1,500

**Positioning:** A clean, focused landing page for a simple brand, service, or campaign.

**Included Sections:** PLACEHOLDER — Confirm before publishing
- Hero section
- Features/benefits section
- CTA section
- Footer

**Included Features:**
- Responsive design
- Basic animations
- 2 revision rounds
- PLACEHOLDER — Confirm delivery expectation

**Exclusions:**
- Custom 3D
- Advanced motion
- Multiple pages
- Source code templates

**CTA Label:** Get Started

**To Confirm:**
- Exact section count
- Revision policy
- Delivery timeline
- Support duration

---

### Package 2: Professional
**Price:** EGP 1,750

**Positioning:** A more customized landing page with stronger visual presentation and additional design flexibility.

**Included Sections:** PLACEHOLDER — Confirm before publishing
- All Starter sections
- Services/offerings section
- Testimonials section (if provided)
- Enhanced visual presentation

**Included Features:**
- All Starter features
- UI/UX design input
- Enhanced animations
- 3 revision rounds
- PLACEHOLDER — Confirm delivery expectation

**Exclusions:**
- Custom 3D
- Advanced motion
- Multiple pages

**CTA Label:** Get Started

**To Confirm:**
- Exact section count
- Revision policy
- Delivery timeline
- Support duration

---

### Package 3: Premium
**Price:** EGP 2,000

**Positioning:** A more visually ambitious landing page with additional customization and richer interactions within the defined scope.

**Included Sections:** PLACEHOLDER — Confirm before publishing
- All Professional sections
- Gallery/portfolio section
- Advanced interactions
- Enhanced motion design

**Included Features:**
- All Professional features
- Advanced GSAP motion
- Premium scroll experiences
- 4 revision rounds
- PLACEHOLDER — Confirm delivery expectation

**Exclusions:**
- Custom 3D (available as add-on)
- Multiple pages (available as add-on)

**CTA Label:** Get Started

**To Confirm:**
- Exact section count
- Revision policy
- Delivery timeline
- Support duration

---

## E. ADD-ONS

All prices in EGP. Draft values — confirm before publishing.

| Add-on | Price | Pricing Model | Notes |
|--------|-------|---------------|-------|
| Copywriting | 500 | Fixed | Structured messaging and conversion copy |
| Custom hero section | 400 | Fixed | Enhanced hero with custom design |
| Mini brand identity | 700 | Fixed | Logo refinement, color palette, typography |
| 3-5 custom illustrations | 500 | Fixed | Custom graphics for the page |
| 3 social media graphics | 400 | Fixed | Matching social media assets |
| Advanced GSAP motion | 750 | Fixed | Premium scroll interactions and animations |
| Integration of existing 3D model | 750 | Fixed | Integrate provided 3D asset |
| Custom 3D development | 2,000 | Starting price | Custom 3D creation — final price based on scope |
| Additional page | 350 | Fixed per page | Extra landing pages |
| Additional language | 500 | Fixed per language | Translation and layout adjustment |
| Simple booking/API integration | 500 | Starting price | Basic integration — confirm scope |
| Rush delivery | 30% | Percentage of subtotal | +30% of applicable subtotal |

**Calculation Rules:**
- Total = Base Package Price + Selected Add-ons (fixed prices)
- For "starting price" add-ons, final price requires confirmation
- Rush delivery applies to subtotal (base + applicable add-ons)
- PLACEHOLDER — Confirm which add-ons rush percentage applies to

---

## F. PROJECTS

### Project Schema

To add a new project:

1. Copy screenshot to `public/projects/`
2. Add entry to `src/data/projects.ts` with:
   - `id`: Unique identifier
   - `title`: Project name
   - `category`: Project category (e.g., "Restaurant", "E-commerce", "Technology")
   - `description`: Short description (1-2 sentences)
   - `image`: Path to screenshot (e.g., "/Projects/filename.jpg")
   - `liveDemo`: URL to live demo (if available)
   - `sourceRepo`: URL to source repository (if publicly available)
   - `year`: Project year (optional)
   - `featured`: Boolean for homepage showcase (optional)

3. Run local dev server and verify card loads
4. After PWA caching, verify screenshot works offline

### Current Projects

See `src/data/projects.ts` for the full list. Projects use screenshots from `public/Projects/` with metadata from the provided project code.

**Note:** Technologies field removed from display as requested.

---

## G. TEMPLATES

### Template Schema

| Field | Description |
|-------|-------------|
| id | Unique identifier |
| name | Template name |
| category | Template category |
| price | Price in EGP |
| image | Screenshot path |
| demoUrl | Demo URL (if available) |
| stack | Technology stack |
| features | Included files/features |
| availability | "Available" or "Coming Soon" |

### Initial Template Price
**Base Price:** EGP 700 (PLACEHOLDER — Confirm before publishing)

### Business Model
Customers purchase template source code and customize it themselves. This is not the same as commissioning a custom landing page.

### Current Templates
PLACEHOLDER — Add template entries with real screenshots and data when available.

---

## H. CONTACT INFORMATION

### WhatsApp
**Number:** PLACEHOLDER — Add WhatsApp number
**Link Template:** https://wa.me/{number}

### Email
**Address:** PLACEHOLDER — Add email address
**Link Template:** mailto:{email}

### Contact Form
**Fields:**
- Name (required)
- Email (required)
- WhatsApp number (optional)
- Business/project name (optional)
- Inquiry type (dropdown)
- Selected package (prefilled from pricing)
- Selected add-ons (prefilled from calculator)
- Selected template (prefilled from templates)
- Estimated budget (optional)
- Project description (required)
- Preferred contact method (dropdown: WhatsApp, Email, Phone)

**Submission:**
PLACEHOLDER — Configure form submission destination
- Option 1: Email service (e.g., Formspree, EmailJS)
- Option 2: Backend API endpoint
- Option 3: WhatsApp integration

**Important:** Internet connection required for form submission. No offline submission queue implemented.

### Social Links
PLACEHOLDER — Add social links when available
- Instagram
- LinkedIn
- Twitter/X
- GitHub

---

## I. PROCESS / HOW IT WORKS

### Customer Journey

1. **Choose a package or template** — Select from pricing packages or template marketplace
2. **Share project requirements** — Provide details about brand, goals, and content
3. **Confirm scope and pricing** — Review package, add-ons, and final estimate
4. **Design and development** — Create the landing page according to agreed scope
5. **Review and revisions** — Make changes within agreed revision allowance
6. **Delivery and handoff** — Receive source files and deployment guidance

### Domain and Hosting

**Important:** Customers purchase and manage their own domain and hosting.

- Sabry delivers website files and source code
- Sabry provides guidance on connecting domain and deploying
- Domain and hosting costs are separate unless explicitly included
- PLACEHOLDER — Confirm if any hosting assistance is offered

### Handoff Process

- Deliver agreed website files and source code
- Provide deployment instructions
- Explain how to connect custom domain
- PLACEHOLDER — Document support duration after delivery

---

## J. FAQ

### Questions and Answers

**Q: What is included in each landing page package?**
A: Each package includes a defined number of sections, design input, responsive layout, and a specific number of revision rounds. See the Pricing section for details. PLACEHOLDER — Confirm exact inclusions.

**Q: Can I request custom animations or 3D?**
A: Yes, custom animations and 3D are available as add-ons. Advanced GSAP motion and 3D model integration are offered as separate options. Custom 3D development is available starting at EGP 2,000, with final pricing based on scope.

**Q: What is the difference between a template and a custom landing page?**
A: Templates are pre-designed landing pages you purchase and customize yourself at a fixed price. Custom landing pages are designed and built specifically for your brand, with design input, revisions, and tailored content.

**Q: Do I need to purchase my own domain and hosting?**
A: Yes. You are responsible for purchasing and managing your domain name and hosting. Sabry delivers the website files and provides guidance on deployment, but domain and hosting costs are separate.

**Q: Will I receive the source code?**
A: Yes. You receive the full source code for your landing page. For templates, you receive the template source code to customize. For custom projects, you receive the completed project files.

**Q: How do I request a quote?**
A: Use the contact form to share your project details. If you've selected a package or add-ons from the pricing calculator, those details will be included automatically. You can also reach out via WhatsApp or email.

**Q: Can I request additional sections or languages?**
A: Yes. Additional pages and additional languages are available as add-ons. See the Add-ons section for pricing.

**Q: How is the final price confirmed?**
A: The estimate from the pricing calculator is indicative. The final price is confirmed after reviewing your project requirements, scope, and any custom requests. For add-ons marked as "starting price," the final amount will be confirmed based on the actual work required.

**PLACEHOLDER — Add more FAQs as needed**

---

## K. PWA CONFIGURATION

### App Metadata
**Name:** Sabry
**Short Name:** Sabry
**Description:** Premium landing page studio creating distinctive digital experiences.

### Theme Colors
**Theme Color:** #ff4d00 (orange accent)
**Background Color:** #0a0a0a (dark background)

### Icons
PLACEHOLDER — Add icon paths when created
- Icon 192x192: `public/icons/icon-192.png`
- Icon 512x512: `public/icons/icon-512.png`
- Favicon: `public/favicon.ico`

### Offline Fallback
**Path:** `/offline`

### Cache Strategy
- Core assets: Precache on install
- Project images: Cache-first with stale-while-revalidate
- Navigation requests: Network-first with offline fallback
- External resources: Do not cache (CDN, fonts, etc.)

### Cache Updates
- Update cache version in service worker on each release
- Old caches are cleaned up on activation
- Users receive new version on next visit

### Testing Offline
1. Visit site online to cache assets
2. Go offline
3. Refresh page
4. Verify main sections and project images load
5. Verify contact form shows offline message
6. Verify navigation hashes work

---

## L. PUBLISHING CHECKLIST

Before publishing, confirm:

### Brand & Contact
- [ ] Final brand name (Sabry) is correct
- [ ] WhatsApp number is configured
- [ ] Email address is configured
- [ ] Social links are configured or hidden
- [ ] Contact form submission destination is configured

### Pricing & Packages
- [ ] Package inclusions are finalized
- [ ] Package exclusions are documented
- [ ] Revision counts are confirmed
- [ ] Delivery expectations are confirmed
- [ ] Add-on prices are approved
- [ ] Rush delivery calculation rules are confirmed

### Projects
- [ ] All project screenshots are correct
- [ ] Project metadata is accurate
- [ ] Live demo URLs work (if provided)
- [ ] Source repository URLs are correct (if public)
- [ ] Technologies field is removed from display

### Templates
- [ ] Template screenshots are added
- [ ] Template metadata is complete
- [ ] Template availability is accurate
- [ ] Template demo links work (if provided)

### PWA
- [ ] App icons are created (192x192, 512x512)
- [ ] Favicon is created
- [ ] Manifest is tested
- [ ] Service worker is tested
- [ ] Offline behavior is tested
- [ ] Production domain is configured in manifest

### Legal & Policy
- [ ] Privacy policy (if needed)
- [ ] Terms of service (if needed)
- [ ] Cookie policy (if needed)
- [ ] Support duration is documented
- [ ] Refund policy (if applicable) is documented

### Content Review
- [ ] All copy is proofread
- [ ] No unsupported claims
- [ ] No fake testimonials
- [ ] No fake customer logos
- [ ] All links work
- [ ] All forms validate correctly

---

## HOW TO UPDATE CONTENT

### Quick Updates (copy, prices, contact info)
1. Edit this file (SITE_CONTENT.md)
2. Update src/data/siteContent.ts to match
3. Components will automatically use new values

### Adding Projects
1. Add screenshot to public/projects/
2. Add entry to src/data/projects.ts
3. Update project list in this file if needed

### Adding Templates
1. Add screenshot to public/templates/ (create directory if needed)
2. Add entry to src/data/templates.ts
3. Update template list in this file

### Changing Colors/Fonts
1. Update CSS variables in src/app/globals.css
2. Update this file for documentation

### PWA Updates
1. Update manifest.json
2. Update service worker cache version
3. Update this file for documentation
