import * as yup from "yup";

export const dashboardProjectUpdateSchema = yup.object({
  newIsShown: yup.boolean(),
  newTitle: yup.string().required("NewTitle is required"),
  newTitleEn: yup.string().required("NewTitle is required"),
  newTitleGradient: yup.string().required("NewTitleGradient is required"),
  newTitleGradientEn: yup.string().required("NewTitleGradient is required"),
  newHeroImages: yup.string().required("NewHeroImage is required"),
  newProblem: yup.string().required("NewProblem is required"),
  newProblemEn: yup.string().required("NewProblem is required"),
  newSolution: yup.string().required("NewSolution is required"),
  newSolutionEn: yup.string().required("NewSolution is required"),
  newHelp: yup.string().required("NewHelp is required"),
  newHelpEn: yup.string().required("NewHelp is required"),
  newScreensImage: yup.string().required("NewScreensImage is required"),
  newAdaptation: yup.string().required("NewAdaptation is required"),
  newAdaptationEn: yup.string().required("NewAdaptation is required"),
  newMobileImages: yup.array().min(3, "Should be more than 2 items"),
  newSiteLink: yup.string().required("NewSiteLink is required"),
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
