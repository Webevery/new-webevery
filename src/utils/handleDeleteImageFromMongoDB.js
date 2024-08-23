// удаляет одно фото из массива фоток
// data - вся информация по item-у
// data.slug - динамический параметр страницы
// item - значение выбранной фотки (publicId)


// (для удаления фото из массива мобильных фотографий проекта)
export const handleDeleteImageFromMongoDB = async (data, item) => {
    const newArr = data.mobileImages.filter((el) => el !== item);

    try {
        await fetch(`/api/ourProjects/${data.slug}`, {
            method: "PATCH",
            body: JSON.stringify({
                mobileImages: newArr,
            }),
        });

    } catch (error) {
        console.log(error);
    }
};