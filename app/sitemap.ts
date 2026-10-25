import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/how-it-works", "/safety", "/privacy", "/terms", "/delete-account", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${site.url}${r}`, changeFrequency: "monthly", priority: r === "" ? 1 : 0.6 }));
}
