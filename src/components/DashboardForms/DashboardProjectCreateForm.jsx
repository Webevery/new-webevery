"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { dashboardProjectCreateSchema } from "@/yupSchemas/dashboardProjectCreateSchema";
import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";
import { getDashboardSession } from "@/utils/getDashboardSession";
import styles from "./DashboardForms.module.scss";


const DashboardProjectCreateForm = ({ mutate, slugsArr }) => {
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
        context: slugsArr,
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset, getValues, setValue } =
        form;
    const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

    const onSubmit = async (data) => {
        const forSendData = { ...data };
        const session = await getDashboardSession();
        forSendData.editor = session.user?.email;
        const trimedSlug = forSendData.slug.trim();
        forSendData.slug = trimedSlug;

        try {
            await fetch("/api/ourProjects", {
                method: "POST",
                body: JSON.stringify(forSendData),
            });
            // автоматично оновлює сторінку при зміні кількості карток
            mutate();

            toast.success(`Картка "${forSendData.slug}" створена.`);
        } catch (err) {
            console.log(err);
            toast.error(err);
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
                <h3 className={styles.formTitle}>
                    Adding new project
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
                        type='text'
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
                        type='text'
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
                        type='text'
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
                    <input
                        type='text'
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
                    <CldUploadButton
                        name='heroImage'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getValues("heroImage") !== "") {
                                const publicId = getValues("heroImage");
                                handleDeleteImgFromCloudinary(publicId);
                                toast.success("Попереднє фото видалено з Cloudinary.");
                            }
                            setValue("heroImage", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
                            toast.success("Нове фото додано до Cloudinary.");
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
                        className={`${styles.bigTextarea} ${styles.formInput}`}
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
                        className={`${styles.bigTextarea} ${styles.formInput}`}
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
                        className={`${styles.bigTextarea} ${styles.formInput}`}
                        id='solutionEn'
                        placeholder=' '
                        {...register("solutionEn")}
                    />
                    <label htmlFor='solutionEn' className={styles.formLabel}>
                        SolutionEn
                    </label>
                    <p className={styles.error}>{errors.solutionEn?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.bigTextarea} ${styles.formInput}`}
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
                        className={`${styles.bigTextarea} ${styles.formInput}`}
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
                    <textarea
                        className={`${styles.bigTextarea} ${styles.formInput}`}
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
                    <CldUploadButton
                        name='screensImage'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getValues("screensImage") !== "") {
                                const publicId = getValues("screensImage");
                                handleDeleteImgFromCloudinary(publicId);
                                toast.success("Попереднє фото видалено з Cloudinary.");
                            }
                            setValue("screensImage", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
                            toast.success("Нове фото додано до Cloudinary.");
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Add screens mockup (WEBP)
                    </CldUploadButton>

                    <p className={styles.error}>
                        {errors.screensImage?.message}
                    </p>
                </div>

                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`}
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
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`}
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
                            toast.success("Нове фото додано до Cloudinary.");
                        }}
                        uploadPreset='unsigned_preset'
                    >
                        Add 3 mobile screens (WEBP)
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
                        SiteLink
                    </label>
                    <p className={styles.error}>{errors.siteLink?.message}</p>
                </div>

                <button
                    type='submit'
                    className={styles.formButton}
                    disabled={isErrors || isSubmitting}
                >
                    Create
                </button>
            </form>
        </div>
    );
};


export default DashboardProjectCreateForm;