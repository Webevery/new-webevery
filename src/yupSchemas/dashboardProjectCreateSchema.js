import * as yup from "yup";


export const dashboardProjectCreateSchema = yup.object({
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
    heroImage: yup
        .string()
        .required("HeroImage is required"),
    problem: yup
        .string()
        .required("Problem is required"),
    problemEn: yup
        .string()
        .required("Problem is required"),
    solution: yup
        .string()
        .required("Solution is required"),
    solutionEn: yup
        .string()
        .required("Solution is required"),
    help: yup
        .string()
        .required("Help is required"),
    helpEn: yup
        .string()
        .required("Help is required"),
    screensImage: yup
        .string()
        .required("ScreensImage is required"),
    adaptation: yup
        .string()
        .required("Adaptation is required"),
    adaptationEn: yup
        .string()
        .required("Adaptation is required"),
    mobileImages: yup
        .array()
        .min(3, "Should be more than 2 items"),
    siteLink: yup
        .string()
        .required("SiteLink is required"),
    slug: yup
        .string()
        .required("Slug is required")

});