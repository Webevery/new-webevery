import * as yup from "yup";


export const dashboardUserCreateSchema = yup.object({
    name: yup
        .string()
        .required("Name is required"),
    email: yup
        .string()
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
});