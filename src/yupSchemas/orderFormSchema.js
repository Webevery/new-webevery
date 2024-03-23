import * as yup from "yup";

const regexPhone = /^\+\d{12}$/;

export const orderFormSchema = yup.object({
    userName: yup
        .string()
        .required("Username is required")
        .min(3, "Too short"),
    tel: yup
        .string()
        .required("Phone is required")
        .matches(regexPhone, "+380123456789"),
    message: yup
        .string()
});