export const getData = async (collection) => {
    const res = await fetch(`${process.env.URL}/api/${collection}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};