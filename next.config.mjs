/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        TELEGRAM_API: process.env.TELEGRAM_API,
    },
    async redirects() {
        return [
          // {
          //   source: "/services/IndividualProject",
          //   destination: "/services/word-press",
          //   permanent: true,
          // },
          {
            source: "/services/WordPress",
            destination: "/services/word-press",
            permanent: true,
          },
          // {
          //   source: "/services/SiteCatalog",
          //   destination: "/services/site-catalog",
          //   permanent: true,
          // },
          {
            source: "/services/BusinessCardWebsite",
            destination: "/services/business-card-website",
            permanent: true,
          },
          // {
          //   source: "/services/LandingPage",
          //   destination: "/services/landing-page",
          //   permanent: true,
          // },
          // {
          //   source: "/services/WebsiteTesting",
          //   destination: "/services/website-testing",
          //   permanent: true,
          // },
          {
            source: "/services/Logo",
            destination: "/services/logo",
            permanent: true,
          },
          {
            source: "/services/CorporateWebsite",
            destination: "/services/corporate-website",
            permanent: true,
          },
          {
            source: "/services/WebDesign",
            destination: "/services/web-design",
            permanent: true,
          },
          {
            source: "/services/QRCodeMenu",
            destination: "/services/qr-code-menu",
            permanent: true,
          },
          {
            source: "/services/GraphicDesign",
            destination: "/services/graphic-design",
            permanent: true,
          },
          {
            source: "/services/WebsitePromotionSEO",
            destination: "/services/website-promotion-seo",
            permanent: true,
          },
          {
            source: "/ourProjects/Ice-Cream",
            destination: "/ourProjects/ice-cream",
            permanent: true,
          },
          {
            source: "/ourProjects/Pets",
            destination: "/ourProjects/pets",
            permanent: true,
          },
          {
            source: "/ourProjects/Coffee-Shop",
            destination: "/ourProjects/coffee-shop",
            permanent: true,
          },
          {
            source: "/ourProjects/Photographer-Gerera",
            destination: "/ourProjects/photographer-gerera",
            permanent: true,
          },
          {
            source: "/ourProjects/Andezyan-Build",
            destination: "/ourProjects/andezyan-build",
            permanent: true,
          },
          {
            source: "/ourProjects/Mountains-Hotel",
            destination: "/ourProjects/mountains-hotel",
            permanent: true,
          },
          {
            source: "/ourProjects/Watches",
            destination: "/ourProjects/watches",
            permanent: true,
          },
          // {
          //   source: "/ourProjects/Architrave",
          //   destination: "/ourProjects/architrave",
          //   permanent: true,
          // },
          {
            source: "/ourProjects/Daily-Rent",
            destination: "/ourProjects/daily-rent",
            permanent: true,
          },
          {
            source: "/ourProjects/Drinks-And-Desserts",
            destination: "/ourProjects/drinks-and-desserts",
            permanent: true,
          },
          // {
          //   source: "/blog/ArtificialIntelligenceTrends",
          //   destination: "/blog/artificial-intelligence-trends",
          //   permanent: true,
          // },
          // {
          //   source: "/blog/howToCreateSite",
          //   destination: "/blog/site-creating",
          //   permanent: true,
          // },
        ];
    },
};

export default nextConfig;
