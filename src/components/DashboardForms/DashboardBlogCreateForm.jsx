"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { dashboardBlogMainSchema, dashboardBlogBlockSchema } from "@/yupSchemas/dashboardBlogCreateSchema";
import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";
import { getDashboardSession } from "@/utils/getDashboardSession";
import styles from "./DashboardForms.module.scss";


const DashboardBlogCreateForm = ({ mutate }) => {
    //---------------------------- For the main form  -------------------------
    const mainInitialValues = {
        defaultValues: {
            title: "",
            titleEn: "",
            mainText: "",
            mainTextEn: "",
            mainImage: "",
            direction: "",
            directionEn: "",
            epilogue: "",
            epilogueEn: "",
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

    const onSubmitMain = async (data) => {
        const forSendData = { ...data };
        const session = await getDashboardSession();
        forSendData.editor = session.user?.email;
        const trimedSlug = forSendData.slug.trim();
        forSendData.slug = trimedSlug;

        try {
            await fetch("/api/blog", {
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
            text: "",
            textEn: "",
            image: "",
            imageDescription: "",
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
        );
        toast.success(`До картки додано новий блок.`);
        toast.warning("Збережіть зміни.");
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
                    Creating new blog
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
                    <textarea
                        type='text'
                        className={`${styles.bigTextarea} ${styles.formInput}`}
                        id='mainTextEn'
                        placeholder=' '
                        {...mainRegister("mainTextEn")}
                    />
                    <label htmlFor='mainTextEn' className={styles.formLabel}>
                        MainTextEn
                    </label>
                    <p className={styles.error}>
                        {mainErrors.mainTextEn?.message}
                    </p>
                </div>

                <div className={styles.inputGroup}>
                    <textarea
                        type='text'
                        className={`${styles.bigTextarea} ${styles.formInput}`}
                        id='mainText'
                        placeholder=' '
                        {...mainRegister("mainText")}
                    />
                    <label htmlFor='mainText' className={styles.formLabel}>
                        MainText
                    </label>
                    <p className={styles.error}>
                        {mainErrors.mainText?.message}
                    </p>
                </div>

                <div className={styles.inputGroup}>
                    <CldUploadButton
                        name='mainImage'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getMainValues("mainImage") !== "") {
                                const publicId = getMainValues("mainImage");
                                handleDeleteImgFromCloudinary(publicId);
                                toast.success("Попереднє фото видалено з Cloudinary.");
                            }
                            setMainValues("mainImage", result.info.public_id, {
                                shouldValidate: true,
                            });
                            widget.close();
                            toast.success("Нове фото додано до Cloudinary.");
                        }}
                        options={{ multiple: false }}
                        uploadPreset='unsigned_preset'
                    >
                        Add Main Image (WEBP)
                    </CldUploadButton>
                    <p className={styles.error}>
                        {mainErrors.mainImage?.message}
                    </p>
                </div>

                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='directionEn'
                        placeholder=' '
                        {...mainRegister("directionEn")}
                    />
                    <label htmlFor='directionEn' className={styles.formLabel}>
                        DirectionEn
                    </label>
                    <p className={styles.error}>
                        {mainErrors.directionEn?.message}
                    </p>
                </div>

                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='direction'
                        placeholder=' '
                        {...mainRegister("direction")}
                    />
                    <label htmlFor='direction' className={styles.formLabel}>
                        Direction
                    </label>
                    <p className={styles.error}>
                        {mainErrors.direction?.message}
                    </p>
                </div>

                <div className={styles.inputGroup}>
                    <textarea
                        type='text'
                        className={`${styles.bigTextarea} ${styles.formInput}`}
                        id='epilogueEn'
                        placeholder=' '
                        {...mainRegister("epilogueEn")}
                    />
                    <label htmlFor='epilogueEn' className={styles.formLabel}>
                        EpilogueEn
                    </label>
                    <p className={styles.error}>
                        {mainErrors.epilogueEn?.message}
                    </p>
                </div>

                <div className={styles.inputGroup}>
                    <textarea
                        type='text'
                        className={`${styles.bigTextarea} ${styles.formInput}`}
                        id='epilogue'
                        placeholder=' '
                        {...mainRegister("epilogue")}
                    />
                    <label htmlFor='epilogue' className={styles.formLabel}>
                        Epilogue
                    </label>
                    <p className={styles.error}>
                        {mainErrors.epilogue?.message}
                    </p>
                </div>

                <p
                    className={
                        blockAmount === 0 && mainErrors.blocks?.message
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
                    Create blog
                </button>
            </form>


            <form
                onSubmit={blockHandleSubmit(onSubmitBlock)}
                className={styles.form}
                noValidate
            >
                <h3 className={styles.formTitle}>Adding new block</h3>

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
                    <textarea
                        type='text'
                        className={`${styles.bigTextarea} ${styles.formInput}`}
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
                    <textarea
                        type='text'
                        className={`${styles.bigTextarea} ${styles.formInput}`}
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
                    <CldUploadButton
                        name='image'
                        className={styles.uploadBtn}
                        onUpload={(result, widget) => {
                            if (getBlockValues("image") !== "") {
                                const publicId = getBlockValues("image");
                                handleDeleteImgFromCloudinary(publicId);
                                toast.success("Попереднє фото видалено з Cloudinary.");
                            }
                            setBlockValues("image", result.info.public_id, {
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
                    <p className={styles.error}>{blockErrors.image?.message}</p>
                </div>

                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='imageDescription'
                        placeholder=' '
                        {...blockRegister("imageDescription")}
                    />
                    <label htmlFor='imageDescription' className={styles.formLabel}>
                        Image Description
                    </label>
                    <p className={styles.error}>
                        {blockErrors.imageDescription?.message}
                    </p>
                </div>

                <button
                    type='submit'
                    className={styles.formButton}
                    disabled={isBlockErrors || isBlockSubmitting}
                >
                    Add block
                </button>
            </form>
        </div>
    );
};


export default DashboardBlogCreateForm;