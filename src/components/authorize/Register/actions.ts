import { RegisterActionTypes,RegisterAction,IReturnedResponse, IRegisterErrorResponse } from "./types"
import axios, { AxiosError } from 'axios';
import { Dispatch } from 'react';
import http from '../../../http_common';
import {AuthUserData} from'../Login/actions';

export const RegisterUser=(data: FormData)=>{
    return async(dispatch:Dispatch<RegisterAction>)=>{
        try{
            const response = await http.post<IReturnedResponse>("api/auth/register",data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { access_token } = await response.data;
            console.log(response.data);
            dispatch({
               type: RegisterActionTypes.REGISTER_SUCCESS,
                payload: access_token
              });
              AuthUserData(access_token,dispatch);
              return Promise.resolve(access_token);
        }
        catch(error_register){
            if (axios.isAxiosError(error_register)) {
               
                const servererror = error_register as AxiosError<IRegisterErrorResponse>;
                if (servererror && servererror.response) {
                    
                    return Promise.reject(servererror.response.data);
                }
            }
            return Promise.reject(error_register);
        }
    }  

}