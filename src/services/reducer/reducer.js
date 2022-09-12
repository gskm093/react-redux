import {ADD_TO_CART,REMOVE_FROM_CART} from '../constant'


//1.Design Store
const initialState = {
    products:[{prodName:"iPhone 14 pro max",
    imgD:[require('../../assets/images/iphone14.jpg')+' 1000w',
     require('../../assets/images/iphone14 1x.jpg')+ ' 800w',
     require('../../assets/images/iphone14 2x.jpg')+ ' 500w'],
    price:139000
   },
   {prodName:"Oppo Reno 8 pro",
    imgD:[require('../../assets/images/opporeno8pro.jpg')+' 1000w',
    require('../../assets/images/opporeno8pro 1x.jpg')+' 800w',
    require('../../assets/images/opporeno8pro 2x.jpg')+' 500w'],
    price:49950
   },
   {prodName:"Samsung s22 ultra",
   imgD: [require('../../assets/images/Samsung.jpg') +' 1000w',
   require('../../assets/images/Samsung 1x.jpg')+' 800w',
   require('../../assets/images/Samsung 2x.jpg')+' 500w'],
   price:118999
  }],
  cartData:[]
}
//3.Define reducer
export default function cartItems(state = initialState,action){
// switch(action.type){
//     case ADD_TO_CART:
//         return [
//             ...state,
//             {cartData:action.data}
//         ]
//         break;
//     case REMOVE_FROM_CART:
//         state.pop();
//         return [
//             ...state
//         ]
//         default:
//             return state;
// }
console.log("Reducer",state);

 if(action.type === ADD_TO_CART){
    state.cartData.push(action.payload.item);
    return {
       ...state,
    }
 }
 else if(action.type===REMOVE_FROM_CART){
    let findProduct = state.cartData.find((p)=> {
        return p.prodName === action.payload.item.prodName;
    });
    if(findProduct){
        console.log("Product found and ready to remove");
        let findProdIndex = state.cartData.findIndex((i)=>i.prodName===findProduct.name);
        state.cartData.splice(findProdIndex,1);
        return {
            ...state
        }
    }
    else{
        return {
            ...state
        }
    }
 }
 return {
    ...state
 }
}