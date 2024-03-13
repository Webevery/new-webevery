"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import { dashboardProjectCreateSchema } from "@/yupShemas/dashboardProjectCreateSchema";
// import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";

import styles from "./DashboardForms.module.scss";

const DashboardProjectCreateForm = () => {
    const initialValues = {
        defaultValues: {
            title: "",
            titleEn: "",
            titleGradient: "",
            titleGradientEn: "",
            heroImage: "",
            problem: "",
            problemEn: "",
            solution: "",
            solutionEn: "",
            help: "",
            helpEn: "",
            screensImage: "",
            adaptation: "",
            adaptationEn: "",
            mobileImages: [],
            siteLink: "",
            slug: "",
        },
        resolver: yupResolver(dashboardProjectCreateSchema),
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset, getValues, setValue } =
        form;
    const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

    const onSubmit = (data) => {
        console.log("FormData:", data);
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
                <h3 className={styles.formTitle}>
                    Congratulate with new progect! Let`s download it to site!
                </h3>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='slug'
                        placeholder=' '
                        {...register("slug")}
                    />
                    <label htmlFor='slug' className={styles.formLabel}>
                        Slug
                    </label>
                    <p className={styles.error}>{errors.slug?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='title'
                        className={styles.formInput}
                        id='title'
                        placeholder=' '
                        {...register("title")}
                    />
                    <label htmlFor='title' className={styles.formLabel}>
                        Title
                    </label>
                    <p className={styles.error}>{errors.title?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='titleEn'
                        className={styles.formInput}
                        id='titleEn'
                        placeholder=' '
                        {...register("titleEn")}
                    />
                    <label htmlFor='titleEn' className={styles.formLabel}>
                        TitleEn
                    </label>
                    <p className={styles.error}>{errors.titleEn?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='titleGradient'
                        className={styles.formInput}
                        id='titleGradient'
                        placeholder=' '
                        {...register("titleGradient")}
                    />
                    <label htmlFor='titleGradient' className={styles.formLabel}>
                        Title Gradient
                    </label>
                    <p className={styles.error}>
                        {errors.titleGradient?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='titleGradientEn'
                        className={styles.formInput}
                        id='titleGradientEn'
                        placeholder=' '
                        {...register("titleGradientEn")}
                    />
                    <label
                        htmlFor='titleGradientEn'
                        className={styles.formLabel}
                    >
                        Title GradientEn
                    </label>
                    <p className={styles.error}>
                        {errors.titleGradientEn?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='heroImage'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getValues("heroImage") !== "") {
                                // handleDeleteImgFromCloudinary(
                                //     initialValues.heroImage
                                // );
                            }
                            setValue("heroImage", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Add desktop hero screen WEBP format
                    </CldUploadButton>

                    <p className={styles.error}>{errors.heroImage?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.formInputTextarea} ${styles.formInput}`}
                        id='problem'
                        placeholder=' '
                        {...register("problem")}
                    />
                    <label htmlFor='problem' className={styles.formLabel}>
                        Problem
                    </label>
                    <p className={styles.error}>{errors.problem?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.formInputTextarea} ${styles.formInput}`}
                        id='problemEn'
                        placeholder=' '
                        {...register("problemEn")}
                    />
                    <label htmlFor='problemEn' className={styles.formLabel}>
                        ProblemEn
                    </label>
                    <p className={styles.error}>{errors.problemEn?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.formInputTextarea} ${styles.formInput}`}
                        id='solution'
                        placeholder=' '
                        {...register("solution")}
                    />
                    <label htmlFor='solution' className={styles.formLabel}>
                        Solution
                    </label>
                    <p className={styles.error}>{errors.solution?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.formInputTextarea} ${styles.formInput}`}
                        id='solutionEn'
                        placeholder=' '
                        {...register("solutionEn")}
                    />
                    <label htmlFor='help' className={styles.formLabel}>
                        SolutionEn
                    </label>
                    <p className={styles.error}>{errors.solutionEn?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.formInputTextarea} ${styles.formInput}`}
                        id='help'
                        placeholder=' '
                        {...register("help")}
                    />
                    <label htmlFor='help' className={styles.formLabel}>
                        Help
                    </label>
                    <p className={styles.error}>{errors.help?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.formInputTextarea} ${styles.formInput}`}
                        id='helpEn'
                        placeholder=' '
                        {...register("helpEn")}
                    />
                    <label htmlFor='helpEn' className={styles.formLabel}>
                        HelpEn
                    </label>
                    <p className={styles.error}>{errors.helpEn?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='screensImage'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getValues("screensImage") !== "") {
                                // handleDeleteImgFromCloudinary(
                                //     initialValues.heroImage
                                // );
                            }
                            setValue("screensImage", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Add desktop mockup WEBP format
                    </CldUploadButton>

                    <p className={styles.error}>
                        {errors.screensImage?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.formInputTextarea} ${styles.formInput}`}
                        id='adaptation'
                        placeholder=' '
                        {...register("adaptation")}
                    />
                    <label htmlFor='adaptation' className={styles.formLabel}>
                        Adaptation
                    </label>
                    <p className={styles.error}>{errors.adaptation?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.formInputTextarea} ${styles.formInput}`}
                        id='adaptationEn'
                        placeholder=' '
                        {...register("adaptationEn")}
                    />
                    <label htmlFor='adaptationEn' className={styles.formLabel}>
                        AdaptationEn
                    </label>
                    <p className={styles.error}>
                        {errors.adaptationEn?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='mobileImages'
                        className={styles.uploadBtn}
                        onUpload={(result) => {
                            setValue(
                                "mobileImages",
                                [
                                    ...getValues("mobileImages"),
                                    result.info.public_id,
                                ],
                                { shouldValidate: true }
                            );
                            // update(...result.info.public_id);
                        }}
                        uploadPreset='unsigned_preset'
                    >
                        Download 3 mobile screen WEBP
                    </CldUploadButton>

                    <p className={styles.error}>
                        {errors.mobileImages?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='siteLink'
                        placeholder=' '
                        {...register("siteLink")}
                    />
                    <label htmlFor='siteLink' className={styles.formLabel}>
                        Slug
                    </label>
                    <p className={styles.error}>{errors.siteLink?.message}</p>
                </div>
                <button
                    type='submit'
                    className={styles.formButton}
                    disabled={isErrors || isSubmitting}
                >
                    Відправити
                </button>
            </form>
        </div>
    );
};

export default DashboardProjectCreateForm;
