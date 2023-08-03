import React from "react";
import Navbar from "../Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../../store/search";
import ProductIndexItem from "../ProductsIndex/productIndexItem";


function SearchShowPage () {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get("query")
    const dispatch = useDispatch()
    const searchResults = useSelector(state => Object.values(state.search))


    useEffect(()=>{
        if(query){
            dispatch(fetchSearchResults(query))
        }
    },[])
    return(
        <>
            <Navbar/>
            <div className="search-page-container">
                {searchResults.map(result => {
                    return(
                        <ProductIndexItem product={result} />
                    )
                })}
            </div>

        </>
    )
}

export default SearchShowPage