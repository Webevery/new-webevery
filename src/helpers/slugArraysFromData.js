import { GetDataFromSection } from "@/fetch/ClientFetch";

export function GetSlugArrayFromData(collection) {
    const { data } = GetDataFromSection(collection);
    const SlugArray = data?.map((item) => item.slug);
    return SlugArray
}