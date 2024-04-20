"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import { dashboardServiceCreateSchema } from "@/yupSchemas/dashboardServiceCreateSchema";
import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";
import { getDashboardSession } from "@/utils/getDashboardSession";
import styles from "./DashboardForms.module.scss";


const DashboardServiceCreateForm = () => {
    const initialValues = {
        defaultValues: {
            title: "",
            titleEn: "",
            titleGradient: "",
            titleGradientEn: "",
            mockup: "",
            description: "",
            descriptionEn: "",
            price: "",
            priceEn: "",
            directions: "",
            directionsEn: "",
            slug: "",
        },
        resolver: yupResolver(dashboardServiceCreateSchema),
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset, getValues, setValue } =
        form;
    const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

    const onSubmit = async (data) => {
        const session = await getDashboardSession();
        data.editor = session.user?.email;

        try {
            await fetch("/api/services", {
                method: "POST",
                body: JSON.stringify(data),
            });
            // автоматично обновлює строрінку при зміні кількості карточок
            // mutate();
            console.log("Information added to DB");

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
                <h3 className={styles.formTitle}>
                    Let`s add a new service to the site!
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
                    <CldUploadButton
                        name='mockup'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getValues("mockup") !== "") {
                                const publicId = getValues("mockup");
                                handleDeleteImgFromCloudinary(publicId);
                            }
                            setValue("mockup", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Add mockup/photo WEBP format
                    </CldUploadButton>

                    <p className={styles.error}>{errors.mockup?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`}
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
                        className={`${styles.textarea} ${styles.formInput}`}
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
                    <input
                        type='text'
                        className={styles.formInput}
                        id='price'
                        placeholder=' '
                        {...register("price")}
                    />
                    <label htmlFor='price' className={styles.formLabel}>
                        Price
                    </label>
                    <p className={styles.error}>{errors.price?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='priceEn'
                        placeholder=' '
                        {...register("priceEn")}
                    />
                    <label htmlFor='priceEn' className={styles.formLabel}>
                        PriceEn
                    </label>
                    <p className={styles.error}>{errors.priceEn?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`}
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
                        className={`${styles.textarea} ${styles.formInput}`}
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


export default DashboardServiceCreateForm;