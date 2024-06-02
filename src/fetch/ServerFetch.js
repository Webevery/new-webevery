export const getData = async (collection) => {
    const res = await fetch(`${process.env.URL}/api/${collection}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};


export const getMetaBySlug = async (collection, slug) => {
  try {
    const res = await fetch(`${process.env.URL}/api/${collection}/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};