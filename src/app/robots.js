const baseUrl = process.env.NEXT_PUBLIC_MAIN_URL;

export default async function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/api/", "/dashboard/"],
    },
    sitemap: `${baseUrl}sitemap.xml`,
  };
}
