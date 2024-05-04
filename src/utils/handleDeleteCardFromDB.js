// url - string for request
// mutateFunc - function mutate() from swr


export const handleDeleteCardFromDB = async (url, mutateFunc) => {
    try {
        await fetch(url, { method: "DELETE" });
        // автоматически обновляет страницу при изменении кол-ва карточек
        mutateFunc();
    } catch (error) {
        console.log(error);
    }
};