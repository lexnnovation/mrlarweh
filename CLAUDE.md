# mrLarweh — Alex Larweh Portfolio

Personal portfolio for **Alex T. Larweh** — AI Engineer / Software Engineer, based in Accra,
Ghana, currently an AI Automation Engineer at Kioobi SRL (Italy). Deployed at lexnnovation.com
via Vercel (auto-deploys from `main`). Stack: React 18 + Vite, Tailwind CSS, Framer Motion, EmailJS.

Public brand name on the site is **Alexander Teye** (hero name, nav/footer wordmark, page title) —
a deliberate variation from the legal name used on resumes/IDs/LinkedIn. See `HERO.name` in
`src/constants/index.jsx`. GitHub repo path, LinkedIn URL, and resume PDF filenames intentionally
still reference "Larweh" since those are real external identifiers/documents.

Audience: recruiters and businesses evaluating him for AI Engineer / Software Engineer roles.
The site should read as evidence of technical craft, not just a list of claims.

## Git workflow

- Feature work happens on branches (e.g. `redesign/modern-portfolio-v2`), never directly on `main`.
- `main` is what Vercel deploys — only merge once a change has been reviewed and looks right
  in the browser at desktop + mobile widths.

## Content sources of truth

- Two resumes exist because Alex is dual-positioning for AI Engineer and Software Engineer roles:
  - `public/resume/alex-larweh-ai-engineer-resume.pdf`
  - `public/resume/alex-larweh-software-engineer-resume.pdf`
- Resume PDFs are the source of truth for role titles, dates, and bullet content in
  `src/constants/index.jsx` (EXPERIENCES, SKILLS, EDUCATION, BIO). When the resumes are updated,
  reconcile the constants file against them.
- **Resume download is currently disabled on purpose** — Alex doesn't want the PDFs publicly
  downloadable while the portfolio URL is printed on his actual CV/resume. `RESUMES` (constants)
  and `ResumeMenu.jsx` still exist and work, just aren't rendered anywhere; every spot that used to
  show `<ResumeMenu />` (Navbar, Hero, Footer) now shows `<ContactCTA />` instead — a mailto link to
  lex@lexnnovation.com ("Let's Talk"). To re-enable downloads later, swap `ContactCTA` back for
  `ResumeMenu` at those three call sites.

## Project categorization rule

Two distinct kinds of project live in the portfolio, and they render differently:

- **Web / product builds** (client sites, full-stack apps): show an image preview, description,
  and a live-site link. GitHub link only if the repo is public.
- **AI / automation systems** (e.g. AI Email Support System, AI WhatsApp Receptionist): these are
  often built on client/production infra with no public live URL to show. Render as a compact
  terminal-style card: repo/project name, description, tech tags, GitHub link only — no preview
  image, no "View Website" button.

Keep this split explicit in the data shape (e.g. a `type: "web" | "ai"` field) rather than
inferring it from which fields are present.

## Design system (redesign/modern-portfolio-v2)

Direction: mimics a dark, developer-terminal aesthetic (reference: IDE-window cards, numbered
section labels, monospace accents) — reskinned around Alex's own material since he's a backend/AI
engineer who actually lives in a terminal. Signature element: every card (stack snippet, photo,
project, resume picker) is framed as a mock editor/browser window with traffic-light dots and a
mono title bar (e.g. `~/skills/backend.json`, `~/projects/ai-whatsapp-receptionist`).

**Color** — both themes supported, **light is the default** (not tied to OS preference; a
manual toggle in the nav overrides and persists to `localStorage`):

| token | light | dark |
|---|---|---|
| `--bg` | `#F7F7F5` | `#0A0E14` |
| `--surface` (card fill) | `#FFFFFF` | `#111825` |
| `--surface-chrome` (window title-bar strip) | `#EFEFEC` | `#0D1219` |
| `--border` | `rgba(15,23,42,0.10)` | `rgba(255,255,255,0.08)` |
| `--text` | `#14161A` | `#E6E9EF` |
| `--text-muted` | `#5B6472` | `#8B93A7` |
| `--accent-amber` (primary: punctuation, numbers, primary CTA) | `#B9770E` | `#F2B84B` |
| `--accent-teal` (secondary: links, tags, code highlights) | `#0F9B8E` | `#4FD1C5` |

Amber/teal are darkened in light mode to hold AA contrast on white. Same IDE-window-chrome
signature in both themes — only the palette swaps.

**Type**:
- Display: Space Grotesk (headlines, name)
- Body: Inter
- Mono: JetBrains Mono (nav numbering, section eyebrows, window title bars, dates, tags)

**Layout signature**: numbered section eyebrows (`01.`, `02.`...) in mono + amber, matching the
reference — justified here because Experience/Education are genuinely chronological, and it's
also the explicit visual language the design brief (reference screenshot) asked to mimic.

## Known placeholders (fill in when available)

- GitHub repo links for the two AI/automation projects (Email Support System, WhatsApp
  Receptionist) — currently point at the GitHub profile until Alex provides the actual repo URLs.
