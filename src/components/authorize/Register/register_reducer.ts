import { IRegisterState, RegisterAction, RegisterActionTypes } from './types';

const initialState: IRegisterState = {
    user_data: '',
    isAuth: false
};

export const register_reducer = (state = initialState, action: RegisterAction): IRegisterState => {
    switch (action.type) {
        case RegisterActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                user_data: action.payload,
                isAuth: true
            };
        default:
            return state;
    }

}