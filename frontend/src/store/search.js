import csrfFetch from "./csrf";

export const GET_SEARCH_RESULTS = "search/GET_SEARCH_RESULTS"
export const CLEAR_SEARCH_RESULTS = "search/CLEAR_SEARCH_RESULTS"

export const recieveSearchResults = (searchResults) => ({
    type: GET_SEARCH_RESULTS,
    searchResults

})

export const clearSearchResults = () => ({
    type: CLEAR_SEARCH_RESULTS
})

export const fetchSearchResults = (query) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/search?query=${query}`)
    const data = await response.json()

    dispatch(recieveSearchResults(data))
}

const searchReducer = (state ={}, action) => {
    const newState = {...state}

    switch(action.type){
        case GET_SEARCH_RESULTS:
            return{...action.searchResults.products}
        case CLEAR_SEARCH_RESULTS: 
            return {}
        default: 
            return newState
    }

}

export default searchReducer
