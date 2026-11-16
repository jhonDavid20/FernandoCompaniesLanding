# Fernando Companies: website

Astro 5 (static) + Tailwind v4. Replaces the Wix site at fernandocompanies.com.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type check + static build to dist/
```

## Design source
The look is taken from the client's current site and logo: black / white / light gray, the logo's orange-gold (#F7931E), Trirong headings and Lato body, editorial photo-and-text rows. The hero video is the client's own clip (`public/video/`, encoded from IMG_6381.mov); its first frame is the poster and LCP image.

## Where things live
- **All copy and business data:** `src/data/site.ts` (per-locale object; add `es` later)
- Pages: `src/pages/` · components: `src/components/` · theme tokens: `src/styles/global.css`
- Project photos: drop files in `src/assets/projects/`, import them in `site.ts`, set `image` + `imageAlt` on the project. `astro:assets` handles resizing and WebP.
- OG image: `node scripts/og-image.mjs` regenerates `public/og.png`.

## Contact form
Uses [Web3Forms](https://web3forms.com). Create an access key for FC@fernandocompanies.com and set `PUBLIC_WEB3FORMS_KEY` (in `.env` locally, and in the hosting env vars). Without it the form shows a notice and the submit button stays disabled.

## Copy rule
All visible text is the client's own wording from the old Wix pages (`src/data/site.ts` says so at the top). Do not add claims, slogans or sections they have not approved. Only meta descriptions and form/UI labels were written new.

## Pending from the client (search for `TODO(client)`)
- Main brand: the home page says "Companies by Fernando", About and Services say "Fernando Construction", the legal name is "Fernando Companies". Pick one; official logo as vector
- Confirm the residential interior photo is from the Schilling Building Apartments; more high-res project photos
- Group companies (Fernando Construction, Fargo Contracting, White Diamond Construction Company): website links; the restaurant, if it should be listed
- One client logo on the old About page could not be downloaded (Wix returns 403); ask which client it is
- If they want them: a work process section, licenses / insurance, office hours, social profiles, Foreman Academy link (set `business.academy.url` and it appears)

## Redirects (301)
`/about-us-1 → /about`, `/about-3 → /services` in `vercel.json` (and `public/_redirects` for Netlify/Cloudflare).

## Going live
1. Deploy preview to Vercel; share URL with client.
2. After approval, Wix → Domains → Manage DNS Records: change the root **A** record and the **www CNAME** to Vercel's values. **Do not touch MX or TXT** (email).
3. Check SSL, email delivery, redirects, and submit the sitemap in Google Search Console.
