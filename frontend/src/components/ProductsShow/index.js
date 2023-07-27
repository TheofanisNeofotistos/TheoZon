import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct } from "../../store/products"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import "./productsShow.css"
import Navbar from "../Navbar";



function ProductShow (props){

    const currentUser = useSelector(state=>state.session.user);

    const delivery = currentUser ? ` Deliver to ${currentUser.username}` : "Sign in for delivery";

    const dispatch = useDispatch()
    const productId = useParams().productId
    const product = useSelector(state => state.products?.[productId])

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    },[productId])

    if(!product){
        return null
    }
    return(
        <>
            <Navbar/>
            <div className="showpageContainer">
                <ul>
                        <img className="productPhotoShow"src={product.photoUrl} alt="product_image"/>
                        
                </ul>

                <div className="itemInfo">
                        <p className="showProductName">{product.itemName}</p>
                        <div className="showDivider"/>
                        <span className="showAreaMoney">
                            <p className="showMoneySymbol">$</p>
                            <p className="showMoneyPrice">{product.itemPrice}</p>
                            <p className="showMoneyZeros">00</p>
                        </span>
                        <div className="showDivider"/>
                        <p className="aboutThisItemShow">About this product</p>
                        <p className="showProductDescription">{product.itemDescription}</p>
                </div>

                <div className="addToCartArea">

                    <span className="buyNewSpan">
                        <p className="buyNewShow">Buy New: </p>
                        <span className="cartAreaMoney">
                            <p className="cartMoneySymbol">$</p>
                            <p className="cartAreaPrice">{product.itemPrice}</p>
                            <p className="cartMoneyZeros">00</p>
                        </span>
                    </span>

                    <p className="freeReturnsShow">FREE Returns</p>

                    <p className="showDelivery">{delivery}</p>     
            
                    <br/>

                    <p className="inStock">In Stock</p>

                    <label className="quantityCartShow"> Qty:
                        <select >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>

                        </select>
                    </label>
                    <br/>
                    
                    <button className="addToCartButtonShow">Add to Cart</button>
                    <button className="buyNowButtonShow">Buy Now</button>

                </div>
            </div>
        </>
    )
}

export default ProductShow