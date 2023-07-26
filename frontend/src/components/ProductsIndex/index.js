import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../store/products"
import ProductIndexItem from "./productIndexItem"


function ProductsIndex(){
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    if(!products){
        return null
    }

    return (

        <>
            {Object.values(products).map((product)=> <ProductIndexItem product = {product}/>)}
        </>
    )
}

export default ProductsIndex