import * as yup from "yup";


export const dashboardCoworkerCreateSchema = yup.object({
    name: yup
        .string()
        .required("Name is required"),
    nameEn: yup
        .string()
        .required("NameEn is required"),
    photo: yup
        .string()
        .required("Photo is required"),
    position: yup
        .string()
        .required("Position is required"),
    positionEn: yup
        .string()
        .required("PositionEn is required"),
    slug: yup.string()
        .required("Slug is required")
        .test({
            name: "slug",
            test(value, ctx) {
                const trimedValue = value.trim();
                // this.options.context - from DashboardNewsFormCreate context: slugsArr
                const isExist = this.options.context.includes(trimedValue);
                if (isExist) {
                    return ctx.createError({
                        message: "Such a slug already exists"
                    })
                }
                return true;
            },
        }),
});