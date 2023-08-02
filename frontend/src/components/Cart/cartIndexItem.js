import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./cartIndexItem.css"
import { useDispatch, useSelector } from "react-redux"
import { deleteCartItem } from "../../store/cart"

function CartIndexItem({productId,products}) {
    const product = Object.values(products).filter((product)=> product.id === productId)
    // console.log(product)
    // debugger

    const cartItemId = useSelector

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteCartItem())
    }
    
    return(
        <>
            <div className="shoppingCartContainer">

                <ul className="containerForEachCartItem">
                    
                    <div className="CartPhotoContainer">
                        <Link to={`/products/${product[0].id}`}><img className="cartPhoto"src={product[0].photoUrl} alt="product_image"/></Link>
                    </div>

                    <li className="cartProductIndexItem">

                        <div className="cartProductIndexDetailsContainer">
                            <p className="cartProductName">{product[0].itemName}</p>
                            <br/>
                            <span className="cartIndexMoney">
                                    <p className="cartIndexMoneySymbol">$ </p>
                                    <p className="cartIndexPrice">{product[0].itemPrice}</p>
                                    <p className="cartIndexMoneyZeros">.00</p>
                            </span>

                            <br/>

                            <p className="cartInStock">In Stock</p>

                            <br/>

                            <div className="containerForQuantityAndDelete">
                                <label className="quantityCartShow">Qty:
                                    <select className="quantityOption">
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