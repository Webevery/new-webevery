import * as yup from "yup";


export const dashboardServiceCreateSchema = yup.object({
    title: yup
        .string()
        .required("Title is required"),
    titleEn: yup
        .string()
        .required("Title is required"),
    titleGradient: yup
        .string()
        .required("TitleGradient is required"),
    titleGradientEn: yup
        .string()
        .required("TitleGradient is required"),
    mockup: yup
        .string().required("mockup is required"),
    description: yup
        .string()
        .required("Description is required"),
    descriptionEn: yup
        .string()
        .required("DescriptionEn is required"),
    price: yup
        .string()
        .required("Price is required"),
    priceEn: yup
        .string()
        .required("PriceEn is required"),
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