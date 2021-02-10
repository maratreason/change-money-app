import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";
import { currencyReducer } from "./currencyReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
    currency: currencyReducer
});

export type RootState = ReturnType<typeof rootReducer>