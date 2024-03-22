import * as yup from "yup";


export const dashboardBlogMainSchema = yup.object({
    title: yup
        .string()
        .required("Title is required"),
    titleEn: yup
        .string()
        .required("Title is required"),
    heroImage: yup
        .string()
        .required("HeroImage is required"),
    blocks: yup
        .array(),
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