"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { dashboardServiceCreateSchema } from "@/yupSchemas/dashboardServiceCreateSchema";
import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";
import { getDashboardSession } from "@/utils/getDashboardSession";
import styles from "./DashboardForms.module.scss";


const DashboardServiceCreateForm = ({ mutate }) => {
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
        const forSendData = { ...data };
        const session = await getDashboardSession();
        forSendData.editor = session.user?.email;
        const trimedSlug = forSendData.slug.trim();
        forSendData.slug = trimedSlug;

        try {
            await fetch("/api/services", {
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
                    Creating new service
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
                        name='mockup'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getValues("mockup") !== "") {
                                const publicId = getValues("mockup");
                                handleDeleteImgFromCloudinary(publicId);
                                toast.success("Попереднє фото видалено з Cloudinary.");
                            }
                            setValue("mockup", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
                            toast.success("Нове фото додано до Cloudinary.");
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Add photo (WEBP)
                    </CldUploadButton>

                    <p className={styles.error}>{errors.mockup?.message}</p>
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


export default DashboardServiceCreateForm;