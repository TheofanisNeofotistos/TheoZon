import csrfFetch from "./csrf";
import { ADD_REVIEW } from "./review";

export const RECEIVE_ALL_PRODUCTS = "products/RECEIVE_ALL_PRODUCTS"
export const RECEIVE_PRODUCT = "products/RECEIVE_PRODUCT"

const receieveProducts = (products) => {
    return ({
        type:RECEIVE_ALL_PRODUCTS,
        products
    })
}

const receieveProduct = (product, reviews) => {

    return ({
        type:RECEIVE_PRODUCT,
        product,
        reviews
    })
}

export const fetchProducts = () => async (dispatch) => {
    const response = await csrfFetch("/api/products")
    const data = await response.json()

    dispatch(receieveProducts(data.products))
    return response
}

export const fetchProduct = (productId) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/${productId}`)
    const data = await response.json()

    dispatch(receieveProduct(data.product,data.reviews))
    return response
}

const initialState = null

export const productsReducer = (state = initialState, action) => {
    let newState = Object.freeze(state)

    switch(action.type){
        
        case RECEIVE_ALL_PRODUCTS:
            return {...action.products}
        case RECEIVE_PRODUCT:
            return {...newState,...action.product}
        default:
            return newState
    }
}