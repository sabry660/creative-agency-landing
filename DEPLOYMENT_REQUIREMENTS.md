# Montra Website Launch Information

Use this checklist to provide the remaining information needed to publish the website and make its public-facing details production-ready. Do not put passwords, API secrets, or account recovery codes in this document.

## Already in the Website

- Brand display name: Montra
- Framework: Next.js 15 with the App Router
- Contact actions: WhatsApp links and email links; there is no server-side form submission or email service configured
- Progressive web app: manifest, service worker, and offline page are present
- Main page language: English
- Logo path: `public/logo.png`
- Page title: `Montra — Premium Landing Page Studio`
- Search description: `Distinctive landing pages with thoughtful design, purposeful motion, and carefully crafted interactions.`
- Brand tagline: `Creative growth studio`
- Pricing display currency: EGP
- PWA icon files: `public/icons/icon-180.png`, `icon-192.png`, `icon-512.png`, and `maskable-512.png`
- Apple Touch icon: `public/icons/apple-touch-icon.png` (180 x 180 px)

Please confirm these details are final before launch.

## Current Website Values to Confirm

These values are already configured in the code. Confirm each one or provide its replacement:

- WhatsApp number: `201201289813` (international format without `+` or spaces). Confirm that this is the public business number.
- Estimate-message recipient: `Mohamed Sabry` is hard-coded in the contact and pricing WhatsApp messages. Confirm the name or provide the correct recipient name.
- Public email: not configured; the current value is empty.
- Instagram: not configured; the current value is empty.
- Facebook: not configured; the current value is empty.
- LinkedIn: not configured; the current value is empty.
- WhatsApp social-profile field: not configured; the current value is empty. The separate WhatsApp contact number above is configured.
- GitHub and X/Twitter: no public profile URLs are configured in the contact data.

Current package prices, all displayed in EGP:

- Starter: EGP 1,500
- Professional: EGP 1,750
- Premium: EGP 2,000

Current add-on prices, all displayed in EGP unless marked as a percentage:

- Copywriting: EGP 500
- Custom hero section: EGP 400
- Mini brand identity: EGP 700
- 3-5 custom illustrations: EGP 500
- 3 social media graphics: EGP 400
- Advanced GSAP motion: EGP 750
- Integration of an existing 3D model: EGP 750
- Figma UI/UX design file: EGP 300
- Additional page: EGP 350
- Additional language: EGP 500
- API integration: EGP 600
- Rush delivery: 30% of the package and applicable add-on subtotal

Confirm that these prices are current, that EGP is the intended currency, and whether taxes are included. The template data contains a base price of EGP 700 but has no template entries; no Templates section is currently included on the main page.

The project showcase is populated with project names, images, and live-demo links. Confirm that each project is approved for display and that Montra has permission to use its name, imagery, and linked demo.

The privacy policy currently uses the Montra display name but does not specify a legal entity, jurisdiction, contact email, or effective date. It also describes possible analytics, cookies, and third-party services; confirm the actual data practices and revise the policy accordingly before launch.

## Business and Legal Details

- Registered business or legal entity name, if different from Montra:
- Country and jurisdiction where the business is registered:
- Public business address, if legally required or desired:
- Privacy-policy owner or responsible entity:
- Privacy inquiries email address:
- Privacy policy effective date:
- Applicable privacy or consumer-protection requirements reviewed by:
- Terms of service URL or confirmation that no terms page is required:

The current privacy policy should be reviewed against the actual business identity, location, data practices, and applicable law before publication.

## Contact and Social Links

- WhatsApp number in international format, digits only for the `wa.me` link (include country code):
- Public business email address:
- Instagram profile URL:
- LinkedIn profile URL:
- Facebook profile URL, if used:
- GitHub profile URL, if used:
- X/Twitter profile URL, if used:
- Any other public profile URL:

Confirm that each address and profile is public and monitored. The current contact flow opens WhatsApp or the visitor's email application; it does not deliver form submissions to a database.

## Services, Pricing, and Sales

- Currency for all displayed package and add-on prices:
- Whether listed prices include applicable taxes:
- Countries or regions served:
- Any minimum project budget or service availability limits:
- Confirm the Starter, Professional, and Premium prices and included scope:
- Confirm add-on prices and whether any are estimates or starting prices:
- Preferred wording for custom quotes and project timelines:
- Payment methods or payment-provider URL, if payments will be accepted on this website:

## Domain and Hosting

- Preferred production domain:
- Should the canonical address use `www` or the root domain:
- Preferred hosting provider (Vercel is a straightforward fit for this Next.js app):
- Git repository URL and production branch:
- DNS provider and confirmation that someone on your team can update DNS records:
- Person or team responsible for hosting and domain billing:
- Preferred launch date or maintenance window:

Invite collaborators through the hosting or domain provider's access controls. Do not send account passwords or transfer codes in this file.

## Content and Brand Assets

- Final approval of the logo at `public/logo.png`:
- Confirmation that all project images, fonts, logos, and other assets are owned or licensed for public use:
- Approved project names, descriptions, categories, and image credits:
- Final live-demo URLs for projects, if applicable:
- Open Graph/social sharing image: `public/og-image.jpg` (1200 x 630 px; confirm final approval):
- Final page title and search description, if different from the current Montra metadata:
- Preferred public-facing brand tagline and business description:

## Analytics, Cookies, and External Services

- Analytics provider (for example, Google Analytics, Plausible, or none):
- Analytics measurement ID, to be configured securely if needed:
- Advertising pixels or conversion tracking, if any:
- Cookie-consent requirements and approved consent tool, if tracking is enabled:
- Search Console or webmaster account to verify the production domain:
- External form, CRM, newsletter, or email service to integrate, if any:

No analytics, advertising, payment, or server-side form credentials are currently required by the website. Supply any future secrets through the hosting provider's environment-variable settings, not through this Markdown file or source control.

## Production Sign-Off

- Confirm the production domain resolves over HTTPS:
- Confirm the WhatsApp number and email action on desktop and mobile:
- Confirm all social links and project demo links:
- Confirm the privacy policy and legal business details:
- Confirm pricing currency and tax wording:
- Confirm the PWA name, icon, and offline experience:
- Confirm desktop and mobile layout, navigation, and contact flow:
- Name of the person approving launch:
- Approval date:
links 
