import * as yup from "yup";

export const dashboardServiceCreateSchema = yup.object({
  isShown: yup.boolean(),
  title: yup.string(),
  titleEn: yup.string(),
  titleGradient: yup.string(),
  titleGradientEn: yup.string(),
  mockup: yup.string().required("mockup is required"),
  description: yup.string().required("Description is required"),
  descriptionEn: yup.string().required("DescriptionEn is required"),
  price: yup.string().required("Price is required"),
  priceEn: yup.string().required("PriceEn is required"),
  directions: yup.string().required("Directions is required"),
  directionsEn: yup.string().required("DirectionsEn is required"),
  slug: yup
    .string()
    .required("Slug is required")
    .test({
      name: "slug",
      test(value, ctx) {
        const trimedValue = value.trim();
        // this.options.context - from DashboardNewsFormCreate context: slugsArr
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
