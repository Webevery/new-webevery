import * as yup from "yup";

export const dashboardCoworkerUpdateSchema = yup.object({
  newIsShown: yup.boolean(),
  newName: yup.string().required("Name is required"),
  newNameEn: yup.string().required("NameEn is required"),
  newPhoto: yup.string().required("Photo is required"),
  newPosition: yup.string().required("Position is required"),
  newPositionEn: yup.string().required("PositionEn is required"),
  newSlug: yup
    .string()
    .required("NewSlug is required")
    .test({
      name: "newSlug",
      test(value, ctx) {
        const trimedValue = value.trim();
        // this.options.context - from DashboardNewsFormUpdate context: slugsArr
        const isExist = this.options.context.includes(trimedValue);
        if (isExist) {
          return ctx.createError({
            message: "Such a slug already exists",
          });
        }
        return true;
      },
    }),
});
