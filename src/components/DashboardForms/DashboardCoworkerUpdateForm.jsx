"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import { dashboardCoworkerUpdateSchema } from "@/yupSchemas/dashboardCoworkerUpdateSchema";
// import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";

import styles from "./DashboardForms.module.scss";

const DashboardCoworkerUpdateForm = ({ data }) => {
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
    // console.log("initialValues:", initialValues);
    const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

    const onSubmit = (data) => {
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
        console.log("updatedCoworkerData:", updatedData);
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
                <h3 className={styles.formTitle}>Change data</h3>
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
                                // handleDeleteImgFromCloudinary(
                                //     initialValues.heroImage
                                // );
                            }
                            setValue("newPhoto", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Update photo WEBP format
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
                        New ositionEn
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
