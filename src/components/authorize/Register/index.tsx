import { useNavigate } from 'react-router';
import { Form, FormikHelpers, FormikProvider, useFormik } from "formik";
import { useState } from "react";
import { IRegisterModel } from './types';

const Register=()=>{
    const navigator = useNavigate();
    const initialValues:IRegisterModel = {
        name: '',
        email:'',
        Image: null,
        password:'',
        password_confirm: ''
    };

    return(
        <>
        </>
    )
}

export default Register;