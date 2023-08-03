import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchResults, fetchSearchResults } from "../../store/search";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function SearchBar() {

    const [searchText,setSearchText] = useState()
    const [timer, setTimer] = useState(0)
    const dispatch = useDispatch()
    const history = useHistory()

    const searchResults = useSelector(state => Object.values(state.search))

    function handleClick(id){
        return (e) => {
            e.preventDefault()
            history.push(`/products/${id}`)
            dispatch(clearSearchResults)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(searchText?.trim() !== ""){
            history.push(`/search?query=${searchText}`)
        }
    }

    function handleSearch(e) {
        const query = e.target.value
        setSearchText(query)
        clearTimeout(timer)

        if(query.trim() !== ""){
            setTimer(setTimeout(()=> dispatch(fetchSearchResults(query)),300))
        } else {
            dispatch(clearSearchResults)
        }
    }

    return(
        <div className="searchbar-container">

            <input type="text" id="search-input" value={searchText} placeholder=" Search TheoZon" onChange={handleSearch}></input>

            <button id="search-button" onClick={handleSubmit}><i className="fa-solid fa-magnifying-glass" style={{color: "",}}></i></button>

            {searchText && searchResults && <ul id="search-dropdown">
                    {searchResults.map(result => {
                        return <li className="search-dropdown-item" onClick={handleClick(result.id)}>{result.itemName}</li>
                    })}
            </ul>}
        </div>
    )
}

export default SearchBar