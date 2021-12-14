import { IUser } from "../Login/types";



export interface IRegisterModel {
    name?: string;
    email?: string;
    Image?: File | null;
    password?: string;
    password_confirm?: string;
}

export interface IReturnedResponse 
{
    access_token: string;
    user: IUser;
}

export interface IRegisterErrorResponse {
    name: Array<string>;
    email: Array<string>;
    password_confirm: Array<string>;
    error: string;
}