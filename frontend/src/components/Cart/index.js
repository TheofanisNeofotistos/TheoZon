import { useEffect } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { getCartItems } from "../../store/cart";
import { fetchProducts } from "../../store/products";
import CartIndexItem from "./cartIndexItem";


export default function Cart(){
    let currentUser = useSelector(state => state.session.user)

    const cart = useSelector(state => state.cart)
    const products = useSelector(state => state.products)

    // const cartItem = Object.values(products).filter((product)=> productId === product.id)

    

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCartItems(currentUser.id))
        dispatch(fetchProducts())
    },[currentUser.cart])

    if(!products){
        return null
    }

    

    // console.log(allCartItems)
    // console.log(productInfo)
    // debugger
    return(
        <>

        <h1 className="shoppingCartHeader">Shopping Cart</h1>
        <br/>
        <div className="cartPageContainer">
                <div className="cartIndexContainer">
                    {Object.values(cart).map((item)=> <CartIndexItem key={item.productId} products ={products} productId = {item.productId}/>)}
                </div>

                <div className="checkoutArea">
                            <h1>Hello from checkout area</h1>
                </div>
        </div>
    </>
    )
}