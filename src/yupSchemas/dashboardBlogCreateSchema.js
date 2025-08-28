import * as yup from "yup";

export const dashboardBlogMainSchema = yup.object({
  isShown: yup.boolean(),
  title: yup.string().required("Title is required"),
  titleEn: yup.string().required("Title is required"),
  mainText: yup.string().required("MainText is required"),
  mainTextEn: yup.string().required("MainTextEn is required"),
  mainImage: yup.string().required("HeroImage is required"),
  direction: yup.string().required("Direction is required"),
  directionEn: yup.string().required("DirectionEn is required"),
  epilogue: yup.string().required("Epilogue is required"),
  epilogueEn: yup.string().required("EpilogueEn is required"),
  blocks: yup.array().min(1, "At least one block"),
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

export const dashboardBlogBlockSchema = yup.object({
  subTitle: yup.string().required("SubTitle is required"),
  subTitleEn: yup.string().required("SubTitleEn is required"),
  text: yup.string().required("Text is required"),
  textEn: yup.string().required("TextEn is required"),
  image: yup.string(),
  imageDescription: yup.string(),
});
