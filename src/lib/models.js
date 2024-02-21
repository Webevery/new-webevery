import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
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
    problem: {
      type: String,
      required: true,
    },
    problemEn: {
      type: String,
      required: true,
    },
    solution: {
      type: String,
      required: true,
    },
    solutionEn: {
      type: String,
      required: true,
    },
    help: {
      type: String,
      required: true,
    },
    helpEn: {
      type: String,
      required: true,
    },
    screensImage: {
      type: String,
      required: true,
    },
    adaptation: {
      type: String,
      required: true,
    },
    adaptationEn: {
      type: String,
      required: true,
    },
    mobileImages: {
      type: Array,
      required: true,
    },
    siteLink: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const serviceSchema = new mongoose.Schema(
  {
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
    mockup: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      required: true,
    },
    descriptionEn: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    priceEn: {
      type: String,
      required: true,
    },
    directions: {
      type: Array,
      required: true,
    },
    directionsEn: {
      type: Array,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    titleEn: {
      type: String,
    },
    images: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    descriptionEn: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      required: true,
    },
    directionEn: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const coworkerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nameEn: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    positionEn: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Project =
  mongoose.models.Project || mongoose.model('Project', projectSchema);

export const Service =
  mongoose.models.Service || mongoose.model('Service', serviceSchema);

export const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export const Coworker =
  mongoose.models.Coworker || mongoose.model('Coworker', coworkerSchema);
