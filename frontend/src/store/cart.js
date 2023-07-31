import csrfFetch from "./csrf";
import { SET_CURRENT_USER } from "./session";

const ADD_PRODUCT_TO_CART = "cart/ADD_PRODUCT_TO_CART"
const RECIEVE_CART = "cart/RECIEVE_CART"
const RESET_CART = "cart/RESET_CART"

const addProductToCart = (cartItem) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        cartItem
    }
}

const recieveCart = (cart) => {
    return{
        type: RECIEVE_CART,
        cart
    }
}

export const resetCart = ()=> {
    return {
        type: RESET_CART,
        cart: null
    }
}


export const getCartItems = (userId) => async (dispatch) => {
    const response = await csrfFetch(`api/users/${userId}`)
    const data = await response.json()

    dispatch(recieveCart(data.cart))
}


export const addCartItem = (cartItem) => async (dispatch) => {
    const response = await csrfFetch("api/carts",{
        method: "POST",
        body: JSON.stringify(cartItem)
    })
    const data = await response.json()

    dispatch(addProductToCart(data.cart))
}

function cartReducer (state = {}, action){
    const newState = {...state}

    switch(action.type){
        case RECIEVE_CART:
            sessionStorage.setItem("cart", JSON.stringify(action.cart))
            return {...newState, ...action.cart}
        case ADD_PRODUCT_TO_CART:
            sessionStorage.setItem("cart", JSON.stringify(action.cartItem))
            newState[action.cartItem.id] = action.cartItem
            return newState
        case RESET_CART:
            return action.cart
        case SET_CURRENT_USER:
            return{...newState,...action.cart}
        default:
            return newState 

    }
}

export default cartReducer

