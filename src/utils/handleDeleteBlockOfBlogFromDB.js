// удаляет один блок из массива blocks в блоге
// data - вся информация по item-у
// index - индекс удаляемого блока в массиве data.blocks


export const handleDeleteBlockOfBlogFromDB = async (data, index) => {
    const deletedBlock = data.blocks.splice(index, 1);
    console.log('deletedBlock', deletedBlock)
    console.log(`Block with index ${index} was deleted.`)

    try {
        await fetch(`/api/blog/${data.slug}`, {
            method: "PATCH",
            body: JSON.stringify({
                blocks: data.blocks,
            }),
        });

    } catch (error) {
        console.log(error);
    }
};