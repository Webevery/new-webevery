import { GetDataFromSection } from "@/fetch/ClientFetch";

export function GetValuesArrayFromData(collection, key) {
    const { data } = GetDataFromSection(collection);
    const ValuesArray = data?.map((item) => item[key]);
    return ValuesArray
}