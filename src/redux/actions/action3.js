import { REMOVE_FROM_CART } from "../constants"

export const removeItem = (itemId) =>{
    return{
        type:REMOVE_FROM_CART,
        itemId
    }
}