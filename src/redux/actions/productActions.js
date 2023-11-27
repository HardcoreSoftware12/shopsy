import {ActionTypes} from '../constants/actionTypes'
export const setProducts = (products)=>{
    console.log(products);
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }

}

export const selectedProduct = (product)=>{
    console.log(product);
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }

}

export const removeSelectedProduct = ()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    }

}

// export const setProducts = (products)=>{
//     return{
//         type:ActionTypes.SET_PRODUCTS,
//         payload:products
//     }

// }