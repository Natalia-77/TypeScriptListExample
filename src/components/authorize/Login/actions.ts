import { Dispatch } from 'react';
import http from '../../../http_common';
import {
    AuthAction,
    AuthActionTypes,
    ILoginModel,
    IUser,
    ILoginResponse,
    ILoginServerError
} from './types';
import jwt from 'jsonwebtoken';
import axios, { AxiosError } from 'axios';
import { Authtoken } from '../../../helpers/auth_token';

export const LoginCurrentUser = (data: ILoginModel) => async (dispatch: Dispatch<AuthAction>) => {

    try {

        const response = await http.post<ILoginResponse>("api/auth/login", data);
        const { access_token } = await response.data;
        console.log("Token value:", access_token);
        AuthUserData(access_token, dispatch);
        return Promise.resolve();
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            const servererror = error as AxiosError<ILoginServerError>;
            if (servererror && servererror.response) {
                return Promise.reject(servererror.response.data);
            }
        }
        return Promise.reject(error);
    }
}

export const AuthUserData = (token: string, dispatch: Dispatch<AuthAction>) => {
    Authtoken(token);
    localStorage.setItem('Token', token);
   AuthTokenDecode(token,dispatch);
}

export const AuthTokenDecode=(token: string, dispatch: Dispatch<AuthAction>)=>
{
    const userdata = jwt.decode(token) as IUser;
    console.log("Userdata", userdata);
    const user: IUser = {
        email: userdata.email,
        image: userdata.image,
    };
    console.log(userdata.email);
    dispatch({
        type: AuthActionTypes.LOGIN_AUTH,
        payload: user
    });
}

export const LogoutUser = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        Authtoken('');
        dispatch({
            type: AuthActionTypes.LOGOUT_AUTH
        });
        localStorage.removeItem('Token');
    }
}