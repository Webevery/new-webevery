const baseUrl = process.env.NEXT_PUBLIC_MAIN_URL;

export const getDataForServices = async () => {
  try {
    const res = await fetch(`${baseUrl}api/services`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getDataForOurProjects = async () => {
  try {
    const res = await fetch(`${baseUrl}api/ourProjects`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getDataForBlog = async () => {
  try {
    const res = await fetch(`${baseUrl}api/blog`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function sitemap() {
  try {
    const dataServices = await 
      Promise.resolve().then(() => getDataForServices())
    ;
    const dataOurProjects = await Promise.resolve().then(() => 
      getDataForOurProjects());
    const dataBlog = await Promise.resolve().then(() => getDataForBlog());

    const linksServices = dataServices?.map((el) => ({
      url: `${baseUrl}services/${el.slug}`,
      lastModified: new Date(el.updatedAt).toISOString(),
      changeFrequency: "monthly",
      priority: 0.5,
    }));

    const linksOurProjects = dataOurProjects?.map((el) => ({
      url: `${baseUrl}ourProjects/${el.slug}`,
      lastModified: new Date(el.updatedAt).toISOString(),
      changeFrequency: "monthly",
      priority: 0.5,
    }));

    const linksBlog = dataBlog?.map((el) => ({
      url: `${baseUrl}blog/${el.slug}`,
      lastModified: new Date(el.updatedAt).toISOString(),
      changeFrequency: "monthly",
      priority: 0.5,
    }));

    const routes = [
      { href: "", priority: 0.8 },
      { href: "services", priority: 0.8 },
      { href: "ourProjects", priority: 0.8 },
      { href: "team", priority: 0.8 },
      { href: "contacts", priority: 0.8 },
      { href: "blog", priority: 0.8 },
      { href: "faq", priority: 0.8 },
    ]?.map((route) => ({
      url: `${baseUrl}${route.href}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: route.priority,
    }));

    return [...routes, ...linksOurProjects, ...linksServices, ...linksBlog];
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }return [];
}