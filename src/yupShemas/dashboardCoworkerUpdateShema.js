import * as yup from "yup";


export const dashboardCoworkerUpdateSchema = yup.object({
    newName: yup
        .string()
        .required("Name is required"),
    newNameEn: yup
        .string()
        .required("NameEn is required"),
    newPhoto: yup
        .string()
        .required("Photo is required"),
    newPosition: yup
        .string()
        .required("Position is required"),
    newPositionEn: yup
        .string()
        .required("PositionEn is required"),
    newSlug: yup
        .string()
        .required("Slug is required")

});