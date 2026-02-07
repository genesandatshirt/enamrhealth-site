# Technical Changelog

## Purpose
Track technical changes, deployments, and notable decisions.

## Format
- **Date (UTC):** YYYY-MM-DD
- **Change:** Brief description
- **Owner:** Person or team
- **Notes:** Optional implementation details or links

---

## 2026-02-07
- **Change:** Migrated site to Next.js and Vercel with GitHub auto-deploy.
- **Owner:** Enamr Health / Engineering
- **Notes:** Repo: `genesandatshirt/enamrhealth-site`. Production: `enamrhealth.com`.

- **Change:** Set hero to looping video with minimal waitlist layout.
- **Owner:** Enamr Health / Engineering
- **Notes:** Video: `/public/hero-brushing.mp4`, poster: `/public/h9YsvpFvuAEvb1OXNOhZi.jpeg`.

- **Change:** Added waitlist form validation and cookie consent persistence.
- **Owner:** Enamr Health / Engineering
- **Notes:** Cookie consent uses `enamr_cookie_consent`.

- **Change:** Added Mailchimp waitlist API integration.
- **Owner:** Enamr Health / Engineering
- **Notes:** Server-side route `app/api/waitlist/route.ts`. Requires `MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`, `MAILCHIMP_SERVER_PREFIX`.
