import * as yup from "yup";


export const dashboardBlogMainSchema = yup.object({
    title: yup
        .string()
        .required("Title is required"),
    titleEn: yup
        .string()
        .required("Title is required"),
    direction: yup
        .string()
        .required("Direction is required"),
    directionEn: yup
        .string()
        .required("DirectionEn is required"),
    heroImage: yup
        .string()
        .required("HeroImage is required"),
    blocks: yup
        .array()
        .min(1, "At least one block"),
    slug: yup
        .string()
        .required("Slug is required")
});

export const dashboardBlogBlockSchema = yup.object({
    subTitle: yup
        .string()
        .required("SubTitle is required"),
    subTitleEn: yup
        .string()
        .required("SubTitleEn is required"),
    description: yup
        .string()
        .required("Description is required"),
    descriptionEn: yup
        .string()
        .required("DescriptionEn is required"),
    image: yup
        .string(),

});