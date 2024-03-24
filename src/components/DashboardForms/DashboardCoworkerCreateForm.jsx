"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import { dashboardCoworkerCreateSchema } from "@/yupSchemas/dashboardCoworkerCreateSchema";
// import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";

import styles from "./DashboardForms.module.scss";

const DashboardCoworkerCreateForm = () => {
    const initialValues = {
        defaultValues: {
            name: "",
            nameEn: "",
            photo: "",
            position: "",
            positionEn: "",
            slug: "",
        },
        resolver: yupResolver(dashboardCoworkerCreateSchema),
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset, getValues, setValue } =
        form;
    const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

    const onSubmit = (data) => {
        console.log("dashboardCoworkerCreateFormData:", data);
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
                    Let`s adding new coworker to site!
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
                        id='name'
                        placeholder=' '
                        {...register("name")}
                    />
                    <label htmlFor='name' className={styles.formLabel}>
                        Name
                    </label>
                    <p className={styles.error}>{errors.name?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='nameEn'
                        placeholder=' '
                        {...register("nameEn")}
                    />
                    <label htmlFor='nameEn' className={styles.formLabel}>
                        NameEn
                    </label>
                    <p className={styles.error}>{errors.nameEn?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='photo'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getValues("photo") !== "") {
                                // handleDeleteImgFromCloudinary(
                                //     initialValues.heroImage
                                // );
                            }
                            setValue("photo", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Add photo WEBP format
                    </CldUploadButton>

                    <p className={styles.error}>{errors.photo?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='position'
                        placeholder=' '
                        {...register("position")}
                    />
                    <label htmlFor='position' className={styles.formLabel}>
                        Position
                    </label>
                    <p className={styles.error}>{errors.position?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='positionEn'
                        placeholder=' '
                        {...register("positionEn")}
                    />
                    <label htmlFor='positionEn' className={styles.formLabel}>
                        PositionEn
                    </label>
                    <p className={styles.error}>{errors.positionEn?.message}</p>
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

export default DashboardCoworkerCreateForm;
