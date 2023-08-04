import React, { useState } from "react"
import Navbar from "../Navbar"
import "./review.css"
import { useDispatch, useSelector } from "react-redux"
import { submitProductReview } from "../../store/review"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom"



function Review (){

    const dispatch = useDispatch()
    const history = useHistory();
    const productId = useParams().productId
    const currentUser = useSelector(state => state.session.user);

    const [body, setBody] = useState("")
    const [title, setTitle] = useState("")

    function handleClick (e){
        e.preventDefault();
        if (!currentUser) {
            history.push('/login')
        } else {
           let review = { title, body, productId};
           dispatch(submitProductReview(review)).then(() => {history.push(`/products/${productId}`)});
        }
    }
    return (
        <>
            <Navbar/>

            <div className="reviewContainer">

                <h1 className="reviewHeader">Create a Review</h1>
                <div className="formBreak"/>
                <form className="reviewForm">
    
                    <h1 className="formH1">Add a headline</h1>

                    <label>
                        <input className="textArea"type="text" placeholder="What's most import to know?" onChange={(e) => {setTitle(e.target.value)}}></input>
                    </label>

                    <div className="formBreak"/>

                    <h1 className="formH1">Add a written review</h1>
                    
                    <label>
                        <textarea className="textArea" placeholder="What did you like or dislike? What did you use this product for?" onChange={(e) => {setBody(e.target.value)}}></textarea>
                    </label>

                    <div className="formBreak"/>

                    <button className="formSubmit" onClick={handleClick}>Submit</button>


                </form>

            </div>
            
        </>
    )
}

export default Review