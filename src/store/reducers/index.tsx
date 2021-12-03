import {combineReducers} from "redux";
import {prodReducer} from "./prodReducer";



export const rootReducer = combineReducers({
    prod: prodReducer    
})

export type RootState = ReturnType<typeof rootReducer>