import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./productsIndexItem.css"

function ProductIndexItem({product}) {
    return(
        <>
            <ul className="">
                <li className="productIndexItem">
                    <p>{product.itemName}</p>
                    <p>{product.itemDescription}</p>
                    <p>{product.itemPrice}</p>
                    <Link to={`/products/${product.id}`}>{product.itemName}</Link>
                </li>
            </ul>
        </>
    )
}

export default ProductIndexItem