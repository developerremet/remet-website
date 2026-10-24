// Confirmed company facts. Every page reads them from here, so a change lands everywhere at once.
export const site = {
  name: "Remet",
  url: "https://remet.me",
  company: "Remet Socials Private Limited",
  addressLines: ["B3, BRG Hill View", "Indore 452016, Madhya Pradesh"],
  email: "support@remet.me",
  grievanceOfficer: "Abhishek Tiwari",
  grievanceSubject: "Grievance",
  acknowledgeWithin: "24 hours",
  resolveWithin: "15 days",
  city: "Indore",
} as const;

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
