import * as yup from "yup";


export const dashboardUserRegisterSchema = yup.object({
    name: yup
        .string()
        .required('Імʼя це обовʼязкове поле')
        .min(4, 'Імʼя занадто коротке!')
        .max(40, 'Імʼя занадто довге!'),
    email: yup
        .string()
        .required('Email це обовʼязкове поле')
        .email('Невірний формат'),
    password: yup
        .string()
        .required('Пароль це обовʼязкове поле')
        .min(7, 'Пароль занадто короткий!')
        .max(40, 'Пароль занадто довгий!'),
});      