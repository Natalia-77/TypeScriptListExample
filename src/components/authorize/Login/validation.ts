import * as Yup from "yup";

export const LoginSchema = Yup.object({
    email: Yup.string()
        .email("Неправильні дані")
        .required("Обовязкове поле для заповнення"),

    password: Yup.string()
        .min(6, 'Пароль має містить мінімум 6 символів.')
        // .matches(/[a-zA-Z]/, 'Пароль має містить латинські символи.')
        .required('Обовязкове поле для заповнення')

});