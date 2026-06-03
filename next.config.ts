import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubBasePath = "/mama-leone";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(isGithubPages
    ? {
        output: "export",
        basePath: githubBasePath,
        assetPrefix: `${githubBasePath}/`,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        images: {
          formats: ["image/avif", "image/webp"],
        },
        async redirects() {
          return [
            {
              source: "/:path*",
              has: [{ type: "host", value: "mama-leone.de" }],
              destination: "https://www.mama-leone.de/:path*",
              permanent: true,
            },
          ];
        },
        async headers() {
          return [
            {
              source: "/(.*)",
              headers: [
                { key: "X-Frame-Options", value: "SAMEORIGIN" },
                { key: "X-Content-Type-Options", value: "nosniff" },
                {
                  key: "Referrer-Policy",
                  value: "strict-origin-when-cross-origin",
                },
                {
                  key: "Permissions-Policy",
                  value: "camera=(), microphone=(), geolocation=()",
                },
              ],
            },
          ];
        },
      }),
};

export default nextConfig;
