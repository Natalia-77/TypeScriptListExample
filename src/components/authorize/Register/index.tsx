import { useNavigate } from 'react-router';
import { useActions } from '../../../hooks/useActions';
import { Form, FormikHelpers, FormikProvider, useFormik } from "formik";
import { useState } from "react";
import { IRegisterModel, IRegisterErrorResponse } from './types';
import { LoginValidationSchema } from './validation';
import TextInput from '../../../common/TextInput';
import ImageInput from '../../../common/ImageInput';

const Register = () => {

    const navigator = useNavigate();
    const { RegisterUser } = useActions();

    const initialValues: IRegisterModel = {
        name: '',
        email: '',
        Image: null,
        password: '',
        password_confirm: ''
    };

    const onHandlerSubmit = async (values: IRegisterModel, { setFieldError }: FormikHelpers<IRegisterModel>) => {

        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => formData.append(key, value));
        console.log("Values:",values);
        try {
            await RegisterUser(formData);
            navigator("/");
        }
        catch (errors) {
            const serverErrors = errors as IRegisterErrorResponse;
            const { name, email, password, password_confirm } = serverErrors;
            Object.entries(serverErrors).forEach(([key, value])=> {
                if(Array.isArray(value))
                {
                    let message = "";
                    value.forEach((item)=> { message+=`${item} `; });
                    //setFieldError(key, message);
                    console.log(key, message);
                }
            });
           
        }

    }

    const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if ((e.target as HTMLInputElement).files) {
            setFieldValue("Image", e.target.files?.item(0));
        }
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: LoginValidationSchema,
        onSubmit: onHandlerSubmit
    });

    const { errors, touched, handleChange, handleSubmit, setFieldValue,setFieldError } = formik;

    return (
        <div className="container">
            <div className="row">
                <div className="offset-3 col-md-6">
                    <h1 className="text-center">Реєстрація</h1>

                    <FormikProvider value={formik}>
                        <Form onSubmit={handleSubmit}>
                            <TextInput
                                label="Ім'я"
                                field="name"
                                onChange={handleChange}
                                error={errors.name}
                                touched={touched.name}
                                type="text"
                            />
                            <TextInput
                                label="Електронна пошта"
                                field="email"
                                onChange={handleChange}
                                error={errors.email}
                                touched={touched.email}
                                type="text"
                            />
                            <TextInput
                                label="Пароль"
                                field="password"
                                onChange={handleChange}
                                error={errors.password}
                                touched={touched.password}
                                type="password"
                            />
                            <TextInput
                                label="Підтвердження пароля"
                                field="password_confirm"
                                onChange={handleChange}
                                error={errors.password_confirm}
                                touched={touched.password_confirm}
                                type="password"
                            />
                            <ImageInput
                                label="Фото"
                                field="Image"
                                onChange={fileChange}
                                error={errors.Image}
                                touched={touched.Image}
                                type="file"
                            />

                            <input type="submit" className="btn btn-success mt-4" value="Зареєструватися" />
                        </Form>
                    </FormikProvider>
                </div>
            </div>
        </div>);
}

export default Register;