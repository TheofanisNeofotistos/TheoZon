import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./productsIndexItem.css"

function ProductIndexItem({product}) {
    return(
        <>
            
            <ul className="containerForEachItem">
                <li className="productIndexItem">
                    <p className="productName">{product.itemName}</p>
                    <p className="productDescription">{product.itemDescription}</p>
                    <p className="productPrice">${product.itemPrice}</p>
                    <img className="productPhoto"src={product.photoUrl} alt="product_image"/>
                    <Link to={`/products/${product.id}`}>{product.itemName}</Link>
                </li>
            </ul>
        </>
    )
}

export default ProductIndexItem