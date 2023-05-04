import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE } from "../constants"

let initialState={
    items:[],
    totalQuantity:0,
    totalAmount:0,
    isVisible:false
}
export const cartReducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_TO_CART:
            
            const existingIndex = state.items.findIndex((cartItem)=>cartItem.id===action.productData.id)
            let cartArray;
            if(existingIndex!==-1){
                const modifiedObject = {...state.items[existingIndex],quantity:state.items[existingIndex].quantity+1}
                state.items[existingIndex] = modifiedObject;
                cartArray = state.items;

            }
            else{
                cartArray = state.items.concat(action.productData) 
            }
            const total = state.totalAmount + action.productData.price
            return {
                items : cartArray,
                totalQuantity:state.totalQuantity+1,
                totalAmount:total,
                isVisible:state.isVisible
            }
        case REMOVE_FROM_CART:
            let items = state.items
            const index = state.items.findIndex((cartItem)=>cartItem.id===action.itemId)
            const cartAmount = state.totalAmount - items[index].price;
            if(items[index].quantity>1){
                const newObj = {...items[index],quantity:items[index].quantity-1}
                items[index] = newObj
            }
            else{
                items.splice(index,1)
            }
            
            return {
                items : items,
                totalQuantity:state.totalQuantity-1,
                totalAmount:cartAmount,
                isVisible:state.isVisible
            }
        case TOGGLE:
            return{
                items : state.items,
                totalQuantity:state.totalQuantity,
                totalAmount:state.totalAmount,
                isVisible:!state.isVisible
            }    
        default:
            return state     
    }

}