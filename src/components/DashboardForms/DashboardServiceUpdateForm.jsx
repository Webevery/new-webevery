"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import { dashboardServiceUpdateSchema } from "@/yupShemas/dashboardServiceUpdateShema";
// import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";

import styles from "./DashboardForms.module.scss";

const DashboardServiceUpdateForm = ({ data }) => {
    const {
        title,
        titleEn,
        titleGradient,
        titleGradientEn,
        mockup,
        description,
        descriptionEn,
        price,
        priceEn,
        directions,
        directionsEn,
        slug,
    } = data;

    const initialValues = {
        defaultValues: {
            newTitle: title,
            newTitleEn: titleEn,
            newTitleGradient: titleGradient,
            newTitleGradientEn: titleGradientEn,
            newMockup: mockup,
            newDescription: description,
            newDescriptionEn: descriptionEn,
            newPrice: price,
            newPriceEn: priceEn,
            newDirections: directions,
            newDirectionsEn: directionsEn,
            newSlug: slug,
        },
        resolver: yupResolver(dashboardServiceUpdateSchema),
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
            newTitleGradient,
            newTitleGradientEn,
            newMockup,
            newDescription,
            newDescriptionEn,
            newPrice,
            newPriceEn,
            newDirections,
            newDirectionsEn,
            newSlug,
        } = data;

        const updatedData = {
            title: newTitle,
            titleEn: newTitleEn,
            titleGradient: newTitleGradient,
            titleGradientEn: newTitleGradientEn,
            mockup: newMockup,
            description: newDescription,
            descriptionEn: newDescriptionEn,
            directions: newDirections,
            directionsEn: newDirectionsEn,
            price: newPrice,
            priceEn: newPriceEn,
            slug: newSlug,
        };
        console.log("updatedSeviceData:", updatedData);
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
                <h3 className={styles.formTitle}>Let`s update the service!</h3>
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
                        name='newMockup'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getValues("newMockup") !== "") {
                                // handleDeleteImgFromCloudinary(
                                //     initialValues.heroImage
                                // );
                            }
                            setValue("newMockup", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Add mockup/photo WEBP format
                    </CldUploadButton>

                    <p className={styles.error}>{errors.newMockup?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`}
                        id='newDescription'
                        placeholder=' '
                        {...register("newDescription")}
                    />
                    <label
                        htmlFor='newDescription'
                        className={styles.formLabel}
                    >
                        New Description
                    </label>
                    <p className={styles.error}>
                        {errors.newDescription?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`}
                        id='newDescriptionEn'
                        placeholder=' '
                        {...register("newDescriptionEn")}
                    />
                    <label
                        htmlFor='newDescriptionEn'
                        className={styles.formLabel}
                    >
                        New DescriptionEn
                    </label>
                    <p className={styles.error}>
                        {errors.newDescriptionEn?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newPrice'
                        placeholder=' '
                        {...register("newPrice")}
                    />
                    <label htmlFor='newPrice' className={styles.formLabel}>
                        New Price
                    </label>
                    <p className={styles.error}>{errors.newPrice?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newPriceEn'
                        placeholder=' '
                        {...register("newPriceEn")}
                    />
                    <label htmlFor='newPriceEn' className={styles.formLabel}>
                        New PriceEn
                    </label>
                    <p className={styles.error}>{errors.newPriceEn?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`}
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
                        className={`${styles.textarea} ${styles.formInput}`}
                        id='newDirectionsEn'
                        placeholder=' '
                        {...register("newDirectionsEn")}
                    />
                    <label
                        htmlFor='newDirectionsEn'
                        className={styles.formLabel}
                    >
                        New DirectionsEn
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
            </form>
        </div>
    );
};

export default DashboardServiceUpdateForm;
