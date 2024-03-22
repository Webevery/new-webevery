"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    dashboardBlogMainSchema,
    dashboardBlogBlockSchema,
} from "@/yupSchemas/dashboardBlogCreateSchema";
// import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";

import styles from "./DashboardForms.module.scss";

const DashboardBlogCreateForm = () => {
    //---------------------------- For the main form  -------------------------
    const mainInitialValues = {
        defaultValues: {
            title: "",
            titleEn: "",
            heroImage: "",
            blocks: [],
            slug: "",
        },
        resolver: yupResolver(dashboardBlogMainSchema),
    };

    const mainForm = useForm(mainInitialValues);
    const {
        register: mainRegister,
        handleSubmit: mainHandleSubmit,
        formState: mainFormstate,
        reset: mainReset,
        getValues: getMainValues,
        setValue: setMainValues,
    } = mainForm;

    const {
        errors: mainErrors,
        isSubmitSuccessful: isMainSubmitSuccessful,
        isErrors: isMainErrors,
        isSubmitting: isMainSubmitting,
    } = mainFormstate;

    const onSubmitMain = (data) => {
        console.log("dashboardBlogCreateFormdata:", data);
    };

    useEffect(() => {
        if (isMainSubmitSuccessful) {
            mainReset();
        }
    }, [isMainSubmitSuccessful, mainReset]);

    const blockAmount = getMainValues("blocks").length;

    let blockMessage = "";

    if (blockAmount === 0) {
        blockMessage = "You have not added blocks";
    } else if (blockAmount === 1) {
        blockMessage = `You have added ${blockAmount} block`;
    } else {
        blockMessage = `You have added ${blockAmount} blocks`;
    }

    //-------------------------- For the block form-------------------------------

    const blockInitialValues = {
        defaultValues: {
            subTitle: "",
            subTitleEn: "",
            description: "",
            descriptionEn: "",
            image: "",
        },
        resolver: yupResolver(dashboardBlogBlockSchema),
    };

    const blockForm = useForm(blockInitialValues);
    const {
        register: blockRegister,
        handleSubmit: blockHandleSubmit,
        formState: blockFormstate,
        reset: blockReset,
        getValues: getBlockValues,
        setValue: setBlockValues,
    } = blockForm;

    const {
        errors: blockErrors,
        isSubmitSuccessful: isBlockSubmitSuccessful,
        isErrors: isBlockErrors,
        isSubmitting: isBlockSubmitting,
    } = blockFormstate;

    const onSubmitBlock = (data) => {
        setMainValues(
            "blocks",
            [...getMainValues("blocks"), data]
            // { shouldValidate: true }
        );
        console.log("BlockFormData:", data);
    };

    useEffect(() => {
        if (isBlockSubmitSuccessful) {
            blockReset();
        }
    }, [isBlockSubmitSuccessful, blockReset]);

    return (
        <div className={styles.container}>
            <form
                onSubmit={mainHandleSubmit(onSubmitMain)}
                className={styles.form}
                noValidate
            >
                <h3 className={styles.formTitle}>
                    Let`s try to create multiple blog !
                </h3>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='slug'
                        placeholder=' '
                        {...mainRegister("slug")}
                    />
                    <label htmlFor='slug' className={styles.formLabel}>
                        Slug
                    </label>
                    <p className={styles.error}>{mainErrors.slug?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='title'
                        placeholder=' '
                        {...mainRegister("title")}
                    />
                    <label htmlFor='title' className={styles.formLabel}>
                        Title
                    </label>
                    <p className={styles.error}>{mainErrors.title?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='titleEn'
                        placeholder=' '
                        {...mainRegister("titleEn")}
                    />
                    <label htmlFor='titleEn' className={styles.formLabel}>
                        TitleEn
                    </label>
                    <p className={styles.error}>
                        {mainErrors.titleEn?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='heroImage'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getMainValues("heroImage") !== "") {
                                // handleDeleteImgFromCloudinary(
                                //     initialValues.heroImage
                                // );
                            }
                            setMainValues("heroImage", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Add photo WEBP format
                    </CldUploadButton>
                    <p className={styles.error}>
                        {mainErrors.heroImage?.message}
                    </p>
                </div>
                <p className={styles.blockAmount}>{blockMessage}</p>

                <button
                    type='submit'
                    className={styles.formButton}
                    disabled={isMainErrors || isMainSubmitting}
                >
                    Create new blog!
                </button>
            </form>

            <form
                onSubmit={blockHandleSubmit(onSubmitBlock)}
                className={styles.form}
                noValidate
            >
                <h3 className={styles.formTitle}>Let`s add a new block !</h3>

                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='subTitle'
                        placeholder=' '
                        {...blockRegister("subTitle")}
                    />
                    <label htmlFor='subTitle' className={styles.formLabel}>
                        SubTitle
                    </label>
                    <p className={styles.error}>
                        {blockErrors.subTitle?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='subTitleEn'
                        placeholder=' '
                        {...blockRegister("subTitleEn")}
                    />
                    <label htmlFor='subTitleEn' className={styles.formLabel}>
                        SubTitleEn
                    </label>
                    <p className={styles.error}>
                        {blockErrors.subTitleEn?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='description'
                        placeholder=' '
                        {...blockRegister("description")}
                    />
                    <label htmlFor='description' className={styles.formLabel}>
                        Description
                    </label>
                    <p className={styles.error}>
                        {blockErrors.description?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='descriptionEn'
                        placeholder=' '
                        {...blockRegister("descriptionEn")}
                    />
                    <label htmlFor='descriptionEn' className={styles.formLabel}>
                        DescriptionEn
                    </label>
                    <p className={styles.error}>
                        {blockErrors.descriptionEn?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='image'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getBlockValues("image") !== "") {
                                // handleDeleteImgFromCloudinary(
                                //     initialValues.heroImage
                                // );
                            }
                            setBlockValues("image", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Add photo WEBP format
                    </CldUploadButton>
                    <p className={styles.error}>
                        {blockErrors.heroImage?.message}
                    </p>
                </div>
                <button
                    type='submit'
                    className={styles.formButton}
                    disabled={isBlockErrors || isBlockSubmitting}
                >
                    Add new block!
                </button>
            </form>
        </div>
    );
};

export default DashboardBlogCreateForm;
