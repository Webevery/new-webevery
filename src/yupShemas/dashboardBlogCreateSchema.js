import * as yup from "yup";


export const dashboardBlogCreateSchema = yup.object({
    title: yup
        .string()
        .required("Title is required"),
    titleEn: yup
        .string()
        .required("Title is required"),
    images: yup
        .array()
        .min(2, "At least two items"),
    description: yup
        .string()
        .required("Description is required"),
    descriptionEn: yup
        .string()
        .required("DescriptionEn is required"),
    directions: yup
        .string()
        .required("Directions is required"),
    directionsEn: yup
        .string()
        .required("DirectionsEn is required"),
    slug: yup
        .string()
        .required("Slug is required")

});