import { async } from "regenerator-runtime";
import csrfFetch from "./csrf";
import { RECEIVE_PRODUCT } from "./products";

const ADD_REVIEW = "review/ADD_REVIEW"
const UPDATE_REVIEW = "review/UPDATE_REVIEW"
const REMOVE_REVIEW = "review/REMOVE_REVIEW"

export const addReview = (review) => {
    return {
        type: ADD_REVIEW, 
        review
    }
}

export const updateReview = (reviewId, review) => {
    return{
        type: UPDATE_REVIEW, 
        reviewId,
        review
    }
}

export const removeReview = (reviewId) => {
    return{
        type: REMOVE_REVIEW,
        reviewId
    }
}

export const submitProductReview = (review) => async (dispatch) =>{
    const response = await csrfFetch("api/reviews",{
        method: "POST",
        body: JSON.stringify(review)
    })

    const data = await response.json()

    dispatch(addReview(data.review))
}

export const deleteProductReview = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`api/reviews/${reviewId}`,{
        method: "DELETE"
    })

    dispatch(removeReview(reviewId))
}

export const editProductReview = (reviewId, review) => async (dispatch) => {
    const response = await csrfFetch(`api/reviews/${reviewId}`,{
        method: "PATCH",
        body: JSON.stringify(review)
    })

    dispatch(updateReview(review, reviewId))
}

function reviewsReducer (state = {}, action) {
    const newState = {...state}

    switch(action.type) {
        case RECEIVE_PRODUCT:
            return {...newState, ...action.reviews}
        case ADD_REVIEW:
            return {...newState, ...action.review}
        case REMOVE_REVIEW:
            delete newState[action.reviewId]
            return newState;
        case UPDATE_REVIEW:
            newState[action.reviewId] = action.review
            return newState;
        default:
            return state
    }
}

export default reviewsReducer