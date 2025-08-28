import * as yup from "yup";

export const dashboardServiceUpdateSchema = yup.object({
  newIsShown: yup.boolean(),
  newTitle: yup.string(),
  newTitleEn: yup.string(),
  newTitleGradient: yup.string(),
  newTitleGradientEn: yup.string(),
  newMockup: yup.string().required("mockup is required"),
  newDescription: yup.string().required("Description is required"),
  newDescriptionEn: yup.string().required("DescriptionEn is required"),
  newPrice: yup.string().required("Price is required"),
  newPriceEn: yup.string().required("PriceEn is required"),
  newDirections: yup.string().required("Directions is required"),
  newDirectionsEn: yup.string().required("DirectionsEn is required"),
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
