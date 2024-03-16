import * as yup from "yup";


export const dashboardBlogUpdateSchema = yup.object({
    newTitle: yup
        .string()
        .required("Title is required"),
    newTitleEn: yup
        .string()
        .required("Title is required"),
    newImages: yup
        .array()
        .min(2, "At least two items"),
    newDescription: yup
        .string()
        .required("Description is required"),
    newDescriptionEn: yup
        .string()
        .required("DescriptionEn is required"),
    newDirections: yup
        .string()
        .required("Directions is required"),
    newDirectionsEn: yup
        .string()
        .required("DirectionsEn is required"),
    newSlug: yup
        .string()
        .required("Slug is required")

});