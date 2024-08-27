"use client";
import { useForm } from "react-hook-form";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { dashboardServiceUpdateSchema } from "@/yupSchemas/dashboardServiceUpdateSchema";
import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";
import { getDashboardSession } from "@/utils/getDashboardSession";
import { isDeepEqual } from "@/utils/isDeepEqual";
import styles from "./DashboardForms.module.scss";


const DashboardServiceUpdateForm = ({ data, mutate, slugsArr }) => {
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

    const receivedData = {
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
    }

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
        context: slugsArr,
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, getValues, setValue } =
        form;
    const { errors, isErrors, isSubmitting } = formState;

    const router = useRouter();

    const onSubmit = async (data) => {
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
            await fetch(`/api/services/${slug}`, {
                method: "PUT",
                body: JSON.stringify(forSendData),
            });

            // по умові виконується або перехід на іншу сторінку, або оновлення існуючої
            (slug !== forSendData.slug) ? router.push(`/dashboard/services/${forSendData.slug}`) : mutate();

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
                <h3 className={styles.formTitle}>Update service</h3>
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
                    <CldUploadButton
                        name='newMockup'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getValues("newMockup") !== "") {
                                const publicId = getValues("newMockup");
                                handleDeleteImgFromCloudinary(publicId);
                                toast.success("Попереднє фото видалено з Cloudinary.");
                            }
                            setValue("newMockup", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
                            toast.success("Нове фото додано до Cloudinary.");
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Update photo (WEBP)
                    </CldUploadButton>

                    <p className={styles.error}>{errors.newMockup?.message}</p>
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
                        New DescriptionEn
                    </label>
                    <p className={styles.error}>
                        {errors.newDescriptionEn?.message}
                    </p>
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
                        New Description
                    </label>
                    <p className={styles.error}>
                        {errors.newDescription?.message}
                    </p>
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
                        New DirectionsEn
                    </label>
                    <p className={styles.error}>
                        {errors.newDirectionsEn?.message}
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

                <button
                    type='submit'
                    className={styles.formButton}
                    disabled={isErrors || isSubmitting}
                >
                    Update
                </button>
            </form>
        </div>
    );
};


export default DashboardServiceUpdateForm;