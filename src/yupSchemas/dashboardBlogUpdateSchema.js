import * as yup from "yup";


export const dashboardBlogUpdateSchema = yup.object({
    newTitle: yup
        .string()
        .required("NewTitle is required"),
    newTitleEn: yup
        .string()
        .required("NewTitleEn is required"),
    newMainImage: yup
        .string()
        .required("NewMainImage is required"),
    newMainText: yup
        .string()
        .required("NewMainText is required"),
    newMainTextEn: yup
        .string()
        .required("NewMainTextEn is required"),
    newDirection: yup
        .string()
        .required("NewDirections is required"),
    newDirectionEn: yup
        .string()
        .required("NewDirectionsEn is required"),
    newEpilogue: yup
        .string()
        .required("NewEpilogue is required"),
    newEpilogueEn: yup
        .string()
        .required("NewEpilogueEn is required"),
    newBlocks: yup
        .array()
        .min(1, "At least one NewBlocks"),
    newSlug: yup
        .string()
        .required("NewSlug is required")
});

export const dashboardBlogBlockUpdateSchema = yup.object({
    subTitle: yup
        .string()
        .required("SubTitle is required"),
    subTitleEn: yup
        .string()
        .required("SubTitleEn is required"),
    text: yup
        .string()
        .required("Text is required"),
    textEn: yup
        .string()
        .required("TextEn is required"),
    image: yup
        .string(),
    imageDescription: yup
        .string(),
    rangeNumber: yup
        .number()
        .typeError('RengeNumber must be a number')
        .required("RangeNumber is required")
        .min(0, "Min 0")
        .max(50, "Max 50"),
});