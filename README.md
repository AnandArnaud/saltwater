# saltwater

Saltwater is the marketing site of a small scheduling tool for clinics: a hero, a few posts, pricing, a newsletter form, a contact form and a sign-up form.

**Stack:** Plain HTML / CSS / JS (no build step)

It is intentionally small.

## Key user actions

open post · subscribe · contact

## Running it

```bash
# static site — no build
python3 -m http.server 8000   # then open http://localhost:8000
```

## Analytics

Google Analytics 4 runs through `gtag.js` (page views, `sign_up`, `generate_lead`, `select_content`) and a Google Tag Manager container carries the marketing tags (ads pixels, remarketing) with `dataLayer` pushes for `signup_submitted` and `newsletter_subscribed`. Both snippets are in `index.html`; the measurement id and container id are placeholders to replace before deploying.
