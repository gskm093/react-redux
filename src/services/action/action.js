import {ADD_TO_CART,REMOVE_FROM_CART} from '../constant'

//2.Define Action
export const addToCart=(data)=>{
    console.warn("action",data)
    return {
        type:ADD_TO_CART,
        payload:{
            item:data
        }
    }
}

export const removeFromCart=(data)=>{
    console.warn("action");
    return{
        type:REMOVE_FROM_CART,
        payload:{
            item:data
        }
    }
}
