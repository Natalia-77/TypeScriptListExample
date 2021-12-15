import { IUser } from "../Login/types";

export enum RegisterActionTypes{
    REGISTER_SUCCESS="REGISTER_SUCCESS"
}

export interface IRegisterState{
    user_data:string,
    isAuth:boolean
}

export interface IRegisterModel {
    name: string;
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
    name: Array<string>,
    email: Array<string>,
    password:Array<string>,
    password_confirm: Array<string>   
}

export interface RegisterSuccessAction{
    type : RegisterActionTypes.REGISTER_SUCCESS,
    payload : string
}

export type RegisterAction = RegisterSuccessAction;