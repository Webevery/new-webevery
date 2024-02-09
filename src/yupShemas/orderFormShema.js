import * as yup from "yup";

const regexPhone = /^\+\d{12}$/;

export const YupOrderFormSchema = yup.object({
    userName: yup
        .string()
        .required("Username is required"),
    tel: yup
        .string()
        .required("Phone is required")
        .matches(regexPhone, "+380123456789"),
    message: yup
        .string()
});