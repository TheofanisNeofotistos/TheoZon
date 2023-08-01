import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./cartIndexItem.css"

function CartIndexItem({productId,products}) {
    const product = Object.values(products).filter((product)=> product.id === productId)
    // console.log(product)
    // debugger
    return(
        <>
            
            <ul className="containerForEachCartItem">
                <div className="CartPhotoContainer">
                    <Link to={`/products/${product[0].id}`}><img className="productPhoto"src={product[0].photoUrl} alt="product_image"/></Link>
                </div>
                <li className="cartProductIndexItem">
                    <div className="cartProductIndexDetailsContainer">
                        <p className="cartProductName">{product[0].itemName}</p>
                        <br/>
                        <span className="cartIndexMoney">
                                <p className="cartIndexMoneySymbol">$</p>
                                <p className="cartIndexPrice">{product[0].itemPrice}</p>
                                <p className="cartIndexMoneyZeros">00</p>
                        </span>

        

                    </div>
                </li>
            </ul>
        </>
    )
}

export default CartIndexItem