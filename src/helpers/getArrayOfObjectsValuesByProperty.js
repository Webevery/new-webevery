import { GetDataFromSection } from "@/fetch/ClientFetch";

// из исходного массива объектов создаёт массив значений необходимого свойства(property) 
export function getArrayOfObjectsValuesByProperty(collection, property) {
    const { data } = GetDataFromSection(collection);
    const arr = data?.map((item) => item[property]);
    return arr
}