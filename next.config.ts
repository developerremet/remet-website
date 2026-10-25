import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old URLs from the previous static site keep working.
  async redirects() {
    return [
      { source: "/m", destination: "/", permanent: true },
      { source: "/m/:path*", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/privacy/index.html", destination: "/privacy", permanent: true },
      { source: "/terms/index.html", destination: "/terms", permanent: true },
      // The old favicon and wordmark, in case they are linked from elsewhere.
      { source: "/brand/mark.png", destination: "/icon.png", permanent: true },
      { source: "/brand/wordmark.png", destination: "/brand/wordmark-ink.png", permanent: true },
    ];
  },
};

export default nextConfig;
