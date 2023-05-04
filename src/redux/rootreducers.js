import { combineReducers } from "redux";
import { showProductsReducer } from "./reducers/reducer1";
import { cartReducer } from "./reducers/reducer2";
export const rootReducer = combineReducers({
    reducer1:showProductsReducer,reducer2:cartReducer
})