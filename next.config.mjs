/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        TELEGRAM_API: process.env.TELEGRAM_API,
    },
    async redirects() {
        return [
          {
            source: "/services/IndividualProject", // старий шлях
            destination: "/services/word-press", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/services/WordPress", // старий шлях
            destination: "/services/word-press", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/services/SiteCatalog", // старий шлях
            destination: "/services/site-catalog", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/services/BusinessCardWebsite", // старий шлях
            destination: "/services/business-card-website", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/services/LandingPage", // старий шлях
            destination: "/services/landing-page", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/services/WebsiteTesting", // старий шлях
            destination: "/services/website-testing", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/services/Logo", // старий шлях
            destination: "/services/logo", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/services/CorporateWebsite", // старий шлях
            destination: "/services/corporate-website", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/services/WebDesign", // старий шлях
            destination: "/services/web-design", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/services/QRCodeMenu", // старий шлях
            destination: "/services/qr-code-menu", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/services/GraphicDesign", // старий шлях
            destination: "/services/graphic-design", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/ourProjects/Ice-Cream", // старий шлях
            destination: "/ourProjects/ice-cream", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/ourProjects/Pets", // старий шлях
            destination: "/ourProjects/pets", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/ourProjects/Coffee-Shop", // старий шлях
            destination: "/ourProjects/coffee-shop", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/ourProjects/Photographer-Gerera", // старий шлях
            destination: "/ourProjects/photographer-gerera", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/ourProjects/Andezyan-Build", // старий шлях
            destination: "/ourProjects/andezyan-build", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/ourProjects/Mountains-Hotel", // старий шлях
            destination: "/ourProjects/mountains-hotel", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/ourProjects/Watches", // старий шлях
            destination: "/ourProjects/watches", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/ourProjects/Architrave", // старий шлях
            destination: "/ourProjects/architrave", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/ourProjects/DailyRent", // старий шлях
            destination: "/ourProjects/daily-rent", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/ourProjects/DrinksAndDesserts", // старий шлях
            destination: "/ourProjects/drinks-and-desserts", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/blog/ArtificialIntelligenceTrends", // старий шлях
            destination: "/blog/artificial-intelligence-trends", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
          {
            source: "/blog/SiteCreating", // старий шлях
            destination: "/blog/site-creating", // новий шлях
            permanent: true, // якщо `true`, використовує статус 308; якщо `false`, використовує статус 307
          },
        ];
    },
};

export default nextConfig;
