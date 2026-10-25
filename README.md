# remet.me

The Remet website: verified people nearby, a real place to meet. First city, Indore.

Built mobile-first to match the Remet app's design language (light theme). Next.js (App Router), Tailwind CSS 4, deployed on Vercel.

## Run it

```sh
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run typecheck
```

## Where things live

| Path | What |
| --- | --- |
| `app/<route>/page.tsx` | One file per page: `/`, `/how-it-works`, `/safety`, `/privacy`, `/terms`, `/delete-account`, `/contact` |
| `components/pages/<route>/` | Pieces used by one page only |
| `components/ui/` | Shared pieces that mirror the app: rows, cards, tinted cards, buttons, Munshi slot |
| `components/site/` | Header, footer, waitlist form, scroll progress, reveal |
| `components/magicui/` | Motion components from [Magic UI](https://magicui.design) (MIT, see `LICENSE.md` there) |
| `app/globals.css` | Colour, shadow, radius and font tokens taken from the app |
| `lib/site.ts` | Company facts (name, address, email, Grievance Officer). Change them here only |
| `lib/supabase-config.ts` | Public Supabase URL and anon key for the waitlist. The keep-alive workflow reads this file |
| `lib/waitlist.ts` | Waitlist signup (Supabase REST insert) |

## Review notes and counsel slots

Lines that start with "Confirm before publishing", the dashed "Counsel to draft" boxes and the preview-only "Full terms" / "Full privacy policy" sections show only in `npm run dev` and on Vercel preview deployments. Everywhere else, including the production deployment, they are left out (`lib/review.ts`). To see them in a local production build, build with `SHOW_REVIEW_NOTES=1`. `NEXT_PUBLIC_HIDE_REVIEW_NOTES=1` hides them everywhere.

Before remet.me points here:

- replace the prototype screenshots in `public/screens/` with TestFlight captures;
- put counsel's text in place of every counsel slot (Privacy, Terms, Safety, Contact);
- confirm the copy flagged by the review notes.

## Supabase keep-alive

`.github/workflows/supabase-keepalive.yml` pings the waitlist table every second day so the free-tier project does not pause. It can also be run by hand from the Actions tab.
