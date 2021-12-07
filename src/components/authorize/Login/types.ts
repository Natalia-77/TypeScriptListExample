export enum AuthActionTypes {
    LOGIN_AUTH = "LOGIN_AUTH",
    LOGIN_AUTH_SUCCESS = "LOGIN_AUTH_SUCCESS",
    LOGIN_AUTH_ERROR = "LOGIN_AUTH_ERROR",
    LOGOUT_AUTH = "LOGOUT_AUTH",
}

//модель входу на сайт.
export interface ILoginModel {
    email: string,
    password: string
}

//представлення користувача.
export interface IUser {
    email: string,
    image: string,
}

//стан користувача: може бути налл(не авторизований) або ж навпаки.
export interface AuthState {
    user: null|IUser;
    isAuth: boolean;
}

export interface LoginUserAction{

    type : AuthActionTypes.LOGIN_AUTH;
}

export interface LoginUserSuccess{

    type : AuthActionTypes.LOGIN_AUTH_SUCCESS;
    payload: IUser;
}

export interface LoginUserError{

    type : AuthActionTypes.LOGIN_AUTH_ERROR;
    payload: string
}

export interface LogoutUser{

    type : AuthActionTypes.LOGOUT_AUTH;
}

export type AuthAction=LoginUserAction | LoginUserSuccess |LoginUserError |LogoutUser;
