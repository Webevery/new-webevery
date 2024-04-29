"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import { dashboardProjectUpdateSchema } from "@/yupSchemas/dashboardProjectUpdateSchema";
import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";
import { getDashboardSession } from "@/utils/getDashboardSession";
import styles from "./DashboardForms.module.scss";


const DashboardProjectUpdateForm = ({ data, mutate }) => {
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
    } = data;

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
        },
        resolver: yupResolver(dashboardProjectUpdateSchema),
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset, getValues, setValue } =
        form;

    const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

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
        };

        const session = await getDashboardSession();
        updatedData.editor = session.user?.email;

        try {
            await fetch(`/api/ourProjects/${slug}`, {
                method: "PUT",
                body: JSON.stringify(updatedData),
            });

            console.log("Information updated to DB");

            // по умові виконується або переход на іншу сторінку, або оновлення існуючої
            (slug !== updatedData.slug) ? router.push(`/dashboard/ourProjects/${updatedData.slug}`) : mutate();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);


    return (
        <div className={styles.container}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                noValidate
            >
                <h3 className={styles.formTitle}>Let`s update the project!</h3>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newSlug'
                        placeholder=' '
                        {...register("newSlug")}
                    />
                    <label htmlFor='newSlug' className={styles.formLabel}>
                        New Slug
                    </label>
                    <p className={styles.error}>{errors.newSlug?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newTitle'
                        placeholder=' '
                        {...register("newTitle")}
                    />
                    <label htmlFor='newTitle' className={styles.formLabel}>
                        New Title
                    </label>
                    <p className={styles.error}>{errors.newTitle?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newTitleEn'
                        placeholder=' '
                        {...register("newTitleEn")}
                    />
                    <label htmlFor='newTitleEn' className={styles.formLabel}>
                        New TitleEn
                    </label>
                    <p className={styles.error}>{errors.newTitleEn?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newTitleGradient'
                        placeholder=' '
                        {...register("newTitleGradient")}
                    />
                    <label
                        htmlFor='newTitleGradient'
                        className={styles.formLabel}
                    >
                        New Title Gradient
                    </label>
                    <p className={styles.error}>
                        {errors.newTitleGradient?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newTitleGradientEn'
                        placeholder=' '
                        {...register("newTitleGradientEn")}
                    />
                    <label
                        htmlFor='newTitleGradientEn'
                        className={styles.formLabel}
                    >
                        New Title GradientEn
                    </label>
                    <p className={styles.error}>
                        {errors.newTitleGradientEn?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='newHeroImages'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getValues("newHeroImages") !== "") {
                                const publicId = getValues("newHeroImages");
                                handleDeleteImgFromCloudinary(publicId);
                            }
                            setValue("newHeroImages", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Add desktop hero screen (WEBP)
                    </CldUploadButton>

                    <p className={styles.error}>{errors.heroImage?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`}
                        id='newProblem'
                        placeholder=' '
                        {...register("newProblem")}
                    />
                    <label htmlFor='newProblem' className={styles.formLabel}>
                        New Problem
                    </label>
                    <p className={styles.error}>{errors.newProblem?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`}
                        id='newProblemEn'
                        placeholder=' '
                        {...register("newProblemEn")}
                    />
                    <label htmlFor='newProblemEn' className={styles.formLabel}>
                        New ProblemEn
                    </label>
                    <p className={styles.error}>
                        {errors.newProblemEn?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`}
                        id='newSolution'
                        placeholder=' '
                        {...register("newSolution")}
                    />
                    <label htmlFor='newSolution' className={styles.formLabel}>
                        New Solution
                    </label>
                    <p className={styles.error}>
                        {errors.newSolution?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`}
                        id='newSolutionEn'
                        placeholder=' '
                        {...register("newSolutionEn")}
                    />
                    <label htmlFor='newSolutionEn' className={styles.formLabel}>
                        New SolutionEn
                    </label>
                    <p className={styles.error}>{errors.solutionEn?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`}
                        id='newHelp'
                        placeholder=' '
                        {...register("newHelp")}
                    />
                    <label htmlFor='newHelp' className={styles.formLabel}>
                        New Help
                    </label>
                    <p className={styles.error}>{errors.newHelp?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`}
                        id='newHelpEn'
                        placeholder=' '
                        {...register("newHelpEn")}
                    />
                    <label htmlFor='newHelpEn' className={styles.formLabel}>
                        New HelpEn
                    </label>
                    <p className={styles.error}>{errors.newHelpEn?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='newScreensImage'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getValues("newScreensImage") !== "") {
                                const publicId = getValues("newScreensImage");
                                handleDeleteImgFromCloudinary(publicId);
                            }
                            setValue("newScreensImage", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Add desktop mockup (WEBP)
                    </CldUploadButton>

                    <p className={styles.error}>
                        {errors.newScreensImage?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`}
                        id='newAdaptation'
                        placeholder=' '
                        {...register("newAdaptation")}
                    />
                    <label htmlFor='newAdaptation' className={styles.formLabel}>
                        Adaptation
                    </label>
                    <p className={styles.error}>
                        {errors.newAdaptation?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`}
                        id='newAdaptationEn'
                        placeholder=' '
                        {...register("newAdaptationEn")}
                    />
                    <label
                        htmlFor='newAdaptationEn'
                        className={styles.formLabel}
                    >
                        AdaptationEn
                    </label>
                    <p className={styles.error}>
                        {errors.newAdaptationEn?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='newMobileImages'
                        className={styles.uploadBtn}
                        onUpload={(result) => {
                            setValue(
                                "newMobileImages",
                                [
                                    ...getValues("newMobileImages"),
                                    result.info.public_id,
                                ],
                                { shouldValidate: true }
                            );
                        }}
                        uploadPreset='unsigned_preset'
                    >
                        Download 3 mobile screens (WEBP)
                    </CldUploadButton>

                    <p className={styles.error}>
                        {errors.newMobileImages?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newSiteLink'
                        placeholder=' '
                        {...register("newSiteLink")}
                    />
                    <label htmlFor='newSiteLink' className={styles.formLabel}>
                        Slug
                    </label>
                    <p className={styles.error}>
                        {errors.newSiteLink?.message}
                    </p>
                </div>
                <button
                    type='submit'
                    className={styles.formButton}
                    disabled={isErrors || isSubmitting}
                >
                    Update new!
                </button>
            </form>
        </div>
    );
};


export default DashboardProjectUpdateForm;