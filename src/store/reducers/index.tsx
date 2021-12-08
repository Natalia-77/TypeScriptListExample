import {combineReducers} from "redux";
import { authReducer } from "../../components/authorize/Login/login_reducer";

export const rootReducer = combineReducers({
    log: authReducer
})

export type RootState = ReturnType<typeof rootReducer>