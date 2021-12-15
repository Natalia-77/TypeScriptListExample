import * as Yup from "yup";

export const LoginValidationSchema = Yup.object({
    name: Yup.string()        
        .required("Обовязкове поле для заповнення"),
    email: Yup.string()
        .email("Неправильні дані")
        .required("Обовязкове поле для заповнення"),
    password: Yup.string()
        .min(6, 'Пароль має містить мінімум 6 символів.')
        // .matches(/[a-zA-Z]/, 'Пароль має містить латинські символи.')
        .required('Обовязкове поле для заповнення'),
    password_confirm: Yup.string()
        .min(6, 'Пароль має містить мінімум 6 символів.')
        .required("Обовязкове поле для заповнення")
        .oneOf([Yup.ref("password"), null], () => "Паролі повинні співпадати")

});