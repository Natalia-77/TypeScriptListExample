import { Form, FormikProvider, useFormik, FormikHelpers } from "formik";
import React, { useState } from 'react';
import { ILoginModel, ILoginServerError } from './types';
import { LoginSchema } from './validation';
import { InputGroup } from "../../../common/InputGroup";
import { useActions } from '../../../hooks/useActions';
import { useNavigate } from "react-router";

const Login: React.FC = () => {

    const { LoginCurrentUser } = useActions();
    const navigator = useNavigate();

    const initialValues: ILoginModel = {
        email: "",
        password: ""
    };
    const [errordata, setErrordata] = useState<string>("");

    const onSubmitHandler = async (values: ILoginModel, { setFieldError }: FormikHelpers<ILoginModel>) => {
        console.log("Data to server:", values);
        try {

            await LoginCurrentUser(values);
            navigator("/");

        }
        catch (ex) {
            const serverErrors = ex as ILoginServerError;
            Object.entries(serverErrors).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    let message = "";
                    value.forEach((item) => {
                        message += `${item} `;
                        setFieldError(key, message);
                    });

                }
            });
            if (serverErrors.error) {
                setErrordata(serverErrors.error);
            }
        }
    };


    const formik = useFormik(
        {
            initialValues: initialValues,
            validationSchema: LoginSchema,
            onSubmit: onSubmitHandler
        }
    );

    const { errors, touched, handleChange, handleSubmit } = formik;

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1>Login page</h1>
                <FormikProvider value={formik}>
                    {errordata && <div className="alert alert-danger">{errordata}</div>}
                    <Form onSubmit={handleSubmit}>
                        <InputGroup
                            field="email"
                            label="Email"
                            error={errors.email}
                            touched={touched.email}
                            onChange={handleChange}
                        />

                        <InputGroup
                            field="password"
                            label="Password"
                            type="password"
                            touched={touched.password}
                            error={errors.password}
                            onChange={handleChange}
                        />

                        <button type="submit" className="btn btn-danger">
                            Log in
                        </button>
                    </Form>
                </FormikProvider>
            </div>
        </div>
    )

}

export default Login;

