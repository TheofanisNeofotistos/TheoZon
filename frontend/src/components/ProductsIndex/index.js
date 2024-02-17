import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../store/products"
import ProductIndexItem from "./productIndexItem"
import "./productsIndexItem.css"




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
            <h1 className="ResultsHeader">Welcome to TheoZon</h1>
            <br/>
            <h2 className="ResultsHeader">Results</h2>
            <div className="productIndexContainer">
                {Object.values(products).map((product)=> <ProductIndexItem key={product.id} product = {product}/>)}
            </div>
        </>
    )
}

export default ProductsIndex