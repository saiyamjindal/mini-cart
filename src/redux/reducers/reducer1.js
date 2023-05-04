import { SET_PRODUCTS } from "../constants"
export const showProductsReducer = (data=[],action)=>{
    switch(action.type){
        case SET_PRODUCTS:
            return [...action.data]
        default:
            return data    
    }
}