import { Dispatch } from 'react';
import http from '../../../http_common';
import { AuthAction,
        AuthActionTypes,
        ILoginModel,
        IUser,
        ILoginResponse,
        ILoginServerError } from './types';
import jwt from 'jsonwebtoken';
import axios, { AxiosError } from 'axios';

export const LoginCurrentUser=(data:ILoginModel)=>async(dispatch:Dispatch<AuthAction>)=>{

    try{ 

     const response = await http.post<ILoginResponse>("api/auth/login", data);
        const {access_token} = response.data;
        localStorage.setItem('Current user', access_token); 
        console.log("Token value:",access_token);
        const userdata = jwt.decode(access_token) as IUser;
        const user : IUser = {
            email: userdata.email,
            image: userdata.image,
          };
        dispatch({
            type: AuthActionTypes.LOGIN_AUTH,
            payload:user
        });
        return Promise.resolve();
    }
    catch(error){
        if(axios.isAxiosError(error))
        {
            const servererror = error as AxiosError<ILoginServerError>;
            if(servererror && servererror.response)
            {
                return Promise.reject(servererror.response.data);
            }
        }
        return Promise.reject(error);

    }
}