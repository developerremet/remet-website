// Confirmed company facts. Every page reads them from here, so a change lands everywhere at once.
export const site = {
  name: "Remet",
  url: "https://remet.me",
  company: "Remet Socials Private Limited",
  addressLines: ["B3, BRG Hill View", "Indore 452016, Madhya Pradesh"],
  email: "support@remet.me",
  xUrl: "https://x.com/RemetSocials",
  instagramUrl: "https://www.instagram.com/remetsocials/",
  grievanceOfficer: "Abhishek Tiwari",
  grievanceSubject: "Grievance",
  acknowledgeWithin: "24 hours",
  resolveWithin: "15 days",
  /** Short forms of the two timelines, for the figure columns on the officer cards. Keep in step with the two above. */
  acknowledgeShort: "24h",
  resolveShort: "15d",
  /** Days a deleted account can still be restored by signing in. */
  deletionGraceDays: 30,
  city: "Indore",
} as const;

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
