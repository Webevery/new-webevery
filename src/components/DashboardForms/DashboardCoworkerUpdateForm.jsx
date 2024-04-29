"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import { dashboardCoworkerUpdateSchema } from "@/yupSchemas/dashboardCoworkerUpdateSchema";
import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";
import { getDashboardSession } from "@/utils/getDashboardSession";
import styles from "./DashboardForms.module.scss";


const DashboardCoworkerUpdateForm = ({ data, mutate }) => {
    const { name, nameEn, photo, position, positionEn, slug } = data;

    const initialValues = {
        defaultValues: {
            newName: name,
            newNameEn: nameEn,
            newPhoto: photo,
            newPosition: position,
            newPositionEn: positionEn,
            newSlug: slug,
        },
        resolver: yupResolver(dashboardCoworkerUpdateSchema),
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset, getValues, setValue } =
        form;
    const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

    const router = useRouter();


    const onSubmit = async (data) => {
        const {
            newName,
            newNameEn,
            newPhoto,
            newPosition,
            newPositionEn,
            newSlug,
        } = data;

        const updatedData = {
            name: newName,
            nameEn: newNameEn,
            photo: newPhoto,
            position: newPosition,
            positionEn: newPositionEn,
            slug: newSlug,
        };

        const session = await getDashboardSession();
        updatedData.editor = session.user?.email;

        try {
            await fetch(`/api/team/${slug}`, {
                method: "PUT",
                body: JSON.stringify(updatedData),
            });

            console.log("Information updated to DB");

            // по умові виконується або переход на іншу сторінку, або оновлення існуючої
            (slug !== updatedData.slug) ? router.push(`/dashboard/team/${updatedData.slug}`) : mutate();
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
                <h3 className={styles.formTitle}>Let`s change coworker`s data</h3>
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
                        id='newName'
                        placeholder=' '
                        {...register("newName")}
                    />
                    <label htmlFor='newName' className={styles.formLabel}>
                        New Name
                    </label>
                    <p className={styles.error}>{errors.newName?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newNameEn'
                        placeholder=' '
                        {...register("newNameEn")}
                    />
                    <label htmlFor='newNameEn' className={styles.formLabel}>
                        New NameEn
                    </label>
                    <p className={styles.error}>{errors.newNameEn?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='newPhoto'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getValues("newPhoto") !== "") {
                                const publicId = getValues("newPhoto");
                                handleDeleteImgFromCloudinary(publicId);
                            }
                            setValue("newPhoto", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Update photo (WEBP)
                    </CldUploadButton>

                    <p className={styles.error}>{errors.photo?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newPosition'
                        placeholder=' '
                        {...register("newPosition")}
                    />
                    <label htmlFor='newPosition' className={styles.formLabel}>
                        New Position
                    </label>
                    <p className={styles.error}>
                        {errors.newPosition?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newPositionEn'
                        placeholder=' '
                        {...register("newPositionEn")}
                    />
                    <label htmlFor='newPositionEn' className={styles.formLabel}>
                        New positionEn
                    </label>
                    <p className={styles.error}>
                        {errors.newPositionEn?.message}
                    </p>
                </div>

                <button
                    type='submit'
                    className={styles.formButton}
                    disabled={isErrors || isSubmitting}
                >
                    Add Changes
                </button>
            </form>
        </div>
    );
};


export default DashboardCoworkerUpdateForm;