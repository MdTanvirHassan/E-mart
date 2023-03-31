//For ADD Item to Cart
export const ADD_TO_CART= (product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

//For Delete Item to Cart
export const DEL_TO_CART= (product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}