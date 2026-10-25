// Review notes ("Confirm before publishing", counsel slots, preview-only sections) are for the team.
// They fail closed: shown only in `next dev`, on Vercel preview deployments, or when SHOW_REVIEW_NOTES=1
// is set for a local build. Anywhere else, including the production deployment, they are left out.
// NEXT_PUBLIC_HIDE_REVIEW_NOTES=1 hides them everywhere. Only server components read this.
const vercelEnv = process.env.VERCEL_ENV ?? process.env.NEXT_PUBLIC_VERCEL_ENV;

export const showReviewNotes =
  process.env.NEXT_PUBLIC_HIDE_REVIEW_NOTES !== "1" &&
  (process.env.NODE_ENV === "development" || vercelEnv === "preview" || process.env.SHOW_REVIEW_NOTES === "1");
