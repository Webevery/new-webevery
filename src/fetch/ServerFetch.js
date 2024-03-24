export const getData = async (collection) => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/${collection}`, {
        cache: "no-store",
    });
    // console.log("getData", res);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};