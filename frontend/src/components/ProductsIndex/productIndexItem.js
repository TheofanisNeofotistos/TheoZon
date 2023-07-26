import { Link } from "react-router-dom/cjs/react-router-dom.min"

function ProductIndexItem({product}) {
    return(
        <>
        <ul>
            <li>
            {product.itemName}
            {product.itemDescription}
            {product.itemPrice}
            <Link to={`/products/${product.id}`}>{product.itemName}</Link>
            </li>
        </ul>
        </>
    )
}

export default ProductIndexItem