export const createImagesArrayForDeletingFromCloudinary = (data) => {
    const arrayForDeleting = [];

    if (data.hasOwnProperty("photo")) {
        arrayForDeleting.push(data.photo);
    }

    if (data.hasOwnProperty("mockup")) {
        arrayForDeleting.push(data.mockup);
    }

    if (data.hasOwnProperty("heroImage")) {
        arrayForDeleting.push(data.heroImage);
    }

    if (data.hasOwnProperty("screensImage")) {
        arrayForDeleting.push(data.screensImage);
    }

    if (data.hasOwnProperty("mobileImages")) {
        arrayForDeleting.push(...data.mobileImages);
    }

    if (data.hasOwnProperty("mainImage")) {
        arrayForDeleting.push(data.mainImage);
    }

    if (data.hasOwnProperty("blocks")) {
        data.blocks.map(item => item.image && arrayForDeleting.push(item.image))
    }

    return arrayForDeleting;
}