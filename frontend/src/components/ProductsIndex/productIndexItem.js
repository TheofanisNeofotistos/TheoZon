import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./productsIndexItem.css"

function ProductIndexItem({product}) {
    return(
        <>
            
            <ul className="containerForEachItem">
                <li className="productIndexItem">
                    <Link to={`/products/${product.id}`}><img className="productPhoto"src={product.photoUrl} alt="product_image"/></Link>
                    <p className="productName">{product.itemName}</p>
                    <p className="productPrice">${product.itemPrice}</p>
                    {/* <Link to={`/products/${product.id}`}>{product.itemName}</Link> */}
                </li>
            </ul>
        </>
    )
}

export default ProductIndexItem