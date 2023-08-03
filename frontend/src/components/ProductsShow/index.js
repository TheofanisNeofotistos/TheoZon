import { useEffect ,useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct } from "../../store/products"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import "./productsShow.css"
import Navbar from "../Navbar";
import { addCartItem, getCartItems } from "../../store/cart"




function ProductShow (props){
    const currentUser = useSelector(state=>state.session.user);

    const delivery = currentUser ? ` Deliver to ${currentUser.username}` : "Sign in for delivery";

    const dispatch = useDispatch()
    const productId = useParams().productId
    const product = useSelector(state => state.products?.[productId])

    const [quantity, setQuantity] = useState(1)

    function handleAddToCart (){
        dispatch(addCartItem({
            cart:{
                productId: productId,
                quantity: quantity,
                userId: currentUser.id
            }
        }))
    }

    function handleChange(e){
        setQuantity(e.target.value)
        //this is where the update item would happen 
    }


    useEffect(()=>{
        // debugger 
        dispatch(fetchProduct(productId))
        dispatch(getCartItems(currentUser.id))
    },[productId])

    // useEffect(()=>{
        
    // },[productId])



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
                        <br/>
                        <p className="showProductDescription">{product.itemDescription}</p>
                </div>

            

                <div className="addToCartArea">

                    <span className="buyNewSpan">
                        <p className="buyNewShow">Buy New:</p>
                        <span className="cartAreaMoney">
                            <p className="cartMoneySymbol">$</p>
                            <p className="cartAreaPrice">{product.itemPrice}</p>
                            <p className="cartMoneyZeros">00</p>
                        </span>
                    </span>

                    <p className="freeReturnsShow">FREE Returns</p>
                    <div className="showDeliveryContainer">
                        <i className="fa-solid fa-location-dot" style={{color: "#2757aa"}}></i>
                        <p className="showDelivery">{delivery}</p>   
                    </div>  
            
                    <br/>

                    <p className="inStock">In Stock</p>

                    <br/>

                    <span className="quantityContainer">
                        <label className="quantityCartShow">Qty:
                            <select className="quantityOption" onChange={handleChange} defaultValue={quantity}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </label>
                    </span>

                    <br/>
                    
                    <div className="addToCartButtonArea">
                        <button className="addToCartButtonShow" onClick={handleAddToCart}>Add to Cart</button>
                        {/* <button className="buyNowButtonShow">Buy Now</button> */}
                    </div>
                </div>

            </div>

            <div className="showpageReviewContainer">

                <div className="showPageBreak"></div>

               


            </div>
        </>
    )
}

export default ProductShow