import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    // заголовок українською (text - input)
    title: {
      type: String,
    },
    // заголовок англійською (text - input)
    titleEn: {
      type: String,
    },
    // заголовок з градієнтом українською (text - input)
    titleGradient: {
      type: String,
    },
    // заголовок з градієнтом англійською (text - input)
    titleGradientEn: {
      type: String,
    },
    // основна картинка (image - button)
    heroImage: {
      type: String,
      required: true,
    },
    // проблеми українською (text - textarea)
    problem: {
      type: String,
      required: true,
    },
    // проблеми англійською (text - textarea)
    problemEn: {
      type: String,
      required: true,
    },
    // рішення українською (text - textarea)
    solution: {
      type: String,
      required: true,
    },
    // рішення англійською (text - textarea)
    solutionEn: {
      type: String,
      required: true,
    },
    // корисність українською (text - textarea)
    help: {
      type: String,
      required: true,
    },
    // корисність англійською (text - textarea)
    helpEn: {
      type: String,
      required: true,
    },
    //  картинка екранів (image - button)
    screensImage: {
      type: String,
      required: true,
    },
    // мобільна адаптація українською (text - textarea)
    adaptation: {
      type: String,
      required: true,
    },
    // мобільна адаптація англійською (text - textarea)
    adaptationEn: {
      type: String,
      required: true,
    },
    // картинки мобільних пристроїв (images - button)
    mobileImages: {
      type: Array,
      required: true,
    },
    // ссилка на сайт (text - input)
    siteLink: {
      type: String,
      required: true,
    },
    // slug (text - input)
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
    // заголовок українською (text - input)
    title: {
      type: String,
    },
    // заголовок англійською (text - input)
    titleEn: {
      type: String,
    },
    // заголовок з градієнтом українською (text - input)
    titleGradient: {
      type: String,
    },
    // заголовок з градієнтом англійською (text - input)
    titleGradientEn: {
      type: String,
    },
    // основна картинка (image - button)
    mockup: {
      type: String,
      required: true,
    },
    // опис українською (text - textarea)
    description: {
      type: String,
      required: true,
    },
    // опис англійською (text - textarea)
    descriptionEn: {
      type: String,
      required: true,
    },
    // ціна українською (text - input)
    price: {
      type: String,
      required: true,
    },
    // ціна англійською (text - input)
    priceEn: {
      type: String,
      required: true,
    },
    // послуги українською (list - textarea)
    directions: {
      type: String,   // String - after request, before render will be changed to Array 
      required: true,
    },
    // послуги англійською (list - textarea)
    directionsEn: {
      type: String,   // String - after request, before render will be changed to Array 
      required: true,
    },
    // slug (text - input)
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
    // заголовок українською (text - input)
    title: {
      type: String,
    },
    // заголовок англійською (text - input)
    titleEn: {
      type: String,
    },
    // картинки (images - button)
    images: {
      type: Array,
      required: true,
    },
    // опис українською (text - textarea)
    description: {
      type: String,
      required: true,
    },
    // опис англійською (text - textarea)
    descriptionEn: {
      type: String,
      required: true,
    },
    // напрямки (text - input)
    direction: {
      type: String,   // after request, before render will be changed to Array 
      required: true,
    },
    // напрямки англійською (text - input)
    directionEn: {
      type: String,   // after request, before render will be changed to Array 
      required: true,
    },
    // slug (text - input)
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
    // ім'я українською (text - input)
    name: {
      type: String,
      required: true,
    },
    // ім'я англійською (text - input)
    nameEn: {
      type: String,
      required: true,
    },
    // // пошта (text - input) - возможно, впоследствии уберётся
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // // пароль (text - input) - возможно, впоследствии уберётся
    // password: {
    //   type: String,
    //   required: true,
    // },
    // фото (image - button)
    photo: {
      type: String,
      required: true,
    },
    // спеціалізація українською (text - input)
    position: {
      type: String,
      required: true,
    },
    // спеціалізація англійською (text - input)
    positionEn: {
      type: String,
      required: true,
    },
    // // Адмін (text - checkbox: isAdmin) - возможно, впоследствии уберётся
    // isAdmin: {
    //   type: Boolean,
    //   default: false,
    // },
    // slug (text - input)
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

export const Coworker = mongoose.models.Coworker || mongoose.model('Coworker', coworkerSchema);
