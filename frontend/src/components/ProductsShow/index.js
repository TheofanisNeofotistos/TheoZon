import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct } from "../../store/products"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

function ProductShow (props){

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
        <ul>
            <li>{product.itemName}</li>
            <li>{product.itemDescription}</li>
            <li>{product.itemPrice}</li>
        </ul>
    )
}

export default ProductShow