// Review notes ("Confirm before publishing", counsel slots) show on local builds and Vercel
// previews, and are hidden on the production deployment. Vercel sets NEXT_PUBLIC_VERCEL_ENV.
// Set NEXT_PUBLIC_HIDE_REVIEW_NOTES=1 to hide them anywhere.
export const showReviewNotes =
  process.env.NEXT_PUBLIC_VERCEL_ENV !== "production" &&
  process.env.NEXT_PUBLIC_HIDE_REVIEW_NOTES !== "1";
