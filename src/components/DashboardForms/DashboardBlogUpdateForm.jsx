"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    dashboardBlogUpdateSchema,
    dashboardBlogBlockUpdateSchema,
} from "@/yupSchemas/dashboadrBlogUpdateSchema";
// import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";

import styles from "./DashboardForms.module.scss";

const DashboardBlogUpdateForm = ({ data }) => {
    //---------------------------- For the main form  -------------------------
    const {
        title,
        titleEn,
        mainText,
        mainTextEn,
        mainImage,
        direction,
        directionEn,
        epilogue,
        epilogueEn,
        blocks,
        slug,
    } = data;

    const mainInitialValues = {
        defaultValues: {
            newTitle: title,
            newTitleEn: titleEn,
            newMainImage: mainImage,
            newMainText: mainText,
            newMainTextEn: mainTextEn,
            newDirection: direction,
            newDirectionEn: directionEn,
            newEpilogue: epilogue,
            newEpilogueEn: epilogueEn,
            newBlocks: blocks,
            newSlug: slug,
        },
        resolver: yupResolver(dashboardBlogUpdateSchema),
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
        const {
            newTitle,
            newTitleEn,
            newMainImage,
            newMainText,
            newMainTextEn,
            newDirection,
            newDirectionEn,
            newEpilogue,
            newEpilogueEn,
            newBlocks,
            newSlug,
        } = data;

        const updatedData = {
            title: newTitle,
            titleEn: newTitleEn,
            mainText: newMainText,
            mainTextEn: newMainTextEn,
            mainImage: newMainImage,
            direction: newDirection,
            directionEn: newDirectionEn,
            epilogue: newEpilogue,
            epilogueEn: newEpilogueEn,
            blocks: newBlocks,
            slug: newSlug,
        };
        console.log("updatedBlogMainData:", updatedData);
    };

    useEffect(() => {
        if (isMainSubmitSuccessful) {
            mainReset();
        }
    }, [isMainSubmitSuccessful, mainReset]);

    const blockAmount = getMainValues("newBlocks").length;

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
            text: "",
            textEn: "",
            rangeNumber: null,
            image: "",
        },
        resolver: yupResolver(dashboardBlogBlockUpdateSchema),
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
        const { subTitle, subTitleEn, text, textEn, rangeNumber, image } = data;
        const currentBlocks = [...getMainValues("newBlocks")];
        currentBlocks.splice(rangeNumber, 0, {
            subTitle,
            subTitleEn,
            text,
            textEn,
            image,
        });

        setMainValues(
            "newBlocks",
            [...currentBlocks]
            // { shouldValidate: true }
        );

        console.log("currentBlocks:", currentBlocks);
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
                    Let`s update multiple blog !
                </h3>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newSlug'
                        placeholder=' '
                        {...mainRegister("newSlug")}
                    />
                    <label htmlFor='newSlug' className={styles.formLabel}>
                        Slug
                    </label>
                    <p className={styles.error}>
                        {mainErrors.newSlug?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newTitle'
                        placeholder=' '
                        {...mainRegister("newTitle")}
                    />
                    <label htmlFor='newTitle' className={styles.formLabel}>
                        Title
                    </label>
                    <p className={styles.error}>
                        {mainErrors.newTitle?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newTitleEn'
                        placeholder=' '
                        {...mainRegister("newTitleEn")}
                    />
                    <label htmlFor='newTitleEn' className={styles.formLabel}>
                        TitleEn
                    </label>
                    <p className={styles.error}>
                        {mainErrors.newTitleEn?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newMainText'
                        placeholder=' '
                        {...mainRegister("newMainText")}
                    />
                    <label htmlFor='newMainText' className={styles.formLabel}>
                        MainText
                    </label>
                    <p className={styles.error}>
                        {mainErrors.newMainText?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newMainTextEn'
                        placeholder=' '
                        {...mainRegister("newMainTextEn")}
                    />
                    <label htmlFor='newMainTextEn' className={styles.formLabel}>
                        MainTextEn
                    </label>
                    <p className={styles.error}>
                        {mainErrors.newMainTextEn?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='newMainImage'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getMainValues("newMainImage") !== "") {
                                // handleDeleteImgFromCloudinary(
                                //     initialValues.mainImage
                                // );
                            }
                            setMainValues(
                                "newMainImage",
                                result.info.public_id,
                                {
                                    shouldValidate: true,
                                }
                            );
                            widget.close();
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Replace Main Image WEBP format
                    </CldUploadButton>
                    <p className={styles.error}>
                        {mainErrors.newMainImage?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newDirection'
                        placeholder=' '
                        {...mainRegister("newDirection")}
                    />
                    <label htmlFor='newDirection' className={styles.formLabel}>
                        Direction
                    </label>
                    <p className={styles.error}>
                        {mainErrors.newDirection?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newDirectionEn'
                        placeholder=' '
                        {...mainRegister("newDirectionEn")}
                    />
                    <label
                        htmlFor='newDirectionEn'
                        className={styles.formLabel}
                    >
                        DirectionEn
                    </label>
                    <p className={styles.error}>
                        {mainErrors.newDirectionEn?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newEpilogue'
                        placeholder=' '
                        {...mainRegister("newEpilogue")}
                    />
                    <label htmlFor='newEpilogue' className={styles.formLabel}>
                        Epilogue
                    </label>
                    <p className={styles.error}>
                        {mainErrors.newEpilogue?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='newEpilogueEn'
                        placeholder=' '
                        {...mainRegister("newEpilogueEn")}
                    />
                    <label htmlFor='newEpilogueEn' className={styles.formLabel}>
                        EpilogueEn
                    </label>
                    <p className={styles.error}>
                        {mainErrors.newEpilogueEn?.message}
                    </p>
                </div>

                <p
                    className={
                        blockAmount === 0 && mainErrors.newBlocks?.message
                            ? `${styles.blockAmount} ${styles.errorColor}`
                            : styles.blockAmount
                    }
                >
                    {blockMessage}
                </p>

                <button
                    type='submit'
                    className={styles.formButton}
                    disabled={isMainErrors || isMainSubmitting}
                >
                    Create update blog!
                </button>
            </form>

            <form
                onSubmit={blockHandleSubmit(onSubmitBlock)}
                className={styles.form}
                noValidate
            >
                <h3 className={styles.formTitle}>Let`s add a new block!</h3>

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
                        id='text'
                        placeholder=' '
                        {...blockRegister("text")}
                    />
                    <label htmlFor='text' className={styles.formLabel}>
                        Text
                    </label>
                    <p className={styles.error}>{blockErrors.text?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='textEn'
                        placeholder=' '
                        {...blockRegister("textEn")}
                    />
                    <label htmlFor='textEn' className={styles.formLabel}>
                        TextEn
                    </label>
                    <p className={styles.error}>
                        {blockErrors.textEn?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='rangeNumber'
                        placeholder=' '
                        maxlength='3'
                        {...blockRegister("rangeNumber")}
                    />
                    <label htmlFor='rangeNumber' className={styles.formLabel}>
                        RangeNumber
                    </label>
                    <p className={styles.error}>
                        {blockErrors.rangeNumber?.message}
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='image'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getBlockValues("image") !== "") {
                                // handleDeleteImgFromCloudinary(
                                //     initialValues.image
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
                    <p className={styles.error}>{blockErrors.image?.message}</p>
                </div>
                <button
                    type='submit'
                    className={styles.formButton}
                    disabled={isBlockErrors || isBlockSubmitting}
                >
                    Add the new block!
                </button>
            </form>
        </div>
    );
};

export default DashboardBlogUpdateForm;
