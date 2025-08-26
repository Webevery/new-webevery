"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { dashboardProjectUpdateSchema } from "@/yupSchemas/dashboardProjectUpdateSchema";
import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";
import { getDashboardSession } from "@/utils/getDashboardSession";
import { isDeepEqual } from "@/utils/isDeepEqual";
import styles from "./DashboardForms.module.scss";

const DashboardProjectUpdateForm = ({ data, mutate, slugsArr }) => {
  const {
    title,
    titleEn,
    titleGradient,
    titleGradientEn,
    heroImage,
    problem,
    problemEn,
    solution,
    solutionEn,
    help,
    helpEn,
    screensImage,
    adaptation,
    adaptationEn,
    mobileImages,
    siteLink,
    slug,
    isShown,
  } = data;

  const receivedData = {
    title,
    titleEn,
    titleGradient,
    titleGradientEn,
    heroImage,
    problem,
    problemEn,
    solution,
    solutionEn,
    help,
    helpEn,
    screensImage,
    adaptation,
    adaptationEn,
    mobileImages,
    siteLink,
    slug,
    isShown,
  };

  const initialValues = {
    defaultValues: {
      newTitle: title,
      newTitleEn: titleEn,
      newTitleGradient: titleGradient,
      newTitleGradientEn: titleGradientEn,
      newHeroImages: heroImage,
      newProblem: problem,
      newProblemEn: problemEn,
      newSolution: solution,
      newSolutionEn: solutionEn,
      newHelp: help,
      newHelpEn: helpEn,
      newScreensImage: screensImage,
      newAdaptation: adaptation,
      newAdaptationEn: adaptationEn,
      newMobileImages: mobileImages,
      newSiteLink: siteLink,
      newSlug: slug,
      newIsShown: isShown,
    },
    resolver: yupResolver(dashboardProjectUpdateSchema),
    context: slugsArr,
  };

  const form = useForm(initialValues);
  const { register, handleSubmit, formState, getValues, setValue } = form;

  const { errors, isErrors, isSubmitting } = formState;

  const router = useRouter();

  const onSubmit = async (data) => {
    const {
      newTitle,
      newTitleEn,
      newTitleGradient,
      newTitleGradientEn,
      newHeroImages,
      newProblem,
      newProblemEn,
      newSolution,
      newSolutionEn,
      newHelp,
      newHelpEn,
      newScreensImage,
      newAdaptation,
      newAdaptationEn,
      newMobileImages,
      newSiteLink,
      newSlug,
      newIsShown,
    } = data;

    const updatedData = {
      title: newTitle,
      titleEn: newTitleEn,
      titleGradient: newTitleGradient,
      titleGradientEn: newTitleGradientEn,
      heroImage: newHeroImages,
      problem: newProblem,
      problemEn: newProblemEn,
      solution: newSolution,
      solutionEn: newSolutionEn,
      help: newHelp,
      helpEn: newHelpEn,
      screensImage: newScreensImage,
      adaptation: newAdaptation,
      adaptationEn: newAdaptationEn,
      mobileImages: newMobileImages,
      siteLink: newSiteLink,
      slug: newSlug,
      isShown: newIsShown,
    };

    const trimedSlug = updatedData.slug.trim();
    updatedData.slug = trimedSlug;

    if (isDeepEqual(receivedData, updatedData)) {
      toast.warning(`Ви не внесли змін в картку "${slug}".`);
      return;
    }

    const forSendData = { ...updatedData };
    const session = await getDashboardSession();
    forSendData.editor = session.user?.email;

    try {
      await fetch(`/api/ourProjects/${slug}`, {
        method: "PUT",
        body: JSON.stringify(forSendData),
      });

      // по умові виконується або перехід на іншу сторінку, або оновлення існуючої
      slug !== forSendData.slug
        ? router.push(`/dashboard/ourProjects/${forSendData.slug}`)
        : mutate();

      toast.success(`Картка "${forSendData.slug}" оновлена.`);
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        noValidate
      >
        <h3 className={styles.formTitle}>Project update</h3>

        <div className={styles.checkboxInputGroup}>
          <label htmlFor="newIsShown" className={styles.checkboxLabel}>
            Відображати на сайті -
          </label>
          <input
            type="checkbox"
            className={styles.checkbox}
            id="newIsShown"
            placeholder=" "
            {...register("newIsShown")}
          />
          <p className={styles.error}>{errors.newIsShown?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            className={styles.formInput}
            id="newSlug"
            placeholder=" "
            {...register("newSlug")}
          />
          <label htmlFor="newSlug" className={styles.formLabel}>
            New Slug
          </label>
          <p className={styles.error}>{errors.newSlug?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            className={styles.formInput}
            id="newTitleEn"
            placeholder=" "
            {...register("newTitleEn")}
          />
          <label htmlFor="newTitleEn" className={styles.formLabel}>
            New TitleEn
          </label>
          <p className={styles.error}>{errors.newTitleEn?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            className={styles.formInput}
            id="newTitle"
            placeholder=" "
            {...register("newTitle")}
          />
          <label htmlFor="newTitle" className={styles.formLabel}>
            New Title
          </label>
          <p className={styles.error}>{errors.newTitle?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            className={styles.formInput}
            id="newTitleGradientEn"
            placeholder=" "
            {...register("newTitleGradientEn")}
          />
          <label htmlFor="newTitleGradientEn" className={styles.formLabel}>
            New Title GradientEn
          </label>
          <p className={styles.error}>{errors.newTitleGradientEn?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            className={styles.formInput}
            id="newTitleGradient"
            placeholder=" "
            {...register("newTitleGradient")}
          />
          <label htmlFor="newTitleGradient" className={styles.formLabel}>
            New Title Gradient
          </label>
          <p className={styles.error}>{errors.newTitleGradient?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <CldUploadButton
            name="newHeroImages"
            className={styles.uploadBtn}
            onUpload={(result, widget) => {
              if (getValues("newHeroImages") !== "") {
                const publicId = getValues("newHeroImages");
                handleDeleteImgFromCloudinary(publicId);
                toast.success("Попереднє фото видалено з Cloudinary.");
              }
              setValue("newHeroImages", result.info.public_id, {
                shouldValidate: true,
              });
              widget.close();
              toast.success("Нове фото додано до Cloudinary.");
            }}
            options={{ multiple: false }}
            uploadPreset="unsigned_preset"
          >
            Update desktop hero screen (WEBP)
          </CldUploadButton>

          <p className={styles.error}>{errors.heroImage?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <textarea
            className={`${styles.bigTextarea} ${styles.formInput}`}
            id="newProblemEn"
            placeholder=" "
            {...register("newProblemEn")}
          />
          <label htmlFor="newProblemEn" className={styles.formLabel}>
            New ProblemEn
          </label>
          <p className={styles.error}>{errors.newProblemEn?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <textarea
            className={`${styles.bigTextarea} ${styles.formInput}`}
            id="newProblem"
            placeholder=" "
            {...register("newProblem")}
          />
          <label htmlFor="newProblem" className={styles.formLabel}>
            New Problem
          </label>
          <p className={styles.error}>{errors.newProblem?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <textarea
            className={`${styles.bigTextarea} ${styles.formInput}`}
            id="newSolutionEn"
            placeholder=" "
            {...register("newSolutionEn")}
          />
          <label htmlFor="newSolutionEn" className={styles.formLabel}>
            New SolutionEn
          </label>
          <p className={styles.error}>{errors.solutionEn?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <textarea
            className={`${styles.bigTextarea} ${styles.formInput}`}
            id="newSolution"
            placeholder=" "
            {...register("newSolution")}
          />
          <label htmlFor="newSolution" className={styles.formLabel}>
            New Solution
          </label>
          <p className={styles.error}>{errors.newSolution?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <textarea
            className={`${styles.bigTextarea} ${styles.formInput}`}
            id="newHelpEn"
            placeholder=" "
            {...register("newHelpEn")}
          />
          <label htmlFor="newHelpEn" className={styles.formLabel}>
            New HelpEn
          </label>
          <p className={styles.error}>{errors.newHelpEn?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <textarea
            className={`${styles.bigTextarea} ${styles.formInput}`}
            id="newHelp"
            placeholder=" "
            {...register("newHelp")}
          />
          <label htmlFor="newHelp" className={styles.formLabel}>
            New Help
          </label>
          <p className={styles.error}>{errors.newHelp?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <CldUploadButton
            name="newScreensImage"
            className={styles.uploadBtn}
            onUpload={(result, widget) => {
              if (getValues("newScreensImage") !== "") {
                const publicId = getValues("newScreensImage");
                handleDeleteImgFromCloudinary(publicId);
                toast.success("Попереднє фото видалено з Cloudinary.");
              }
              setValue("newScreensImage", result.info.public_id, {
                shouldValidate: true,
              });
              widget.close();
              toast.success("Нове фото додано до Cloudinary.");
            }}
            options={{ multiple: false }}
            uploadPreset="unsigned_preset"
          >
            Update screens mockup (WEBP)
          </CldUploadButton>

          <p className={styles.error}>{errors.newScreensImage?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <textarea
            className={`${styles.textarea} ${styles.formInput}`}
            id="newAdaptationEn"
            placeholder=" "
            {...register("newAdaptationEn")}
          />
          <label htmlFor="newAdaptationEn" className={styles.formLabel}>
            AdaptationEn
          </label>
          <p className={styles.error}>{errors.newAdaptationEn?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <textarea
            className={`${styles.textarea} ${styles.formInput}`}
            id="newAdaptation"
            placeholder=" "
            {...register("newAdaptation")}
          />
          <label htmlFor="newAdaptation" className={styles.formLabel}>
            Adaptation
          </label>
          <p className={styles.error}>{errors.newAdaptation?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <CldUploadButton
            name="newMobileImages"
            className={styles.uploadBtn}
            onUpload={(result) => {
              setValue(
                "newMobileImages",
                [...getValues("newMobileImages"), result.info.public_id],
                { shouldValidate: true }
              );
              toast.success("Нове фото додано до Cloudinary.");
            }}
            uploadPreset="unsigned_preset"
          >
            Update 3 mobile screens (WEBP)
          </CldUploadButton>

          <p className={styles.error}>{errors.newMobileImages?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            className={styles.formInput}
            id="newSiteLink"
            placeholder=" "
            {...register("newSiteLink")}
          />
          <label htmlFor="newSiteLink" className={styles.formLabel}>
            New SiteLink
          </label>
          <p className={styles.error}>{errors.newSiteLink?.message}</p>
        </div>

        <button
          type="submit"
          className={styles.formButton}
          disabled={isErrors || isSubmitting}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default DashboardProjectUpdateForm;
