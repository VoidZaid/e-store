import React, { createContext, useReducer } from 'react';
import { CartReducer } from './cartReducer';

export const CartContext = createContext();

let cart = sessionStorage.getItem('cart');
const storage = cart? JSON.parse(cart) : [];
console.log(storage)
const initialState = {cartItems: storage};

const CartContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(CartReducer, initialState)
    const addProduct = (payLoad)=>{
        dispatch({type:'ADD', payLoad})
        return state.cartItems
    }
    const removeProduct = (payLoad)=>{
        dispatch({type: 'REMOVE', payLoad})
        return state.cartItems
    }
    const increaseQuantity = (payLoad)=>{
        dispatch({type: 'INCQTY', payLoad})
        return state.cartItems
    }
    const decreaseQuantity = (payLoad)=>{
        debugger
        dispatch({type: 'DECQTY', payLoad})
        return state.cartItems
    }
    const clearBasket = () =>{
        debugger
        dispatch({type: 'CLEAR', payLoad: undefined});
        return state.cartItems
    }
    const getItems = () =>{
        return state.cartItems;
    }
    const contextValues = {
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        clearBasket,
        getItems,
        ...state
    }
    return(
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>    
    )
}

export default CartContextProvider;