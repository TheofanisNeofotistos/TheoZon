import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./cartIndexItem.css"
import { useDispatch, useSelector } from "react-redux"
import { deleteCartItem, editCartItem } from "../../store/cart"
import { useState } from "react"

function CartIndexItem({productId,products,cartItemId,quantity}) {
    // const product = Object.values(products).filter((product)=> product.id === productId)
    const product = products[productId]

    
    
    
    const dispatch = useDispatch()
    
    const handleDelete = () => {
        dispatch(deleteCartItem(cartItemId))
    }

   

    function handleChange(e){
        // setCartQuantity(e.target.value)
        
        dispatch(editCartItem({
            cart:{
                id: cartItemId,
                productId: productId,
                quantity: e.target.value
            }}
        ))
        //this is where the update item would happen 
    }
    
    
    if(!product){
        return null
    }

    return(
        <>
            <div className="shoppingCartContainer">

                <ul className="containerForEachCartItem">
                    
                    <div className="CartPhotoContainer">
                        <Link to={`/products/${product.id}`}><img className="cartPhoto"src={product.photoUrl} alt="product_image"/></Link>
                    </div>

                    <li className="cartProductIndexItem">

                        <div className="cartProductIndexDetailsContainer">
                            <p className="cartProductName">{product.itemName}</p>
                            <br/>
                            <span className="cartIndexMoney">
                                    <p className="cartIndexMoneySymbol">$ </p>
                                    <p className="cartIndexPrice">{product.itemPrice}</p>
                                    <p className="cartIndexMoneyZeros">.00</p>
                            </span>

                            <br/>

                            <p className="cartInStock">In Stock</p>

                            <br/>

                            <div className="containerForQuantityAndDelete">
                            <label className="quantityCartShow">Qty:
                                <select className="quantityOption"  onChange={handleChange} defaultValue={quantity}>
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
                                

                                <button className="cartDeleteButton" onClick={handleDelete}>
                                    Delete
                                </button>
                                
                            </div>

                            <br/>



                        </div>

                    </li>

                </ul>

                <div className="cartPageBreak"/>
               







                

            </div>

            
        </>
    )
}

export default CartIndexItem