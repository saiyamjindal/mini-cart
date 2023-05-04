import { ADD_TO_CART } from "../constants"

export const cartAction = (productData) =>{
    return{
        type:ADD_TO_CART,
        productData
    }
}