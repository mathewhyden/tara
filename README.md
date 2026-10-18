# Tara Mindcare — Dr Anne Rosario, Counselling Psychologist

React + Vite + Tailwind site. Tagline: Heal • Empower • Thrive.

## Run locally
    npm install
    npm run dev        # http://localhost:3000 (or the port Vite prints)
    npm run build      # output in dist/

## Put it on the internet (any one)
- **Netlify:** drag the `dist/` folder onto app.netlify.com/drop, or connect the GitHub repo (build command `npm run build`, publish directory `dist`).
- **Vercel:** import the GitHub repo; framework Vite; build `npm run build`; output `dist`.
- **Single file:** `tara-mindcare-site.html` (included beside this zip) is a fully self-contained build. Upload it as `index.html` to any static host.

## Where to edit
- Contact, links, tagline: `src/data/siteData.ts` → `BRAND_INFO`
- Services: `SERVICES_DATA` · Blog drafts: `BLOG_POSTS_DATA` · FAQs: `FAQS_DATA` (same file)
- Logo and portrait: replace `src/assets/logo.webp` and `src/assets/anne.jpg`
- Colours: purple `#7F4B7C`, dark purple `#5B3259`, cream `#FAF6EE` (set in the components and `src/index.css`)

## Needs client confirmation before launch
- Blog drafts and FAQ answers are unreviewed drafts, not Dr Anne's published words.
- Logo was cut from a photo of the visiting card; swap in the original transparent PNG/SVG when available.
- Portrait: confirm it is Dr Anne's approved photo.
- No pricing, hours, testimonials or addresses are shown because none are verified.
- Forms open the visitor's email app (mailto). For real submissions, connect a form service such as Formspree or Web3Forms.
- Domain, canonical URL and sitemap are not set.
