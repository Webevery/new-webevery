import * as yup from "yup";


export const dashboardServiceCreateSchema = yup.object({
    title: yup
        .string(),
    titleEn: yup
        .string(),
    titleGradient: yup
        .string(),
    titleGradientEn: yup
        .string(),
    mockup: yup
        .string()
        .required("mockup is required"),
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