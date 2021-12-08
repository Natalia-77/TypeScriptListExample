import { Form,FormikProvider, useFormik } from "formik";
import { ILoginModel } from './types';
import { LoginSchema } from './validation';
import { InputGroup } from "../../common/Input";

const Login: React.FC = () => {

    const initialValues: ILoginModel = {
        email: "",
        password: ""
    };

    const onSubmitHandler = (values: ILoginModel) => {


    }

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

