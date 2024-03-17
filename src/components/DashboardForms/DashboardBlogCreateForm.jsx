"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import { dashboardBlogCreateSchema } from "@/yupShemas/dashboardBlogCreateSchema";
// import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";

import styles from "./DashboardForms.module.scss";

const DashboardBlogCreateForm = () => {
    const initialValues = {
        defaultValues: {
            title: "",
            titleEn: "",
            images: [],
            description: "",
            descriptionEn: "",
            directions: "",
            directionsEn: "",
            slug: "",
        },
        resolver: yupResolver(dashboardBlogCreateSchema),
    };
    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset, getValues, setValue } =
        form;
    const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

    const onSubmit = (data) => {
        console.log("dashboardBlogCreateFormData:", data);
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
                    Did you wrote new article? Let`s download it to site!
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
                    <CldUploadButton
                        name='images'
                        className={styles.uploadBtn}
                        onUpload={(result) => {
                            setValue(
                                "images",
                                [...getValues("images"), result.info.public_id],
                                { shouldValidate: true }
                            );
                            // update(...result.info.public_id);
                        }}
                        uploadPreset='unsigned_preset'
                    >
                        Add photo WEBP format
                    </CldUploadButton>

                    <p className={styles.error}>{errors.images?.message}</p>
                </div>

                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.bigTextarea} ${styles.formInput}`}
                        id='description'
                        placeholder=' '
                        {...register("description")}
                    />
                    <label htmlFor='description' className={styles.formLabel}>
                        Description
                    </label>
                    <p className={styles.error}>
                        {errors.description?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.bigTextarea} ${styles.formInput}`}
                        id='descriptionEn'
                        placeholder=' '
                        {...register("descriptionEn")}
                    />
                    <label htmlFor='descriptionEn' className={styles.formLabel}>
                        DescriptionEn
                    </label>
                    <p className={styles.error}>
                        {errors.descriptionEn?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.bigTextarea} ${styles.formInput}`}
                        id='directions'
                        placeholder=' '
                        {...register("directions")}
                    />
                    <label htmlFor='directions' className={styles.formLabel}>
                        Directions
                    </label>
                    <p className={styles.error}>{errors.directions?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.bigTextarea} ${styles.formInput}`}
                        id='directionsEn'
                        placeholder=' '
                        {...register("directionsEn")}
                    />
                    <label htmlFor='directionsEn' className={styles.formLabel}>
                        DirectionsEn
                    </label>
                    <p className={styles.error}>
                        {errors.directionsEn?.message}
                    </p>
                </div>

                <button
                    type='submit'
                    className={styles.formButton}
                    disabled={isErrors || isSubmitting}
                >
                    Create new!
                </button>
            </form>
        </div>
    );
};

export default DashboardBlogCreateForm;
