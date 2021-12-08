export enum AuthActionTypes {
    LOGIN_AUTH = "LOGIN_AUTH",    
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

export interface ILoginResponse {
    tokenValue: string,
    user: IUser
}

export interface ILoginServerError {
    email: Array<string>
    password: Array<string>,
    error: string
} 

export interface LoginUserAction{

    type : AuthActionTypes.LOGIN_AUTH;
    payload : IUser;
}

export interface LogoutUser{

    type : AuthActionTypes.LOGOUT_AUTH;
}

export type AuthAction=LoginUserAction | LogoutUser;
