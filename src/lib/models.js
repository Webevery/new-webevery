import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    titleEn: {
        type: String,
    },
    titleGradient: {
        type: String,
    },
    titleGradientEn: {
        type: String,
    },
    heroImage: {
        type: String,
        required: true,
    },
    // problemTitle: {
    //     type: String,
    //     required: true,
    // },
    // problemTitleEn: {
    //     type: String,
    //     required: true,
    // },
    problemText: {
        type: String,
        required: true,
    },
    problemTextEn: {
        type: String,
        required: true,
    },
    // solutionTitle: {
    //     type: String,
    //     required: true,
    // },
    // solutionTitleEn: {
    //     type: String,
    //     required: true,
    // },
    solutionText: {
        type: String,
        required: true,
    },
    solutionTextEn: {
        type: String,
        required: true,
    },
    // helpTitle: {
    //     type: String,
    //     required: true,
    // },
    // helpTitleEn: {
    //     type: String,
    //     required: true,
    // },
    helpText: {
        type: String,
        required: true,
    },
    helpTextEn: {
        type: String,
        required: true,
    },
    screensImage: {
        type: String,
        required: true,
    },
    // adaptationTitle: {
    //     type: String,
    //     required: true,
    // },
    // adaptationTitleEn: {
    //     type: String,
    //     required: true,
    // },
    adaptationText: {
        type: String,
        required: true,
    },
    adaptationTextEn: {
        type: String,
        required: true,
    },
    mobileImages: {
        type: Array,
        required: true,
    },
    // siteLink: {
    //     type: String,
    //     required: true,
    // },    
    slug: {
        type: String,
        required: true,
        unique: true,
    },
},
    { timestamps: true, }
)

export const Project = mongoose.models.Project || mongoose.model("Project", projectSchema)
