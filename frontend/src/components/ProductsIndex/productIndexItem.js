import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./productsIndexItem.css"

function ProductIndexItem({product}) {
    return(
        <>
            
            <ul className="containerForEachItem">
                <div className="productPhotoContainer">
                    <Link to={`/products/${product.id}`}><img className="productPhoto"src={product.photoUrl} alt="product_image"/></Link>
                </div>
                <li className="productIndexItem">
                    <div className="productIndexDetailsContainer">
                        <p className="productName">{product.itemName}</p>
                        <br/>
                        <span className="productIndexMoney">
                                <p className="productIndexMoneySymbol">$</p>
                                <p className="productIndexPrice">{product.itemPrice}</p>
                                <p className="productIndexMoneyZeros">00</p>
                        </span>

                    </div>
                    {/* <Link to={`/products/${product.id}`}>{product.itemName}</Link> */}
                </li>
            </ul>
        </>
    )
}

export default ProductIndexItem