"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import { dashboardBlogUpdateSchema } from "@/yupSchemas/dashboadrBlogUpdateSchema";
// import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";

import styles from "./DashboardForms.module.scss";

const DashboardBlogUpdateForm = ({ data }) => {
    const {
        title,
        titleEn,
        images,
        description,
        descriptionEn,
        directions,
        directionsEn,
        slug,
    } = data;

    const initialValues = {
        defaultValues: {
            newTitle: title,
            newTitleEn: titleEn,
            newImages: images,
            newDescription: description,
            newDescriptionEn: descriptionEn,
            newDirections: directions,
            newDirectionsEn: directionsEn,
            newSlug: slug,
        },
        resolver: yupResolver(dashboardBlogUpdateSchema),
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset, getValues, setValue } =
        form;
    // console.log("initialValues:", initialValues);
    const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

    const onSubmit = (data) => {
        const {
            newTitle,
            newTitleEn,
            newImages,
            newDescription,
            newDescriptionEn,
            newDirections,
            newDirectionsEn,
            newSlug,
        } = data;

        const updatedData = {
            title: newTitle,
            titleEn: newTitleEn,
            images: newImages,
            description: newDescription,
            descriptionEn: newDescriptionEn,
            directions: newDirections,
            directionsEn: newDirectionsEn,
            slug: newSlug,
        };
        console.log("updatedBlogData:", updatedData);
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);
    return (
        <div className={styles.container}>
            <h3 className={styles.formTitle}>
                It might be here DashboardBlogUpdateForm
            </h3>
            {/* <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                noValidate
            >
                <h3 className={styles.formTitle}>Let`s update the article !</h3>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newSlug'
                        placeholder=' '
                        {...register("newSlug")}
                    />
                    <label htmlFor='newSlug' className={styles.formLabel}>
                        Slug
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
                        New title
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
                        New titleEn
                    </label>
                    <p className={styles.error}>{errors.newTitleEn?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='newImages'
                        className={styles.uploadBtn}
                        onUpload={(result) => {
                            setValue(
                                "newImages",
                                [
                                    ...getValues("newImages"),
                                    result.info.public_id,
                                ],
                                { shouldValidate: true }
                            );
                            // update(...result.info.public_id);
                        }}
                        uploadPreset='unsigned_preset'
                    >
                        Add photo WEBP format
                    </CldUploadButton>

                    <p className={styles.error}>{errors.newImages?.message}</p>
                </div>

                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.bigTextarea} ${styles.formInput}`}
                        id='newDescription'
                        placeholder=' '
                        {...register("newDescription")}
                    />
                    <label
                        htmlFor='newDescription'
                        className={styles.formLabel}
                    >
                        New description
                    </label>
                    <p className={styles.error}>
                        {errors.newDescription?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.bigTextarea} ${styles.formInput}`}
                        id='newDescriptionEn'
                        placeholder=' '
                        {...register("newDescriptionEn")}
                    />
                    <label
                        htmlFor='newDescriptionEn'
                        className={styles.formLabel}
                    >
                        New descriptionEn
                    </label>
                    <p className={styles.error}>
                        {errors.newDescriptionEn?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.bigTextarea} ${styles.formInput}`}
                        id='newDirections'
                        placeholder=' '
                        {...register("newDirections")}
                    />
                    <label htmlFor='newDirections' className={styles.formLabel}>
                        New Directions
                    </label>
                    <p className={styles.error}>
                        {errors.newDirections?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.bigTextarea} ${styles.formInput}`}
                        id='newDirectionsEn'
                        placeholder=' '
                        {...register("newDirectionsEn")}
                    />
                    <label
                        htmlFor='newDirectionsEn'
                        className={styles.formLabel}
                    >
                        New directionsEn
                    </label>
                    <p className={styles.error}>
                        {errors.newDirectionsEn?.message}
                    </p>
                </div>

                <button
                    type='submit'
                    className={styles.formButton}
                    disabled={isErrors || isSubmitting}
                >
                    Update new!
                </button>
            </form> */}
        </div>
    );
};

export default DashboardBlogUpdateForm;
