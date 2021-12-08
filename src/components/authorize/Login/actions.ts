import { Dispatch } from 'react';
import http from '../../../http_common';
import { AuthAction, AuthActionTypes, ILoginModel,IUser,ILoginResponse } from './types';

import jwt from 'jsonwebtoken';

export const LoginCurrentUser=(data:ILoginModel)=>async(dispatch:Dispatch<AuthAction>)=>{

    try{ 

     const response = await http.post<ILoginResponse>("api/auth/login", data);
        const {tokenValue} = response.data;
        const userdata = jwt.decode(tokenValue) as IUser;
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
    catch{

    }
}